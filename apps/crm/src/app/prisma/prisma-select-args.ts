import { PrismaSelect } from '@paljs/plugins';
import { DMMF } from '@prisma/client/runtime';
import { GraphQLResolveInfo } from 'graphql';

import { Prisma } from '.prisma/crm-client';

export function PrismaSelectArgs(info: GraphQLResolveInfo, args: any) {
  const result = new PrismaSelect(info, { dmmf: [Prisma.dmmf as DMMF.Document] }).value;

  if (!result.select || Object.keys(result.select).length > 0) {
    return {
      ...args,
      ...result,
    };
  }

  return args;
}
