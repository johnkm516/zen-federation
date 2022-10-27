import { formatFiles, generateFiles, names, Tree } from '@nrwl/devkit';
import { DIR_DOCUMENT } from '@angular/cdk/bidi';
import { PrismaClientGenerator }  from '../prisma-generator'
import { joinPathFragments, updateJson } from '@nrwl/devkit';
import fs from 'fs'
import * as YAML from 'yaml';

interface GeneratorOptions {
  name: string;
  provider: string;
  connectionString: string;
  port: number;
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
  const port = options.port;
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
      environment: {
        POSTGRES_USER: 'zenadmin',
        POSTGRES_PASSWORD: 'temp'
      },
      volumes: [doc.createPair(postgres_containerName, '/var/lib/postgresql/data')],
      ports: [`5445:5432`]
    }))
    if (doc.hasIn(['volumes', postgres_containerName])) {
      doc.deleteIn(['volumes', postgres_containerName])
    }
    doc.addIn(['volumes'], doc.createPair(postgres_containerName, ''));
    console.log(doc.toString());
  }
  
  await formatFiles(tree)
}

export default NestAPIGenerator;