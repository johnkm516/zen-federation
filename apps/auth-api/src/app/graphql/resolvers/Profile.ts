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
import resolvers from '../paljs/Profile/resolvers';
import type {
  Auth_AggregateProfileArgs,
  Auth_CreateOneProfileArgs,
  Auth_DeleteManyProfileArgs,
  Auth_DeleteOneProfileArgs,
  Auth_FindFirstProfileArgs,
  Auth_FindFirstProfileOrThrowArgs,
  Auth_FindManyProfileArgs,
  Auth_FindUniqueProfileArgs,
  Auth_FindUniqueProfileOrThrowArgs,
  Auth_UpdateManyProfileArgs,
  Auth_UpdateOneProfileArgs,
  Auth_UpsertOneProfileArgs,
} from '../resolversTypes';

export const typeDefs = null;
// export const typeDefs = gql`
//   extend type Query {
//     sampleProfileQuery: Profile
//   }
//   extend type Mutation {
//     sampleProfileMutation(args: Int!): Boolean
//   }
//   extend type Profile {
//     sampleProfileField: String
//   }
// `;

@Resolver('Profile')
@CaslSubject('Profile')
export class ProfileResolver {
  @ResolveReference()
  resolveReference(@Parent() reference, @Context() ctx: IContext) {
    return resolvers.Profile.__resolveReference(reference, ctx);
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findUniqueProfile(
    @Args() args: Auth_FindUniqueProfileArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findUniqueProfile(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findUniqueProfileOrThrow(
    @Args() args: Auth_FindUniqueProfileOrThrowArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findUniqueProfileOrThrow(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findFirstProfile(
    @Args() args: Auth_FindFirstProfileArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findFirstProfile(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findFirstProfileOrThrow(
    @Args() args: Auth_FindFirstProfileOrThrowArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findFirstProfileOrThrow(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findManyProfile(
    @Args() args: Auth_FindManyProfileArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findManyProfile(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_findManyProfileCount(
    @Args() args: Auth_FindManyProfileArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_findManyProfileCount(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_aggregateProfile(
    @Args() args: Auth_AggregateProfileArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_aggregateProfile(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Query()
  @UseGuards(GqlCaslGuard('read'))
  async Auth_groupByProfile(
    @Args() args: any,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.Auth_groupByProfile(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('create'))
  async Auth_createOneProfile(
    @Args() args: Auth_CreateOneProfileArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_createOneProfile(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('update'))
  async Auth_updateOneProfile(
    @Args() args: Auth_UpdateOneProfileArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_updateOneProfile(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('update'))
  async Auth_updateManyProfile(
    @Args() args: Auth_UpdateManyProfileArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_updateManyProfile(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('create', 'update'))
  async Auth_upsertOneProfile(
    @Args() args: Auth_UpsertOneProfileArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_upsertOneProfile(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('delete'))
  async Auth_deleteOneProfile(
    @Args() args: Auth_DeleteOneProfileArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_deleteOneProfile(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }

  @Mutation()
  @UseGuards(GqlCaslGuard('delete'))
  async Auth_deleteManyProfile(
    @Args() args: Auth_DeleteManyProfileArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.Auth_deleteManyProfile(
      undefined,
      PrismaSelectArgs(info, args),
      ctx,
      info
    );
  }
}
