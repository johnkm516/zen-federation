import { mergeTypeDefs } from '@graphql-tools/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';

import { typeDefs as GlobalTypeDefs } from '../global-schema.gql';
import PALJS_TYPE_DEFS from '../paljs/typeDefs';
import { AuthResolver, typeDefs as AuthTypeDefs } from './Auth';
import { ProfileResolver, typeDefs as ProfileTypeDefs } from './Profile';
import { UserResolver, typeDefs as UserTypeDefs } from './User';

export const NEST_RESOLVERS = [AuthResolver, ProfileResolver, UserResolver];

export const NEST_TYPE_DEFS = [AuthTypeDefs, ProfileTypeDefs, UserTypeDefs].filter(x => x);

export const ALL_TYPE_DEFS = mergeTypeDefs([GlobalTypeDefs, PALJS_TYPE_DEFS, ...NEST_TYPE_DEFS]);
export const GRAPHQL_SCHEMA = makeExecutableSchema({ typeDefs: ALL_TYPE_DEFS });
