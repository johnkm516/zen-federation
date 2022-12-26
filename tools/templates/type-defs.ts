export function TypeDefsTemplate(names: string[], includeTransactionalBatchQuery?: boolean) {
  let accum = `import { mergeTypeDefs } from '@graphql-tools/merge';

import SDLInputs from './sdl-inputs';
${includeTransactionalBatchQuery ? `import typeDefsExtensions from './extended-typeDefs';` : ``}
`;

  for (const name of names) {
    accum += `import ${name} from './${name}/typeDefs';\n`;
  }

  accum += `export default mergeTypeDefs([
  SDLInputs, `;

  for (const name of names) {
    accum += `  ${name},\n`;
  }
  if (includeTransactionalBatchQuery) {
    accum += `  typeDefsExtensions,\n`;
  }

  accum += `]);
`;

  return accum;
}
