import { Tree } from '@nrwl/devkit';
//import { PrismaClientGenerator }  from '../prisma-generator'
import { joinPathFragments, updateJson } from '@nrwl/devkit';
import { applicationGenerator as NestAppGenerator } from '@nrwl/nest';

interface GeneratorOptions {
  name: string;
  provider: string;
  connectionString: string;
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
  //await PrismaClientGenerator(tree, {...options,});
  updateJson(
    tree,
    'angular.json',
    (json) => {
      json.projects.${options.name} = '${options.name}'
      return json;
    }
  )
  tree.delete
}

export default NestAPIGenerator;