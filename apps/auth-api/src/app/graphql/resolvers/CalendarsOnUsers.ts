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
import resolvers from '../paljs/CalendarsOnUsers/resolvers';
import type {
  Auth_AggregateCalendarsOnUsersArgs,
  Auth_CreateOneCalendarsOnUsersArgs,
  Auth_DeleteManyCalendarsOnUsersArgs,
  Auth_DeleteOneCalendarsOnUsersArgs,
  Auth_FindFirstCalendarsOnUsersArgs,
  Auth_FindFirstCalendarsOnUsersOrThrowArgs,
  Auth_FindManyCalendarsOnUsersArgs,
  Auth_FindUniqueCalendarsOnUsersArgs,
  Auth_FindUniqueCalendarsOnUsersOrThrowArgs,
  Auth_UpdateOneCalendarsOnUsersArgs,
  Auth_UpsertOneCalendarsOnUsersArgs,
} from '../resolversTypes';

export const typeDefs = null;
// export const typeDefs = gql`
//   extend type Query {
//     sampleCalendarsOnUsersQuery: CalendarsOnUsers
//   }
//   extend type Mutation {
//     sampleCalendarsOnUsersMutation(args: Int!): Boolean
//   }
//   extend type CalendarsOnUsers {
//     sampleCalendarsOnUsersField: String
//   }
// `;

@Resolver('CalendarsOnUsers')
@CaslSubject('CalendarsOnUsers')
export class CalendarsOnUsersResolver {
  @ResolveReference()
  resolveReference(@Parent() reference, @Context() ctx: IContext) {
    return resolvers.CalendarsOnUsers.__resolveReference(reference, ctx);
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findUniqueCalendarsOnUsers(
    @Args() args: Auth_FindUniqueCalendarsOnUsersArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findUniqueCalendarsOnUsers(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findUniqueCalendarsOnUsersOrThrow(
    @Args() args: Auth_FindUniqueCalendarsOnUsersOrThrowArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findUniqueCalendarsOnUsersOrThrow(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findFirstCalendarsOnUsers(
    @Args() args: Auth_FindFirstCalendarsOnUsersArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findFirstCalendarsOnUsers(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findFirstCalendarsOnUsersOrThrow(
    @Args() args: Auth_FindFirstCalendarsOnUsersOrThrowArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findFirstCalendarsOnUsersOrThrow(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findManyCalendarsOnUsers(
    @Args() args: Auth_FindManyCalendarsOnUsersArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findManyCalendarsOnUsers(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findManyCalendarsOnUsersCount(
    @Args() args: Auth_FindManyCalendarsOnUsersArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findManyCalendarsOnUsersCount(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_aggregateCalendarsOnUsers(
    @Args() args: Auth_AggregateCalendarsOnUsersArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_aggregateCalendarsOnUsers(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_groupByCalendarsOnUsers(
    @Args() args: any,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_groupByCalendarsOnUsers(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('create'))
  async Auth_createOneCalendarsOnUsers(
    @Args() args: Auth_CreateOneCalendarsOnUsersArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_createOneCalendarsOnUsers(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('update'))
  async Auth_updateOneCalendarsOnUsers(
    @Args() args: Auth_UpdateOneCalendarsOnUsersArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_updateOneCalendarsOnUsers(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  //UpdateMany is not generated as CalendarsOnUsers has only unique fields or relations.

  @Mutation()
  @UseGuards(GqlCaslGuard('create', 'update'))
  async Auth_upsertOneCalendarsOnUsers(
    @Args() args: Auth_UpsertOneCalendarsOnUsersArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_upsertOneCalendarsOnUsers(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('delete'))
  async Auth_deleteOneCalendarsOnUsers(
    @Args() args: Auth_DeleteOneCalendarsOnUsersArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_deleteOneCalendarsOnUsers(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('delete'))
  async Auth_deleteManyCalendarsOnUsers(
    @Args() args: Auth_DeleteManyCalendarsOnUsersArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_deleteManyCalendarsOnUsers(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }
}
