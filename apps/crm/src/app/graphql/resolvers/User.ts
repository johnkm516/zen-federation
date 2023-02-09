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
import resolvers from '../paljs/User/resolvers';
import type {
  crm_AggregateUserArgs,
  crm_CreateOneUserArgs,
  crm_DeleteManyUserArgs,
  crm_DeleteOneUserArgs,
  crm_FindFirstUserArgs,
  crm_FindFirstUserOrThrowArgs,
  crm_FindManyUserArgs,
  crm_FindUniqueUserArgs,
  crm_FindUniqueUserOrThrowArgs,
  crm_UpdateOneUserArgs,
  crm_UpsertOneUserArgs,
} from '../resolversTypes';

export const typeDefs = null;
// export const typeDefs = gql`
//   extend type Query {
//     sampleUserQuery: User
//   }
//   extend type Mutation {
//     sampleUserMutation(args: Int!): Boolean
//   }
//   extend type User {
//     sampleUserField: String
//   }
// `;

@Resolver('User')
@CaslSubject('User')
export class UserResolver {
  @ResolveReference()
  resolveReference(@Parent() reference, @Context() ctx: IContext) {
    return resolvers.User.__resolveReference(reference, ctx);
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async crm_findUniqueUser(
    @Args() args: crm_FindUniqueUserArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.crm_findUniqueUser(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async crm_findUniqueUserOrThrow(
    @Args() args: crm_FindUniqueUserOrThrowArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.crm_findUniqueUserOrThrow(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async crm_findFirstUser(
    @Args() args: crm_FindFirstUserArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.crm_findFirstUser(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async crm_findFirstUserOrThrow(
    @Args() args: crm_FindFirstUserOrThrowArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.crm_findFirstUserOrThrow(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async crm_findManyUser(
    @Args() args: crm_FindManyUserArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.crm_findManyUser(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async crm_findManyUserCount(
    @Args() args: crm_FindManyUserArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.crm_findManyUserCount(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async crm_aggregateUser(
    @Args() args: crm_AggregateUserArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.crm_aggregateUser(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async crm_groupByUser(
    @Args() args: any,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.crm_groupByUser(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('create'))
  async crm_createOneUser(
    @Args() args: crm_CreateOneUserArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.crm_createOneUser(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('update'))
  async crm_updateOneUser(
    @Args() args: crm_UpdateOneUserArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.crm_updateOneUser(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  //UpdateMany is not generated as User has only unique fields or relations.

  @Mutation()
  @UseGuards(GqlCaslGuard('create', 'update'))
  async crm_upsertOneUser(
    @Args() args: crm_UpsertOneUserArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.crm_upsertOneUser(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('delete'))
  async crm_deleteOneUser(
    @Args() args: crm_DeleteOneUserArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.crm_deleteOneUser(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('delete'))
  async crm_deleteManyUser(
    @Args() args: crm_DeleteManyUserArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.crm_deleteManyUser(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }
}
