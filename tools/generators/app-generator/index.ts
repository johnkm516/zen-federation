import { formatFiles, generateFiles, names, Tree } from '@nrwl/devkit';
import { DIR_DOCUMENT } from '@angular/cdk/bidi';
import { PrismaClientGenerator }  from '../prisma-generator'
import { joinPathFragments, updateJson } from '@nrwl/devkit';
import fs from 'fs'
import * as YAML from 'yaml';
import 'dotenv';


interface GeneratorOptions {
  name: string;
  provider: string;
  apiPort: number;
  databasePort: number;
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
  const apiPort = options.apiPort;
  const databasePort = options.databasePort;

  const postgres_containerName = `postgres_${projectname}`;

  /*
  //Update angular.json with new API proj
  updateJson(
    tree,
    'angular.json',
    (json) => {
      json.projects[projectname] = `apps/${projectname}`
      return json;
    }
  )

  //Generate Nest API using template files in generator
  generateFiles(
    tree,
    joinPathFragments(__dirname, './template'),
    `apps/`,
    {
      tmpl: '',
      name,
      port,
      projectname
    }
  )

  await PrismaClientGenerator(tree, {...options,});
  */
  let dockercompose = tree.read('docker-compose.yml')?.toString() ?? ``
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
        POSTGRES_DB: `${name.toUpperCase()}_PGDATABASE`
      },
      volumes: [doc.createPair(postgres_containerName, '/var/lib/postgresql/data')],
      ports: [`${name.toUpperCase()}_PGDATABASE_PORT:5432`],
      networks: ['postgres']
    }))
    if (doc.hasIn(['volumes', postgres_containerName])) {
      doc.deleteIn(['volumes', postgres_containerName])
    }
    doc.addIn(['volumes'], doc.createPair(postgres_containerName, ''));
    console.log(doc.toString());
    console.log(doc.getIn(['services']));
  }

  //Get Available port
  process.env[`${name.toUpperCase()}_PGDATABASE`] = `${name}`;
  process.env[`${name.toUpperCase()}_PGDATABASE_PORT`] = `${databasePort}`;
  process.env[`${name.toUpperCase()}_API_PORT`] = `${apiPort}`;

  console.log(process.env);
  
  await formatFiles(tree)
}

export default NestAPIGenerator;