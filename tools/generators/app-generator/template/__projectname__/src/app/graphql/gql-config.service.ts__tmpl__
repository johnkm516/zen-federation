import { ApolloServerPlugin } from '@apollo/server';
import { ApolloServerPluginInlineTraceDisabled } from '@apollo/server/plugin/disabled';
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from '@apollo/server/plugin/landingPage/default';
import { ApolloFederationDriverConfig } from '@nestjs/apollo';
import { Injectable } from '@nestjs/common';
import { GqlOptionsFactory } from '@nestjs/graphql';
import { print } from 'graphql';

import { ConfigService } from '../config';
import { PrismaService } from '../prisma';
import { IContext } from './models';
import { ALL_TYPE_DEFS } from './resolvers';

@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
  constructor(private readonly config: ConfigService, private readonly prisma: PrismaService) {}

  createGqlOptions(): ApolloFederationDriverConfig {
    const plugins: ApolloServerPlugin[] = [];
    if (this.config.graphql.sandbox) plugins.push(ApolloServerPluginLandingPageLocalDefault());
    if (!this.config.graphql.trace) plugins.push(ApolloServerPluginInlineTraceDisabled());

    return {
      typeDefs: print(ALL_TYPE_DEFS),
      playground: false,
      plugins,
      introspection: this.config.graphql.introspection,
      csrfPrevention: this.config.graphql.csrfPrevention,
      cache: 'bounded',
      installSubscriptionHandlers: this.config.graphql.subscriptions,
      subscriptions: this.config.graphql.subscriptions
        ? {
            'graphql-ws': {
              onConnect: (context: any) => {
                const { connectionParams, extra } = context;
                extra.token = connectionParams.token;
              },
            },
          }
        : undefined,
      context: async (ctx): Promise<IContext> => {
        // Subscriptions pass through JWT token for authentication
        if (ctx.extra) return { req: ctx.extra, prisma: this.prisma };
        // Queries, Mutations
        else return { ...ctx, prisma: this.prisma };
      },
    };
  }
}
