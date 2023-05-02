import gql from 'graphql-tag';

export default gql`
  scalar DateTime

  type BatchPayload @shareable {
    count: Int!
  }
  enum JsonNullValueFilter {
    DbNull
    JsonNull
    AnyNull
  }

  enum NullableJsonNullValueInput {
    DbNull
    JsonNull
  }

  enum ProfileScalarFieldEnum {
    userId
    location
    joiningDate
    designation
    profileImg
    designationIcon
    coverImg
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
    createdAt
    username
    password
    email
    roles
    googleId
    googleProfile
    lastName
    firstName
  }

  input Auth_UserWhereInput {
    AND: [Auth_UserWhereInput!]
    OR: [Auth_UserWhereInput!]
    NOT: [Auth_UserWhereInput!]
    id: IntFilter
    createdAt: DateTimeFilter
    username: StringNullableFilter
    password: StringNullableFilter
    email: StringFilter
    roles: StringNullableListFilter
    googleId: StringNullableFilter
    googleProfile: JsonNullableFilter
    lastName: StringNullableFilter
    firstName: StringNullableFilter
    profile: Auth_ProfileWhereInput
  }

  input Auth_UserOrderByWithRelationInput {
    id: SortOrder
    createdAt: SortOrder
    username: SortOrder
    password: SortOrder
    email: SortOrder
    roles: SortOrder
    googleId: SortOrder
    googleProfile: SortOrder
    lastName: SortOrder
    firstName: SortOrder
    profile: Auth_ProfileOrderByWithRelationInput
  }

  input Auth_UserWhereUniqueInput {
    id: Int
    username: String
    email: String
    googleId: String
    AND: [Auth_UserWhereInput!]
    OR: [Auth_UserWhereInput!]
    NOT: [Auth_UserWhereInput!]
    createdAt: DateTimeFilter
    password: StringNullableFilter
    roles: StringNullableListFilter
    googleProfile: JsonNullableFilter
    lastName: StringNullableFilter
    firstName: StringNullableFilter
    profile: Auth_ProfileWhereInput
  }

  input Auth_UserOrderByWithAggregationInput {
    id: SortOrder
    createdAt: SortOrder
    username: SortOrder
    password: SortOrder
    email: SortOrder
    roles: SortOrder
    googleId: SortOrder
    googleProfile: SortOrder
    lastName: SortOrder
    firstName: SortOrder
    _count: Auth_UserCountOrderByAggregateInput
    _avg: Auth_UserAvgOrderByAggregateInput
    _max: Auth_UserMaxOrderByAggregateInput
    _min: Auth_UserMinOrderByAggregateInput
    _sum: Auth_UserSumOrderByAggregateInput
  }

  input Auth_UserScalarWhereWithAggregatesInput {
    AND: [Auth_UserScalarWhereWithAggregatesInput!]
    OR: [Auth_UserScalarWhereWithAggregatesInput!]
    NOT: [Auth_UserScalarWhereWithAggregatesInput!]
    id: IntWithAggregatesFilter
    createdAt: DateTimeWithAggregatesFilter
    username: StringNullableWithAggregatesFilter
    password: StringNullableWithAggregatesFilter
    email: StringWithAggregatesFilter
    roles: StringNullableListFilter
    googleId: StringNullableWithAggregatesFilter
    googleProfile: JsonNullableWithAggregatesFilter
    lastName: StringNullableWithAggregatesFilter
    firstName: StringNullableWithAggregatesFilter
  }

  input Auth_ProfileWhereInput {
    AND: [Auth_ProfileWhereInput!]
    OR: [Auth_ProfileWhereInput!]
    NOT: [Auth_ProfileWhereInput!]
    userId: IntFilter
    location: StringNullableFilter
    joiningDate: DateTimeNullableFilter
    designation: StringNullableFilter
    profileImg: StringNullableFilter
    designationIcon: StringNullableFilter
    coverImg: StringNullableFilter
    user: Auth_UserWhereInput
  }

  input Auth_ProfileOrderByWithRelationInput {
    userId: SortOrder
    location: SortOrder
    joiningDate: SortOrder
    designation: SortOrder
    profileImg: SortOrder
    designationIcon: SortOrder
    coverImg: SortOrder
    user: Auth_UserOrderByWithRelationInput
  }

  input Auth_ProfileWhereUniqueInput {
    userId: Int
    AND: [Auth_ProfileWhereInput!]
    OR: [Auth_ProfileWhereInput!]
    NOT: [Auth_ProfileWhereInput!]
    location: StringNullableFilter
    joiningDate: DateTimeNullableFilter
    designation: StringNullableFilter
    profileImg: StringNullableFilter
    designationIcon: StringNullableFilter
    coverImg: StringNullableFilter
    user: Auth_UserWhereInput
  }

  input Auth_ProfileOrderByWithAggregationInput {
    userId: SortOrder
    location: SortOrder
    joiningDate: SortOrder
    designation: SortOrder
    profileImg: SortOrder
    designationIcon: SortOrder
    coverImg: SortOrder
    _count: Auth_ProfileCountOrderByAggregateInput
    _avg: Auth_ProfileAvgOrderByAggregateInput
    _max: Auth_ProfileMaxOrderByAggregateInput
    _min: Auth_ProfileMinOrderByAggregateInput
    _sum: Auth_ProfileSumOrderByAggregateInput
  }

  input Auth_ProfileScalarWhereWithAggregatesInput {
    AND: [Auth_ProfileScalarWhereWithAggregatesInput!]
    OR: [Auth_ProfileScalarWhereWithAggregatesInput!]
    NOT: [Auth_ProfileScalarWhereWithAggregatesInput!]
    userId: IntWithAggregatesFilter
    location: StringNullableWithAggregatesFilter
    joiningDate: DateTimeNullableWithAggregatesFilter
    designation: StringNullableWithAggregatesFilter
    profileImg: StringNullableWithAggregatesFilter
    designationIcon: StringNullableWithAggregatesFilter
    coverImg: StringNullableWithAggregatesFilter
  }

  input Auth_UserCreateInput {
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    profile: Auth_ProfileCreateNestedOneWithoutUserInput
  }

  input Auth_UserUncheckedCreateInput {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    profile: Auth_ProfileUncheckedCreateNestedOneWithoutUserInput
  }

  input Auth_UserUpdateInput {
    createdAt: DateTime
    username: String
    password: String
    email: String
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    profile: Auth_ProfileUpdateOneWithoutUserNestedInput
  }

  input Auth_UserUncheckedUpdateInput {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    profile: Auth_ProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  input Auth_UserCreateManyInput {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
  }

  input Auth_UserUpdateManyMutationInput {
    createdAt: DateTime
    username: String
    password: String
    email: String
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
  }

  input Auth_UserUncheckedUpdateManyInput {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
  }

  input Auth_ProfileCreateInput {
    location: String
    joiningDate: DateTime
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
    user: Auth_UserCreateNestedOneWithoutProfileInput!
  }

  input Auth_ProfileUncheckedCreateInput {
    userId: Int!
    location: String
    joiningDate: DateTime
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  input Auth_ProfileUpdateInput {
    location: String
    joiningDate: DateTime
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
    user: Auth_UserUpdateOneRequiredWithoutProfileNestedInput
  }

  input Auth_ProfileUncheckedUpdateInput {
    userId: Int
    location: String
    joiningDate: DateTime
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  input Auth_ProfileCreateManyInput {
    userId: Int!
    location: String
    joiningDate: DateTime
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  input Auth_ProfileUpdateManyMutationInput {
    location: String
    joiningDate: DateTime
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  input Auth_ProfileUncheckedUpdateManyInput {
    userId: Int
    location: String
    joiningDate: DateTime
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
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

  input DateTimeFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeFilter
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

  input StringFilter {
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
    not: NestedStringFilter
  }

  input StringNullableListFilter {
    equals: [String!]
    has: String
    hasEvery: [String!]
    hasSome: [String!]
    isEmpty: Boolean
  }

  input JsonNullableFilter {
    equals: Json
    path: [String!]
    string_contains: String
    string_starts_with: String
    string_ends_with: String
    array_contains: Json
    array_starts_with: Json
    array_ends_with: Json
    lt: Json
    lte: Json
    gt: Json
    gte: Json
    not: Json
  }

  input Auth_ProfileRelationFilter {
    is: Auth_ProfileWhereInput
    isNot: Auth_ProfileWhereInput
  }

  input Auth_UserCountOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    username: SortOrder
    password: SortOrder
    email: SortOrder
    roles: SortOrder
    googleId: SortOrder
    googleProfile: SortOrder
    lastName: SortOrder
    firstName: SortOrder
  }

  input Auth_UserAvgOrderByAggregateInput {
    id: SortOrder
  }

  input Auth_UserMaxOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    username: SortOrder
    password: SortOrder
    email: SortOrder
    googleId: SortOrder
    lastName: SortOrder
    firstName: SortOrder
  }

  input Auth_UserMinOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    username: SortOrder
    password: SortOrder
    email: SortOrder
    googleId: SortOrder
    lastName: SortOrder
    firstName: SortOrder
  }

  input Auth_UserSumOrderByAggregateInput {
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

  input DateTimeWithAggregatesFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedDateTimeFilter
    _max: NestedDateTimeFilter
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

  input StringWithAggregatesFilter {
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
    not: NestedStringWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedStringFilter
    _max: NestedStringFilter
  }

  input JsonNullableWithAggregatesFilter {
    equals: Json
    path: [String!]
    string_contains: String
    string_starts_with: String
    string_ends_with: String
    array_contains: Json
    array_starts_with: Json
    array_ends_with: Json
    lt: Json
    lte: Json
    gt: Json
    gte: Json
    not: Json
    _count: NestedIntNullableFilter
    _min: NestedJsonNullableFilter
    _max: NestedJsonNullableFilter
  }

  input DateTimeNullableFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeNullableFilter
  }

  input Auth_UserRelationFilter {
    is: Auth_UserWhereInput
    isNot: Auth_UserWhereInput
  }

  input Auth_ProfileCountOrderByAggregateInput {
    userId: SortOrder
    location: SortOrder
    joiningDate: SortOrder
    designation: SortOrder
    profileImg: SortOrder
    designationIcon: SortOrder
    coverImg: SortOrder
  }

  input Auth_ProfileAvgOrderByAggregateInput {
    userId: SortOrder
  }

  input Auth_ProfileMaxOrderByAggregateInput {
    userId: SortOrder
    location: SortOrder
    joiningDate: SortOrder
    designation: SortOrder
    profileImg: SortOrder
    designationIcon: SortOrder
    coverImg: SortOrder
  }

  input Auth_ProfileMinOrderByAggregateInput {
    userId: SortOrder
    location: SortOrder
    joiningDate: SortOrder
    designation: SortOrder
    profileImg: SortOrder
    designationIcon: SortOrder
    coverImg: SortOrder
  }

  input Auth_ProfileSumOrderByAggregateInput {
    userId: SortOrder
  }

  input DateTimeNullableWithAggregatesFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeNullableWithAggregatesFilter
    _count: NestedIntNullableFilter
    _min: NestedDateTimeNullableFilter
    _max: NestedDateTimeNullableFilter
  }

  input Auth_UserCreaterolesInput {
    set: [String!]!
  }

  input Auth_ProfileCreateNestedOneWithoutUserInput {
    create: Auth_ProfileUncheckedCreateWithoutUserInput
    connectOrCreate: Auth_ProfileCreateOrConnectWithoutUserInput
    connect: Auth_ProfileWhereUniqueInput
  }

  input Auth_ProfileUncheckedCreateNestedOneWithoutUserInput {
    create: Auth_ProfileUncheckedCreateWithoutUserInput
    connectOrCreate: Auth_ProfileCreateOrConnectWithoutUserInput
    connect: Auth_ProfileWhereUniqueInput
  }

  input DateTimeFieldUpdateOperationsInput {
    set: DateTime
  }

  input NullableStringFieldUpdateOperationsInput {
    set: String
  }

  input StringFieldUpdateOperationsInput {
    set: String
  }

  input Auth_UserUpdaterolesInput {
    set: [String!]
    push: [String!]
  }

  input Auth_ProfileUpdateOneWithoutUserNestedInput {
    create: Auth_ProfileUncheckedCreateWithoutUserInput
    connectOrCreate: Auth_ProfileCreateOrConnectWithoutUserInput
    upsert: Auth_ProfileUpsertWithoutUserInput
    disconnect: Auth_ProfileWhereInput
    delete: Auth_ProfileWhereInput
    connect: Auth_ProfileWhereUniqueInput
    update: Auth_ProfileUpdateWithoutUserInput
  }

  input IntFieldUpdateOperationsInput {
    set: Int
    increment: Int
    decrement: Int
    multiply: Int
    divide: Int
  }

  input Auth_ProfileUncheckedUpdateOneWithoutUserNestedInput {
    create: Auth_ProfileUncheckedCreateWithoutUserInput
    connectOrCreate: Auth_ProfileCreateOrConnectWithoutUserInput
    upsert: Auth_ProfileUpsertWithoutUserInput
    disconnect: Auth_ProfileWhereInput
    delete: Auth_ProfileWhereInput
    connect: Auth_ProfileWhereUniqueInput
    update: Auth_ProfileUpdateWithoutUserInput
  }

  input Auth_UserCreateNestedOneWithoutProfileInput {
    create: Auth_UserUncheckedCreateWithoutProfileInput
    connectOrCreate: Auth_UserCreateOrConnectWithoutProfileInput
    connect: Auth_UserWhereUniqueInput
  }

  input NullableDateTimeFieldUpdateOperationsInput {
    set: DateTime
  }

  input Auth_UserUpdateOneRequiredWithoutProfileNestedInput {
    create: Auth_UserUncheckedCreateWithoutProfileInput
    connectOrCreate: Auth_UserCreateOrConnectWithoutProfileInput
    upsert: Auth_UserUpsertWithoutProfileInput
    connect: Auth_UserWhereUniqueInput
    update: Auth_UserUpdateWithoutProfileInput
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

  input NestedDateTimeFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeFilter
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

  input NestedStringFilter {
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
    not: NestedStringFilter
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

  input NestedDateTimeWithAggregatesFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedDateTimeFilter
    _max: NestedDateTimeFilter
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

  input NestedStringWithAggregatesFilter {
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
    not: NestedStringWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedStringFilter
    _max: NestedStringFilter
  }

  input NestedJsonNullableFilter {
    equals: Json
    path: [String!]
    string_contains: String
    string_starts_with: String
    string_ends_with: String
    array_contains: Json
    array_starts_with: Json
    array_ends_with: Json
    lt: Json
    lte: Json
    gt: Json
    gte: Json
    not: Json
  }

  input NestedDateTimeNullableFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeNullableFilter
  }

  input NestedDateTimeNullableWithAggregatesFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeNullableWithAggregatesFilter
    _count: NestedIntNullableFilter
    _min: NestedDateTimeNullableFilter
    _max: NestedDateTimeNullableFilter
  }

  input Auth_ProfileCreateWithoutUserInput {
    location: String
    joiningDate: DateTime
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  input Auth_ProfileUncheckedCreateWithoutUserInput {
    location: String
    joiningDate: DateTime
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  input Auth_ProfileCreateOrConnectWithoutUserInput {
    where: Auth_ProfileWhereUniqueInput!
    create: Auth_ProfileUncheckedCreateWithoutUserInput!
  }

  input Auth_ProfileUpsertWithoutUserInput {
    update: Auth_ProfileUncheckedUpdateWithoutUserInput!
    create: Auth_ProfileUncheckedCreateWithoutUserInput!
    where: Auth_ProfileWhereInput
  }

  input Auth_ProfileUpdateToOneWithWhereWithoutUserInput {
    where: Auth_ProfileWhereInput
    data: Auth_ProfileUncheckedUpdateWithoutUserInput!
  }

  input Auth_ProfileUpdateWithoutUserInput {
    location: String
    joiningDate: DateTime
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  input Auth_ProfileUncheckedUpdateWithoutUserInput {
    location: String
    joiningDate: DateTime
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  input Auth_UserCreateWithoutProfileInput {
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
  }

  input Auth_UserUncheckedCreateWithoutProfileInput {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
  }

  input Auth_UserCreateOrConnectWithoutProfileInput {
    where: Auth_UserWhereUniqueInput!
    create: Auth_UserUncheckedCreateWithoutProfileInput!
  }

  input Auth_UserUpsertWithoutProfileInput {
    update: Auth_UserUncheckedUpdateWithoutProfileInput!
    create: Auth_UserUncheckedCreateWithoutProfileInput!
    where: Auth_UserWhereInput
  }

  input Auth_UserUpdateToOneWithWhereWithoutProfileInput {
    where: Auth_UserWhereInput
    data: Auth_UserUncheckedUpdateWithoutProfileInput!
  }

  input Auth_UserUpdateWithoutProfileInput {
    createdAt: DateTime
    username: String
    password: String
    email: String
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
  }

  input Auth_UserUncheckedUpdateWithoutProfileInput {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
  }

  type AggregateUser @shareable {
    _count: UserCountAggregateOutputType
    _avg: UserAvgAggregateOutputType
    _sum: UserSumAggregateOutputType
    _min: UserMinAggregateOutputType
    _max: UserMaxAggregateOutputType
  }

  type UserGroupByOutputType @key(fields: "id") @key(fields: "email") @shareable {
    id: Int!
    createdAt: DateTime!
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    _count: UserCountAggregateOutputType
    _avg: UserAvgAggregateOutputType
    _sum: UserSumAggregateOutputType
    _min: UserMinAggregateOutputType
    _max: UserMaxAggregateOutputType
  }

  type AggregateProfile @shareable {
    _count: ProfileCountAggregateOutputType
    _avg: ProfileAvgAggregateOutputType
    _sum: ProfileSumAggregateOutputType
    _min: ProfileMinAggregateOutputType
    _max: ProfileMaxAggregateOutputType
  }

  type ProfileGroupByOutputType @key(fields: "userId") @shareable {
    userId: Int!
    location: String
    joiningDate: DateTime
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
    _count: ProfileCountAggregateOutputType
    _avg: ProfileAvgAggregateOutputType
    _sum: ProfileSumAggregateOutputType
    _min: ProfileMinAggregateOutputType
    _max: ProfileMaxAggregateOutputType
  }

  type UserCountAggregateOutputType @key(fields: "id") @key(fields: "email") @shareable {
    id: Int!
    createdAt: Int!
    username: Int!
    password: Int!
    email: Int!
    roles: Int!
    googleId: Int!
    googleProfile: Int!
    lastName: Int!
    firstName: Int!
    _all: Int!
  }

  type UserAvgAggregateOutputType @key(fields: "id") @shareable {
    id: Float
  }

  type UserSumAggregateOutputType @key(fields: "id") @shareable {
    id: Int
  }

  type UserMinAggregateOutputType @key(fields: "id") @key(fields: "email") @shareable {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String
    googleId: String
    lastName: String
    firstName: String
  }

  type UserMaxAggregateOutputType @key(fields: "id") @key(fields: "email") @shareable {
    id: Int
    createdAt: DateTime
    username: String
    password: String
    email: String
    googleId: String
    lastName: String
    firstName: String
  }

  type ProfileCountAggregateOutputType @key(fields: "userId") @shareable {
    userId: Int!
    location: Int!
    joiningDate: Int!
    designation: Int!
    profileImg: Int!
    designationIcon: Int!
    coverImg: Int!
    _all: Int!
  }

  type ProfileAvgAggregateOutputType @key(fields: "userId") @shareable {
    userId: Float
  }

  type ProfileSumAggregateOutputType @key(fields: "userId") @shareable {
    userId: Int
  }

  type ProfileMinAggregateOutputType @key(fields: "userId") @shareable {
    userId: Int
    location: String
    joiningDate: DateTime
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  type ProfileMaxAggregateOutputType @key(fields: "userId") @shareable {
    userId: Int
    location: String
    joiningDate: DateTime
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  type TransactionSucceeded @shareable {
    transactionSucceeded: Boolean!
  }

  input Auth_createOneUserInput {
    data: Auth_UserCreateInput
  }

  input Auth_upsertOneUserInput {
    where: Auth_UserWhereUniqueInput
    create: Auth_UserCreateInput
    update: Auth_UserUpdateInput
  }

  input Auth_createManyUserInput {
    data: Auth_UserCreateManyInput
    skipDuplicates: Boolean
  }

  input Auth_deleteOneUserInput {
    where: Auth_UserWhereUniqueInput
  }

  input Auth_updateOneUserInput {
    data: Auth_UserUpdateInput
    where: Auth_UserWhereUniqueInput
  }

  input Auth_updateManyUserInput {
    data: Auth_UserUpdateManyMutationInput
    where: Auth_UserWhereInput
  }

  input Auth_deleteManyUserInput {
    where: Auth_UserWhereInput
  }

  input Auth_createOneProfileInput {
    data: Auth_ProfileCreateInput
  }

  input Auth_upsertOneProfileInput {
    where: Auth_ProfileWhereUniqueInput
    create: Auth_ProfileCreateInput
    update: Auth_ProfileUpdateInput
  }

  input Auth_createManyProfileInput {
    data: Auth_ProfileCreateManyInput
    skipDuplicates: Boolean
  }

  input Auth_deleteOneProfileInput {
    where: Auth_ProfileWhereUniqueInput
  }

  input Auth_updateOneProfileInput {
    data: Auth_ProfileUpdateInput
    where: Auth_ProfileWhereUniqueInput
  }

  input Auth_updateManyProfileInput {
    data: Auth_ProfileUpdateManyMutationInput
    where: Auth_ProfileWhereInput
  }

  input Auth_deleteManyProfileInput {
    where: Auth_ProfileWhereInput
  }

  input Auth_transactionalMutationInput {
    Auth_createOneUser: Auth_createOneUserInput
    Auth_upsertOneUser: Auth_upsertOneUserInput
    Auth_createManyUser: Auth_createManyUserInput
    Auth_deleteOneUser: Auth_deleteOneUserInput
    Auth_updateOneUser: Auth_updateOneUserInput
    Auth_updateManyUser: Auth_updateManyUserInput
    Auth_deleteManyUser: Auth_deleteManyUserInput
    Auth_createOneProfile: Auth_createOneProfileInput
    Auth_upsertOneProfile: Auth_upsertOneProfileInput
    Auth_createManyProfile: Auth_createManyProfileInput
    Auth_deleteOneProfile: Auth_deleteOneProfileInput
    Auth_updateOneProfile: Auth_updateOneProfileInput
    Auth_updateManyProfile: Auth_updateManyProfileInput
    Auth_deleteManyProfile: Auth_deleteManyProfileInput
  }
`;
