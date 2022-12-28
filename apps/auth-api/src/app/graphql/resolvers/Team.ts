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
import resolvers from '../paljs/Team/resolvers';
import type {
  Auth_AggregateTeamArgs,
  Auth_CreateOneTeamArgs,
  Auth_DeleteManyTeamArgs,
  Auth_DeleteOneTeamArgs,
  Auth_FindFirstTeamArgs,
  Auth_FindFirstTeamOrThrowArgs,
  Auth_FindManyTeamArgs,
  Auth_FindUniqueTeamArgs,
  Auth_FindUniqueTeamOrThrowArgs,
  Auth_UpdateOneTeamArgs,
  Auth_UpsertOneTeamArgs,
} from '../resolversTypes';

export const typeDefs = null;
// export const typeDefs = gql`
//   extend type Query {
//     sampleTeamQuery: Team
//   }
//   extend type Mutation {
//     sampleTeamMutation(args: Int!): Boolean
//   }
//   extend type Team {
//     sampleTeamField: String
//   }
// `;

@Resolver('Team')
@CaslSubject('Team')
export class TeamResolver {
  @ResolveReference()
  resolveReference(@Parent() reference, @Context() ctx: IContext) {
    return resolvers.Team.__resolveReference(reference, ctx);
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findUniqueTeam(
    @Args() args: Auth_FindUniqueTeamArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findUniqueTeam(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findUniqueTeamOrThrow(
    @Args() args: Auth_FindUniqueTeamOrThrowArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findUniqueTeamOrThrow(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findFirstTeam(
    @Args() args: Auth_FindFirstTeamArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findFirstTeam(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findFirstTeamOrThrow(
    @Args() args: Auth_FindFirstTeamOrThrowArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findFirstTeamOrThrow(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findManyTeam(
    @Args() args: Auth_FindManyTeamArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findManyTeam(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findManyTeamCount(
    @Args() args: Auth_FindManyTeamArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findManyTeamCount(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_aggregateTeam(
    @Args() args: Auth_AggregateTeamArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_aggregateTeam(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_groupByTeam(
    @Args() args: any,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_groupByTeam(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('create'))
  async Auth_createOneTeam(
    @Args() args: Auth_CreateOneTeamArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_createOneTeam(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('update'))
  async Auth_updateOneTeam(
    @Args() args: Auth_UpdateOneTeamArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_updateOneTeam(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  //UpdateMany is not generated as Team has only unique fields or relations.

  @Mutation()
  @UseGuards(GqlCaslGuard('create', 'update'))
  async Auth_upsertOneTeam(
    @Args() args: Auth_UpsertOneTeamArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_upsertOneTeam(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('delete'))
  async Auth_deleteOneTeam(
    @Args() args: Auth_DeleteOneTeamArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_deleteOneTeam(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('delete'))
  async Auth_deleteManyTeam(
    @Args() args: Auth_DeleteManyTeamArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_deleteManyTeam(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }
}
