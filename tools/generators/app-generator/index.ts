import { formatFiles, generateFiles, names, Tree } from '@nrwl/devkit';
import { PrismaClientGenerator }  from '../prisma-generator'
import { joinPathFragments, updateJson } from '@nrwl/devkit';

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
  const { name } = names(options.name)
  const foldername = name.charAt(0).toLowerCase() + name.slice(1);
  const port = options.port;

  updateJson(
    tree,
    'angular.json',
    (json) => {
      json.projects[name] = '${options.name}'
      return json;
    }
  )

  generateFiles(
    tree,
    joinPathFragments(__dirname, './template'),
    `apps/${name}`,
    {
      tmpl: '',
      name,
      port,
      foldername
    }
  )
  await formatFiles(tree)

  await PrismaClientGenerator(tree, {...options,});
}

export default NestAPIGenerator;