/**
 * For all options reference:
 * https://github.com/paljs/prisma-tools/blob/6030c91765bf4b1966becd1c1c4bf259b701aeda/packages/types/src/index.ts#L61
 * The TypeScript type can be found at `import { Config } from '@paljs/types';`
 */

module.exports = {
  schema: 'libs/prisma-clients/crm/prisma/schema.prisma',
  backend: {
    generator: 'sdl',
    output: 'apps/crm/src/app/graphql/paljs',
    doNotUseFieldUpdateOperationsInput: true,
    federation: 'crm',
    includeTransactionalBatchMutation: true,
  },
};
