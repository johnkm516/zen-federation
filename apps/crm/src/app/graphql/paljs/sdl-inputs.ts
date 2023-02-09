import gql from 'graphql-tag';

export default gql`
  scalar DateTime

  type BatchPayload @shareable {
    count: Int!
  }
  enum QueryMode {
    default
    insensitive
  }

  enum SortOrder {
    asc
    desc
  }

  enum TransactionIsolationLevel {
    ReadUncommitted
    ReadCommitted
    RepeatableRead
    Serializable
  }

  enum UserScalarFieldEnum {
    id
    order
    test
  }

  input crm_UserWhereInput {
    AND: [crm_UserWhereInput!]
    OR: [crm_UserWhereInput!]
    NOT: [crm_UserWhereInput!]
    id: IntFilter
    order: StringNullableFilter
    test: StringNullableFilter
  }

  input crm_UserOrderByWithRelationInput {
    id: SortOrder
    order: SortOrder
    test: SortOrder
  }

  input crm_UserWhereUniqueInput {
    id: Int
    AND: [crm_UserWhereInput!]
    OR: [crm_UserWhereInput!]
    NOT: [crm_UserWhereInput!]
    order: StringNullableFilter
    test: StringNullableFilter
  }

  input crm_UserOrderByWithAggregationInput {
    id: SortOrder
    order: SortOrder
    test: SortOrder
    _count: crm_UserCountOrderByAggregateInput
    _avg: crm_UserAvgOrderByAggregateInput
    _max: crm_UserMaxOrderByAggregateInput
    _min: crm_UserMinOrderByAggregateInput
    _sum: crm_UserSumOrderByAggregateInput
  }

  input crm_UserScalarWhereWithAggregatesInput {
    AND: [crm_UserScalarWhereWithAggregatesInput!]
    OR: [crm_UserScalarWhereWithAggregatesInput!]
    NOT: [crm_UserScalarWhereWithAggregatesInput!]
    id: IntWithAggregatesFilter
    order: StringNullableWithAggregatesFilter
    test: StringNullableWithAggregatesFilter
  }

  input crm_UserCreateInput {
    id: Int!
    order: String
    test: String
  }

  input crm_UserUncheckedCreateInput {
    id: Int!
    order: String
    test: String
  }

  input crm_UserUpdateInput {
    id: Int
    order: String
    test: String
  }

  input crm_UserUncheckedUpdateInput {
    id: Int
    order: String
    test: String
  }

  input crm_UserCreateManyInput {
    id: Int!
    order: String
    test: String
  }

  input crm_UserUpdateManyMutationInput {
    id: Int
    order: String
    test: String
  }

  input crm_UserUncheckedUpdateManyInput {
    id: Int
    order: String
    test: String
  }

  input IntFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntFilter
  }

  input StringNullableFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    mode: QueryMode
    not: NestedStringNullableFilter
  }

  input crm_UserCountOrderByAggregateInput {
    id: SortOrder
    order: SortOrder
    test: SortOrder
  }

  input crm_UserAvgOrderByAggregateInput {
    id: SortOrder
  }

  input crm_UserMaxOrderByAggregateInput {
    id: SortOrder
    order: SortOrder
    test: SortOrder
  }

  input crm_UserMinOrderByAggregateInput {
    id: SortOrder
    order: SortOrder
    test: SortOrder
  }

  input crm_UserSumOrderByAggregateInput {
    id: SortOrder
  }

  input IntWithAggregatesFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntWithAggregatesFilter
    _count: NestedIntFilter
    _avg: NestedFloatFilter
    _sum: NestedIntFilter
    _min: NestedIntFilter
    _max: NestedIntFilter
  }

  input StringNullableWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    mode: QueryMode
    not: NestedStringNullableWithAggregatesFilter
    _count: NestedIntNullableFilter
    _min: NestedStringNullableFilter
    _max: NestedStringNullableFilter
  }

  input IntFieldUpdateOperationsInput {
    set: Int
    increment: Int
    decrement: Int
    multiply: Int
    divide: Int
  }

  input NullableStringFieldUpdateOperationsInput {
    set: String
  }

  input NestedIntFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntFilter
  }

  input NestedStringNullableFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringNullableFilter
  }

  input NestedIntWithAggregatesFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntWithAggregatesFilter
    _count: NestedIntFilter
    _avg: NestedFloatFilter
    _sum: NestedIntFilter
    _min: NestedIntFilter
    _max: NestedIntFilter
  }

  input NestedFloatFilter {
    equals: Float
    in: [Float!]
    notIn: [Float!]
    lt: Float
    lte: Float
    gt: Float
    gte: Float
    not: NestedFloatFilter
  }

  input NestedStringNullableWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringNullableWithAggregatesFilter
    _count: NestedIntNullableFilter
    _min: NestedStringNullableFilter
    _max: NestedStringNullableFilter
  }

  input NestedIntNullableFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntNullableFilter
  }

  type AggregateUser @shareable {
    _count: UserCountAggregateOutputType
    _avg: UserAvgAggregateOutputType
    _sum: UserSumAggregateOutputType
    _min: UserMinAggregateOutputType
    _max: UserMaxAggregateOutputType
  }

  type UserGroupByOutputType @key(fields: "id") @shareable {
    id: Int!
    order: String
    test: String
    _count: UserCountAggregateOutputType
    _avg: UserAvgAggregateOutputType
    _sum: UserSumAggregateOutputType
    _min: UserMinAggregateOutputType
    _max: UserMaxAggregateOutputType
  }

  type UserCountAggregateOutputType @key(fields: "id") @shareable {
    id: Int!
    order: Int!
    test: Int!
    _all: Int!
  }

  type UserAvgAggregateOutputType @key(fields: "id") @shareable {
    id: Float
  }

  type UserSumAggregateOutputType @key(fields: "id") @shareable {
    id: Int
  }

  type UserMinAggregateOutputType @key(fields: "id") @shareable {
    id: Int
    order: String
    test: String
  }

  type UserMaxAggregateOutputType @key(fields: "id") @shareable {
    id: Int
    order: String
    test: String
  }

  type TransactionSucceeded @shareable {
    transactionSucceeded: Boolean!
  }

  input crm_createOneUserInput {
    data: crm_UserCreateInput
  }

  input crm_upsertOneUserInput {
    where: crm_UserWhereUniqueInput
    create: crm_UserCreateInput
    update: crm_UserUpdateInput
  }

  input crm_createManyUserInput {
    data: [crm_UserCreateManyInput]
    skipDuplicates: Boolean
  }

  input crm_deleteOneUserInput {
    where: crm_UserWhereUniqueInput
  }

  input crm_updateOneUserInput {
    data: crm_UserUpdateInput
    where: crm_UserWhereUniqueInput
  }

  input crm_updateManyUserInput {
    data: crm_UserUpdateManyMutationInput
    where: crm_UserWhereInput
  }

  input crm_deleteManyUserInput {
    where: crm_UserWhereInput
  }

  input crm_transactionalMutationInput {
    crm_createOneUser: crm_createOneUserInput
    crm_upsertOneUser: crm_upsertOneUserInput
    crm_createManyUser: crm_createManyUserInput
    crm_deleteOneUser: crm_deleteOneUserInput
    crm_updateOneUser: crm_updateOneUserInput
    crm_updateManyUser: crm_updateManyUserInput
    crm_deleteManyUser: crm_deleteManyUserInput
  }
`;
