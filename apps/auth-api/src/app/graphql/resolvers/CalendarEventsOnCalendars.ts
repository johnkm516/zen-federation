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
import resolvers from '../paljs/CalendarEventsOnCalendars/resolvers';
import type {
  Auth_AggregateCalendarEventsOnCalendarsArgs,
  Auth_CreateOneCalendarEventsOnCalendarsArgs,
  Auth_DeleteManyCalendarEventsOnCalendarsArgs,
  Auth_DeleteOneCalendarEventsOnCalendarsArgs,
  Auth_FindFirstCalendarEventsOnCalendarsArgs,
  Auth_FindFirstCalendarEventsOnCalendarsOrThrowArgs,
  Auth_FindManyCalendarEventsOnCalendarsArgs,
  Auth_FindUniqueCalendarEventsOnCalendarsArgs,
  Auth_FindUniqueCalendarEventsOnCalendarsOrThrowArgs,
  Auth_UpdateOneCalendarEventsOnCalendarsArgs,
  Auth_UpsertOneCalendarEventsOnCalendarsArgs,
} from '../resolversTypes';

export const typeDefs = null;
// export const typeDefs = gql`
//   extend type Query {
//     sampleCalendarEventsOnCalendarsQuery: CalendarEventsOnCalendars
//   }
//   extend type Mutation {
//     sampleCalendarEventsOnCalendarsMutation(args: Int!): Boolean
//   }
//   extend type CalendarEventsOnCalendars {
//     sampleCalendarEventsOnCalendarsField: String
//   }
// `;

@Resolver('CalendarEventsOnCalendars')
@CaslSubject('CalendarEventsOnCalendars')
export class CalendarEventsOnCalendarsResolver {
  @ResolveReference()
  resolveReference(@Parent() reference, @Context() ctx: IContext) {
    return resolvers.CalendarEventsOnCalendars.__resolveReference(reference, ctx);
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findUniqueCalendarEventsOnCalendars(
    @Args() args: Auth_FindUniqueCalendarEventsOnCalendarsArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findUniqueCalendarEventsOnCalendars(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findUniqueCalendarEventsOnCalendarsOrThrow(
    @Args() args: Auth_FindUniqueCalendarEventsOnCalendarsOrThrowArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findUniqueCalendarEventsOnCalendarsOrThrow(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findFirstCalendarEventsOnCalendars(
    @Args() args: Auth_FindFirstCalendarEventsOnCalendarsArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findFirstCalendarEventsOnCalendars(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findFirstCalendarEventsOnCalendarsOrThrow(
    @Args() args: Auth_FindFirstCalendarEventsOnCalendarsOrThrowArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findFirstCalendarEventsOnCalendarsOrThrow(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findManyCalendarEventsOnCalendars(
    @Args() args: Auth_FindManyCalendarEventsOnCalendarsArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findManyCalendarEventsOnCalendars(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findManyCalendarEventsOnCalendarsCount(
    @Args() args: Auth_FindManyCalendarEventsOnCalendarsArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findManyCalendarEventsOnCalendarsCount(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_aggregateCalendarEventsOnCalendars(
    @Args() args: Auth_AggregateCalendarEventsOnCalendarsArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_aggregateCalendarEventsOnCalendars(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_groupByCalendarEventsOnCalendars(
    @Args() args: any,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_groupByCalendarEventsOnCalendars(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('create'))
  async Auth_createOneCalendarEventsOnCalendars(
    @Args() args: Auth_CreateOneCalendarEventsOnCalendarsArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_createOneCalendarEventsOnCalendars(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('update'))
  async Auth_updateOneCalendarEventsOnCalendars(
    @Args() args: Auth_UpdateOneCalendarEventsOnCalendarsArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_updateOneCalendarEventsOnCalendars(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  //UpdateMany is not generated as CalendarEventsOnCalendars has only unique fields or relations.

  @Mutation()
  @UseGuards(GqlCaslGuard('create', 'update'))
  async Auth_upsertOneCalendarEventsOnCalendars(
    @Args() args: Auth_UpsertOneCalendarEventsOnCalendarsArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_upsertOneCalendarEventsOnCalendars(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('delete'))
  async Auth_deleteOneCalendarEventsOnCalendars(
    @Args() args: Auth_DeleteOneCalendarEventsOnCalendarsArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_deleteOneCalendarEventsOnCalendars(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('delete'))
  async Auth_deleteManyCalendarEventsOnCalendars(
    @Args() args: Auth_DeleteManyCalendarEventsOnCalendarsArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_deleteManyCalendarEventsOnCalendars(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }
}
