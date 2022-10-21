export function NestCaslTemplate(names: string[], subgraphName: string) {
  let accum = `import { Subjects } from '@casl/prisma';
import { 
`;

  for (const name of names) {
    accum += `  ${name},\n`;
  }

  accum += `} from '@nx-prisma/prisma-clients/${subgraphName}';

export type PrismaSubjects = Subjects<{
`;

  for (const name of names) {
    accum += `  ${name}: ${name};\n`;
  }

  accum += `}>;\n`;

  return accum;
}
