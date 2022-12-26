import { UseGuards } from '@nestjs/common';
import { Args, Context, Info, Mutation, Resolver } from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql';

import { CaslSubject, GqlCaslGuard } from '../../auth';
import { PrismaSelectArgs } from '../../prisma';
import { IContext } from '../models';
import resolvers from '../paljs/extended-resolvers';
import type { Auth_TransactionalBatchMutationArgs } from '../resolversTypes';

export const typeDefs = null;

@Resolver()
@CaslSubject('TransactionalBatchMutation')
export class TransactionalBatchMutationResolver {
  @Mutation()
  @UseGuards(GqlCaslGuard('update', 'delete', 'create'))
  async Auth_transactionalBatchMutation(
    @Args() args: Auth_TransactionalBatchMutationArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_transactionalBatchMutation(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }
}
