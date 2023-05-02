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
  Query?: Query;
  Mutation?: Mutation;
  AggregateUser?: AggregateUser;
  UserGroupByOutputType?: UserGroupByOutputType;
  AggregateProfile?: AggregateProfile;
  ProfileGroupByOutputType?: ProfileGroupByOutputType;
  AffectedRowsOutput?: AffectedRowsOutput;
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
  profile?: Resolver<Client.User, Auth_UserProfileArgs, Client.Profile | null>;

  __resolveReference?: any;
}

export interface Profile {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<Client.Profile, {}, number>;
  location?: Resolver<Client.Profile, {}, string | null>;
  joiningDate?: Resolver<Client.Profile, {}, Date | null>;
  designation?: Resolver<Client.Profile, {}, string | null>;
  profileImg?: Resolver<Client.Profile, {}, string | null>;
  designationIcon?: Resolver<Client.Profile, {}, string | null>;
  coverImg?: Resolver<Client.Profile, {}, string | null>;
  user?: Resolver<Client.Profile, {}, Client.User>;

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

export interface AffectedRowsOutput {
  [key: string]: Resolver<any, any, any>;
  count?: Resolver<Client.Prisma.BatchPayload, {}, number>;
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

export interface Auth_UserProfileArgs {
  where?: Auth_ProfileWhereInput | null;
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

export interface Auth_CreateOneUserArgs {
  data: Auth_UserCreateInput;
}

export interface Auth_UpsertOneUserArgs {
  where: Auth_UserWhereUniqueInput;
  create: Auth_UserCreateInput;
  update: Auth_UserUpdateInput;
}

export interface Auth_CreateManyUserArgs {
  data: Auth_UserCreateManyInput;
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
  data: Auth_ProfileCreateManyInput;
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
  location?: StringNullableFilter | null;
  joiningDate?: DateTimeNullableFilter | null;
  designation?: StringNullableFilter | null;
  profileImg?: StringNullableFilter | null;
  designationIcon?: StringNullableFilter | null;
  coverImg?: StringNullableFilter | null;
  user?: Auth_UserWhereInput;
}

export interface Auth_ProfileOrderByWithRelationInput {
  userId?: SortOrder;
  location?: SortOrder;
  joiningDate?: SortOrder;
  designation?: SortOrder;
  profileImg?: SortOrder;
  designationIcon?: SortOrder;
  coverImg?: SortOrder;
  user?: Auth_UserOrderByWithRelationInput;
}

export type Auth_ProfileWhereUniqueInput = AtLeast<
  {
    userId?: number;
    AND?: Auth_ProfileWhereInput[];
    OR?: Auth_ProfileWhereInput[];
    NOT?: Auth_ProfileWhereInput[];
    location?: StringNullableFilter | null;
    joiningDate?: DateTimeNullableFilter | null;
    designation?: StringNullableFilter | null;
    profileImg?: StringNullableFilter | null;
    designationIcon?: StringNullableFilter | null;
    coverImg?: StringNullableFilter | null;
    user?: Auth_UserWhereInput;
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
  location?: string | null;
  joiningDate?: Date | null;
  designation?: string | null;
  profileImg?: string | null;
  designationIcon?: string | null;
  coverImg?: string | null;
  user: Auth_UserCreateNestedOneWithoutProfileInput;
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
  location?: string | null;
  joiningDate?: Date | null;
  designation?: string | null;
  profileImg?: string | null;
  designationIcon?: string | null;
  coverImg?: string | null;
  user?: Auth_UserUpdateOneRequiredWithoutProfileNestedInput;
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

export interface Auth_UserRelationFilter {
  is?: Auth_UserWhereInput;
  isNot?: Auth_UserWhereInput;
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

export interface Auth_UserCreaterolesInput {
  set: string[];
}

export interface Auth_ProfileCreateNestedOneWithoutUserInput {
  create?: Auth_ProfileUncheckedCreateWithoutUserInput;
  connectOrCreate?: Auth_ProfileCreateOrConnectWithoutUserInput;
  connect?: Auth_ProfileWhereUniqueInput;
}

export interface Auth_ProfileUncheckedCreateNestedOneWithoutUserInput {
  create?: Auth_ProfileUncheckedCreateWithoutUserInput;
  connectOrCreate?: Auth_ProfileCreateOrConnectWithoutUserInput;
  connect?: Auth_ProfileWhereUniqueInput;
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

export interface Auth_UserCreateNestedOneWithoutProfileInput {
  create?: Auth_UserUncheckedCreateWithoutProfileInput;
  connectOrCreate?: Auth_UserCreateOrConnectWithoutProfileInput;
  connect?: Auth_UserWhereUniqueInput;
}

export interface NullableDateTimeFieldUpdateOperationsInput {
  set?: Date | null;
}

export interface Auth_UserUpdateOneRequiredWithoutProfileNestedInput {
  create?: Auth_UserUncheckedCreateWithoutProfileInput;
  connectOrCreate?: Auth_UserCreateOrConnectWithoutProfileInput;
  upsert?: Auth_UserUpsertWithoutProfileInput;
  connect?: Auth_UserWhereUniqueInput;
  update?: Auth_UserUpdateWithoutProfileInput;
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
}

export interface Auth_TransactionalBatchMutationArgs {
  mutations: Auth_TransactionalMutationInput[];
}

export interface TransactionSucceeded {
  transactionSucceeded: boolean;
}
