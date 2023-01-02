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
import resolvers from '../paljs/CalendarEvent/resolvers';
import type {
  Auth_AggregateCalendarEventArgs,
  Auth_CreateOneCalendarEventArgs,
  Auth_DeleteManyCalendarEventArgs,
  Auth_DeleteOneCalendarEventArgs,
  Auth_FindFirstCalendarEventArgs,
  Auth_FindFirstCalendarEventOrThrowArgs,
  Auth_FindManyCalendarEventArgs,
  Auth_FindUniqueCalendarEventArgs,
  Auth_FindUniqueCalendarEventOrThrowArgs,
  Auth_UpdateManyCalendarEventArgs,
  Auth_UpdateOneCalendarEventArgs,
  Auth_UpsertOneCalendarEventArgs,
} from '../resolversTypes';

export const typeDefs = null;
// export const typeDefs = gql`
//   extend type Query {
//     sampleCalendarEventQuery: CalendarEvent
//   }
//   extend type Mutation {
//     sampleCalendarEventMutation(args: Int!): Boolean
//   }
//   extend type CalendarEvent {
//     sampleCalendarEventField: String
//   }
// `;

@Resolver('CalendarEvent')
@CaslSubject('CalendarEvent')
export class CalendarEventResolver {
  @ResolveReference()
  resolveReference(@Parent() reference, @Context() ctx: IContext) {
    return resolvers.CalendarEvent.__resolveReference(reference, ctx);
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findUniqueCalendarEvent(
    @Args() args: Auth_FindUniqueCalendarEventArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findUniqueCalendarEvent(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findUniqueCalendarEventOrThrow(
    @Args() args: Auth_FindUniqueCalendarEventOrThrowArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findUniqueCalendarEventOrThrow(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findFirstCalendarEvent(
    @Args() args: Auth_FindFirstCalendarEventArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findFirstCalendarEvent(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findFirstCalendarEventOrThrow(
    @Args() args: Auth_FindFirstCalendarEventOrThrowArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findFirstCalendarEventOrThrow(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findManyCalendarEvent(
    @Args() args: Auth_FindManyCalendarEventArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findManyCalendarEvent(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findManyCalendarEventCount(
    @Args() args: Auth_FindManyCalendarEventArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findManyCalendarEventCount(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_aggregateCalendarEvent(
    @Args() args: Auth_AggregateCalendarEventArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_aggregateCalendarEvent(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_groupByCalendarEvent(
    @Args() args: any,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_groupByCalendarEvent(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('create'))
  async Auth_createOneCalendarEvent(
    @Args() args: Auth_CreateOneCalendarEventArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_createOneCalendarEvent(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('update'))
  async Auth_updateOneCalendarEvent(
    @Args() args: Auth_UpdateOneCalendarEventArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_updateOneCalendarEvent(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('update'))
  async Auth_updateManyCalendarEvent(
    @Args() args: Auth_UpdateManyCalendarEventArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_updateManyCalendarEvent(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('create', 'update'))
  async Auth_upsertOneCalendarEvent(
    @Args() args: Auth_UpsertOneCalendarEventArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_upsertOneCalendarEvent(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('delete'))
  async Auth_deleteOneCalendarEvent(
    @Args() args: Auth_DeleteOneCalendarEventArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_deleteOneCalendarEvent(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('delete'))
  async Auth_deleteManyCalendarEvent(
    @Args() args: Auth_DeleteManyCalendarEventArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_deleteManyCalendarEvent(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }
}
