import { mergeTypeDefs } from '@graphql-tools/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';

import { typeDefs as GlobalTypeDefs } from '../global-schema.gql';
import PALJS_TYPE_DEFS from '../paljs/typeDefs';
import { AuthResolver, typeDefs as AuthTypeDefs } from './Auth';
import { ProfileResolver, typeDefs as ProfileTypeDefs } from './Profile';
import { TeamResolver, typeDefs as TeamTypeDefs } from './Team';
import {
  TransactionalBatchMutationResolver,
  typeDefs as TransactionalBatchMutationTypeDefs,
} from './TransactionalBatchMutation';
import { UserResolver, typeDefs as UserTypeDefs } from './User';
import { UsersOnTeamsResolver, typeDefs as UsersOnTeamsTypeDefs } from './UsersOnTeams';

export const NEST_RESOLVERS = [
  AuthResolver,
  ProfileResolver,
  TeamResolver,
  TransactionalBatchMutationResolver,
  UserResolver,
  UsersOnTeamsResolver,
];

export const NEST_TYPE_DEFS = [
  AuthTypeDefs,
  ProfileTypeDefs,
  TeamTypeDefs,
  TransactionalBatchMutationTypeDefs,
  UserTypeDefs,
  UsersOnTeamsTypeDefs,
].filter(x => x);

export const ALL_TYPE_DEFS = mergeTypeDefs([GlobalTypeDefs, PALJS_TYPE_DEFS, ...NEST_TYPE_DEFS]);
export const GRAPHQL_SCHEMA = makeExecutableSchema({ typeDefs: ALL_TYPE_DEFS });
