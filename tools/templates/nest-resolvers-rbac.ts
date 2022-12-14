import { Model } from "@paljs/generator/dist/Generators";

export function NestResolversRBACTemplate(model: Model, federation?: string) {
const federationPrefix = federation ? `${federation}_` : ``
  return `import { UseGuards } from '@nestjs/common';
import { Args, Context, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GraphQLResolveInfo } from 'graphql';

import { GqlGuard, Roles } from '../../auth';
import { PrismaSelectArgs } from '../../prisma';
import { IContext } from '../models';
import resolvers from '../paljs/${model.name}/resolvers';
import type {
  ${federationPrefix}Aggregate${model.name}Args,
  ${federationPrefix}CreateOne${model.name}Args,
  ${federationPrefix}DeleteMany${model.name}Args,
  ${federationPrefix}DeleteOne${model.name}Args,
  ${federationPrefix}FindFirst${model.name}Args,
  ${federationPrefix}FindFirst${model.name}OrThrowArgs,
  ${federationPrefix}FindMany${model.name}Args,
  ${federationPrefix}FindUnique${model.name}Args,
  ${federationPrefix}FindUnique${model.name}OrThrowArgs,
  ${model.generateUpdateMany ? `${federationPrefix}UpdateMany${model.name}Args,` : `//UpdateMany is not generated as ${model.name} has only unique fields or relations.`}
  ${federationPrefix}UpdateOne${model.name}Args,
  ${federationPrefix}UpsertOne${model.name}Args,
} from '../resolversTypes';

export const typeDefs = null;
// export const typeDefs = gql\`
//   extend type Query {
//     sample${model.name}Query: ${model.name}
//   }
//   extend type Mutation {
//     sample${model.name}Mutation(args: Int!): Boolean
//   }
//   extend type ${model.name} {
//     sample${model.name}Field: String
//   }
// \`;

@Resolver('${model.name}')
@Roles('Super')
@UseGuards(GqlGuard)
export class ${model.name}Resolver {
  @Query()
  async ${federationPrefix}findUnique${model.name}(
    @Args() args: ${federationPrefix}FindUnique${model.name}Args,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.${federationPrefix}findUnique${model.name}(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  @Query()
  async ${federationPrefix}findUnique${model.name}OrThrow(
    @Args() args: ${federationPrefix}FindUnique${model.name}OrThrowArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.${federationPrefix}findUnique${model.name}OrThrow(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  @Query()
  async ${federationPrefix}findFirst${model.name}(
    @Args() args: ${federationPrefix}FindFirst${model.name}Args,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.${federationPrefix}findFirst${model.name}(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  @Query()
  async ${federationPrefix}findFirst${model.name}OrThrow(
    @Args() args: ${federationPrefix}FindFirst${model.name}OrThrowArgs,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.${federationPrefix}findFirst${model.name}OrThrow(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  @Query()
  async ${federationPrefix}findMany${model.name}(
    @Args() args: ${federationPrefix}FindMany${model.name}Args,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.${federationPrefix}findMany${model.name}(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  @Query()
  async ${federationPrefix}findMany${model.name}Count(
    @Args() args: ${federationPrefix}FindMany${model.name}Args,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.${federationPrefix}findMany${model.name}Count(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  @Query()
  async ${federationPrefix}aggregate${model.name}(
    @Args() args: ${federationPrefix}Aggregate${model.name}Args,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.${federationPrefix}aggregate${model.name}(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  @Query()
  async ${federationPrefix}groupBy${model.name}(
    @Args() args: any,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Query.${federationPrefix}groupBy${model.name}(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  @Mutation()
  async ${federationPrefix}createOne${model.name}(
    @Args() args: ${federationPrefix}CreateOne${model.name}Args,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.${federationPrefix}createOne${model.name}(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  @Mutation()
  async ${federationPrefix}updateOne${model.name}(
    @Args() args: ${federationPrefix}UpdateOne${model.name}Args,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.${federationPrefix}updateOne${model.name}(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  ${
    model.generateUpdateMany ? 
  `@Mutation()
  async ${federationPrefix}updateMany${model.name}(
    @Args() args: ${federationPrefix}UpdateMany${model.name}Args,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.${federationPrefix}updateMany${model.name}(undefined, PrismaSelectArgs(info, args), ctx, info);
  }`
   :
   `//UpdateMany is not generated as ${model.name} has only unique fields or relations.`
  }

  @Mutation()
  async ${federationPrefix}upsertOne${model.name}(
    @Args() args: ${federationPrefix}UpsertOne${model.name}Args,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.${federationPrefix}upsertOne${model.name}(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  @Mutation()
  async ${federationPrefix}deleteOne${model.name}(
    @Args() args: ${federationPrefix}DeleteOne${model.name}Args,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.${federationPrefix}deleteOne${model.name}(undefined, PrismaSelectArgs(info, args), ctx, info);
  }

  @Mutation()
  async ${federationPrefix}deleteMany${model.name}(
    @Args() args: ${federationPrefix}DeleteMany${model.name}Args,
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext
  ) {
    return resolvers.Mutation.${federationPrefix}deleteMany${model.name}(undefined, PrismaSelectArgs(info, args), ctx, info);
  }
}
`;
}
