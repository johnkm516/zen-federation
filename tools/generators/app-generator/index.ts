import { formatFiles, generateFiles, names, Tree } from '@nrwl/devkit';
import { DIR_DOCUMENT } from '@angular/cdk/bidi';
import { PrismaClientGenerator }  from '../prisma-generator'
import { joinPathFragments, updateJson } from '@nrwl/devkit';
import * as fs from 'fs'; 
import * as YAML from 'yaml';
import * as dotenv from 'dotenv';


interface GeneratorOptions {
  name: string;
  provider: string;
  apiPort?: number;
  databasePort?: number;
}

/*
interface ApplicationGeneratorOptions {
  name: string;
  directory?: string;
  frontendProject?: string;
  linter?: Linter;
  skipFormat?: boolean;
  skipPackageJson?: boolean;
  standaloneConfig?: boolean;
  tags?: string;
  unitTestRunner?: UnitTestRunner;
  setParserOptionsProject?: boolean;
}
*/

export async function NestAPIGenerator (tree: Tree, options: GeneratorOptions) {
  //
  
  const { name } = names(options.name);
  const projectname = name.charAt(0).toLowerCase() + name.slice(1);
  let apiPort = options.apiPort;
  let databasePort = options.databasePort;

  const postgres_containerName = `postgres-${projectname}`;

  //Get Available port
  const envOriginalString = fs.readFileSync('.env').toString();
  let envString = envOriginalString;
  let envConfig = dotenv.parse(envOriginalString);
  let databasePorts:number[] = [];
  let apiPorts:number[] = [];
  Object.keys(envConfig).forEach(key => {
    if (key.includes('_PGDATABASE_PORT')) {
      databasePorts.push(Number(envConfig[key]));
    } else if (key.includes('_API_PORT')) {
      apiPorts.push(Number(envConfig[key]));
    }
  });
  databasePorts = databasePorts.sort();
  apiPorts = apiPorts.sort();

  if (databasePort && databasePorts.includes(databasePort)) {
    throw new Error("Port conflict! databasePort " + databasePort + " already exists in .env!");
  } else if (!databasePort) {
    databasePort = databasePorts[databasePorts.length - 1] + 1
  }

  if (apiPort && apiPorts.includes(apiPort)) {
    throw new Error("Port conflict! databasePort " + apiPort + " already exists in .env!");
  } else if (!apiPort) {
    apiPort = apiPorts[apiPorts.length - 1] + 1
  }
  
  let dockercompose = tree.read('docker-compose.yml')?.toString() ?? ``
  let dockercompose_prod = tree.read('docker-compose-prod.yml')?.toString() ?? ``
  if (dockercompose != '') {
    const doc:YAML.Document = YAML.parseDocument(dockercompose);
    if (doc.hasIn(['services', postgres_containerName])) {
      doc.deleteIn(['services', postgres_containerName])
    }
    doc.addIn(['services'], doc.createPair(postgres_containerName, {
      image: 'postgres:14',
      container_name: postgres_containerName,
      restart: 'always',
      environment: {
        POSTGRES_PASSWORD: '${PGPASSWORD}',
        POSTGRES_USER: '${PGUSER}',
        POSTGRES_DB: `\${${name.toUpperCase()}_PGDATABASE}`
      },
      volumes: [`${postgres_containerName}:/var/lib/postgresql/data`],
      ports: [`\${${name.toUpperCase()}_PGDATABASE_PORT}:5432`],
      networks: ['postgres']
    }))
    if (doc.hasIn(['volumes', postgres_containerName])) {
      doc.deleteIn(['volumes', postgres_containerName]);
    }
    doc.addIn(['volumes'], doc.createPair(postgres_containerName, {}));
    doc.deleteIn(['volumes', postgres_containerName, {}]);

    tree.write('docker-compose.yml', doc.toString().replace('{}', ''));
  }
  if (dockercompose_prod != '') {
    
  }

  if (!envConfig[`${name.toUpperCase()}_PGDATABASE`]) {
    envString += `${name.toUpperCase()}_PGDATABASE=${name}\n`;
  } else {
    console.log(`${name.toUpperCase()}_PGDATABASE already exists in .env!`);
  }
  if (!envConfig[`${name.toUpperCase()}_PGDATABASE_PORT`]) {
    envString += `${name.toUpperCase()}_PGDATABASE_PORT=${databasePort}\n`;
  } else {
    console.log(`${name.toUpperCase()}_PGDATABASE already exists in .env!`);
  }
  if (!envConfig[`${name.toUpperCase()}_API_PORT`]) {
    envString += `${name.toUpperCase()}_API_PORT=${apiPort}\n`;
  } else {
    console.log(`${name.toUpperCase()}_API_PORT already exists in .env!`);
  }
  fs.writeFileSync('.env', envString);

  //Generate Nest API using template files in generator
  generateFiles(
    tree,
    joinPathFragments(__dirname, './template'),
    `apps/`,
    {
      tmpl: '',
      name: name,
      name_upper: name.toUpperCase(),
      ENV_apiPort: `${name.toUpperCase()}_API_PORT`,
      apiPort: apiPort,
      projectname: projectname
    }
  )

  //Create Prisma Client for new app
  await PrismaClientGenerator(tree, {
    name: name,
    provider: options.provider,
    connectionString: `postgres://\${PGUSER}:\${PGPASSWORD}@localhost:\${${name.toUpperCase()}_PGDATABASE_PORT}/\${${name.toUpperCase()}_PGDATABASE}`
  });

  //Update pgpass with new PostgreSQL connection
  let pgpass = fs.readFileSync('pgadmin/pgpass').toString();
  if (!pgpass.includes(`${postgres_containerName}:5432:*:${envConfig['PGUSER']}:${envConfig['PGPASSWORD']}`)) { 
    pgpass += `${postgres_containerName}:5432:*:${envConfig['PGUSER']}:${envConfig['PGPASSWORD']}\n`
  }
  tree.write('pgadmin/pgpass', pgpass);
  
  //Update server.json with new PostgreSQL connection
  updateJson(
    tree,
    'pgadmin/servers.json',
    (json) => {
      json.Servers[name] = {
        "Name": name,
        "Group": "docker_postgres_group",
        "Host": postgres_containerName,
        "Port": 5432,
        "MaintenanceDB": "postgres",
        "Username": `${envConfig['PGUSER']}`,
        "PassFile": "/pgpass",
        "SSLMode": "prefer"
      }
      return json;
    }
  )

  //Update angular.json with new API proj
  updateJson(
    tree,
    'angular.json',
    (json) => {
      json.projects[projectname] = `apps/${projectname}`
      return json;
    }
  )

  //Update subgraphs.json with new API proj
  updateJson(
    tree,
    'subgraphs.json',
    (json) => {
      json.subgraphs[name] = `apps/${projectname}`
      return json;
    }
  )
  
  await formatFiles(tree)
}

export default NestAPIGenerator;