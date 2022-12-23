import { formatFiles, generateFiles, names, Tree } from '@nrwl/devkit';
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
  const nameUpper = name.toUpperCase();
  const nameLower = name.toLowerCase();
  const projectname = name.charAt(0).toLowerCase() + name.slice(1);
  let apiPort = options.apiPort;
  let databasePort = options.databasePort;

  const postgres_containerName = `postgres-${projectname}`;
  const api_containername = `subgraph-${projectname}`;

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
    //Postgres Container
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
      networks: ['postgres-network']
    }))
    if (doc.hasIn(['volumes', postgres_containerName])) {
      doc.deleteIn(['volumes', postgres_containerName]);
    }
    doc.addIn(['volumes'], doc.createPair(postgres_containerName, {}));
    doc.deleteIn(['volumes', postgres_containerName, {}]);

    //Apollo Router Container
    /*
    if (doc.hasIn(['services', 'apollo-router'])) { 
      if (!doc.hasIn(['services', 'apollo-router', 'environment', `${nameUpper}_API_PORT`])) {
        doc.addIn(['services', 'apollo-router', 'environment'], doc.createPair(`${nameUpper}_API_PORT`, `\${${nameUpper}_API_PORT}`));
      }
    } else {
      doc.addIn(['services'], doc.createPair('apollo-router', {
        image: 'ghcr.io/apollographql/router:v1.4.0',
        container_name: 'apollo-router',
        environment: {
          APOLLO_GRAPH_REF: '${APOLLO_GRAPH_REF}',
          APOLLO_KEY: '${APOLLO_KEY}'
        },
        network_mode: 'bridge',
        extra_hosts:
        - 'host.docker.internal:host-gateway',
        ports:
        - '4000:4000',
        volumes:
        - './router-dev.yaml:/dist/config/router.yaml'
      }));
      doc.addIn(['services', 'apollo-router', 'environment'], doc.createPair(`${nameUpper}_API_PORT`, `\${${nameUpper}_API_PORT}`));
    }
    */

    tree.write('docker-compose.yml', doc.toString().replace('{}', ''));
  }
  if (dockercompose_prod != '') {
    //Postgres Container
    const doc:YAML.Document = YAML.parseDocument(dockercompose_prod);

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
      networks: ['postgres-network']
    }));
    if (doc.hasIn(['volumes', postgres_containerName])) {
      doc.deleteIn(['volumes', postgres_containerName]);
    }
    doc.addIn(['volumes'], doc.createPair(postgres_containerName, {}));
    doc.deleteIn(['volumes', postgres_containerName, {}]);

    //API Container
    if (doc.hasIn(['services', api_containername])) {
      doc.deleteIn(['services', api_containername])
    }
    doc.addIn(['services'], doc.createPair(api_containername, {
      image: `zen/${api_containername}`,
      container_name: api_containername,
      build: {
        context: './',
        dockerfile: './deploy/api/Dockerfile',
        args: {
          API_NAME: name,
          API_PORT: `\${${nameUpper}_API_PORT}`,
          PROJECT_NAME: `${projectname}`
        }
      },
      environment: {
        PGUSER: `\${PGUSER}`,
        PGPASSWORD: `\${PGPASSWORD}`,
        JWT_PRIVATE_KEY: `\${JWT_PRIVATE_KEY}`,
        SMTP_SERVER: `\${SMTP_SERVER}`,
        SMTP_LOGIN: `\${SMTP_LOGIN}`,
        SMTP_PASSWORD: `\${SMTP_PASSWORD}`,
        SMTP_FROM_NAME: `\${SMTP_FROM_NAME}`,
        SMTP_FROM_EMAIL: `\${SMTP_FROM_EMAIL}`,
        GOOGLE_CLIENT_ID: `\${GOOGLE_CLIENT_ID}`,
        GOOGLE_CLIENT_SECRET: `\${GOOGLE_CLIENT_SECRET}`
      },
      ports: [`\${${nameUpper}_API_PORT}:\${${nameUpper}_API_PORT}`],
      networks: ['postgres-network'],
      depends_on: [`${postgres_containerName}`]
    }));
    if (doc.hasIn(['services', `${api_containername}`, 'environment', `${nameUpper}_SOURCE_URL`])) {
      doc.deleteIn(['services', `${api_containername}`, 'environment', `${nameUpper}_SOURCE_URL`]);
    }
    doc.addIn(['services', `${api_containername}`, 'environment'], doc.createPair(`${nameUpper}_SOURCE_URL`, `\${${nameUpper}_SOURCE_URL}`));

    if (doc.hasIn(['services', `${api_containername}`, 'environment' , `${nameUpper}_API_PORT`])) {
      doc.deleteIn(['services', `${api_containername}`, 'environment', `${nameUpper}_API_PORT`]);
    }
    doc.addIn(['services', `${api_containername}`, 'environment'], doc.createPair(`${nameUpper}_API_PORT`, `\${${nameUpper}_API_PORT}`));

    if (doc.hasIn(['services', `${api_containername}`, 'environment' , `${nameUpper}_PGDATABASE`])) {
      doc.deleteIn(['services', `${api_containername}`, 'environment', `${nameUpper}_PGDATABASE`]);
    }
    doc.addIn(['services', `${api_containername}`, 'environment'], doc.createPair(`${nameUpper}_PGDATABASE`, `\${${nameUpper}_PGDATABASE}`));


    //Apollo Router Container
    if (doc.hasIn(['services', 'apollo-router'])) { 
      if (!doc.hasIn(['services', 'apollo-router', 'environment', `${nameUpper}_API_PORT`])) {
        doc.addIn(['services', 'apollo-router', 'environment'], doc.createPair(`${nameUpper}_API_PORT`, `\${${nameUpper}_API_PORT}`));
      }
    } else {
      doc.addIn(['services'], doc.createPair('apollo-router', {
        image: 'ghcr.io/apollographql/router:v1.4.0',
        container_name: 'apollo-router',
        environment: {
          APOLLO_GRAPH_REF: '${APOLLO_GRAPH_REF}',
          APOLLO_KEY: '${APOLLO_KEY}'
        },
        networks:
        - 'postgres-network',
        ports:
        - '4000:4000',
        volumes:
        - './router-prod.yaml:/dist/config/router.yaml'
      }));
      doc.addIn(['services', 'apollo-router', 'environment'], doc.createPair(`${nameUpper}_API_PORT`, `\${${nameUpper}_API_PORT}`));
    }

    tree.write('docker-compose-prod.yml', doc.toString().replace('{}', ''));
  }

  //Apollo router-dev.yaml config
  /*
  let router_dev = tree.read('router-dev.yaml')?.toString() ?? ``
  if (router_dev != '') {
    const doc:YAML.Document = YAML.parseDocument(router_dev);
    if (!doc.hasIn(['override_subgraph_url', `${nameLower}`])) {
      doc.addIn(['override_subgraph_url'], doc.createPair(`${nameLower}`, `http://host.docker.internal:\${env.${nameUpper}_API_PORT}`));
    }

    tree.write('router-dev.yaml', doc.toString().replace('{}', ''));
  }
  */

  //Apollo router-prod.yaml config
  let router_prod = tree.read('router-prod.yaml')?.toString() ?? ``
  if (router_prod != '') {
    const doc:YAML.Document = YAML.parseDocument(router_prod);
    if (!doc.hasIn(['override_subgraph_url', `${nameLower}`])) {
      doc.addIn(['override_subgraph_url'], doc.createPair(`${nameLower}`, `"http://${api_containername}:\${env.${nameUpper}_API_PORT}"`));
    }

    tree.write('router-prod.yaml', doc.toString().replace('{}', ''));
  }

  //environment variables
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
  if (!envConfig[`${name.toUpperCase()}_SOURCE_URL`]) {
    envString += `${name.toUpperCase()}_SOURCE_URL=postgres://\${PGUSER}:\${PGPASSWORD}@localhost:\${${name.toUpperCase()}_PGDATABASE_PORT}/\${${name.toUpperCase()}_PGDATABASE}\n`;
  } else {
    console.log(`${name.toUpperCase()}_SOURCE_URL already exists in .env!`);
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
      name_upper: nameUpper,
      name_lower: nameLower,
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

  //Update subgraphs.json with new API proj
  let subgraphs;
  updateJson(
    tree,
    'subgraphs.json',
    (json) => {
      json.subgraphs[name] = `apps/${projectname}`
      subgraphs = json.subgraphs;
      return json;
    }
  )

  updateJson(
    tree,
    'package.json',
    (json) => {
      let projectnames: string[] = [];
      let appnames: string[] = [];;
      for (const appname in subgraphs) {
        json.scripts[`start:${appname.toLowerCase()}`] = `nx serve ${subgraphs[appname].replace("apps/", "")} --verbose`
        projectnames.push(subgraphs[appname].replace("apps/", ""));
        appnames.push(appname);
      }

      json.scripts[`api:gen`] = appnames.map(appname => {
        return `prisma generate --schema=./libs/prisma-clients/${appname}/prisma/schema.prisma`
      }).join(` && `) + ` && ts-node generate.ts`;

      json.scripts[`build:dev`] = projectnames.map(projectname => {
        return `nx build ${projectname}`
      }).join(` && `);

      json.scripts[`build:prod`] = projectnames.map(projectname => {
        return `nx build ${projectname} --prod`
      }).join(` && `);

      //Prisma migrate scripts
      json.scripts[`prisma:migrate`] = `npm run api:gen && ` + appnames.map(appname => {
        return `prisma migrate dev --schema=./libs/prisma-clients/${appname}/prisma/schema.prisma`
      }).join(` && `)

      for (const appname of appnames) {
        json.scripts[`prisma:migrate:${appname.toLowerCase()}`] = `npm run api:gen && prisma migrate dev --schema=./libs/prisma-clients/${appname}/prisma/schema.prisma`
      }
        
      return json;
    }
  )

  await formatFiles(tree)
}

export default NestAPIGenerator;