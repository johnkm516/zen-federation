import { HttpException, UseGuards } from '@nestjs/common';
import { Args, Context, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Throttle } from '@nestjs/throttler';
import { PrismaClient } from '@nx-prisma/prisma-clients/crm';
import { ApiError } from '@zen/api-interfaces';
import bcrypt from 'bcryptjs';
import gql from 'graphql-tag';
import { GraphQLResolveInfo } from 'graphql/type';

import { AuthService, GqlGuard, GqlThrottlerGuard, GqlUser, RequestUser } from '../../auth';
import { ConfigService } from '../../config';
import { JwtService } from '../../jwt';
import { MailService } from '../../mail';
import { PrismaSelectArgs } from '../../prisma/prisma-select-args';
import { IContext } from '../models';
import resolvers from '../paljs/User/resolvers';

export const typeDefs = gql`
  extend type Query {
    crm_accountInfo: User!
  }

  type AuthSession @shareable {
    id: Int! # Change to Int! or String! respective to the typeof User['id']
    token: String!
    roles: [String!]!
    rememberMe: Boolean!
    expiresIn: Int!
    rules: [Json!]!
  }
`;

@Resolver()
@UseGuards(GqlThrottlerGuard)
@Throttle()
export class AuthResolver {
  constructor(
    private readonly auth: AuthService,
    private readonly config: ConfigService,
    private readonly jwtService: JwtService,
    private readonly mail: MailService
  ) {}

  @Query()
  @UseGuards(GqlGuard)
  async crm_accountInfo(
    @Info() info: GraphQLResolveInfo,
    @Context() ctx: IContext,
    @GqlUser() reqUser: RequestUser
  ) {
    return resolvers.Query.crm_findUniqueUser(
      undefined,
      PrismaSelectArgs(info, {
        where: { id: reqUser.id },
      }),
      ctx,
      info
    );
  }
}
