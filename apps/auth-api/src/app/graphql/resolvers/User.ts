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
  Auth_AggregateUserArgs,
  Auth_CreateOneUserArgs,
  Auth_DeleteManyUserArgs,
  Auth_DeleteOneUserArgs,
  Auth_FindFirstUserArgs,
  Auth_FindManyUserArgs,
  Auth_FindUniqueUserArgs,
  Auth_UpdateManyUserArgs,
  Auth_UpdateOneUserArgs,
  Auth_UpsertOneUserArgs,
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
  async Auth_findUniqueUser(
    @Args() args: Auth_FindUniqueUserArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findUniqueUser(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findFirstUser(
    @Args() args: Auth_FindFirstUserArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findFirstUser(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findManyUser(
    @Args() args: Auth_FindManyUserArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findManyUser(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findManyUserCount(
    @Args() args: Auth_FindManyUserArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findManyUserCount(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_aggregateUser(
    @Args() args: Auth_AggregateUserArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_aggregateUser(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('create'))
  async Auth_createOneUser(
    @Args() args: Auth_CreateOneUserArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_createOneUser(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('update'))
  async Auth_updateOneUser(
    @Args() args: Auth_UpdateOneUserArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_updateOneUser(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('update'))
  async Auth_updateManyUser(
    @Args() args: Auth_UpdateManyUserArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_updateManyUser(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('create', 'update'))
  async Auth_upsertOneUser(
    @Args() args: Auth_UpsertOneUserArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_upsertOneUser(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('delete'))
  async Auth_deleteOneUser(
    @Args() args: Auth_DeleteOneUserArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_deleteOneUser(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('delete'))
  async Auth_deleteManyUser(
    @Args() args: Auth_DeleteManyUserArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_deleteManyUser(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }
}
