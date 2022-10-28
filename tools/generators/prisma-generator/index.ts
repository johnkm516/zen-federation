import {
  formatFiles,
  generateFiles,
  joinPathFragments,
  names,
  Tree
} from '@nrwl/devkit';
import * as fs from 'fs'; 
import * as dotenv from 'dotenv';

interface GeneratorOptions {
  name: string;
  provider: string;
  connectionString: string;
}

export async function PrismaClientGenerator(tree: Tree, schema: GeneratorOptions) {
  const { name, className, constantName } = names(schema.name)

  generateFiles(
    tree,
    joinPathFragments(__dirname, './template'),
    'libs/prisma-clients',
    {
      dbType: schema.provider,
      tmpl: '',
      name,
      className,
      constantName,
      outputLocation: `../../../../node_modules/.prisma/${name}-client`
    }
  )

  // Write .env
  if (!tree.exists('.env') ) {
    tree.write('.env', '')
  }

  const envOriginalString = fs.readFileSync('.env').toString();
  let envString = envOriginalString;
  let envConfig = dotenv.parse(envOriginalString);

  if (!envConfig[`${name.toUpperCase()}_SOURCE_URL`]) {
    envString += `${name.toUpperCase()}_SOURCE_URL=${schema.connectionString}\n`;
  } else {
    console.log(`${name.toUpperCase()}_SOURCE_URL`);
  }

  tree.write('.env', envString);

  // Write export
  if (!tree.exists('libs/prisma-clients/index.ts')) {
    tree.write('libs/prisma-clients/index.ts', '')
  }

  let exportsContents = tree.read('libs/prisma-clients/index.ts')?.toString() ?? ``
  if (!exportsContents.includes(`export { ${className}PrismaClient } from './${name}';`)) {
    exportsContents += `export { ${className}PrismaClient } from './${name}';\n`
  }
  tree.write('libs/prisma-clients/index.ts', exportsContents)

  await formatFiles(tree)
}

export default PrismaClientGenerator;