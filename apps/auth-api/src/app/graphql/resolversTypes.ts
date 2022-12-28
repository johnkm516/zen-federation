import * as Client from '@nx-prisma/prisma-clients/Auth';
import { GraphQLResolveInfo } from 'graphql';

import { Context } from './context';
type Resolver<T extends {}, A extends {}, R extends any> = (
  parent: T,
  args: A,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<R>;

// cause typescript not to expand types and preserve names
type NoExpand<T> = T extends unknown ? T : never;

// this type assumes the passed object is entirely optional
type AtLeast<O extends object, K extends string> = NoExpand<
  O extends unknown
    ?
        | (K extends keyof O ? { [P in K]: O[P] } & O : O)
        | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
    : never
>;

export type GroupByError =
  | `Error: Field "${any}" used in "having" needs to be provided in "by".`
  | [Error, 'Field ', any, ' in "having" needs to be provided in "by"'];

export interface Resolvers {
  [key: string]: { [key: string]: Resolver<any, any, any> };
  User?: User;
  Profile?: Profile;
  UsersOnTeams?: UsersOnTeams;
  Team?: Team;
  Query?: Query;
  Mutation?: Mutation;
  AggregateUser?: AggregateUser;
  UserGroupByOutputType?: UserGroupByOutputType;
  AggregateProfile?: AggregateProfile;
  ProfileGroupByOutputType?: ProfileGroupByOutputType;
  AggregateUsersOnTeams?: AggregateUsersOnTeams;
  UsersOnTeamsGroupByOutputType?: UsersOnTeamsGroupByOutputType;
  AggregateTeam?: AggregateTeam;
  TeamGroupByOutputType?: TeamGroupByOutputType;
  AffectedRowsOutput?: AffectedRowsOutput;
  UserCountOutputType?: UserCountOutputType;
  UserCountAggregateOutputType?: UserCountAggregateOutputType;
  UserAvgAggregateOutputType?: UserAvgAggregateOutputType;
  UserSumAggregateOutputType?: UserSumAggregateOutputType;
  UserMinAggregateOutputType?: UserMinAggregateOutputType;
  UserMaxAggregateOutputType?: UserMaxAggregateOutputType;
  ProfileCountAggregateOutputType?: ProfileCountAggregateOutputType;
  ProfileAvgAggregateOutputType?: ProfileAvgAggregateOutputType;
  ProfileSumAggregateOutputType?: ProfileSumAggregateOutputType;
  ProfileMinAggregateOutputType?: ProfileMinAggregateOutputType;
  ProfileMaxAggregateOutputType?: ProfileMaxAggregateOutputType;
  UsersOnTeamsCountAggregateOutputType?: UsersOnTeamsCountAggregateOutputType;
  UsersOnTeamsAvgAggregateOutputType?: UsersOnTeamsAvgAggregateOutputType;
  UsersOnTeamsSumAggregateOutputType?: UsersOnTeamsSumAggregateOutputType;
  UsersOnTeamsMinAggregateOutputType?: UsersOnTeamsMinAggregateOutputType;
  UsersOnTeamsMaxAggregateOutputType?: UsersOnTeamsMaxAggregateOutputType;
  TeamCountOutputType?: TeamCountOutputType;
  TeamCountAggregateOutputType?: TeamCountAggregateOutputType;
  TeamMinAggregateOutputType?: TeamMinAggregateOutputType;
  TeamMaxAggregateOutputType?: TeamMaxAggregateOutputType;
}

export interface User {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.User, {}, number>;
  createdAt?: Resolver<Client.User, {}, Date>;
  username?: Resolver<Client.User, {}, string | null>;
  password?: Resolver<Client.User, {}, string | null>;
  email?: Resolver<Client.User, {}, string>;
  roles?: Resolver<Client.User, {}, string[] | null>;
  googleId?: Resolver<Client.User, {}, string | null>;
  googleProfile?: Resolver<Client.User, {}, any | null>;
  lastName?: Resolver<Client.User, {}, string | null>;
  firstName?: Resolver<Client.User, {}, string | null>;
  profile?: Resolver<Client.User, {}, Client.Profile | null>;
  teams?: Resolver<Client.User, Auth_UserTeamsArgs, Client.UsersOnTeams[] | null>;
  _count?: Resolver<Client.User, {}, Client.Prisma.UserCountOutputType>;

  __resolveReference?: any;
}

export interface Profile {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<Client.Profile, {}, number>;
  user?: Resolver<Client.Profile, {}, Client.User>;
  location?: Resolver<Client.Profile, {}, string | null>;
  joiningDate?: Resolver<Client.Profile, {}, Date | null>;
  designation?: Resolver<Client.Profile, {}, string | null>;
  profileImg?: Resolver<Client.Profile, {}, string | null>;
  designationIcon?: Resolver<Client.Profile, {}, string | null>;
  coverImg?: Resolver<Client.Profile, {}, string | null>;

  __resolveReference?: any;
}

export interface UsersOnTeams {
  [key: string]: Resolver<any, any, any>;
  team?: Resolver<Client.UsersOnTeams, {}, Client.Team>;
  teamName?: Resolver<Client.UsersOnTeams, {}, string>;
  user?: Resolver<Client.UsersOnTeams, {}, Client.User>;
  userId?: Resolver<Client.UsersOnTeams, {}, number>;
  assignedAt?: Resolver<Client.UsersOnTeams, {}, Date>;

  __resolveReference?: any;
}

export interface Team {
  [key: string]: Resolver<any, any, any>;
  teamName?: Resolver<Client.Team, {}, string>;
  users?: Resolver<Client.Team, Auth_TeamUsersArgs, Client.UsersOnTeams[] | null>;
  _count?: Resolver<Client.Team, {}, Client.Prisma.TeamCountOutputType>;

  __resolveReference?: any;
}

export interface Query {
  [key: string]: Resolver<any, any, any>;
  Auth_findFirstUser?: Resolver<{}, Auth_FindFirstUserArgs, Client.User | null>;
  Auth_findFirstUserOrThrow?: Resolver<{}, Auth_FindFirstUserOrThrowArgs, Client.User | null>;
  Auth_findManyUser?: Resolver<{}, Auth_FindManyUserArgs, Client.User[]>;
  Auth_findManyUserCount?: Resolver<{}, Auth_FindManyUserArgs, number>;
  Auth_aggregateUser?: Resolver<
    {},
    Auth_AggregateUserArgs,
    Client.Prisma.GetUserAggregateType<Auth_AggregateUserArgs>
  >;
  //Auth_groupByUser is not generated because model has only unique fields or relations.
  Auth_groupByUser?: Resolver<
    {},
    any,
    Client.Prisma.GetUserGroupByPayload<Auth_GroupByUserArgs> | GroupByError
  >;
  Auth_findUniqueUser?: Resolver<{}, Auth_FindUniqueUserArgs, Client.User | null>;
  Auth_findUniqueUserOrThrow?: Resolver<{}, Auth_FindUniqueUserOrThrowArgs, Client.User | null>;
  Auth_findFirstProfile?: Resolver<{}, Auth_FindFirstProfileArgs, Client.Profile | null>;
  Auth_findFirstProfileOrThrow?: Resolver<
    {},
    Auth_FindFirstProfileOrThrowArgs,
    Client.Profile | null
  >;
  Auth_findManyProfile?: Resolver<{}, Auth_FindManyProfileArgs, Client.Profile[]>;
  Auth_findManyProfileCount?: Resolver<{}, Auth_FindManyProfileArgs, number>;
  Auth_aggregateProfile?: Resolver<
    {},
    Auth_AggregateProfileArgs,
    Client.Prisma.GetProfileAggregateType<Auth_AggregateProfileArgs>
  >;
  //Auth_groupByProfile is not generated because model has only unique fields or relations.
  Auth_groupByProfile?: Resolver<
    {},
    any,
    Client.Prisma.GetProfileGroupByPayload<Auth_GroupByProfileArgs> | GroupByError
  >;
  Auth_findUniqueProfile?: Resolver<{}, Auth_FindUniqueProfileArgs, Client.Profile | null>;
  Auth_findUniqueProfileOrThrow?: Resolver<
    {},
    Auth_FindUniqueProfileOrThrowArgs,
    Client.Profile | null
  >;
  Auth_findFirstUsersOnTeams?: Resolver<
    {},
    Auth_FindFirstUsersOnTeamsArgs,
    Client.UsersOnTeams | null
  >;
  Auth_findFirstUsersOnTeamsOrThrow?: Resolver<
    {},
    Auth_FindFirstUsersOnTeamsOrThrowArgs,
    Client.UsersOnTeams | null
  >;
  Auth_findManyUsersOnTeams?: Resolver<{}, Auth_FindManyUsersOnTeamsArgs, Client.UsersOnTeams[]>;
  Auth_findManyUsersOnTeamsCount?: Resolver<{}, Auth_FindManyUsersOnTeamsArgs, number>;
  Auth_aggregateUsersOnTeams?: Resolver<
    {},
    Auth_AggregateUsersOnTeamsArgs,
    Client.Prisma.GetUsersOnTeamsAggregateType<Auth_AggregateUsersOnTeamsArgs>
  >;
  //Auth_groupByUsersOnTeams is not generated because model has only unique fields or relations.
  Auth_groupByUsersOnTeams?: Resolver<
    {},
    any,
    Client.Prisma.GetUsersOnTeamsGroupByPayload<Auth_GroupByUsersOnTeamsArgs> | GroupByError
  >;
  Auth_findUniqueUsersOnTeams?: Resolver<
    {},
    Auth_FindUniqueUsersOnTeamsArgs,
    Client.UsersOnTeams | null
  >;
  Auth_findUniqueUsersOnTeamsOrThrow?: Resolver<
    {},
    Auth_FindUniqueUsersOnTeamsOrThrowArgs,
    Client.UsersOnTeams | null
  >;
  Auth_findFirstTeam?: Resolver<{}, Auth_FindFirstTeamArgs, Client.Team | null>;
  Auth_findFirstTeamOrThrow?: Resolver<{}, Auth_FindFirstTeamOrThrowArgs, Client.Team | null>;
  Auth_findManyTeam?: Resolver<{}, Auth_FindManyTeamArgs, Client.Team[]>;
  Auth_findManyTeamCount?: Resolver<{}, Auth_FindManyTeamArgs, number>;
  Auth_aggregateTeam?: Resolver<
    {},
    Auth_AggregateTeamArgs,
    Client.Prisma.GetTeamAggregateType<Auth_AggregateTeamArgs>
  >;
  //Auth_groupByTeam is not generated because model has only unique fields or relations.
  Auth_groupByTeam?: Resolver<
    {},
    any,
    Client.Prisma.GetTeamGroupByPayload<Auth_GroupByTeamArgs> | GroupByError
  >;
  Auth_findUniqueTeam?: Resolver<{}, Auth_FindUniqueTeamArgs, Client.Team | null>;
  Auth_findUniqueTeamOrThrow?: Resolver<{}, Auth_FindUniqueTeamOrThrowArgs, Client.Team | null>;
}

export interface Mutation {
  [key: string]: Resolver<any, any, any>;
  Auth_createOneUser?: Resolver<{}, Auth_CreateOneUserArgs, Client.User>;
  Auth_upsertOneUser?: Resolver<{}, Auth_UpsertOneUserArgs, Client.User>;
  Auth_createManyUser?: Resolver<{}, Auth_CreateManyUserArgs, Client.Prisma.BatchPayload>;
  Auth_deleteOneUser?: Resolver<{}, Auth_DeleteOneUserArgs, Client.User | null>;
  Auth_updateOneUser?: Resolver<{}, Auth_UpdateOneUserArgs, Client.User | null>;
  //Auth_updateManyUser is not generated because model has only unique fields or relations.
  Auth_deleteManyUser?: Resolver<{}, Auth_DeleteManyUserArgs, Client.Prisma.BatchPayload>;
  Auth_createOneProfile?: Resolver<{}, Auth_CreateOneProfileArgs, Client.Profile>;
  Auth_upsertOneProfile?: Resolver<{}, Auth_UpsertOneProfileArgs, Client.Profile>;
  Auth_createManyProfile?: Resolver<{}, Auth_CreateManyProfileArgs, Client.Prisma.BatchPayload>;
  Auth_deleteOneProfile?: Resolver<{}, Auth_DeleteOneProfileArgs, Client.Profile | null>;
  Auth_updateOneProfile?: Resolver<{}, Auth_UpdateOneProfileArgs, Client.Profile | null>;
  //Auth_updateManyProfile is not generated because model has only unique fields or relations.
  Auth_deleteManyProfile?: Resolver<{}, Auth_DeleteManyProfileArgs, Client.Prisma.BatchPayload>;
  Auth_createOneUsersOnTeams?: Resolver<{}, Auth_CreateOneUsersOnTeamsArgs, Client.UsersOnTeams>;
  Auth_upsertOneUsersOnTeams?: Resolver<{}, Auth_UpsertOneUsersOnTeamsArgs, Client.UsersOnTeams>;
  Auth_createManyUsersOnTeams?: Resolver<
    {},
    Auth_CreateManyUsersOnTeamsArgs,
    Client.Prisma.BatchPayload
  >;
  Auth_deleteOneUsersOnTeams?: Resolver<
    {},
    Auth_DeleteOneUsersOnTeamsArgs,
    Client.UsersOnTeams | null
  >;
  Auth_updateOneUsersOnTeams?: Resolver<
    {},
    Auth_UpdateOneUsersOnTeamsArgs,
    Client.UsersOnTeams | null
  >;
  //Auth_updateManyUsersOnTeams is not generated because model has only unique fields or relations.
  Auth_deleteManyUsersOnTeams?: Resolver<
    {},
    Auth_DeleteManyUsersOnTeamsArgs,
    Client.Prisma.BatchPayload
  >;
  Auth_createOneTeam?: Resolver<{}, Auth_CreateOneTeamArgs, Client.Team>;
  Auth_upsertOneTeam?: Resolver<{}, Auth_UpsertOneTeamArgs, Client.Team>;
  Auth_createManyTeam?: Resolver<{}, Auth_CreateManyTeamArgs, Client.Prisma.BatchPayload>;
  Auth_deleteOneTeam?: Resolver<{}, Auth_DeleteOneTeamArgs, Client.Team | null>;
  Auth_updateOneTeam?: Resolver<{}, Auth_UpdateOneTeamArgs, Client.Team | null>;
  //Auth_updateManyTeam is not generated because model has only unique fields or relations.
  Auth_deleteManyTeam?: Resolver<{}, Auth_DeleteManyTeamArgs, Client.Prisma.BatchPayload>;
  Auth_executeRaw?: Resolver<{}, Auth_ExecuteRawArgs, any>;
  Auth_queryRaw?: Resolver<{}, Auth_QueryRawArgs, any>;
  Auth_transactionalBatchMutation?: Resolver<{}, Auth_TransactionalBatchMutationArgs, any>;
}

export interface AggregateUser {
  [key: string]: Resolver<any, any, any>;
  _count?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserCountAggregateOutputType | null
  >;
  _avg?: Resolver<Client.Prisma.AggregateUser, {}, Client.Prisma.UserAvgAggregateOutputType | null>;
  _sum?: Resolver<Client.Prisma.AggregateUser, {}, Client.Prisma.UserSumAggregateOutputType | null>;
  _min?: Resolver<Client.Prisma.AggregateUser, {}, Client.Prisma.UserMinAggregateOutputType | null>;
  _max?: Resolver<Client.Prisma.AggregateUser, {}, Client.Prisma.UserMaxAggregateOutputType | null>;
}

export interface UserGroupByOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.UserGroupByOutputType, {}, number>;
  createdAt?: Resolver<Client.Prisma.UserGroupByOutputType, {}, Date>;
  username?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>;
  password?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>;
  email?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string>;
  roles?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string[] | null>;
  googleId?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>;
  googleProfile?: Resolver<Client.Prisma.UserGroupByOutputType, {}, any | null>;
  lastName?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>;
  firstName?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>;
  _count?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserMaxAggregateOutputType | null
  >;
}

export interface AggregateProfile {
  [key: string]: Resolver<any, any, any>;
  _count?: Resolver<
    Client.Prisma.AggregateProfile,
    {},
    Client.Prisma.ProfileCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.AggregateProfile,
    {},
    Client.Prisma.ProfileAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.AggregateProfile,
    {},
    Client.Prisma.ProfileSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.AggregateProfile,
    {},
    Client.Prisma.ProfileMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.AggregateProfile,
    {},
    Client.Prisma.ProfileMaxAggregateOutputType | null
  >;
}

export interface ProfileGroupByOutputType {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<Client.Prisma.ProfileGroupByOutputType, {}, number>;
  location?: Resolver<Client.Prisma.ProfileGroupByOutputType, {}, string | null>;
  joiningDate?: Resolver<Client.Prisma.ProfileGroupByOutputType, {}, Date | null>;
  designation?: Resolver<Client.Prisma.ProfileGroupByOutputType, {}, string | null>;
  profileImg?: Resolver<Client.Prisma.ProfileGroupByOutputType, {}, string | null>;
  designationIcon?: Resolver<Client.Prisma.ProfileGroupByOutputType, {}, string | null>;
  coverImg?: Resolver<Client.Prisma.ProfileGroupByOutputType, {}, string | null>;
  _count?: Resolver<
    Client.Prisma.ProfileGroupByOutputType,
    {},
    Client.Prisma.ProfileCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.ProfileGroupByOutputType,
    {},
    Client.Prisma.ProfileAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.ProfileGroupByOutputType,
    {},
    Client.Prisma.ProfileSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.ProfileGroupByOutputType,
    {},
    Client.Prisma.ProfileMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.ProfileGroupByOutputType,
    {},
    Client.Prisma.ProfileMaxAggregateOutputType | null
  >;
}

export interface AggregateUsersOnTeams {
  [key: string]: Resolver<any, any, any>;
  _count?: Resolver<
    Client.Prisma.AggregateUsersOnTeams,
    {},
    Client.Prisma.UsersOnTeamsCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.AggregateUsersOnTeams,
    {},
    Client.Prisma.UsersOnTeamsAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.AggregateUsersOnTeams,
    {},
    Client.Prisma.UsersOnTeamsSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.AggregateUsersOnTeams,
    {},
    Client.Prisma.UsersOnTeamsMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.AggregateUsersOnTeams,
    {},
    Client.Prisma.UsersOnTeamsMaxAggregateOutputType | null
  >;
}

export interface UsersOnTeamsGroupByOutputType {
  [key: string]: Resolver<any, any, any>;
  teamName?: Resolver<Client.Prisma.UsersOnTeamsGroupByOutputType, {}, string>;
  userId?: Resolver<Client.Prisma.UsersOnTeamsGroupByOutputType, {}, number>;
  assignedAt?: Resolver<Client.Prisma.UsersOnTeamsGroupByOutputType, {}, Date>;
  _count?: Resolver<
    Client.Prisma.UsersOnTeamsGroupByOutputType,
    {},
    Client.Prisma.UsersOnTeamsCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.UsersOnTeamsGroupByOutputType,
    {},
    Client.Prisma.UsersOnTeamsAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.UsersOnTeamsGroupByOutputType,
    {},
    Client.Prisma.UsersOnTeamsSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.UsersOnTeamsGroupByOutputType,
    {},
    Client.Prisma.UsersOnTeamsMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.UsersOnTeamsGroupByOutputType,
    {},
    Client.Prisma.UsersOnTeamsMaxAggregateOutputType | null
  >;
}

export interface AggregateTeam {
  [key: string]: Resolver<any, any, any>;
  _count?: Resolver<
    Client.Prisma.AggregateTeam,
    {},
    Client.Prisma.TeamCountAggregateOutputType | null
  >;
  _min?: Resolver<Client.Prisma.AggregateTeam, {}, Client.Prisma.TeamMinAggregateOutputType | null>;
  _max?: Resolver<Client.Prisma.AggregateTeam, {}, Client.Prisma.TeamMaxAggregateOutputType | null>;
}

export interface TeamGroupByOutputType {
  [key: string]: Resolver<any, any, any>;
  teamName?: Resolver<Client.Prisma.TeamGroupByOutputType, {}, string>;
  _count?: Resolver<
    Client.Prisma.TeamGroupByOutputType,
    {},
    Client.Prisma.TeamCountAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.TeamGroupByOutputType,
    {},
    Client.Prisma.TeamMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.TeamGroupByOutputType,
    {},
    Client.Prisma.TeamMaxAggregateOutputType | null
  >;
}

export interface AffectedRowsOutput {
  [key: string]: Resolver<any, any, any>;
  count?: Resolver<Client.Prisma.BatchPayload, {}, number>;
}

export interface UserCountOutputType {
  [key: string]: Resolver<any, any, any>;
  teams?: Resolver<Client.Prisma.UserCountOutputType, {}, number>;
}

export interface UserCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  createdAt?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  username?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  password?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  email?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  roles?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  googleId?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  googleProfile?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  lastName?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  firstName?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  _all?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
}

export interface UserAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.UserAvgAggregateOutputType, {}, number | null>;
}

export interface UserSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.UserSumAggregateOutputType, {}, number | null>;
}

export interface UserMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, number | null>;
  createdAt?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, Date | null>;
  username?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>;
  password?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>;
  email?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>;
  googleId?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>;
  lastName?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>;
  firstName?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>;
}

export interface UserMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, number | null>;
  createdAt?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, Date | null>;
  username?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>;
  password?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>;
  email?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>;
  googleId?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>;
  lastName?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>;
  firstName?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>;
}

export interface ProfileCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<Client.Prisma.ProfileCountAggregateOutputType, {}, number>;
  location?: Resolver<Client.Prisma.ProfileCountAggregateOutputType, {}, number>;
  joiningDate?: Resolver<Client.Prisma.ProfileCountAggregateOutputType, {}, number>;
  designation?: Resolver<Client.Prisma.ProfileCountAggregateOutputType, {}, number>;
  profileImg?: Resolver<Client.Prisma.ProfileCountAggregateOutputType, {}, number>;
  designationIcon?: Resolver<Client.Prisma.ProfileCountAggregateOutputType, {}, number>;
  coverImg?: Resolver<Client.Prisma.ProfileCountAggregateOutputType, {}, number>;
  _all?: Resolver<Client.Prisma.ProfileCountAggregateOutputType, {}, number>;
}

export interface ProfileAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<Client.Prisma.ProfileAvgAggregateOutputType, {}, number | null>;
}

export interface ProfileSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<Client.Prisma.ProfileSumAggregateOutputType, {}, number | null>;
}

export interface ProfileMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<Client.Prisma.ProfileMinAggregateOutputType, {}, number | null>;
  location?: Resolver<Client.Prisma.ProfileMinAggregateOutputType, {}, string | null>;
  joiningDate?: Resolver<Client.Prisma.ProfileMinAggregateOutputType, {}, Date | null>;
  designation?: Resolver<Client.Prisma.ProfileMinAggregateOutputType, {}, string | null>;
  profileImg?: Resolver<Client.Prisma.ProfileMinAggregateOutputType, {}, string | null>;
  designationIcon?: Resolver<Client.Prisma.ProfileMinAggregateOutputType, {}, string | null>;
  coverImg?: Resolver<Client.Prisma.ProfileMinAggregateOutputType, {}, string | null>;
}

export interface ProfileMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<Client.Prisma.ProfileMaxAggregateOutputType, {}, number | null>;
  location?: Resolver<Client.Prisma.ProfileMaxAggregateOutputType, {}, string | null>;
  joiningDate?: Resolver<Client.Prisma.ProfileMaxAggregateOutputType, {}, Date | null>;
  designation?: Resolver<Client.Prisma.ProfileMaxAggregateOutputType, {}, string | null>;
  profileImg?: Resolver<Client.Prisma.ProfileMaxAggregateOutputType, {}, string | null>;
  designationIcon?: Resolver<Client.Prisma.ProfileMaxAggregateOutputType, {}, string | null>;
  coverImg?: Resolver<Client.Prisma.ProfileMaxAggregateOutputType, {}, string | null>;
}

export interface UsersOnTeamsCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  teamName?: Resolver<Client.Prisma.UsersOnTeamsCountAggregateOutputType, {}, number>;
  userId?: Resolver<Client.Prisma.UsersOnTeamsCountAggregateOutputType, {}, number>;
  assignedAt?: Resolver<Client.Prisma.UsersOnTeamsCountAggregateOutputType, {}, number>;
  _all?: Resolver<Client.Prisma.UsersOnTeamsCountAggregateOutputType, {}, number>;
}

export interface UsersOnTeamsAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<Client.Prisma.UsersOnTeamsAvgAggregateOutputType, {}, number | null>;
}

export interface UsersOnTeamsSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<Client.Prisma.UsersOnTeamsSumAggregateOutputType, {}, number | null>;
}

export interface UsersOnTeamsMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  teamName?: Resolver<Client.Prisma.UsersOnTeamsMinAggregateOutputType, {}, string | null>;
  userId?: Resolver<Client.Prisma.UsersOnTeamsMinAggregateOutputType, {}, number | null>;
  assignedAt?: Resolver<Client.Prisma.UsersOnTeamsMinAggregateOutputType, {}, Date | null>;
}

export interface UsersOnTeamsMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  teamName?: Resolver<Client.Prisma.UsersOnTeamsMaxAggregateOutputType, {}, string | null>;
  userId?: Resolver<Client.Prisma.UsersOnTeamsMaxAggregateOutputType, {}, number | null>;
  assignedAt?: Resolver<Client.Prisma.UsersOnTeamsMaxAggregateOutputType, {}, Date | null>;
}

export interface TeamCountOutputType {
  [key: string]: Resolver<any, any, any>;
  users?: Resolver<Client.Prisma.TeamCountOutputType, {}, number>;
}

export interface TeamCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  teamName?: Resolver<Client.Prisma.TeamCountAggregateOutputType, {}, number>;
  _all?: Resolver<Client.Prisma.TeamCountAggregateOutputType, {}, number>;
}

export interface TeamMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  teamName?: Resolver<Client.Prisma.TeamMinAggregateOutputType, {}, string | null>;
}

export interface TeamMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  teamName?: Resolver<Client.Prisma.TeamMaxAggregateOutputType, {}, string | null>;
}

export interface Auth_UserTeamsArgs {
  where?: Auth_UsersOnTeamsWhereInput | null;
  orderBy?: Auth_UsersOnTeamsOrderByWithRelationInput[] | null;
  cursor?: Auth_UsersOnTeamsWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: UsersOnTeamsScalarFieldEnum[] | null;
}

export interface Auth_TeamUsersArgs {
  where?: Auth_UsersOnTeamsWhereInput | null;
  orderBy?: Auth_UsersOnTeamsOrderByWithRelationInput[] | null;
  cursor?: Auth_UsersOnTeamsWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: UsersOnTeamsScalarFieldEnum[] | null;
}

export interface Auth_FindFirstUserArgs {
  where?: Auth_UserWhereInput | null;
  orderBy?: Auth_UserOrderByWithRelationInput[] | null;
  cursor?: Auth_UserWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: UserScalarFieldEnum[] | null;
}

export interface Auth_FindFirstUserOrThrowArgs {
  where?: Auth_UserWhereInput | null;
  orderBy?: Auth_UserOrderByWithRelationInput[] | null;
  cursor?: Auth_UserWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: UserScalarFieldEnum[] | null;
}

export interface Auth_FindManyUserArgs {
  where?: Auth_UserWhereInput;
  orderBy?: Auth_UserOrderByWithRelationInput[];
  cursor?: Auth_UserWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: UserScalarFieldEnum[];
}

export interface Auth_AggregateUserArgs {
  where?: Auth_UserWhereInput;
  orderBy?: Auth_UserOrderByWithRelationInput[];
  cursor?: Auth_UserWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: Client.Prisma.UserCountAggregateInputType;
  _avg?: Client.Prisma.UserAvgAggregateInputType;
  _sum?: Client.Prisma.UserSumAggregateInputType;
  _min?: Client.Prisma.UserMinAggregateInputType;
  _max?: Client.Prisma.UserMaxAggregateInputType;
}

export interface Auth_GroupByUserArgs {
  where?: Auth_UserWhereInput;
  orderBy?: Auth_UserOrderByWithAggregationInput[];
  by: UserScalarFieldEnum[];
  having?: Auth_UserScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
}

export interface Auth_FindUniqueUserArgs {
  where: Auth_UserWhereUniqueInput | null;
}

export interface Auth_FindUniqueUserOrThrowArgs {
  where: Auth_UserWhereUniqueInput | null;
}

export interface Auth_FindFirstProfileArgs {
  where?: Auth_ProfileWhereInput | null;
  orderBy?: Auth_ProfileOrderByWithRelationInput[] | null;
  cursor?: Auth_ProfileWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: ProfileScalarFieldEnum[] | null;
}

export interface Auth_FindFirstProfileOrThrowArgs {
  where?: Auth_ProfileWhereInput | null;
  orderBy?: Auth_ProfileOrderByWithRelationInput[] | null;
  cursor?: Auth_ProfileWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: ProfileScalarFieldEnum[] | null;
}

export interface Auth_FindManyProfileArgs {
  where?: Auth_ProfileWhereInput;
  orderBy?: Auth_ProfileOrderByWithRelationInput[];
  cursor?: Auth_ProfileWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ProfileScalarFieldEnum[];
}

export interface Auth_AggregateProfileArgs {
  where?: Auth_ProfileWhereInput;
  orderBy?: Auth_ProfileOrderByWithRelationInput[];
  cursor?: Auth_ProfileWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: Client.Prisma.ProfileCountAggregateInputType;
  _avg?: Client.Prisma.ProfileAvgAggregateInputType;
  _sum?: Client.Prisma.ProfileSumAggregateInputType;
  _min?: Client.Prisma.ProfileMinAggregateInputType;
  _max?: Client.Prisma.ProfileMaxAggregateInputType;
}

export interface Auth_GroupByProfileArgs {
  where?: Auth_ProfileWhereInput;
  orderBy?: Auth_ProfileOrderByWithAggregationInput[];
  by: ProfileScalarFieldEnum[];
  having?: Auth_ProfileScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
}

export interface Auth_FindUniqueProfileArgs {
  where: Auth_ProfileWhereUniqueInput | null;
}

export interface Auth_FindUniqueProfileOrThrowArgs {
  where: Auth_ProfileWhereUniqueInput | null;
}

export interface Auth_FindFirstUsersOnTeamsArgs {
  where?: Auth_UsersOnTeamsWhereInput | null;
  orderBy?: Auth_UsersOnTeamsOrderByWithRelationInput[] | null;
  cursor?: Auth_UsersOnTeamsWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: UsersOnTeamsScalarFieldEnum[] | null;
}

export interface Auth_FindFirstUsersOnTeamsOrThrowArgs {
  where?: Auth_UsersOnTeamsWhereInput | null;
  orderBy?: Auth_UsersOnTeamsOrderByWithRelationInput[] | null;
  cursor?: Auth_UsersOnTeamsWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: UsersOnTeamsScalarFieldEnum[] | null;
}

export interface Auth_FindManyUsersOnTeamsArgs {
  where?: Auth_UsersOnTeamsWhereInput;
  orderBy?: Auth_UsersOnTeamsOrderByWithRelationInput[];
  cursor?: Auth_UsersOnTeamsWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: UsersOnTeamsScalarFieldEnum[];
}

export interface Auth_AggregateUsersOnTeamsArgs {
  where?: Auth_UsersOnTeamsWhereInput;
  orderBy?: Auth_UsersOnTeamsOrderByWithRelationInput[];
  cursor?: Auth_UsersOnTeamsWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: Client.Prisma.UsersOnTeamsCountAggregateInputType;
  _avg?: Client.Prisma.UsersOnTeamsAvgAggregateInputType;
  _sum?: Client.Prisma.UsersOnTeamsSumAggregateInputType;
  _min?: Client.Prisma.UsersOnTeamsMinAggregateInputType;
  _max?: Client.Prisma.UsersOnTeamsMaxAggregateInputType;
}

export interface Auth_GroupByUsersOnTeamsArgs {
  where?: Auth_UsersOnTeamsWhereInput;
  orderBy?: Auth_UsersOnTeamsOrderByWithAggregationInput[];
  by: UsersOnTeamsScalarFieldEnum[];
  having?: Auth_UsersOnTeamsScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
}

export interface Auth_FindUniqueUsersOnTeamsArgs {
  where: Auth_UsersOnTeamsWhereUniqueInput | null;
}

export interface Auth_FindUniqueUsersOnTeamsOrThrowArgs {
  where: Auth_UsersOnTeamsWhereUniqueInput | null;
}

export interface Auth_FindFirstTeamArgs {
  where?: Auth_TeamWhereInput | null;
  orderBy?: Auth_TeamOrderByWithRelationInput[] | null;
  cursor?: Auth_TeamWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: TeamScalarFieldEnum[] | null;
}

export interface Auth_FindFirstTeamOrThrowArgs {
  where?: Auth_TeamWhereInput | null;
  orderBy?: Auth_TeamOrderByWithRelationInput[] | null;
  cursor?: Auth_TeamWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: TeamScalarFieldEnum[] | null;
}

export interface Auth_FindManyTeamArgs {
  where?: Auth_TeamWhereInput;
  orderBy?: Auth_TeamOrderByWithRelationInput[];
  cursor?: Auth_TeamWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: TeamScalarFieldEnum[];
}

export interface Auth_AggregateTeamArgs {
  where?: Auth_TeamWhereInput;
  orderBy?: Auth_TeamOrderByWithRelationInput[];
  cursor?: Auth_TeamWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: Client.Prisma.TeamCountAggregateInputType;
  _min?: Client.Prisma.TeamMinAggregateInputType;
  _max?: Client.Prisma.TeamMaxAggregateInputType;
}

export interface Auth_GroupByTeamArgs {
  where?: Auth_TeamWhereInput;
  orderBy?: Auth_TeamOrderByWithAggregationInput[];
  by: TeamScalarFieldEnum[];
  having?: Auth_TeamScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
}

export interface Auth_FindUniqueTeamArgs {
  where: Auth_TeamWhereUniqueInput | null;
}

export interface Auth_FindUniqueTeamOrThrowArgs {
  where: Auth_TeamWhereUniqueInput | null;
}

export interface Auth_CreateOneUserArgs {
  data: Auth_UserCreateInput;
}

export interface Auth_UpsertOneUserArgs {
  where: Auth_UserWhereUniqueInput;
  create: Auth_UserCreateInput;
  update: Auth_UserUpdateInput;
}

export interface Auth_CreateManyUserArgs {
  data: Auth_UserCreateManyInput[];
  skipDuplicates?: boolean;
}

export interface Auth_DeleteOneUserArgs {
  where: Auth_UserWhereUniqueInput | null;
}

export interface Auth_UpdateOneUserArgs {
  data: Auth_UserUpdateInput | null;
  where: Auth_UserWhereUniqueInput | null;
}

export interface Auth_UpdateManyUserArgs {
  data: Auth_UserUpdateManyMutationInput;
  where?: Auth_UserWhereInput;
}

export interface Auth_DeleteManyUserArgs {
  where?: Auth_UserWhereInput;
}

export interface Auth_CreateOneProfileArgs {
  data: Auth_ProfileCreateInput;
}

export interface Auth_UpsertOneProfileArgs {
  where: Auth_ProfileWhereUniqueInput;
  create: Auth_ProfileCreateInput;
  update: Auth_ProfileUpdateInput;
}

export interface Auth_CreateManyProfileArgs {
  data: Auth_ProfileCreateManyInput[];
  skipDuplicates?: boolean;
}

export interface Auth_DeleteOneProfileArgs {
  where: Auth_ProfileWhereUniqueInput | null;
}

export interface Auth_UpdateOneProfileArgs {
  data: Auth_ProfileUpdateInput | null;
  where: Auth_ProfileWhereUniqueInput | null;
}

export interface Auth_UpdateManyProfileArgs {
  data: Auth_ProfileUpdateManyMutationInput;
  where?: Auth_ProfileWhereInput;
}

export interface Auth_DeleteManyProfileArgs {
  where?: Auth_ProfileWhereInput;
}

export interface Auth_CreateOneUsersOnTeamsArgs {
  data: Auth_UsersOnTeamsCreateInput;
}

export interface Auth_UpsertOneUsersOnTeamsArgs {
  where: Auth_UsersOnTeamsWhereUniqueInput;
  create: Auth_UsersOnTeamsCreateInput;
  update: Auth_UsersOnTeamsUpdateInput;
}

export interface Auth_CreateManyUsersOnTeamsArgs {
  data: Auth_UsersOnTeamsCreateManyInput[];
  skipDuplicates?: boolean;
}

export interface Auth_DeleteOneUsersOnTeamsArgs {
  where: Auth_UsersOnTeamsWhereUniqueInput | null;
}

export interface Auth_UpdateOneUsersOnTeamsArgs {
  data: Auth_UsersOnTeamsUpdateInput | null;
  where: Auth_UsersOnTeamsWhereUniqueInput | null;
}

export interface Auth_UpdateManyUsersOnTeamsArgs {
  data: Auth_UsersOnTeamsUpdateManyMutationInput;
  where?: Auth_UsersOnTeamsWhereInput;
}

export interface Auth_DeleteManyUsersOnTeamsArgs {
  where?: Auth_UsersOnTeamsWhereInput;
}

export interface Auth_CreateOneTeamArgs {
  data: Auth_TeamCreateInput;
}

export interface Auth_UpsertOneTeamArgs {
  where: Auth_TeamWhereUniqueInput;
  create: Auth_TeamCreateInput;
  update: Auth_TeamUpdateInput;
}

export interface Auth_CreateManyTeamArgs {
  data: Auth_TeamCreateManyInput[];
  skipDuplicates?: boolean;
}

export interface Auth_DeleteOneTeamArgs {
  where: Auth_TeamWhereUniqueInput | null;
}

export interface Auth_UpdateOneTeamArgs {
  data: Auth_TeamUpdateInput | null;
  where: Auth_TeamWhereUniqueInput | null;
}

//UpdateManyTeamArgs is not generated as the related model contains only unique or relation fields

export interface Auth_DeleteManyTeamArgs {
  where?: Auth_TeamWhereInput;
}

export interface Auth_ExecuteRawArgs {
  query: string;
  parameters?: any;
}

export interface Auth_QueryRawArgs {
  query: string;
  parameters?: any;
}

export interface Auth_UserWhereInput {
  AND?: Auth_UserWhereInput[];
  OR?: Auth_UserWhereInput[];
  NOT?: Auth_UserWhereInput[];
  id?: IntFilter;
  createdAt?: DateTimeFilter;
  username?: StringNullableFilter | null;
  password?: StringNullableFilter | null;
  email?: StringFilter;
  roles?: StringNullableListFilter;
  googleId?: StringNullableFilter | null;
  googleProfile?: JsonNullableFilter;
  lastName?: StringNullableFilter | null;
  firstName?: StringNullableFilter | null;
  profile?: Auth_ProfileWhereInput | null;
  teams?: Auth_UsersOnTeamsListRelationFilter;
}

export interface Auth_UserOrderByWithRelationInput {
  id?: SortOrder;
  createdAt?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  email?: SortOrder;
  roles?: SortOrder;
  googleId?: SortOrder;
  googleProfile?: SortOrder;
  lastName?: SortOrder;
  firstName?: SortOrder;
  profile?: Auth_ProfileOrderByWithRelationInput;
  teams?: Auth_UsersOnTeamsOrderByRelationAggregateInput;
}

export type Auth_UserWhereUniqueInput = AtLeast<
  {
    id?: number;
    username?: string;
    email?: string;
    googleId?: string;
    AND?: Auth_UserWhereInput[];
    OR?: Auth_UserWhereInput[];
    NOT?: Auth_UserWhereInput[];
    createdAt?: DateTimeFilter;
    password?: StringNullableFilter | null;
    roles?: StringNullableListFilter;
    googleProfile?: JsonNullableFilter;
    lastName?: StringNullableFilter | null;
    firstName?: StringNullableFilter | null;
    profile?: Auth_ProfileWhereInput | null;
    teams?: Auth_UsersOnTeamsListRelationFilter;
  },
  'id' | 'username' | 'email' | 'googleId'
>;

export interface Auth_UserOrderByWithAggregationInput {
  id?: SortOrder;
  createdAt?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  email?: SortOrder;
  roles?: SortOrder;
  googleId?: SortOrder;
  googleProfile?: SortOrder;
  lastName?: SortOrder;
  firstName?: SortOrder;
  _count?: Auth_UserCountOrderByAggregateInput;
  _avg?: Auth_UserAvgOrderByAggregateInput;
  _max?: Auth_UserMaxOrderByAggregateInput;
  _min?: Auth_UserMinOrderByAggregateInput;
  _sum?: Auth_UserSumOrderByAggregateInput;
}

export interface Auth_UserScalarWhereWithAggregatesInput {
  AND?: Auth_UserScalarWhereWithAggregatesInput[];
  OR?: Auth_UserScalarWhereWithAggregatesInput[];
  NOT?: Auth_UserScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  username?: StringNullableWithAggregatesFilter | null;
  password?: StringNullableWithAggregatesFilter | null;
  email?: StringWithAggregatesFilter;
  roles?: StringNullableListFilter;
  googleId?: StringNullableWithAggregatesFilter | null;
  googleProfile?: JsonNullableWithAggregatesFilter;
  lastName?: StringNullableWithAggregatesFilter | null;
  firstName?: StringNullableWithAggregatesFilter | null;
}

export interface Auth_ProfileWhereInput {
  AND?: Auth_ProfileWhereInput[];
  OR?: Auth_ProfileWhereInput[];
  NOT?: Auth_ProfileWhereInput[];
  userId?: IntFilter;
  user?: Auth_UserWhereInput;
  location?: StringNullableFilter | null;
  joiningDate?: DateTimeNullableFilter | null;
  designation?: StringNullableFilter | null;
  profileImg?: StringNullableFilter | null;
  designationIcon?: StringNullableFilter | null;
  coverImg?: StringNullableFilter | null;
}

export interface Auth_ProfileOrderByWithRelationInput {
  userId?: SortOrder;
  user?: Auth_UserOrderByWithRelationInput;
  location?: SortOrder;
  joiningDate?: SortOrder;
  designation?: SortOrder;
  profileImg?: SortOrder;
  designationIcon?: SortOrder;
  coverImg?: SortOrder;
}

export type Auth_ProfileWhereUniqueInput = AtLeast<
  {
    userId?: number;
    AND?: Auth_ProfileWhereInput[];
    OR?: Auth_ProfileWhereInput[];
    NOT?: Auth_ProfileWhereInput[];
    user?: Auth_UserWhereInput;
    location?: StringNullableFilter | null;
    joiningDate?: DateTimeNullableFilter | null;
    designation?: StringNullableFilter | null;
    profileImg?: StringNullableFilter | null;
    designationIcon?: StringNullableFilter | null;
    coverImg?: StringNullableFilter | null;
  },
  'userId'
>;

export interface Auth_ProfileOrderByWithAggregationInput {
  userId?: SortOrder;
  location?: SortOrder;
  joiningDate?: SortOrder;
  designation?: SortOrder;
  profileImg?: SortOrder;
  designationIcon?: SortOrder;
  coverImg?: SortOrder;
  _count?: Auth_ProfileCountOrderByAggregateInput;
  _avg?: Auth_ProfileAvgOrderByAggregateInput;
  _max?: Auth_ProfileMaxOrderByAggregateInput;
  _min?: Auth_ProfileMinOrderByAggregateInput;
  _sum?: Auth_ProfileSumOrderByAggregateInput;
}

export interface Auth_ProfileScalarWhereWithAggregatesInput {
  AND?: Auth_ProfileScalarWhereWithAggregatesInput[];
  OR?: Auth_ProfileScalarWhereWithAggregatesInput[];
  NOT?: Auth_ProfileScalarWhereWithAggregatesInput[];
  userId?: IntWithAggregatesFilter;
  location?: StringNullableWithAggregatesFilter | null;
  joiningDate?: DateTimeNullableWithAggregatesFilter | null;
  designation?: StringNullableWithAggregatesFilter | null;
  profileImg?: StringNullableWithAggregatesFilter | null;
  designationIcon?: StringNullableWithAggregatesFilter | null;
  coverImg?: StringNullableWithAggregatesFilter | null;
}

export interface Auth_UsersOnTeamsWhereInput {
  AND?: Auth_UsersOnTeamsWhereInput[];
  OR?: Auth_UsersOnTeamsWhereInput[];
  NOT?: Auth_UsersOnTeamsWhereInput[];
  team?: Auth_TeamWhereInput;
  teamName?: StringFilter;
  user?: Auth_UserWhereInput;
  userId?: IntFilter;
  assignedAt?: DateTimeFilter;
}

export interface Auth_UsersOnTeamsOrderByWithRelationInput {
  team?: Auth_TeamOrderByWithRelationInput;
  teamName?: SortOrder;
  user?: Auth_UserOrderByWithRelationInput;
  userId?: SortOrder;
  assignedAt?: SortOrder;
}

export type Auth_UsersOnTeamsWhereUniqueInput = AtLeast<
  {
    teamName_userId?: UsersOnTeamsTeamNameUserIdCompoundUniqueInput;
    AND?: Auth_UsersOnTeamsWhereInput[];
    OR?: Auth_UsersOnTeamsWhereInput[];
    NOT?: Auth_UsersOnTeamsWhereInput[];
    team?: Auth_TeamWhereInput;
    teamName?: StringFilter;
    user?: Auth_UserWhereInput;
    userId?: IntFilter;
    assignedAt?: DateTimeFilter;
  },
  'teamName_userId'
>;

export interface Auth_UsersOnTeamsOrderByWithAggregationInput {
  teamName?: SortOrder;
  userId?: SortOrder;
  assignedAt?: SortOrder;
  _count?: Auth_UsersOnTeamsCountOrderByAggregateInput;
  _avg?: Auth_UsersOnTeamsAvgOrderByAggregateInput;
  _max?: Auth_UsersOnTeamsMaxOrderByAggregateInput;
  _min?: Auth_UsersOnTeamsMinOrderByAggregateInput;
  _sum?: Auth_UsersOnTeamsSumOrderByAggregateInput;
}

export interface Auth_UsersOnTeamsScalarWhereWithAggregatesInput {
  AND?: Auth_UsersOnTeamsScalarWhereWithAggregatesInput[];
  OR?: Auth_UsersOnTeamsScalarWhereWithAggregatesInput[];
  NOT?: Auth_UsersOnTeamsScalarWhereWithAggregatesInput[];
  teamName?: StringWithAggregatesFilter;
  userId?: IntWithAggregatesFilter;
  assignedAt?: DateTimeWithAggregatesFilter;
}

export interface Auth_TeamWhereInput {
  AND?: Auth_TeamWhereInput[];
  OR?: Auth_TeamWhereInput[];
  NOT?: Auth_TeamWhereInput[];
  teamName?: StringFilter;
  users?: Auth_UsersOnTeamsListRelationFilter;
}

export interface Auth_TeamOrderByWithRelationInput {
  teamName?: SortOrder;
  users?: Auth_UsersOnTeamsOrderByRelationAggregateInput;
}

export type Auth_TeamWhereUniqueInput = AtLeast<
  {
    teamName?: string;
    AND?: Auth_TeamWhereInput[];
    OR?: Auth_TeamWhereInput[];
    NOT?: Auth_TeamWhereInput[];
    users?: Auth_UsersOnTeamsListRelationFilter;
  },
  'teamName'
>;

export interface Auth_TeamOrderByWithAggregationInput {
  teamName?: SortOrder;
  _count?: Auth_TeamCountOrderByAggregateInput;
  _max?: Auth_TeamMaxOrderByAggregateInput;
  _min?: Auth_TeamMinOrderByAggregateInput;
}

export interface Auth_TeamScalarWhereWithAggregatesInput {
  AND?: Auth_TeamScalarWhereWithAggregatesInput[];
  OR?: Auth_TeamScalarWhereWithAggregatesInput[];
  NOT?: Auth_TeamScalarWhereWithAggregatesInput[];
  teamName?: StringWithAggregatesFilter;
}

export interface Auth_UserCreateInput {
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: Auth_UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Auth_ProfileCreateNestedOneWithoutUserInput;
  teams?: Auth_UsersOnTeamsCreateNestedManyWithoutUserInput;
}

export interface Auth_UserUncheckedCreateInput {
  id?: number;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: Auth_UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Auth_ProfileUncheckedCreateNestedOneWithoutUserInput;
  teams?: Auth_UsersOnTeamsUncheckedCreateNestedManyWithoutUserInput;
}

export interface Auth_UserUpdateInput {
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: Auth_UserUpdaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Auth_ProfileUpdateOneWithoutUserNestedInput;
  teams?: Auth_UsersOnTeamsUpdateManyWithoutUserNestedInput;
}

export interface Auth_UserUncheckedUpdateInput {
  id?: number;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: Auth_UserUpdaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Auth_ProfileUncheckedUpdateOneWithoutUserNestedInput;
  teams?: Auth_UsersOnTeamsUncheckedUpdateManyWithoutUserNestedInput;
}

export interface Auth_UserCreateManyInput {
  id?: number;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: Auth_UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
}

export interface Auth_UserUpdateManyMutationInput {
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: Auth_UserUpdaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
}

export interface Auth_UserUncheckedUpdateManyInput {
  id?: number;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: Auth_UserUpdaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
}

export interface Auth_ProfileCreateInput {
  user: Auth_UserCreateNestedOneWithoutProfileInput;
  location?: string | null;
  joiningDate?: Date | null;
  designation?: string | null;
  profileImg?: string | null;
  designationIcon?: string | null;
  coverImg?: string | null;
}

export interface Auth_ProfileUncheckedCreateInput {
  userId: number;
  location?: string | null;
  joiningDate?: Date | null;
  designation?: string | null;
  profileImg?: string | null;
  designationIcon?: string | null;
  coverImg?: string | null;
}

export interface Auth_ProfileUpdateInput {
  user?: Auth_UserUpdateOneRequiredWithoutProfileNestedInput;
  location?: string | null;
  joiningDate?: Date | null;
  designation?: string | null;
  profileImg?: string | null;
  designationIcon?: string | null;
  coverImg?: string | null;
}

export interface Auth_ProfileUncheckedUpdateInput {
  userId?: number;
  location?: string | null;
  joiningDate?: Date | null;
  designation?: string | null;
  profileImg?: string | null;
  designationIcon?: string | null;
  coverImg?: string | null;
}

export interface Auth_ProfileCreateManyInput {
  userId: number;
  location?: string | null;
  joiningDate?: Date | null;
  designation?: string | null;
  profileImg?: string | null;
  designationIcon?: string | null;
  coverImg?: string | null;
}

export interface Auth_ProfileUpdateManyMutationInput {
  location?: string | null;
  joiningDate?: Date | null;
  designation?: string | null;
  profileImg?: string | null;
  designationIcon?: string | null;
  coverImg?: string | null;
}

export interface Auth_ProfileUncheckedUpdateManyInput {
  userId?: number;
  location?: string | null;
  joiningDate?: Date | null;
  designation?: string | null;
  profileImg?: string | null;
  designationIcon?: string | null;
  coverImg?: string | null;
}

export interface Auth_UsersOnTeamsCreateInput {
  team: Auth_TeamCreateNestedOneWithoutUsersInput;
  user: Auth_UserCreateNestedOneWithoutTeamsInput;
  assignedAt?: Date;
}

export interface Auth_UsersOnTeamsUncheckedCreateInput {
  teamName: string;
  userId: number;
  assignedAt?: Date;
}

export interface Auth_UsersOnTeamsUpdateInput {
  team?: Auth_TeamUpdateOneRequiredWithoutUsersNestedInput;
  user?: Auth_UserUpdateOneRequiredWithoutTeamsNestedInput;
  assignedAt?: Date;
}

export interface Auth_UsersOnTeamsUncheckedUpdateInput {
  teamName?: string;
  userId?: number;
  assignedAt?: Date;
}

export interface Auth_UsersOnTeamsCreateManyInput {
  teamName: string;
  userId: number;
  assignedAt?: Date;
}

export interface Auth_UsersOnTeamsUpdateManyMutationInput {
  assignedAt?: Date;
}

export interface Auth_UsersOnTeamsUncheckedUpdateManyInput {
  teamName?: string;
  userId?: number;
  assignedAt?: Date;
}

export interface Auth_TeamCreateInput {
  teamName: string;
  users?: Auth_UsersOnTeamsCreateNestedManyWithoutTeamInput;
}

export interface Auth_TeamUncheckedCreateInput {
  teamName: string;
  users?: Auth_UsersOnTeamsUncheckedCreateNestedManyWithoutTeamInput;
}

export interface Auth_TeamUpdateInput {
  teamName?: string;
  users?: Auth_UsersOnTeamsUpdateManyWithoutTeamNestedInput;
}

export interface Auth_TeamUncheckedUpdateInput {
  teamName?: string;
  users?: Auth_UsersOnTeamsUncheckedUpdateManyWithoutTeamNestedInput;
}

export interface Auth_TeamCreateManyInput {
  teamName: string;
}

export interface Auth_TeamUpdateManyMutationInput {
  teamName?: string;
}

export interface Auth_TeamUncheckedUpdateManyInput {
  teamName?: string;
}

export interface IntFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntFilter;
}

export interface DateTimeFilter {
  equals?: Date;
  in?: Date[];
  notIn?: Date[];
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: NestedDateTimeFilter;
}

export interface StringNullableFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringNullableFilter | null;
}

export interface StringFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringFilter;
}

export interface StringNullableListFilter {
  equals?: string[] | null;
  has?: string | null;
  hasEvery?: string[];
  hasSome?: string[];
  isEmpty?: boolean;
}

export interface JsonNullableFilter {
  equals?: any;
  path?: string[];
  string_contains?: string;
  string_starts_with?: string;
  string_ends_with?: string;
  array_contains?: any | null;
  array_starts_with?: any | null;
  array_ends_with?: any | null;
  lt?: any;
  lte?: any;
  gt?: any;
  gte?: any;
  not?: any;
}

export interface Auth_ProfileRelationFilter {
  is?: Auth_ProfileWhereInput | null;
  isNot?: Auth_ProfileWhereInput | null;
}

export interface Auth_UsersOnTeamsListRelationFilter {
  every?: Auth_UsersOnTeamsWhereInput;
  some?: Auth_UsersOnTeamsWhereInput;
  none?: Auth_UsersOnTeamsWhereInput;
}

export interface Auth_UsersOnTeamsOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface Auth_UserCountOrderByAggregateInput {
  id?: SortOrder;
  createdAt?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  email?: SortOrder;
  roles?: SortOrder;
  googleId?: SortOrder;
  googleProfile?: SortOrder;
  lastName?: SortOrder;
  firstName?: SortOrder;
}

export interface Auth_UserAvgOrderByAggregateInput {
  id?: SortOrder;
}

export interface Auth_UserMaxOrderByAggregateInput {
  id?: SortOrder;
  createdAt?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  email?: SortOrder;
  googleId?: SortOrder;
  lastName?: SortOrder;
  firstName?: SortOrder;
}

export interface Auth_UserMinOrderByAggregateInput {
  id?: SortOrder;
  createdAt?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  email?: SortOrder;
  googleId?: SortOrder;
  lastName?: SortOrder;
  firstName?: SortOrder;
}

export interface Auth_UserSumOrderByAggregateInput {
  id?: SortOrder;
}

export interface IntWithAggregatesFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntWithAggregatesFilter;
  _count?: NestedIntFilter;
  _avg?: NestedFloatFilter;
  _sum?: NestedIntFilter;
  _min?: NestedIntFilter;
  _max?: NestedIntFilter;
}

export interface DateTimeWithAggregatesFilter {
  equals?: Date;
  in?: Date[];
  notIn?: Date[];
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: NestedDateTimeWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedDateTimeFilter;
  _max?: NestedDateTimeFilter;
}

export interface StringNullableWithAggregatesFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringNullableWithAggregatesFilter | null;
  _count?: NestedIntNullableFilter;
  _min?: NestedStringNullableFilter;
  _max?: NestedStringNullableFilter;
}

export interface StringWithAggregatesFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedStringFilter;
  _max?: NestedStringFilter;
}

export interface JsonNullableWithAggregatesFilter {
  equals?: any;
  path?: string[];
  string_contains?: string;
  string_starts_with?: string;
  string_ends_with?: string;
  array_contains?: any | null;
  array_starts_with?: any | null;
  array_ends_with?: any | null;
  lt?: any;
  lte?: any;
  gt?: any;
  gte?: any;
  not?: any;
  _count?: NestedIntNullableFilter;
  _min?: NestedJsonNullableFilter;
  _max?: NestedJsonNullableFilter;
}

export interface Auth_UserRelationFilter {
  is?: Auth_UserWhereInput;
  isNot?: Auth_UserWhereInput;
}

export interface DateTimeNullableFilter {
  equals?: Date | null;
  in?: Date[] | null;
  notIn?: Date[] | null;
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: NestedDateTimeNullableFilter | null;
}

export interface Auth_ProfileCountOrderByAggregateInput {
  userId?: SortOrder;
  location?: SortOrder;
  joiningDate?: SortOrder;
  designation?: SortOrder;
  profileImg?: SortOrder;
  designationIcon?: SortOrder;
  coverImg?: SortOrder;
}

export interface Auth_ProfileAvgOrderByAggregateInput {
  userId?: SortOrder;
}

export interface Auth_ProfileMaxOrderByAggregateInput {
  userId?: SortOrder;
  location?: SortOrder;
  joiningDate?: SortOrder;
  designation?: SortOrder;
  profileImg?: SortOrder;
  designationIcon?: SortOrder;
  coverImg?: SortOrder;
}

export interface Auth_ProfileMinOrderByAggregateInput {
  userId?: SortOrder;
  location?: SortOrder;
  joiningDate?: SortOrder;
  designation?: SortOrder;
  profileImg?: SortOrder;
  designationIcon?: SortOrder;
  coverImg?: SortOrder;
}

export interface Auth_ProfileSumOrderByAggregateInput {
  userId?: SortOrder;
}

export interface DateTimeNullableWithAggregatesFilter {
  equals?: Date | null;
  in?: Date[] | null;
  notIn?: Date[] | null;
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: NestedDateTimeNullableWithAggregatesFilter | null;
  _count?: NestedIntNullableFilter;
  _min?: NestedDateTimeNullableFilter;
  _max?: NestedDateTimeNullableFilter;
}

export interface Auth_TeamRelationFilter {
  is?: Auth_TeamWhereInput;
  isNot?: Auth_TeamWhereInput;
}

export interface UsersOnTeamsTeamNameUserIdCompoundUniqueInput {
  teamName: string;
  userId: number;
}

export interface Auth_UsersOnTeamsCountOrderByAggregateInput {
  teamName?: SortOrder;
  userId?: SortOrder;
  assignedAt?: SortOrder;
}

export interface Auth_UsersOnTeamsAvgOrderByAggregateInput {
  userId?: SortOrder;
}

export interface Auth_UsersOnTeamsMaxOrderByAggregateInput {
  teamName?: SortOrder;
  userId?: SortOrder;
  assignedAt?: SortOrder;
}

export interface Auth_UsersOnTeamsMinOrderByAggregateInput {
  teamName?: SortOrder;
  userId?: SortOrder;
  assignedAt?: SortOrder;
}

export interface Auth_UsersOnTeamsSumOrderByAggregateInput {
  userId?: SortOrder;
}

export interface Auth_TeamCountOrderByAggregateInput {
  teamName?: SortOrder;
}

export interface Auth_TeamMaxOrderByAggregateInput {
  teamName?: SortOrder;
}

export interface Auth_TeamMinOrderByAggregateInput {
  teamName?: SortOrder;
}

export interface Auth_UserCreaterolesInput {
  set: string[];
}

export interface Auth_ProfileCreateNestedOneWithoutUserInput {
  create?: Auth_ProfileUncheckedCreateWithoutUserInput;
  connectOrCreate?: Auth_ProfileCreateOrConnectWithoutUserInput;
  connect?: Auth_ProfileWhereUniqueInput;
}

export interface Auth_UsersOnTeamsCreateNestedManyWithoutUserInput {
  create?: Auth_UsersOnTeamsCreateWithoutUserInput[];
  connectOrCreate?: Auth_UsersOnTeamsCreateOrConnectWithoutUserInput[];
  createMany?: Auth_UsersOnTeamsCreateManyUserInputEnvelope;
  connect?: Auth_UsersOnTeamsWhereUniqueInput[];
}

export interface Auth_ProfileUncheckedCreateNestedOneWithoutUserInput {
  create?: Auth_ProfileUncheckedCreateWithoutUserInput;
  connectOrCreate?: Auth_ProfileCreateOrConnectWithoutUserInput;
  connect?: Auth_ProfileWhereUniqueInput;
}

export interface Auth_UsersOnTeamsUncheckedCreateNestedManyWithoutUserInput {
  create?: Auth_UsersOnTeamsCreateWithoutUserInput[];
  connectOrCreate?: Auth_UsersOnTeamsCreateOrConnectWithoutUserInput[];
  createMany?: Auth_UsersOnTeamsCreateManyUserInputEnvelope;
  connect?: Auth_UsersOnTeamsWhereUniqueInput[];
}

export interface DateTimeFieldUpdateOperationsInput {
  set?: Date;
}

export interface NullableStringFieldUpdateOperationsInput {
  set?: string | null;
}

export interface StringFieldUpdateOperationsInput {
  set?: string;
}

export interface Auth_UserUpdaterolesInput {
  set?: string[];
  push?: string;
}

export interface Auth_ProfileUpdateOneWithoutUserNestedInput {
  create?: Auth_ProfileUncheckedCreateWithoutUserInput;
  connectOrCreate?: Auth_ProfileCreateOrConnectWithoutUserInput;
  upsert?: Auth_ProfileUpsertWithoutUserInput;
  disconnect?: Auth_ProfileWhereInput;
  delete?: Auth_ProfileWhereInput;
  connect?: Auth_ProfileWhereUniqueInput;
  update?: Auth_ProfileUpdateWithoutUserInput;
}

export interface Auth_UsersOnTeamsUpdateManyWithoutUserNestedInput {
  create?: Auth_UsersOnTeamsCreateWithoutUserInput[];
  connectOrCreate?: Auth_UsersOnTeamsCreateOrConnectWithoutUserInput[];
  upsert?: Auth_UsersOnTeamsUpsertWithWhereUniqueWithoutUserInput[];
  createMany?: Auth_UsersOnTeamsCreateManyUserInputEnvelope;
  set?: Auth_UsersOnTeamsWhereUniqueInput[];
  disconnect?: Auth_UsersOnTeamsWhereUniqueInput[];
  delete?: Auth_UsersOnTeamsWhereUniqueInput[];
  connect?: Auth_UsersOnTeamsWhereUniqueInput[];
  update?: Auth_UsersOnTeamsUpdateWithWhereUniqueWithoutUserInput[];
  updateMany?: Auth_UsersOnTeamsUpdateManyWithWhereWithoutUserInput[];
  deleteMany?: Auth_UsersOnTeamsScalarWhereInput[];
}

export interface IntFieldUpdateOperationsInput {
  set?: number;
  increment?: number;
  decrement?: number;
  multiply?: number;
  divide?: number;
}

export interface Auth_ProfileUncheckedUpdateOneWithoutUserNestedInput {
  create?: Auth_ProfileUncheckedCreateWithoutUserInput;
  connectOrCreate?: Auth_ProfileCreateOrConnectWithoutUserInput;
  upsert?: Auth_ProfileUpsertWithoutUserInput;
  disconnect?: Auth_ProfileWhereInput;
  delete?: Auth_ProfileWhereInput;
  connect?: Auth_ProfileWhereUniqueInput;
  update?: Auth_ProfileUpdateWithoutUserInput;
}

export interface Auth_UsersOnTeamsUncheckedUpdateManyWithoutUserNestedInput {
  create?: Auth_UsersOnTeamsCreateWithoutUserInput[];
  connectOrCreate?: Auth_UsersOnTeamsCreateOrConnectWithoutUserInput[];
  upsert?: Auth_UsersOnTeamsUpsertWithWhereUniqueWithoutUserInput[];
  createMany?: Auth_UsersOnTeamsCreateManyUserInputEnvelope;
  set?: Auth_UsersOnTeamsWhereUniqueInput[];
  disconnect?: Auth_UsersOnTeamsWhereUniqueInput[];
  delete?: Auth_UsersOnTeamsWhereUniqueInput[];
  connect?: Auth_UsersOnTeamsWhereUniqueInput[];
  update?: Auth_UsersOnTeamsUpdateWithWhereUniqueWithoutUserInput[];
  updateMany?: Auth_UsersOnTeamsUpdateManyWithWhereWithoutUserInput[];
  deleteMany?: Auth_UsersOnTeamsScalarWhereInput[];
}

export interface Auth_UserCreateNestedOneWithoutProfileInput {
  create?: Auth_UserUncheckedCreateWithoutProfileInput;
  connectOrCreate?: Auth_UserCreateOrConnectWithoutProfileInput;
  connect?: Auth_UserWhereUniqueInput;
}

export interface Auth_UserUpdateOneRequiredWithoutProfileNestedInput {
  create?: Auth_UserUncheckedCreateWithoutProfileInput;
  connectOrCreate?: Auth_UserCreateOrConnectWithoutProfileInput;
  upsert?: Auth_UserUpsertWithoutProfileInput;
  connect?: Auth_UserWhereUniqueInput;
  update?: Auth_UserUpdateWithoutProfileInput;
}

export interface NullableDateTimeFieldUpdateOperationsInput {
  set?: Date | null;
}

export interface Auth_TeamCreateNestedOneWithoutUsersInput {
  create?: Auth_TeamUncheckedCreateWithoutUsersInput;
  connectOrCreate?: Auth_TeamCreateOrConnectWithoutUsersInput;
  connect?: Auth_TeamWhereUniqueInput;
}

export interface Auth_UserCreateNestedOneWithoutTeamsInput {
  create?: Auth_UserUncheckedCreateWithoutTeamsInput;
  connectOrCreate?: Auth_UserCreateOrConnectWithoutTeamsInput;
  connect?: Auth_UserWhereUniqueInput;
}

export interface Auth_TeamUpdateOneRequiredWithoutUsersNestedInput {
  create?: Auth_TeamUncheckedCreateWithoutUsersInput;
  connectOrCreate?: Auth_TeamCreateOrConnectWithoutUsersInput;
  upsert?: Auth_TeamUpsertWithoutUsersInput;
  connect?: Auth_TeamWhereUniqueInput;
  update?: Auth_TeamUpdateWithoutUsersInput;
}

export interface Auth_UserUpdateOneRequiredWithoutTeamsNestedInput {
  create?: Auth_UserUncheckedCreateWithoutTeamsInput;
  connectOrCreate?: Auth_UserCreateOrConnectWithoutTeamsInput;
  upsert?: Auth_UserUpsertWithoutTeamsInput;
  connect?: Auth_UserWhereUniqueInput;
  update?: Auth_UserUpdateWithoutTeamsInput;
}

export interface Auth_UsersOnTeamsCreateNestedManyWithoutTeamInput {
  create?: Auth_UsersOnTeamsCreateWithoutTeamInput[];
  connectOrCreate?: Auth_UsersOnTeamsCreateOrConnectWithoutTeamInput[];
  createMany?: Auth_UsersOnTeamsCreateManyTeamInputEnvelope;
  connect?: Auth_UsersOnTeamsWhereUniqueInput[];
}

export interface Auth_UsersOnTeamsUncheckedCreateNestedManyWithoutTeamInput {
  create?: Auth_UsersOnTeamsCreateWithoutTeamInput[];
  connectOrCreate?: Auth_UsersOnTeamsCreateOrConnectWithoutTeamInput[];
  createMany?: Auth_UsersOnTeamsCreateManyTeamInputEnvelope;
  connect?: Auth_UsersOnTeamsWhereUniqueInput[];
}

export interface Auth_UsersOnTeamsUpdateManyWithoutTeamNestedInput {
  create?: Auth_UsersOnTeamsCreateWithoutTeamInput[];
  connectOrCreate?: Auth_UsersOnTeamsCreateOrConnectWithoutTeamInput[];
  upsert?: Auth_UsersOnTeamsUpsertWithWhereUniqueWithoutTeamInput[];
  createMany?: Auth_UsersOnTeamsCreateManyTeamInputEnvelope;
  set?: Auth_UsersOnTeamsWhereUniqueInput[];
  disconnect?: Auth_UsersOnTeamsWhereUniqueInput[];
  delete?: Auth_UsersOnTeamsWhereUniqueInput[];
  connect?: Auth_UsersOnTeamsWhereUniqueInput[];
  update?: Auth_UsersOnTeamsUpdateWithWhereUniqueWithoutTeamInput[];
  updateMany?: Auth_UsersOnTeamsUpdateManyWithWhereWithoutTeamInput[];
  deleteMany?: Auth_UsersOnTeamsScalarWhereInput[];
}

export interface Auth_UsersOnTeamsUncheckedUpdateManyWithoutTeamNestedInput {
  create?: Auth_UsersOnTeamsCreateWithoutTeamInput[];
  connectOrCreate?: Auth_UsersOnTeamsCreateOrConnectWithoutTeamInput[];
  upsert?: Auth_UsersOnTeamsUpsertWithWhereUniqueWithoutTeamInput[];
  createMany?: Auth_UsersOnTeamsCreateManyTeamInputEnvelope;
  set?: Auth_UsersOnTeamsWhereUniqueInput[];
  disconnect?: Auth_UsersOnTeamsWhereUniqueInput[];
  delete?: Auth_UsersOnTeamsWhereUniqueInput[];
  connect?: Auth_UsersOnTeamsWhereUniqueInput[];
  update?: Auth_UsersOnTeamsUpdateWithWhereUniqueWithoutTeamInput[];
  updateMany?: Auth_UsersOnTeamsUpdateManyWithWhereWithoutTeamInput[];
  deleteMany?: Auth_UsersOnTeamsScalarWhereInput[];
}

export interface NestedIntFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntFilter;
}

export interface NestedDateTimeFilter {
  equals?: Date;
  in?: Date[];
  notIn?: Date[];
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: NestedDateTimeFilter;
}

export interface NestedStringNullableFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringNullableFilter | null;
}

export interface NestedStringFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringFilter;
}

export interface NestedIntWithAggregatesFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntWithAggregatesFilter;
  _count?: NestedIntFilter;
  _avg?: NestedFloatFilter;
  _sum?: NestedIntFilter;
  _min?: NestedIntFilter;
  _max?: NestedIntFilter;
}

export interface NestedFloatFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedFloatFilter;
}

export interface NestedDateTimeWithAggregatesFilter {
  equals?: Date;
  in?: Date[];
  notIn?: Date[];
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: NestedDateTimeWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedDateTimeFilter;
  _max?: NestedDateTimeFilter;
}

export interface NestedStringNullableWithAggregatesFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringNullableWithAggregatesFilter | null;
  _count?: NestedIntNullableFilter;
  _min?: NestedStringNullableFilter;
  _max?: NestedStringNullableFilter;
}

export interface NestedIntNullableFilter {
  equals?: number | null;
  in?: number[] | null;
  notIn?: number[] | null;
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntNullableFilter | null;
}

export interface NestedStringWithAggregatesFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedStringFilter;
  _max?: NestedStringFilter;
}

export interface NestedJsonNullableFilter {
  equals?: any;
  path?: string[];
  string_contains?: string;
  string_starts_with?: string;
  string_ends_with?: string;
  array_contains?: any | null;
  array_starts_with?: any | null;
  array_ends_with?: any | null;
  lt?: any;
  lte?: any;
  gt?: any;
  gte?: any;
  not?: any;
}

export interface NestedDateTimeNullableFilter {
  equals?: Date | null;
  in?: Date[] | null;
  notIn?: Date[] | null;
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: NestedDateTimeNullableFilter | null;
}

export interface NestedDateTimeNullableWithAggregatesFilter {
  equals?: Date | null;
  in?: Date[] | null;
  notIn?: Date[] | null;
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: NestedDateTimeNullableWithAggregatesFilter | null;
  _count?: NestedIntNullableFilter;
  _min?: NestedDateTimeNullableFilter;
  _max?: NestedDateTimeNullableFilter;
}

export interface Auth_ProfileCreateWithoutUserInput {
  location?: string | null;
  joiningDate?: Date | null;
  designation?: string | null;
  profileImg?: string | null;
  designationIcon?: string | null;
  coverImg?: string | null;
}

export interface Auth_ProfileUncheckedCreateWithoutUserInput {
  location?: string | null;
  joiningDate?: Date | null;
  designation?: string | null;
  profileImg?: string | null;
  designationIcon?: string | null;
  coverImg?: string | null;
}

export interface Auth_ProfileCreateOrConnectWithoutUserInput {
  where: Auth_ProfileWhereUniqueInput;
  create: Auth_ProfileUncheckedCreateWithoutUserInput;
}

export interface Auth_UsersOnTeamsCreateWithoutUserInput {
  team: Auth_TeamCreateNestedOneWithoutUsersInput;
  assignedAt?: Date;
}

export interface Auth_UsersOnTeamsUncheckedCreateWithoutUserInput {
  teamName: string;
  assignedAt?: Date;
}

export interface Auth_UsersOnTeamsCreateOrConnectWithoutUserInput {
  where: Auth_UsersOnTeamsWhereUniqueInput;
  create: Auth_UsersOnTeamsUncheckedCreateWithoutUserInput;
}

export interface Auth_UsersOnTeamsCreateManyUserInputEnvelope {
  data: Auth_UsersOnTeamsCreateManyUserInput[];
  skipDuplicates?: boolean;
}

export interface Auth_ProfileUpsertWithoutUserInput {
  update: Auth_ProfileUncheckedUpdateWithoutUserInput;
  create: Auth_ProfileUncheckedCreateWithoutUserInput;
  where?: Auth_ProfileWhereInput;
}

export interface Auth_ProfileUpdateToOneWithWhereWithoutUserInput {
  where?: Auth_ProfileWhereInput;
  data: Auth_ProfileUncheckedUpdateWithoutUserInput;
}

export interface Auth_ProfileUpdateWithoutUserInput {
  location?: string | null;
  joiningDate?: Date | null;
  designation?: string | null;
  profileImg?: string | null;
  designationIcon?: string | null;
  coverImg?: string | null;
}

export interface Auth_ProfileUncheckedUpdateWithoutUserInput {
  location?: string | null;
  joiningDate?: Date | null;
  designation?: string | null;
  profileImg?: string | null;
  designationIcon?: string | null;
  coverImg?: string | null;
}

export interface Auth_UsersOnTeamsUpsertWithWhereUniqueWithoutUserInput {
  where: Auth_UsersOnTeamsWhereUniqueInput;
  update: Auth_UsersOnTeamsUncheckedUpdateWithoutUserInput;
  create: Auth_UsersOnTeamsUncheckedCreateWithoutUserInput;
}

export interface Auth_UsersOnTeamsUpdateWithWhereUniqueWithoutUserInput {
  where: Auth_UsersOnTeamsWhereUniqueInput;
  data: Auth_UsersOnTeamsUncheckedUpdateWithoutUserInput;
}

export interface Auth_UsersOnTeamsUpdateManyWithWhereWithoutUserInput {
  where: Auth_UsersOnTeamsScalarWhereInput;
  data: Auth_UsersOnTeamsUncheckedUpdateManyWithoutTeamsInput;
}

export interface Auth_UsersOnTeamsScalarWhereInput {
  AND?: Auth_UsersOnTeamsScalarWhereInput[];
  OR?: Auth_UsersOnTeamsScalarWhereInput[];
  NOT?: Auth_UsersOnTeamsScalarWhereInput[];
  teamName?: StringFilter;
  userId?: IntFilter;
  assignedAt?: DateTimeFilter;
}

export interface Auth_UserCreateWithoutProfileInput {
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: Auth_UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  teams?: Auth_UsersOnTeamsCreateNestedManyWithoutUserInput;
}

export interface Auth_UserUncheckedCreateWithoutProfileInput {
  id?: number;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: Auth_UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  teams?: Auth_UsersOnTeamsUncheckedCreateNestedManyWithoutUserInput;
}

export interface Auth_UserCreateOrConnectWithoutProfileInput {
  where: Auth_UserWhereUniqueInput;
  create: Auth_UserUncheckedCreateWithoutProfileInput;
}

export interface Auth_UserUpsertWithoutProfileInput {
  update: Auth_UserUncheckedUpdateWithoutProfileInput;
  create: Auth_UserUncheckedCreateWithoutProfileInput;
  where?: Auth_UserWhereInput;
}

export interface Auth_UserUpdateToOneWithWhereWithoutProfileInput {
  where?: Auth_UserWhereInput;
  data: Auth_UserUncheckedUpdateWithoutProfileInput;
}

export interface Auth_UserUpdateWithoutProfileInput {
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: Auth_UserUpdaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  teams?: Auth_UsersOnTeamsUpdateManyWithoutUserNestedInput;
}

export interface Auth_UserUncheckedUpdateWithoutProfileInput {
  id?: number;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: Auth_UserUpdaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  teams?: Auth_UsersOnTeamsUncheckedUpdateManyWithoutUserNestedInput;
}

export interface Auth_TeamCreateWithoutUsersInput {
  teamName: string;
}

export interface Auth_TeamUncheckedCreateWithoutUsersInput {
  teamName: string;
}

export interface Auth_TeamCreateOrConnectWithoutUsersInput {
  where: Auth_TeamWhereUniqueInput;
  create: Auth_TeamUncheckedCreateWithoutUsersInput;
}

export interface Auth_UserCreateWithoutTeamsInput {
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: Auth_UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Auth_ProfileCreateNestedOneWithoutUserInput;
}

export interface Auth_UserUncheckedCreateWithoutTeamsInput {
  id?: number;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: Auth_UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Auth_ProfileUncheckedCreateNestedOneWithoutUserInput;
}

export interface Auth_UserCreateOrConnectWithoutTeamsInput {
  where: Auth_UserWhereUniqueInput;
  create: Auth_UserUncheckedCreateWithoutTeamsInput;
}

export interface Auth_TeamUpsertWithoutUsersInput {
  update: Auth_TeamUncheckedUpdateWithoutUsersInput;
  create: Auth_TeamUncheckedCreateWithoutUsersInput;
  where?: Auth_TeamWhereInput;
}

export interface Auth_TeamUpdateToOneWithWhereWithoutUsersInput {
  where?: Auth_TeamWhereInput;
  data: Auth_TeamUncheckedUpdateWithoutUsersInput;
}

export interface Auth_TeamUpdateWithoutUsersInput {
  teamName?: string;
}

export interface Auth_TeamUncheckedUpdateWithoutUsersInput {
  teamName?: string;
}

export interface Auth_UserUpsertWithoutTeamsInput {
  update: Auth_UserUncheckedUpdateWithoutTeamsInput;
  create: Auth_UserUncheckedCreateWithoutTeamsInput;
  where?: Auth_UserWhereInput;
}

export interface Auth_UserUpdateToOneWithWhereWithoutTeamsInput {
  where?: Auth_UserWhereInput;
  data: Auth_UserUncheckedUpdateWithoutTeamsInput;
}

export interface Auth_UserUpdateWithoutTeamsInput {
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: Auth_UserUpdaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Auth_ProfileUpdateOneWithoutUserNestedInput;
}

export interface Auth_UserUncheckedUpdateWithoutTeamsInput {
  id?: number;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: Auth_UserUpdaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Auth_ProfileUncheckedUpdateOneWithoutUserNestedInput;
}

export interface Auth_UsersOnTeamsCreateWithoutTeamInput {
  user: Auth_UserCreateNestedOneWithoutTeamsInput;
  assignedAt?: Date;
}

export interface Auth_UsersOnTeamsUncheckedCreateWithoutTeamInput {
  userId: number;
  assignedAt?: Date;
}

export interface Auth_UsersOnTeamsCreateOrConnectWithoutTeamInput {
  where: Auth_UsersOnTeamsWhereUniqueInput;
  create: Auth_UsersOnTeamsUncheckedCreateWithoutTeamInput;
}

export interface Auth_UsersOnTeamsCreateManyTeamInputEnvelope {
  data: Auth_UsersOnTeamsCreateManyTeamInput[];
  skipDuplicates?: boolean;
}

export interface Auth_UsersOnTeamsUpsertWithWhereUniqueWithoutTeamInput {
  where: Auth_UsersOnTeamsWhereUniqueInput;
  update: Auth_UsersOnTeamsUncheckedUpdateWithoutTeamInput;
  create: Auth_UsersOnTeamsUncheckedCreateWithoutTeamInput;
}

export interface Auth_UsersOnTeamsUpdateWithWhereUniqueWithoutTeamInput {
  where: Auth_UsersOnTeamsWhereUniqueInput;
  data: Auth_UsersOnTeamsUncheckedUpdateWithoutTeamInput;
}

export interface Auth_UsersOnTeamsUpdateManyWithWhereWithoutTeamInput {
  where: Auth_UsersOnTeamsScalarWhereInput;
  data: Auth_UsersOnTeamsUncheckedUpdateManyWithoutUsersInput;
}

export interface Auth_UsersOnTeamsCreateManyUserInput {
  teamName: string;
  assignedAt?: Date;
}

export interface Auth_UsersOnTeamsUpdateWithoutUserInput {
  team?: Auth_TeamUpdateOneRequiredWithoutUsersNestedInput;
  assignedAt?: Date;
}

export interface Auth_UsersOnTeamsUncheckedUpdateWithoutUserInput {
  teamName?: string;
  assignedAt?: Date;
}

export interface Auth_UsersOnTeamsUncheckedUpdateManyWithoutTeamsInput {
  teamName?: string;
  assignedAt?: Date;
}

export interface Auth_UsersOnTeamsCreateManyTeamInput {
  userId: number;
  assignedAt?: Date;
}

export interface Auth_UsersOnTeamsUpdateWithoutTeamInput {
  user?: Auth_UserUpdateOneRequiredWithoutTeamsNestedInput;
  assignedAt?: Date;
}

export interface Auth_UsersOnTeamsUncheckedUpdateWithoutTeamInput {
  userId?: number;
  assignedAt?: Date;
}

export interface Auth_UsersOnTeamsUncheckedUpdateManyWithoutUsersInput {
  userId?: number;
  assignedAt?: Date;
}

export enum JsonNullValueFilter {
  DbNull = 'DbNull',
  JsonNull = 'JsonNull',
  AnyNull = 'AnyNull',
}
export enum NullableJsonNullValueInput {
  DbNull = 'DbNull',
  JsonNull = 'JsonNull',
}
export enum ProfileScalarFieldEnum {
  userId = 'userId',
  location = 'location',
  joiningDate = 'joiningDate',
  designation = 'designation',
  profileImg = 'profileImg',
  designationIcon = 'designationIcon',
  coverImg = 'coverImg',
}
export enum QueryMode {
  default = 'default',
  insensitive = 'insensitive',
}
export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}
export enum TeamScalarFieldEnum {
  teamName = 'teamName',
}
export enum TransactionIsolationLevel {
  ReadUncommitted = 'ReadUncommitted',
  ReadCommitted = 'ReadCommitted',
  RepeatableRead = 'RepeatableRead',
  Serializable = 'Serializable',
}
export enum UserScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  username = 'username',
  password = 'password',
  email = 'email',
  roles = 'roles',
  googleId = 'googleId',
  googleProfile = 'googleProfile',
  lastName = 'lastName',
  firstName = 'firstName',
}
export enum UsersOnTeamsScalarFieldEnum {
  teamName = 'teamName',
  userId = 'userId',
  assignedAt = 'assignedAt',
}

export interface Auth_TransactionalMutationInput {
  Auth_CreateOneUser: Auth_CreateOneUserArgs;
  Auth_UpsertOneUser: Auth_UpsertOneUserArgs;
  Auth_CreateManyUser: Auth_CreateManyUserArgs;
  Auth_DeleteOneUser: Auth_DeleteOneUserArgs;
  Auth_UpdateOneUser: Auth_UpdateOneUserArgs;
  Auth_DeleteManyUser: Auth_DeleteManyUserArgs;
  Auth_CreateOneProfile: Auth_CreateOneProfileArgs;
  Auth_UpsertOneProfile: Auth_UpsertOneProfileArgs;
  Auth_CreateManyProfile: Auth_CreateManyProfileArgs;
  Auth_DeleteOneProfile: Auth_DeleteOneProfileArgs;
  Auth_UpdateOneProfile: Auth_UpdateOneProfileArgs;
  Auth_DeleteManyProfile: Auth_DeleteManyProfileArgs;
  Auth_CreateOneUsersOnTeams: Auth_CreateOneUsersOnTeamsArgs;
  Auth_UpsertOneUsersOnTeams: Auth_UpsertOneUsersOnTeamsArgs;
  Auth_CreateManyUsersOnTeams: Auth_CreateManyUsersOnTeamsArgs;
  Auth_DeleteOneUsersOnTeams: Auth_DeleteOneUsersOnTeamsArgs;
  Auth_UpdateOneUsersOnTeams: Auth_UpdateOneUsersOnTeamsArgs;
  Auth_DeleteManyUsersOnTeams: Auth_DeleteManyUsersOnTeamsArgs;
  Auth_CreateOneTeam: Auth_CreateOneTeamArgs;
  Auth_UpsertOneTeam: Auth_UpsertOneTeamArgs;
  Auth_CreateManyTeam: Auth_CreateManyTeamArgs;
  Auth_DeleteOneTeam: Auth_DeleteOneTeamArgs;
  Auth_UpdateOneTeam: Auth_UpdateOneTeamArgs;
  Auth_DeleteManyTeam: Auth_DeleteManyTeamArgs;
}

export interface Auth_TransactionalBatchMutationArgs {
  mutations: Auth_TransactionalMutationInput[];
}

export interface TransactionSucceeded {
  transactionSucceeded: boolean;
}
