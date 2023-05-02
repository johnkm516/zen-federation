import * as Client from '@nx-prisma/prisma-clients/crm';
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
  Query?: Query;
  Mutation?: Mutation;
  AggregateUser?: AggregateUser;
  UserGroupByOutputType?: UserGroupByOutputType;
  AffectedRowsOutput?: AffectedRowsOutput;
  UserCountAggregateOutputType?: UserCountAggregateOutputType;
  UserAvgAggregateOutputType?: UserAvgAggregateOutputType;
  UserSumAggregateOutputType?: UserSumAggregateOutputType;
  UserMinAggregateOutputType?: UserMinAggregateOutputType;
  UserMaxAggregateOutputType?: UserMaxAggregateOutputType;
}

export interface User {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.User, {}, number>;
  order?: Resolver<Client.User, {}, string | null>;
  test?: Resolver<Client.User, {}, string | null>;

  __resolveReference?: any;
}

export interface Query {
  [key: string]: Resolver<any, any, any>;
  crm_findFirstUser?: Resolver<{}, crm_FindFirstUserArgs, Client.User | null>;
  crm_findFirstUserOrThrow?: Resolver<{}, crm_FindFirstUserOrThrowArgs, Client.User | null>;
  crm_findManyUser?: Resolver<{}, crm_FindManyUserArgs, Client.User[]>;
  crm_findManyUserCount?: Resolver<{}, crm_FindManyUserArgs, number>;
  crm_aggregateUser?: Resolver<
    {},
    crm_AggregateUserArgs,
    Client.Prisma.GetUserAggregateType<crm_AggregateUserArgs>
  >;
  //crm_groupByUser is not generated because model has only unique fields or relations.
  crm_groupByUser?: Resolver<
    {},
    any,
    Client.Prisma.GetUserGroupByPayload<crm_GroupByUserArgs> | GroupByError
  >;
  crm_findUniqueUser?: Resolver<{}, crm_FindUniqueUserArgs, Client.User | null>;
  crm_findUniqueUserOrThrow?: Resolver<{}, crm_FindUniqueUserOrThrowArgs, Client.User | null>;
}

export interface Mutation {
  [key: string]: Resolver<any, any, any>;
  crm_createOneUser?: Resolver<{}, crm_CreateOneUserArgs, Client.User>;
  crm_upsertOneUser?: Resolver<{}, crm_UpsertOneUserArgs, Client.User>;
  crm_createManyUser?: Resolver<{}, crm_CreateManyUserArgs, Client.Prisma.BatchPayload>;
  crm_deleteOneUser?: Resolver<{}, crm_DeleteOneUserArgs, Client.User | null>;
  crm_updateOneUser?: Resolver<{}, crm_UpdateOneUserArgs, Client.User | null>;
  //crm_updateManyUser is not generated because model has only unique fields or relations.
  crm_deleteManyUser?: Resolver<{}, crm_DeleteManyUserArgs, Client.Prisma.BatchPayload>;
  crm_executeRaw?: Resolver<{}, crm_ExecuteRawArgs, any>;
  crm_queryRaw?: Resolver<{}, crm_QueryRawArgs, any>;
  crm_transactionalBatchMutation?: Resolver<{}, crm_TransactionalBatchMutationArgs, any>;
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
  order?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>;
  test?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>;
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

export interface AffectedRowsOutput {
  [key: string]: Resolver<any, any, any>;
  count?: Resolver<Client.Prisma.BatchPayload, {}, number>;
}

export interface UserCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  order?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  test?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
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
  order?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>;
  test?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>;
}

export interface UserMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, number | null>;
  order?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>;
  test?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>;
}

export interface crm_FindFirstUserArgs {
  where?: crm_UserWhereInput | null;
  orderBy?: crm_UserOrderByWithRelationInput[] | null;
  cursor?: crm_UserWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: UserScalarFieldEnum[] | null;
}

export interface crm_FindFirstUserOrThrowArgs {
  where?: crm_UserWhereInput | null;
  orderBy?: crm_UserOrderByWithRelationInput[] | null;
  cursor?: crm_UserWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: UserScalarFieldEnum[] | null;
}

export interface crm_FindManyUserArgs {
  where?: crm_UserWhereInput;
  orderBy?: crm_UserOrderByWithRelationInput[];
  cursor?: crm_UserWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: UserScalarFieldEnum[];
}

export interface crm_AggregateUserArgs {
  where?: crm_UserWhereInput;
  orderBy?: crm_UserOrderByWithRelationInput[];
  cursor?: crm_UserWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: Client.Prisma.UserCountAggregateInputType;
  _avg?: Client.Prisma.UserAvgAggregateInputType;
  _sum?: Client.Prisma.UserSumAggregateInputType;
  _min?: Client.Prisma.UserMinAggregateInputType;
  _max?: Client.Prisma.UserMaxAggregateInputType;
}

export interface crm_GroupByUserArgs {
  where?: crm_UserWhereInput;
  orderBy?: crm_UserOrderByWithAggregationInput[];
  by: UserScalarFieldEnum[];
  having?: crm_UserScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
}

export interface crm_FindUniqueUserArgs {
  where: crm_UserWhereUniqueInput | null;
}

export interface crm_FindUniqueUserOrThrowArgs {
  where: crm_UserWhereUniqueInput | null;
}

export interface crm_CreateOneUserArgs {
  data: crm_UserCreateInput;
}

export interface crm_UpsertOneUserArgs {
  where: crm_UserWhereUniqueInput;
  create: crm_UserCreateInput;
  update: crm_UserUpdateInput;
}

export interface crm_CreateManyUserArgs {
  data: crm_UserCreateManyInput;
  skipDuplicates?: boolean;
}

export interface crm_DeleteOneUserArgs {
  where: crm_UserWhereUniqueInput | null;
}

export interface crm_UpdateOneUserArgs {
  data: crm_UserUpdateInput | null;
  where: crm_UserWhereUniqueInput | null;
}

export interface crm_UpdateManyUserArgs {
  data: crm_UserUpdateManyMutationInput;
  where?: crm_UserWhereInput;
}

export interface crm_DeleteManyUserArgs {
  where?: crm_UserWhereInput;
}

export interface crm_ExecuteRawArgs {
  query: string;
  parameters?: any;
}

export interface crm_QueryRawArgs {
  query: string;
  parameters?: any;
}

export interface crm_UserWhereInput {
  AND?: crm_UserWhereInput[];
  OR?: crm_UserWhereInput[];
  NOT?: crm_UserWhereInput[];
  id?: IntFilter;
  order?: StringNullableFilter | null;
  test?: StringNullableFilter | null;
}

export interface crm_UserOrderByWithRelationInput {
  id?: SortOrder;
  order?: SortOrder;
  test?: SortOrder;
}

export type crm_UserWhereUniqueInput = AtLeast<
  {
    id?: number;
    AND?: crm_UserWhereInput[];
    OR?: crm_UserWhereInput[];
    NOT?: crm_UserWhereInput[];
    order?: StringNullableFilter | null;
    test?: StringNullableFilter | null;
  },
  'id'
>;

export interface crm_UserOrderByWithAggregationInput {
  id?: SortOrder;
  order?: SortOrder;
  test?: SortOrder;
  _count?: crm_UserCountOrderByAggregateInput;
  _avg?: crm_UserAvgOrderByAggregateInput;
  _max?: crm_UserMaxOrderByAggregateInput;
  _min?: crm_UserMinOrderByAggregateInput;
  _sum?: crm_UserSumOrderByAggregateInput;
}

export interface crm_UserScalarWhereWithAggregatesInput {
  AND?: crm_UserScalarWhereWithAggregatesInput[];
  OR?: crm_UserScalarWhereWithAggregatesInput[];
  NOT?: crm_UserScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  order?: StringNullableWithAggregatesFilter | null;
  test?: StringNullableWithAggregatesFilter | null;
}

export interface crm_UserCreateInput {
  id: number;
  order?: string | null;
  test?: string | null;
}

export interface crm_UserUncheckedCreateInput {
  id: number;
  order?: string | null;
  test?: string | null;
}

export interface crm_UserUpdateInput {
  id?: number;
  order?: string | null;
  test?: string | null;
}

export interface crm_UserUncheckedUpdateInput {
  id?: number;
  order?: string | null;
  test?: string | null;
}

export interface crm_UserCreateManyInput {
  id: number;
  order?: string | null;
  test?: string | null;
}

export interface crm_UserUpdateManyMutationInput {
  id?: number;
  order?: string | null;
  test?: string | null;
}

export interface crm_UserUncheckedUpdateManyInput {
  id?: number;
  order?: string | null;
  test?: string | null;
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

export interface crm_UserCountOrderByAggregateInput {
  id?: SortOrder;
  order?: SortOrder;
  test?: SortOrder;
}

export interface crm_UserAvgOrderByAggregateInput {
  id?: SortOrder;
}

export interface crm_UserMaxOrderByAggregateInput {
  id?: SortOrder;
  order?: SortOrder;
  test?: SortOrder;
}

export interface crm_UserMinOrderByAggregateInput {
  id?: SortOrder;
  order?: SortOrder;
  test?: SortOrder;
}

export interface crm_UserSumOrderByAggregateInput {
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

export interface IntFieldUpdateOperationsInput {
  set?: number;
  increment?: number;
  decrement?: number;
  multiply?: number;
  divide?: number;
}

export interface NullableStringFieldUpdateOperationsInput {
  set?: string | null;
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
  order = 'order',
  test = 'test',
}

export interface crm_TransactionalMutationInput {
  crm_CreateOneUser: crm_CreateOneUserArgs;
  crm_UpsertOneUser: crm_UpsertOneUserArgs;
  crm_CreateManyUser: crm_CreateManyUserArgs;
  crm_DeleteOneUser: crm_DeleteOneUserArgs;
  crm_UpdateOneUser: crm_UpdateOneUserArgs;
  crm_DeleteManyUser: crm_DeleteManyUserArgs;
}

export interface crm_TransactionalBatchMutationArgs {
  mutations: crm_TransactionalMutationInput[];
}

export interface TransactionSucceeded {
  transactionSucceeded: boolean;
}
