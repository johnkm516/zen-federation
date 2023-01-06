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
import resolvers from '../paljs/UsersOnCalendarEvents/resolvers';
import type {
  Auth_AggregateUsersOnCalendarEventsArgs,
  Auth_CreateOneUsersOnCalendarEventsArgs,
  Auth_DeleteManyUsersOnCalendarEventsArgs,
  Auth_DeleteOneUsersOnCalendarEventsArgs,
  Auth_FindFirstUsersOnCalendarEventsArgs,
  Auth_FindFirstUsersOnCalendarEventsOrThrowArgs,
  Auth_FindManyUsersOnCalendarEventsArgs,
  Auth_FindUniqueUsersOnCalendarEventsArgs,
  Auth_FindUniqueUsersOnCalendarEventsOrThrowArgs,
  Auth_UpdateOneUsersOnCalendarEventsArgs,
  Auth_UpsertOneUsersOnCalendarEventsArgs,
} from '../resolversTypes';

export const typeDefs = null;
// export const typeDefs = gql`
//   extend type Query {
//     sampleUsersOnCalendarEventsQuery: UsersOnCalendarEvents
//   }
//   extend type Mutation {
//     sampleUsersOnCalendarEventsMutation(args: Int!): Boolean
//   }
//   extend type UsersOnCalendarEvents {
//     sampleUsersOnCalendarEventsField: String
//   }
// `;

@Resolver('UsersOnCalendarEvents')
@CaslSubject('UsersOnCalendarEvents')
export class UsersOnCalendarEventsResolver {
  @ResolveReference()
  resolveReference(@Parent() reference, @Context() ctx: IContext) {
    return resolvers.UsersOnCalendarEvents.__resolveReference(reference, ctx);
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findUniqueUsersOnCalendarEvents(
    @Args() args: Auth_FindUniqueUsersOnCalendarEventsArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findUniqueUsersOnCalendarEvents(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findUniqueUsersOnCalendarEventsOrThrow(
    @Args() args: Auth_FindUniqueUsersOnCalendarEventsOrThrowArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findUniqueUsersOnCalendarEventsOrThrow(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findFirstUsersOnCalendarEvents(
    @Args() args: Auth_FindFirstUsersOnCalendarEventsArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findFirstUsersOnCalendarEvents(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findFirstUsersOnCalendarEventsOrThrow(
    @Args() args: Auth_FindFirstUsersOnCalendarEventsOrThrowArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findFirstUsersOnCalendarEventsOrThrow(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findManyUsersOnCalendarEvents(
    @Args() args: Auth_FindManyUsersOnCalendarEventsArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findManyUsersOnCalendarEvents(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findManyUsersOnCalendarEventsCount(
    @Args() args: Auth_FindManyUsersOnCalendarEventsArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findManyUsersOnCalendarEventsCount(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_aggregateUsersOnCalendarEvents(
    @Args() args: Auth_AggregateUsersOnCalendarEventsArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_aggregateUsersOnCalendarEvents(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_groupByUsersOnCalendarEvents(
    @Args() args: any,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_groupByUsersOnCalendarEvents(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('create'))
  async Auth_createOneUsersOnCalendarEvents(
    @Args() args: Auth_CreateOneUsersOnCalendarEventsArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_createOneUsersOnCalendarEvents(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('update'))
  async Auth_updateOneUsersOnCalendarEvents(
    @Args() args: Auth_UpdateOneUsersOnCalendarEventsArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_updateOneUsersOnCalendarEvents(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  //UpdateMany is not generated as UsersOnCalendarEvents has only unique fields or relations.

  @Mutation()
  @UseGuards(GqlCaslGuard('create', 'update'))
  async Auth_upsertOneUsersOnCalendarEvents(
    @Args() args: Auth_UpsertOneUsersOnCalendarEventsArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_upsertOneUsersOnCalendarEvents(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('delete'))
  async Auth_deleteOneUsersOnCalendarEvents(
    @Args() args: Auth_DeleteOneUsersOnCalendarEventsArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_deleteOneUsersOnCalendarEvents(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('delete'))
  async Auth_deleteManyUsersOnCalendarEvents(
    @Args() args: Auth_DeleteManyUsersOnCalendarEventsArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_deleteManyUsersOnCalendarEvents(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }
}
