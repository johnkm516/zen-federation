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
import resolvers from '../paljs/UsersOnTeams/resolvers';
import type {
  Auth_AggregateUsersOnTeamsArgs,
  Auth_CreateOneUsersOnTeamsArgs,
  Auth_DeleteManyUsersOnTeamsArgs,
  Auth_DeleteOneUsersOnTeamsArgs,
  Auth_FindFirstUsersOnTeamsArgs,
  Auth_FindFirstUsersOnTeamsOrThrowArgs,
  Auth_FindManyUsersOnTeamsArgs,
  Auth_FindUniqueUsersOnTeamsArgs,
  Auth_FindUniqueUsersOnTeamsOrThrowArgs,
  Auth_UpdateManyUsersOnTeamsArgs,
  Auth_UpdateOneUsersOnTeamsArgs,
  Auth_UpsertOneUsersOnTeamsArgs,
} from '../resolversTypes';

export const typeDefs = null;
// export const typeDefs = gql`
//   extend type Query {
//     sampleUsersOnTeamsQuery: UsersOnTeams
//   }
//   extend type Mutation {
//     sampleUsersOnTeamsMutation(args: Int!): Boolean
//   }
//   extend type UsersOnTeams {
//     sampleUsersOnTeamsField: String
//   }
// `;

@Resolver('UsersOnTeams')
@CaslSubject('UsersOnTeams')
export class UsersOnTeamsResolver {
  @ResolveReference()
  resolveReference(@Parent() reference, @Context() ctx: IContext) {
    return resolvers.UsersOnTeams.__resolveReference(reference, ctx);
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findUniqueUsersOnTeams(
    @Args() args: Auth_FindUniqueUsersOnTeamsArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findUniqueUsersOnTeams(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findUniqueUsersOnTeamsOrThrow(
    @Args() args: Auth_FindUniqueUsersOnTeamsOrThrowArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findUniqueUsersOnTeamsOrThrow(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findFirstUsersOnTeams(
    @Args() args: Auth_FindFirstUsersOnTeamsArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findFirstUsersOnTeams(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findFirstUsersOnTeamsOrThrow(
    @Args() args: Auth_FindFirstUsersOnTeamsOrThrowArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findFirstUsersOnTeamsOrThrow(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findManyUsersOnTeams(
    @Args() args: Auth_FindManyUsersOnTeamsArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findManyUsersOnTeams(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findManyUsersOnTeamsCount(
    @Args() args: Auth_FindManyUsersOnTeamsArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findManyUsersOnTeamsCount(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_aggregateUsersOnTeams(
    @Args() args: Auth_AggregateUsersOnTeamsArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_aggregateUsersOnTeams(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_groupByUsersOnTeams(
    @Args() args: any,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_groupByUsersOnTeams(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('create'))
  async Auth_createOneUsersOnTeams(
    @Args() args: Auth_CreateOneUsersOnTeamsArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_createOneUsersOnTeams(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('update'))
  async Auth_updateOneUsersOnTeams(
    @Args() args: Auth_UpdateOneUsersOnTeamsArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_updateOneUsersOnTeams(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('update'))
  async Auth_updateManyUsersOnTeams(
    @Args() args: Auth_UpdateManyUsersOnTeamsArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_updateManyUsersOnTeams(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('create', 'update'))
  async Auth_upsertOneUsersOnTeams(
    @Args() args: Auth_UpsertOneUsersOnTeamsArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_upsertOneUsersOnTeams(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('delete'))
  async Auth_deleteOneUsersOnTeams(
    @Args() args: Auth_DeleteOneUsersOnTeamsArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_deleteOneUsersOnTeams(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('delete'))
  async Auth_deleteManyUsersOnTeams(
    @Args() args: Auth_DeleteManyUsersOnTeamsArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_deleteManyUsersOnTeams(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }
}
