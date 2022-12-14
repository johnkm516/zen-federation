import { exec } from 'child_process';
import * as fs from 'fs';
import { appendFile, mkdir, readFile, readdir, rm, writeFile } from 'fs/promises';
import * as path from 'path';
import { promisify } from 'util';

import { Generator as PalGenerator } from '@paljs/generator';
import { Config as PalConfig } from '@paljs/types';

import {
  ClientFieldsTemplate,
  ClientQueriesTemplate,
  NestCaslTemplate,
  NestResolversABACTemplate,
  NestResolversIndexTemplate,
  NestResolversRBACTemplate,
  SDLInputsTemplate,
  TypeDefsTemplate,
} from './templates';
import { Datamodel, Document, Model } from '@paljs/generator/dist/Generators';
import { NestResolversABACTemplate_TransactionalBatchMutation } from './templates/nest-resolvers-abac-transactionalBatchMutation';

const execAsync = promisify(exec);

export type ZenGeneratorConfig = {
  palConfig: PalConfig;
  apiOutPath: string;
  caslOutFile?: string;
  authScheme?: 'ABAC' | 'RBAC';
  frontend?: {
    outPath: string;
    /** Defaults to 'fields' */
    fieldsFolderName?: string;
    /** Defaults to 'prisma' */
    queriesFolderName?: string;
  };
  subgraphName: string;
};

export class ZenGenerator {
  constructor(public config: ZenGeneratorConfig) {}

  async run() {
    const subgraph = this.config.subgraphName;
    console.log(`------------------------ @paljs/generator ------------------------`);
    const palConfig = this.config.palConfig as any;
    console.log(path.join(this.config.apiOutPath, 'paljs'));
    const palOutPath = palConfig.backend.output
      ? palConfig.backend.output
      : path.join(this.config.apiOutPath, 'paljs');
    palConfig.backend.output = palOutPath;

    if (fs.existsSync(palOutPath)) {
      await rm(palOutPath, { recursive: true });
      await mkdir(palOutPath);
    }

    const pal = new PalGenerator(
      { name: palConfig.backend.generator, schemaPath: palConfig.schema },
      palConfig.backend
    );
    const dmmf = await pal.run();

    console.log(`- Wrote: ${palOutPath}`);
    console.log(`---------------- Overwriting resolverTypes with custom prisma client import ----------------`);

    if (fs.existsSync(path.join(this.config.apiOutPath, 'resolversTypes.ts'))) {
        let resolverTypes = fs.readFileSync(path.join(this.config.apiOutPath, 'resolversTypes.ts')).toString();
        resolverTypes = resolverTypes.replace(`import * as Client from '@prisma/client'`, `import * as Client from '@nx-prisma/prisma-clients/${subgraph}';`);
        fs.writeFileSync(path.join(this.config.apiOutPath, 'resolversTypes.ts'), resolverTypes, {encoding:'utf8',flag:'w'});
        console.log(path.join(this.config.apiOutPath, 'resolversTypes.ts') + ' overwritten with custom prisma client');
    }
    // Get Prisma type names via the directory names under the 'prisma' folder;
    const dirents = await readdir(palOutPath, { withFileTypes: true });
    let prismaNames = dirents.filter(d => d.isDirectory()).map(d => d.name);
    prismaNames = prismaNames.sort();
    const palTypeDefsFilePath = path.join(palOutPath, 'typeDefs.ts');
    await writeFile(palTypeDefsFilePath, TypeDefsTemplate(prismaNames, this.config.palConfig.backend?.includeTransactionalBatchMutation));
    console.log(`- Wrote: ${palTypeDefsFilePath}`);

    console.log(`---------------- Nest GraphQL resolvers generated ----------------`);
    const nestResolversPath = path.join(this.config.apiOutPath, 'resolvers');

    if (!fs.existsSync(nestResolversPath)) {
      await mkdir(nestResolversPath);
    }

    let wroteCount = 0;
    if (!this.config.authScheme || this.config.authScheme === 'ABAC') {
      if (this.config.caslOutFile) {
        await writeFile(this.config.caslOutFile, NestCaslTemplate(prismaNames, subgraph));
        console.log(`- Wrote: ${this.config.caslOutFile}`);
      }

      wroteCount = await this.nestAbacResolvers(dmmf.datamodel.models, this.config.palConfig.backend?.federation);
    } else if (this.config.authScheme === 'RBAC') {
      wroteCount = await this.nestRbacResolvers(dmmf.datamodel.models, this.config.palConfig.backend?.federation);
    }
    if (this.config.palConfig.backend?.includeTransactionalBatchMutation) {
      const outPath = path.join(this.config.apiOutPath, 'resolvers', `TransactionalBatchMutation.ts`);

      if (!fs.existsSync(outPath)) {
        await writeFile(outPath, NestResolversABACTemplate_TransactionalBatchMutation(this.config.palConfig.backend?.federation));
        console.log(`- Wrote: ${outPath}`);
      }
      wroteCount++;
    }

    console.log(`* Total resolver files wrote: ${wroteCount}`);

    // Get the data type names via the filename of the "resolvers" directory
    let dataTypeNames = (await readdir(nestResolversPath))
      .filter(f => path.basename(f) !== 'index.ts')
      .map(f => path.basename(f, '.ts')); // Remove ".ts" extension from all names

    const indexPath = path.join(nestResolversPath, 'index.ts');
    await writeFile(indexPath, NestResolversIndexTemplate(dataTypeNames));
    console.log(`- Wrote: ${indexPath}`);

    await this.execLocal(`prettier --loglevel warn --write "${this.config.apiOutPath}/**/*.ts"`);

    await this.generateFrontend(prismaNames);
  }

  async generateFrontend(prismaNames: string[]) {
    if (this.config.frontend) {
      console.log(`----------------------- Front end generated ----------------------`);
      const fieldsPath = this.config.frontend.fieldsFolderName
        ? path.join(this.config.frontend.outPath, this.config.frontend.fieldsFolderName)
        : path.join(this.config.frontend.outPath, 'fields');

      const queriesPath = this.config.frontend.queriesFolderName
        ? path.join(this.config.frontend.outPath, this.config.frontend.queriesFolderName)
        : path.join(this.config.frontend.outPath, 'prisma');

      if (!fs.existsSync(fieldsPath)) await mkdir(fieldsPath);
      if (!fs.existsSync(queriesPath)) await mkdir(queriesPath);

      const fieldsIndexPath = path.join(fieldsPath, `index.ts`);

      if (!fs.existsSync(fieldsIndexPath)) {
        await writeFile(fieldsIndexPath, '');
        console.log(`- Wrote: ${fieldsIndexPath}`);
      }

      let fieldsIndexSource = (await readFile(fieldsIndexPath)).toString();

      for (const prismaName of prismaNames) {
        const fieldsOutPath = path.join(fieldsPath, `${prismaName}.gql.ts`);
        const queriesOutPath = path.join(queriesPath, `${prismaName}.gql.ts`);

        if (!fs.existsSync(fieldsOutPath)) {
          await writeFile(fieldsOutPath, ClientFieldsTemplate(prismaName));
          console.log(`- Wrote: ${fieldsOutPath}`);
        }

        const exportScript = `export * from './${prismaName}.gql';`;
        if (!fieldsIndexSource.includes(exportScript)) {
          await appendFile(fieldsIndexPath, exportScript + '\n');
          fieldsIndexSource += exportScript + '\n';
        }

        const fieldsFolderName = this.config.frontend.fieldsFolderName
          ? this.config.frontend.fieldsFolderName
          : 'fields';
        await writeFile(queriesOutPath, ClientQueriesTemplate(prismaName, fieldsFolderName));
        console.log(`- Wrote: ${queriesOutPath}`);
      }
    }
  }

  async nestAbacResolvers(dataModels: Model[], federation?: string ) {
    let wroteCount = 0;
    for (const model of dataModels) {
      const outPath = path.join(this.config.apiOutPath, 'resolvers', `${model.name}.ts`);

      if (!fs.existsSync(outPath)) {
        await writeFile(outPath, NestResolversABACTemplate(model, federation));
        console.log(`- Wrote: ${outPath}`);
        wroteCount++;
      }
    }

    return wroteCount;
  }

  async nestRbacResolvers(dataModels: Model[], federation?: string ) {
    let wroteCount = 0;
    for (const model of dataModels) {
      const outPath = path.join(this.config.apiOutPath, 'resolvers', `${model.name}.ts`);

      if (!fs.existsSync(outPath)) {
        await writeFile(outPath, NestResolversRBACTemplate(model, federation));
        console.log(`- Wrote: ${outPath}`);
        wroteCount++;
      }
    }

    return wroteCount;
  }

  private execLocal(command: string) {
    console.log(command);
    return execAsync('npx --no-install ' + command).then(({ stdout, stderr }) => {
      if (stdout) console.log(stdout);
      if (stderr) console.log(stderr);
    });
  }
}
