import { UseGuards } from '@nestjs/common';
import {
  Args,
  Context,
  Info,
  Mutation,
  Parent,
  Query,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql';

import { CaslSubject, GqlCaslGuard } from '../../auth';
import { PrismaSelectArgs } from '../../prisma';
import { IContext } from '../models';
import resolvers from '../paljs/Order/resolvers';
import type {
  crm_AggregateOrderArgs,
  crm_CreateOneOrderArgs,
  crm_DeleteManyOrderArgs,
  crm_DeleteOneOrderArgs,
  crm_FindFirstOrderArgs,
  crm_FindFirstOrderOrThrowArgs,
  crm_FindManyOrderArgs,
  crm_FindUniqueOrderArgs,
  crm_FindUniqueOrderOrThrowArgs,
  crm_UpdateManyOrderArgs,
  crm_UpdateOneOrderArgs,
  crm_UpsertOneOrderArgs,
} from '../resolversTypes';

export const typeDefs = null;
// export const typeDefs = gql`
//   extend type Query {
//     sampleOrderQuery: Order
//   }
//   extend type Mutation {
//     sampleOrderMutation(args: Int!): Boolean
//   }
//   extend type Order {
//     sampleOrderField: String
//   }
// `;

@Resolver('Order')
@CaslSubject('Order')
export class OrderResolver {
  @ResolveReference()
  resolveReference(@Parent() reference, @Context() ctx: IContext) {
    return resolvers.Order.__resolveReference(reference, ctx);
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async crm_findUniqueOrder(
    @Args() args: crm_FindUniqueOrderArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.crm_findUniqueOrder(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async crm_findUniqueOrderOrThrow(
    @Args() args: crm_FindUniqueOrderOrThrowArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.crm_findUniqueOrderOrThrow(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async crm_findFirstOrder(
    @Args() args: crm_FindFirstOrderArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.crm_findFirstOrder(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async crm_findFirstOrderOrThrow(
    @Args() args: crm_FindFirstOrderOrThrowArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.crm_findFirstOrderOrThrow(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async crm_findManyOrder(
    @Args() args: crm_FindManyOrderArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.crm_findManyOrder(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async crm_findManyOrderCount(
    @Args() args: crm_FindManyOrderArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.crm_findManyOrderCount(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async crm_aggregateOrder(
    @Args() args: crm_AggregateOrderArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.crm_aggregateOrder(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async crm_groupByOrder(
    @Args() args: any,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.crm_groupByOrder(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('create'))
  async crm_createOneOrder(
    @Args() args: crm_CreateOneOrderArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.crm_createOneOrder(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('update'))
  async crm_updateOneOrder(
    @Args() args: crm_UpdateOneOrderArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.crm_updateOneOrder(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('update'))
  async crm_updateManyOrder(
    @Args() args: crm_UpdateManyOrderArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.crm_updateManyOrder(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('create', 'update'))
  async crm_upsertOneOrder(
    @Args() args: crm_UpsertOneOrderArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.crm_upsertOneOrder(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('delete'))
  async crm_deleteOneOrder(
    @Args() args: crm_DeleteOneOrderArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.crm_deleteOneOrder(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('delete'))
  async crm_deleteManyOrder(
    @Args() args: crm_DeleteManyOrderArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.crm_deleteManyOrder(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }
}
