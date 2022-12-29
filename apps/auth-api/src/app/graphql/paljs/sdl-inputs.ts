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

  enum TeamScalarFieldEnum {
    teamName
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

  enum UsersOnTeamsScalarFieldEnum {
    teamName
    userId
    assignedAt
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
    teams: Auth_UsersOnTeamsListRelationFilter
    contacted: Auth_UserListRelationFilter
    contactedBy: Auth_UserListRelationFilter
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
    teams: Auth_UsersOnTeamsOrderByRelationAggregateInput
    contacted: Auth_UserOrderByRelationAggregateInput
    contactedBy: Auth_UserOrderByRelationAggregateInput
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
    teams: Auth_UsersOnTeamsListRelationFilter
    contacted: Auth_UserListRelationFilter
    contactedBy: Auth_UserListRelationFilter
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
    user: Auth_UserWhereInput
    location: StringNullableFilter
    joiningDate: DateTimeNullableFilter
    designation: StringNullableFilter
    profileImg: StringNullableFilter
    designationIcon: StringNullableFilter
    coverImg: StringNullableFilter
  }

  input Auth_ProfileOrderByWithRelationInput {
    userId: SortOrder
    user: Auth_UserOrderByWithRelationInput
    location: SortOrder
    joiningDate: SortOrder
    designation: SortOrder
    profileImg: SortOrder
    designationIcon: SortOrder
    coverImg: SortOrder
  }

  input Auth_ProfileWhereUniqueInput {
    userId: Int
    AND: [Auth_ProfileWhereInput!]
    OR: [Auth_ProfileWhereInput!]
    NOT: [Auth_ProfileWhereInput!]
    user: Auth_UserWhereInput
    location: StringNullableFilter
    joiningDate: DateTimeNullableFilter
    designation: StringNullableFilter
    profileImg: StringNullableFilter
    designationIcon: StringNullableFilter
    coverImg: StringNullableFilter
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

  input Auth_UsersOnTeamsWhereInput {
    AND: [Auth_UsersOnTeamsWhereInput!]
    OR: [Auth_UsersOnTeamsWhereInput!]
    NOT: [Auth_UsersOnTeamsWhereInput!]
    team: Auth_TeamWhereInput
    teamName: StringFilter
    user: Auth_UserWhereInput
    userId: IntFilter
    assignedAt: DateTimeFilter
  }

  input Auth_UsersOnTeamsOrderByWithRelationInput {
    team: Auth_TeamOrderByWithRelationInput
    teamName: SortOrder
    user: Auth_UserOrderByWithRelationInput
    userId: SortOrder
    assignedAt: SortOrder
  }

  input Auth_UsersOnTeamsWhereUniqueInput {
    teamName_userId: UsersOnTeamsTeamNameUserIdCompoundUniqueInput
    AND: [Auth_UsersOnTeamsWhereInput!]
    OR: [Auth_UsersOnTeamsWhereInput!]
    NOT: [Auth_UsersOnTeamsWhereInput!]
    team: Auth_TeamWhereInput
    teamName: StringFilter
    user: Auth_UserWhereInput
    userId: IntFilter
    assignedAt: DateTimeFilter
  }

  input Auth_UsersOnTeamsOrderByWithAggregationInput {
    teamName: SortOrder
    userId: SortOrder
    assignedAt: SortOrder
    _count: Auth_UsersOnTeamsCountOrderByAggregateInput
    _avg: Auth_UsersOnTeamsAvgOrderByAggregateInput
    _max: Auth_UsersOnTeamsMaxOrderByAggregateInput
    _min: Auth_UsersOnTeamsMinOrderByAggregateInput
    _sum: Auth_UsersOnTeamsSumOrderByAggregateInput
  }

  input Auth_UsersOnTeamsScalarWhereWithAggregatesInput {
    AND: [Auth_UsersOnTeamsScalarWhereWithAggregatesInput!]
    OR: [Auth_UsersOnTeamsScalarWhereWithAggregatesInput!]
    NOT: [Auth_UsersOnTeamsScalarWhereWithAggregatesInput!]
    teamName: StringWithAggregatesFilter
    userId: IntWithAggregatesFilter
    assignedAt: DateTimeWithAggregatesFilter
  }

  input Auth_TeamWhereInput {
    AND: [Auth_TeamWhereInput!]
    OR: [Auth_TeamWhereInput!]
    NOT: [Auth_TeamWhereInput!]
    teamName: StringFilter
    users: Auth_UsersOnTeamsListRelationFilter
  }

  input Auth_TeamOrderByWithRelationInput {
    teamName: SortOrder
    users: Auth_UsersOnTeamsOrderByRelationAggregateInput
  }

  input Auth_TeamWhereUniqueInput {
    teamName: String
    AND: [Auth_TeamWhereInput!]
    OR: [Auth_TeamWhereInput!]
    NOT: [Auth_TeamWhereInput!]
    users: Auth_UsersOnTeamsListRelationFilter
  }

  input Auth_TeamOrderByWithAggregationInput {
    teamName: SortOrder
    _count: Auth_TeamCountOrderByAggregateInput
    _max: Auth_TeamMaxOrderByAggregateInput
    _min: Auth_TeamMinOrderByAggregateInput
  }

  input Auth_TeamScalarWhereWithAggregatesInput {
    AND: [Auth_TeamScalarWhereWithAggregatesInput!]
    OR: [Auth_TeamScalarWhereWithAggregatesInput!]
    NOT: [Auth_TeamScalarWhereWithAggregatesInput!]
    teamName: StringWithAggregatesFilter
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
    teams: Auth_UsersOnTeamsCreateNestedManyWithoutUserInput
    contacted: Auth_UserCreateNestedManyWithoutContactedByInput
    contactedBy: Auth_UserCreateNestedManyWithoutContactedInput
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
    teams: Auth_UsersOnTeamsUncheckedCreateNestedManyWithoutUserInput
    contacted: Auth_UserUncheckedCreateNestedManyWithoutContactedByInput
    contactedBy: Auth_UserUncheckedCreateNestedManyWithoutContactedInput
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
    teams: Auth_UsersOnTeamsUpdateManyWithoutUserNestedInput
    contacted: Auth_UserUpdateManyWithoutContactedByNestedInput
    contactedBy: Auth_UserUpdateManyWithoutContactedNestedInput
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
    teams: Auth_UsersOnTeamsUncheckedUpdateManyWithoutUserNestedInput
    contacted: Auth_UserUncheckedUpdateManyWithoutContactedByNestedInput
    contactedBy: Auth_UserUncheckedUpdateManyWithoutContactedNestedInput
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
    user: Auth_UserCreateNestedOneWithoutProfileInput!
    location: String
    joiningDate: DateTime
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
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
    user: Auth_UserUpdateOneRequiredWithoutProfileNestedInput
    location: String
    joiningDate: DateTime
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
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

  input Auth_UsersOnTeamsCreateInput {
    team: Auth_TeamCreateNestedOneWithoutUsersInput!
    user: Auth_UserCreateNestedOneWithoutTeamsInput!
    assignedAt: DateTime
  }

  input Auth_UsersOnTeamsUncheckedCreateInput {
    teamName: String!
    userId: Int!
    assignedAt: DateTime
  }

  input Auth_UsersOnTeamsUpdateInput {
    team: Auth_TeamUpdateOneRequiredWithoutUsersNestedInput
    user: Auth_UserUpdateOneRequiredWithoutTeamsNestedInput
    assignedAt: DateTime
  }

  input Auth_UsersOnTeamsUncheckedUpdateInput {
    teamName: String
    userId: Int
    assignedAt: DateTime
  }

  input Auth_UsersOnTeamsCreateManyInput {
    teamName: String!
    userId: Int!
    assignedAt: DateTime
  }

  input Auth_UsersOnTeamsUpdateManyMutationInput {
    assignedAt: DateTime
  }

  input Auth_UsersOnTeamsUncheckedUpdateManyInput {
    teamName: String
    userId: Int
    assignedAt: DateTime
  }

  input Auth_TeamCreateInput {
    teamName: String!
    users: Auth_UsersOnTeamsCreateNestedManyWithoutTeamInput
  }

  input Auth_TeamUncheckedCreateInput {
    teamName: String!
    users: Auth_UsersOnTeamsUncheckedCreateNestedManyWithoutTeamInput
  }

  input Auth_TeamUpdateInput {
    teamName: String
    users: Auth_UsersOnTeamsUpdateManyWithoutTeamNestedInput
  }

  input Auth_TeamUncheckedUpdateInput {
    teamName: String
    users: Auth_UsersOnTeamsUncheckedUpdateManyWithoutTeamNestedInput
  }

  input Auth_TeamCreateManyInput {
    teamName: String!
  }

  input Auth_TeamUpdateManyMutationInput {
    teamName: String
  }

  input Auth_TeamUncheckedUpdateManyInput {
    teamName: String
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

  input Auth_UsersOnTeamsListRelationFilter {
    every: Auth_UsersOnTeamsWhereInput
    some: Auth_UsersOnTeamsWhereInput
    none: Auth_UsersOnTeamsWhereInput
  }

  input Auth_UserListRelationFilter {
    every: Auth_UserWhereInput
    some: Auth_UserWhereInput
    none: Auth_UserWhereInput
  }

  input Auth_UsersOnTeamsOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input Auth_UserOrderByRelationAggregateInput {
    _count: SortOrder
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

  input Auth_UserRelationFilter {
    is: Auth_UserWhereInput
    isNot: Auth_UserWhereInput
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

  input Auth_TeamRelationFilter {
    is: Auth_TeamWhereInput
    isNot: Auth_TeamWhereInput
  }

  input UsersOnTeamsTeamNameUserIdCompoundUniqueInput {
    teamName: String!
    userId: Int!
  }

  input Auth_UsersOnTeamsCountOrderByAggregateInput {
    teamName: SortOrder
    userId: SortOrder
    assignedAt: SortOrder
  }

  input Auth_UsersOnTeamsAvgOrderByAggregateInput {
    userId: SortOrder
  }

  input Auth_UsersOnTeamsMaxOrderByAggregateInput {
    teamName: SortOrder
    userId: SortOrder
    assignedAt: SortOrder
  }

  input Auth_UsersOnTeamsMinOrderByAggregateInput {
    teamName: SortOrder
    userId: SortOrder
    assignedAt: SortOrder
  }

  input Auth_UsersOnTeamsSumOrderByAggregateInput {
    userId: SortOrder
  }

  input Auth_TeamCountOrderByAggregateInput {
    teamName: SortOrder
  }

  input Auth_TeamMaxOrderByAggregateInput {
    teamName: SortOrder
  }

  input Auth_TeamMinOrderByAggregateInput {
    teamName: SortOrder
  }

  input Auth_UserCreaterolesInput {
    set: [String!]!
  }

  input Auth_ProfileCreateNestedOneWithoutUserInput {
    create: Auth_ProfileUncheckedCreateWithoutUserInput
    connectOrCreate: Auth_ProfileCreateOrConnectWithoutUserInput
    connect: Auth_ProfileWhereUniqueInput
  }

  input Auth_UsersOnTeamsCreateNestedManyWithoutUserInput {
    create: [Auth_UsersOnTeamsCreateWithoutUserInput!]
    connectOrCreate: [Auth_UsersOnTeamsCreateOrConnectWithoutUserInput!]
    createMany: Auth_UsersOnTeamsCreateManyUserInputEnvelope
    connect: [Auth_UsersOnTeamsWhereUniqueInput!]
  }

  input Auth_UserCreateNestedManyWithoutContactedByInput {
    create: [Auth_UserCreateWithoutContactedByInput!]
    connectOrCreate: [Auth_UserCreateOrConnectWithoutContactedByInput!]
    connect: [Auth_UserWhereUniqueInput!]
  }

  input Auth_UserCreateNestedManyWithoutContactedInput {
    create: [Auth_UserCreateWithoutContactedInput!]
    connectOrCreate: [Auth_UserCreateOrConnectWithoutContactedInput!]
    connect: [Auth_UserWhereUniqueInput!]
  }

  input Auth_ProfileUncheckedCreateNestedOneWithoutUserInput {
    create: Auth_ProfileUncheckedCreateWithoutUserInput
    connectOrCreate: Auth_ProfileCreateOrConnectWithoutUserInput
    connect: Auth_ProfileWhereUniqueInput
  }

  input Auth_UsersOnTeamsUncheckedCreateNestedManyWithoutUserInput {
    create: [Auth_UsersOnTeamsCreateWithoutUserInput!]
    connectOrCreate: [Auth_UsersOnTeamsCreateOrConnectWithoutUserInput!]
    createMany: Auth_UsersOnTeamsCreateManyUserInputEnvelope
    connect: [Auth_UsersOnTeamsWhereUniqueInput!]
  }

  input Auth_UserUncheckedCreateNestedManyWithoutContactedByInput {
    create: [Auth_UserCreateWithoutContactedByInput!]
    connectOrCreate: [Auth_UserCreateOrConnectWithoutContactedByInput!]
    connect: [Auth_UserWhereUniqueInput!]
  }

  input Auth_UserUncheckedCreateNestedManyWithoutContactedInput {
    create: [Auth_UserCreateWithoutContactedInput!]
    connectOrCreate: [Auth_UserCreateOrConnectWithoutContactedInput!]
    connect: [Auth_UserWhereUniqueInput!]
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

  input Auth_UsersOnTeamsUpdateManyWithoutUserNestedInput {
    create: [Auth_UsersOnTeamsCreateWithoutUserInput!]
    connectOrCreate: [Auth_UsersOnTeamsCreateOrConnectWithoutUserInput!]
    upsert: [Auth_UsersOnTeamsUpsertWithWhereUniqueWithoutUserInput!]
    createMany: Auth_UsersOnTeamsCreateManyUserInputEnvelope
    set: [Auth_UsersOnTeamsWhereUniqueInput!]
    disconnect: [Auth_UsersOnTeamsWhereUniqueInput!]
    delete: [Auth_UsersOnTeamsWhereUniqueInput!]
    connect: [Auth_UsersOnTeamsWhereUniqueInput!]
    update: [Auth_UsersOnTeamsUpdateWithWhereUniqueWithoutUserInput!]
    updateMany: [Auth_UsersOnTeamsUpdateManyWithWhereWithoutUserInput!]
    deleteMany: [Auth_UsersOnTeamsScalarWhereInput!]
  }

  input Auth_UserUpdateManyWithoutContactedByNestedInput {
    create: [Auth_UserCreateWithoutContactedByInput!]
    connectOrCreate: [Auth_UserCreateOrConnectWithoutContactedByInput!]
    upsert: [Auth_UserUpsertWithWhereUniqueWithoutContactedByInput!]
    set: [Auth_UserWhereUniqueInput!]
    disconnect: [Auth_UserWhereUniqueInput!]
    delete: [Auth_UserWhereUniqueInput!]
    connect: [Auth_UserWhereUniqueInput!]
    update: [Auth_UserUpdateWithWhereUniqueWithoutContactedByInput!]
    updateMany: [Auth_UserUpdateManyWithWhereWithoutContactedByInput!]
    deleteMany: [Auth_UserScalarWhereInput!]
  }

  input Auth_UserUpdateManyWithoutContactedNestedInput {
    create: [Auth_UserCreateWithoutContactedInput!]
    connectOrCreate: [Auth_UserCreateOrConnectWithoutContactedInput!]
    upsert: [Auth_UserUpsertWithWhereUniqueWithoutContactedInput!]
    set: [Auth_UserWhereUniqueInput!]
    disconnect: [Auth_UserWhereUniqueInput!]
    delete: [Auth_UserWhereUniqueInput!]
    connect: [Auth_UserWhereUniqueInput!]
    update: [Auth_UserUpdateWithWhereUniqueWithoutContactedInput!]
    updateMany: [Auth_UserUpdateManyWithWhereWithoutContactedInput!]
    deleteMany: [Auth_UserScalarWhereInput!]
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

  input Auth_UsersOnTeamsUncheckedUpdateManyWithoutUserNestedInput {
    create: [Auth_UsersOnTeamsCreateWithoutUserInput!]
    connectOrCreate: [Auth_UsersOnTeamsCreateOrConnectWithoutUserInput!]
    upsert: [Auth_UsersOnTeamsUpsertWithWhereUniqueWithoutUserInput!]
    createMany: Auth_UsersOnTeamsCreateManyUserInputEnvelope
    set: [Auth_UsersOnTeamsWhereUniqueInput!]
    disconnect: [Auth_UsersOnTeamsWhereUniqueInput!]
    delete: [Auth_UsersOnTeamsWhereUniqueInput!]
    connect: [Auth_UsersOnTeamsWhereUniqueInput!]
    update: [Auth_UsersOnTeamsUpdateWithWhereUniqueWithoutUserInput!]
    updateMany: [Auth_UsersOnTeamsUpdateManyWithWhereWithoutUserInput!]
    deleteMany: [Auth_UsersOnTeamsScalarWhereInput!]
  }

  input Auth_UserUncheckedUpdateManyWithoutContactedByNestedInput {
    create: [Auth_UserCreateWithoutContactedByInput!]
    connectOrCreate: [Auth_UserCreateOrConnectWithoutContactedByInput!]
    upsert: [Auth_UserUpsertWithWhereUniqueWithoutContactedByInput!]
    set: [Auth_UserWhereUniqueInput!]
    disconnect: [Auth_UserWhereUniqueInput!]
    delete: [Auth_UserWhereUniqueInput!]
    connect: [Auth_UserWhereUniqueInput!]
    update: [Auth_UserUpdateWithWhereUniqueWithoutContactedByInput!]
    updateMany: [Auth_UserUpdateManyWithWhereWithoutContactedByInput!]
    deleteMany: [Auth_UserScalarWhereInput!]
  }

  input Auth_UserUncheckedUpdateManyWithoutContactedNestedInput {
    create: [Auth_UserCreateWithoutContactedInput!]
    connectOrCreate: [Auth_UserCreateOrConnectWithoutContactedInput!]
    upsert: [Auth_UserUpsertWithWhereUniqueWithoutContactedInput!]
    set: [Auth_UserWhereUniqueInput!]
    disconnect: [Auth_UserWhereUniqueInput!]
    delete: [Auth_UserWhereUniqueInput!]
    connect: [Auth_UserWhereUniqueInput!]
    update: [Auth_UserUpdateWithWhereUniqueWithoutContactedInput!]
    updateMany: [Auth_UserUpdateManyWithWhereWithoutContactedInput!]
    deleteMany: [Auth_UserScalarWhereInput!]
  }

  input Auth_UserCreateNestedOneWithoutProfileInput {
    create: Auth_UserUncheckedCreateWithoutProfileInput
    connectOrCreate: Auth_UserCreateOrConnectWithoutProfileInput
    connect: Auth_UserWhereUniqueInput
  }

  input Auth_UserUpdateOneRequiredWithoutProfileNestedInput {
    create: Auth_UserUncheckedCreateWithoutProfileInput
    connectOrCreate: Auth_UserCreateOrConnectWithoutProfileInput
    upsert: Auth_UserUpsertWithoutProfileInput
    connect: Auth_UserWhereUniqueInput
    update: Auth_UserUpdateWithoutProfileInput
  }

  input NullableDateTimeFieldUpdateOperationsInput {
    set: DateTime
  }

  input Auth_TeamCreateNestedOneWithoutUsersInput {
    create: Auth_TeamUncheckedCreateWithoutUsersInput
    connectOrCreate: Auth_TeamCreateOrConnectWithoutUsersInput
    connect: Auth_TeamWhereUniqueInput
  }

  input Auth_UserCreateNestedOneWithoutTeamsInput {
    create: Auth_UserUncheckedCreateWithoutTeamsInput
    connectOrCreate: Auth_UserCreateOrConnectWithoutTeamsInput
    connect: Auth_UserWhereUniqueInput
  }

  input Auth_TeamUpdateOneRequiredWithoutUsersNestedInput {
    create: Auth_TeamUncheckedCreateWithoutUsersInput
    connectOrCreate: Auth_TeamCreateOrConnectWithoutUsersInput
    upsert: Auth_TeamUpsertWithoutUsersInput
    connect: Auth_TeamWhereUniqueInput
    update: Auth_TeamUpdateWithoutUsersInput
  }

  input Auth_UserUpdateOneRequiredWithoutTeamsNestedInput {
    create: Auth_UserUncheckedCreateWithoutTeamsInput
    connectOrCreate: Auth_UserCreateOrConnectWithoutTeamsInput
    upsert: Auth_UserUpsertWithoutTeamsInput
    connect: Auth_UserWhereUniqueInput
    update: Auth_UserUpdateWithoutTeamsInput
  }

  input Auth_UsersOnTeamsCreateNestedManyWithoutTeamInput {
    create: [Auth_UsersOnTeamsCreateWithoutTeamInput!]
    connectOrCreate: [Auth_UsersOnTeamsCreateOrConnectWithoutTeamInput!]
    createMany: Auth_UsersOnTeamsCreateManyTeamInputEnvelope
    connect: [Auth_UsersOnTeamsWhereUniqueInput!]
  }

  input Auth_UsersOnTeamsUncheckedCreateNestedManyWithoutTeamInput {
    create: [Auth_UsersOnTeamsCreateWithoutTeamInput!]
    connectOrCreate: [Auth_UsersOnTeamsCreateOrConnectWithoutTeamInput!]
    createMany: Auth_UsersOnTeamsCreateManyTeamInputEnvelope
    connect: [Auth_UsersOnTeamsWhereUniqueInput!]
  }

  input Auth_UsersOnTeamsUpdateManyWithoutTeamNestedInput {
    create: [Auth_UsersOnTeamsCreateWithoutTeamInput!]
    connectOrCreate: [Auth_UsersOnTeamsCreateOrConnectWithoutTeamInput!]
    upsert: [Auth_UsersOnTeamsUpsertWithWhereUniqueWithoutTeamInput!]
    createMany: Auth_UsersOnTeamsCreateManyTeamInputEnvelope
    set: [Auth_UsersOnTeamsWhereUniqueInput!]
    disconnect: [Auth_UsersOnTeamsWhereUniqueInput!]
    delete: [Auth_UsersOnTeamsWhereUniqueInput!]
    connect: [Auth_UsersOnTeamsWhereUniqueInput!]
    update: [Auth_UsersOnTeamsUpdateWithWhereUniqueWithoutTeamInput!]
    updateMany: [Auth_UsersOnTeamsUpdateManyWithWhereWithoutTeamInput!]
    deleteMany: [Auth_UsersOnTeamsScalarWhereInput!]
  }

  input Auth_UsersOnTeamsUncheckedUpdateManyWithoutTeamNestedInput {
    create: [Auth_UsersOnTeamsCreateWithoutTeamInput!]
    connectOrCreate: [Auth_UsersOnTeamsCreateOrConnectWithoutTeamInput!]
    upsert: [Auth_UsersOnTeamsUpsertWithWhereUniqueWithoutTeamInput!]
    createMany: Auth_UsersOnTeamsCreateManyTeamInputEnvelope
    set: [Auth_UsersOnTeamsWhereUniqueInput!]
    disconnect: [Auth_UsersOnTeamsWhereUniqueInput!]
    delete: [Auth_UsersOnTeamsWhereUniqueInput!]
    connect: [Auth_UsersOnTeamsWhereUniqueInput!]
    update: [Auth_UsersOnTeamsUpdateWithWhereUniqueWithoutTeamInput!]
    updateMany: [Auth_UsersOnTeamsUpdateManyWithWhereWithoutTeamInput!]
    deleteMany: [Auth_UsersOnTeamsScalarWhereInput!]
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

  input Auth_UsersOnTeamsCreateWithoutUserInput {
    team: Auth_TeamCreateNestedOneWithoutUsersInput!
    assignedAt: DateTime
  }

  input Auth_UsersOnTeamsUncheckedCreateWithoutUserInput {
    teamName: String!
    assignedAt: DateTime
  }

  input Auth_UsersOnTeamsCreateOrConnectWithoutUserInput {
    where: Auth_UsersOnTeamsWhereUniqueInput!
    create: Auth_UsersOnTeamsUncheckedCreateWithoutUserInput!
  }

  input Auth_UsersOnTeamsCreateManyUserInputEnvelope {
    data: [Auth_UsersOnTeamsCreateManyUserInput!]!
    skipDuplicates: Boolean
  }

  input Auth_UserCreateWithoutContactedByInput {
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
    teams: Auth_UsersOnTeamsCreateNestedManyWithoutUserInput
    contacted: Auth_UserCreateNestedManyWithoutContactedByInput
  }

  input Auth_UserUncheckedCreateWithoutContactedByInput {
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
    teams: Auth_UsersOnTeamsUncheckedCreateNestedManyWithoutUserInput
    contacted: Auth_UserUncheckedCreateNestedManyWithoutContactedByInput
  }

  input Auth_UserCreateOrConnectWithoutContactedByInput {
    where: Auth_UserWhereUniqueInput!
    create: Auth_UserUncheckedCreateWithoutContactedByInput!
  }

  input Auth_UserCreateWithoutContactedInput {
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
    teams: Auth_UsersOnTeamsCreateNestedManyWithoutUserInput
    contactedBy: Auth_UserCreateNestedManyWithoutContactedInput
  }

  input Auth_UserUncheckedCreateWithoutContactedInput {
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
    teams: Auth_UsersOnTeamsUncheckedCreateNestedManyWithoutUserInput
    contactedBy: Auth_UserUncheckedCreateNestedManyWithoutContactedInput
  }

  input Auth_UserCreateOrConnectWithoutContactedInput {
    where: Auth_UserWhereUniqueInput!
    create: Auth_UserUncheckedCreateWithoutContactedInput!
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

  input Auth_UsersOnTeamsUpsertWithWhereUniqueWithoutUserInput {
    where: Auth_UsersOnTeamsWhereUniqueInput!
    update: Auth_UsersOnTeamsUncheckedUpdateWithoutUserInput!
    create: Auth_UsersOnTeamsUncheckedCreateWithoutUserInput!
  }

  input Auth_UsersOnTeamsUpdateWithWhereUniqueWithoutUserInput {
    where: Auth_UsersOnTeamsWhereUniqueInput!
    data: Auth_UsersOnTeamsUncheckedUpdateWithoutUserInput!
  }

  input Auth_UsersOnTeamsUpdateManyWithWhereWithoutUserInput {
    where: Auth_UsersOnTeamsScalarWhereInput!
    data: Auth_UsersOnTeamsUncheckedUpdateManyWithoutTeamsInput!
  }

  input Auth_UsersOnTeamsScalarWhereInput {
    AND: [Auth_UsersOnTeamsScalarWhereInput!]
    OR: [Auth_UsersOnTeamsScalarWhereInput!]
    NOT: [Auth_UsersOnTeamsScalarWhereInput!]
    teamName: StringFilter
    userId: IntFilter
    assignedAt: DateTimeFilter
  }

  input Auth_UserUpsertWithWhereUniqueWithoutContactedByInput {
    where: Auth_UserWhereUniqueInput!
    update: Auth_UserUncheckedUpdateWithoutContactedByInput!
    create: Auth_UserUncheckedCreateWithoutContactedByInput!
  }

  input Auth_UserUpdateWithWhereUniqueWithoutContactedByInput {
    where: Auth_UserWhereUniqueInput!
    data: Auth_UserUncheckedUpdateWithoutContactedByInput!
  }

  input Auth_UserUpdateManyWithWhereWithoutContactedByInput {
    where: Auth_UserScalarWhereInput!
    data: Auth_UserUncheckedUpdateManyWithoutContactedInput!
  }

  input Auth_UserScalarWhereInput {
    AND: [Auth_UserScalarWhereInput!]
    OR: [Auth_UserScalarWhereInput!]
    NOT: [Auth_UserScalarWhereInput!]
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
  }

  input Auth_UserUpsertWithWhereUniqueWithoutContactedInput {
    where: Auth_UserWhereUniqueInput!
    update: Auth_UserUncheckedUpdateWithoutContactedInput!
    create: Auth_UserUncheckedCreateWithoutContactedInput!
  }

  input Auth_UserUpdateWithWhereUniqueWithoutContactedInput {
    where: Auth_UserWhereUniqueInput!
    data: Auth_UserUncheckedUpdateWithoutContactedInput!
  }

  input Auth_UserUpdateManyWithWhereWithoutContactedInput {
    where: Auth_UserScalarWhereInput!
    data: Auth_UserUncheckedUpdateManyWithoutContactedByInput!
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
    teams: Auth_UsersOnTeamsCreateNestedManyWithoutUserInput
    contacted: Auth_UserCreateNestedManyWithoutContactedByInput
    contactedBy: Auth_UserCreateNestedManyWithoutContactedInput
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
    teams: Auth_UsersOnTeamsUncheckedCreateNestedManyWithoutUserInput
    contacted: Auth_UserUncheckedCreateNestedManyWithoutContactedByInput
    contactedBy: Auth_UserUncheckedCreateNestedManyWithoutContactedInput
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
    teams: Auth_UsersOnTeamsUpdateManyWithoutUserNestedInput
    contacted: Auth_UserUpdateManyWithoutContactedByNestedInput
    contactedBy: Auth_UserUpdateManyWithoutContactedNestedInput
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
    teams: Auth_UsersOnTeamsUncheckedUpdateManyWithoutUserNestedInput
    contacted: Auth_UserUncheckedUpdateManyWithoutContactedByNestedInput
    contactedBy: Auth_UserUncheckedUpdateManyWithoutContactedNestedInput
  }

  input Auth_TeamCreateWithoutUsersInput {
    teamName: String!
  }

  input Auth_TeamUncheckedCreateWithoutUsersInput {
    teamName: String!
  }

  input Auth_TeamCreateOrConnectWithoutUsersInput {
    where: Auth_TeamWhereUniqueInput!
    create: Auth_TeamUncheckedCreateWithoutUsersInput!
  }

  input Auth_UserCreateWithoutTeamsInput {
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
    contacted: Auth_UserCreateNestedManyWithoutContactedByInput
    contactedBy: Auth_UserCreateNestedManyWithoutContactedInput
  }

  input Auth_UserUncheckedCreateWithoutTeamsInput {
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
    contacted: Auth_UserUncheckedCreateNestedManyWithoutContactedByInput
    contactedBy: Auth_UserUncheckedCreateNestedManyWithoutContactedInput
  }

  input Auth_UserCreateOrConnectWithoutTeamsInput {
    where: Auth_UserWhereUniqueInput!
    create: Auth_UserUncheckedCreateWithoutTeamsInput!
  }

  input Auth_TeamUpsertWithoutUsersInput {
    update: Auth_TeamUncheckedUpdateWithoutUsersInput!
    create: Auth_TeamUncheckedCreateWithoutUsersInput!
    where: Auth_TeamWhereInput
  }

  input Auth_TeamUpdateToOneWithWhereWithoutUsersInput {
    where: Auth_TeamWhereInput
    data: Auth_TeamUncheckedUpdateWithoutUsersInput!
  }

  input Auth_TeamUpdateWithoutUsersInput {
    teamName: String
  }

  input Auth_TeamUncheckedUpdateWithoutUsersInput {
    teamName: String
  }

  input Auth_UserUpsertWithoutTeamsInput {
    update: Auth_UserUncheckedUpdateWithoutTeamsInput!
    create: Auth_UserUncheckedCreateWithoutTeamsInput!
    where: Auth_UserWhereInput
  }

  input Auth_UserUpdateToOneWithWhereWithoutTeamsInput {
    where: Auth_UserWhereInput
    data: Auth_UserUncheckedUpdateWithoutTeamsInput!
  }

  input Auth_UserUpdateWithoutTeamsInput {
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
    contacted: Auth_UserUpdateManyWithoutContactedByNestedInput
    contactedBy: Auth_UserUpdateManyWithoutContactedNestedInput
  }

  input Auth_UserUncheckedUpdateWithoutTeamsInput {
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
    contacted: Auth_UserUncheckedUpdateManyWithoutContactedByNestedInput
    contactedBy: Auth_UserUncheckedUpdateManyWithoutContactedNestedInput
  }

  input Auth_UsersOnTeamsCreateWithoutTeamInput {
    user: Auth_UserCreateNestedOneWithoutTeamsInput!
    assignedAt: DateTime
  }

  input Auth_UsersOnTeamsUncheckedCreateWithoutTeamInput {
    userId: Int!
    assignedAt: DateTime
  }

  input Auth_UsersOnTeamsCreateOrConnectWithoutTeamInput {
    where: Auth_UsersOnTeamsWhereUniqueInput!
    create: Auth_UsersOnTeamsUncheckedCreateWithoutTeamInput!
  }

  input Auth_UsersOnTeamsCreateManyTeamInputEnvelope {
    data: [Auth_UsersOnTeamsCreateManyTeamInput!]!
    skipDuplicates: Boolean
  }

  input Auth_UsersOnTeamsUpsertWithWhereUniqueWithoutTeamInput {
    where: Auth_UsersOnTeamsWhereUniqueInput!
    update: Auth_UsersOnTeamsUncheckedUpdateWithoutTeamInput!
    create: Auth_UsersOnTeamsUncheckedCreateWithoutTeamInput!
  }

  input Auth_UsersOnTeamsUpdateWithWhereUniqueWithoutTeamInput {
    where: Auth_UsersOnTeamsWhereUniqueInput!
    data: Auth_UsersOnTeamsUncheckedUpdateWithoutTeamInput!
  }

  input Auth_UsersOnTeamsUpdateManyWithWhereWithoutTeamInput {
    where: Auth_UsersOnTeamsScalarWhereInput!
    data: Auth_UsersOnTeamsUncheckedUpdateManyWithoutUsersInput!
  }

  input Auth_UsersOnTeamsCreateManyUserInput {
    teamName: String!
    assignedAt: DateTime
  }

  input Auth_UsersOnTeamsUpdateWithoutUserInput {
    team: Auth_TeamUpdateOneRequiredWithoutUsersNestedInput
    assignedAt: DateTime
  }

  input Auth_UsersOnTeamsUncheckedUpdateWithoutUserInput {
    teamName: String
    assignedAt: DateTime
  }

  input Auth_UsersOnTeamsUncheckedUpdateManyWithoutTeamsInput {
    teamName: String
    assignedAt: DateTime
  }

  input Auth_UserUpdateWithoutContactedByInput {
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
    teams: Auth_UsersOnTeamsUpdateManyWithoutUserNestedInput
    contacted: Auth_UserUpdateManyWithoutContactedByNestedInput
  }

  input Auth_UserUncheckedUpdateWithoutContactedByInput {
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
    teams: Auth_UsersOnTeamsUncheckedUpdateManyWithoutUserNestedInput
    contacted: Auth_UserUncheckedUpdateManyWithoutContactedByNestedInput
  }

  input Auth_UserUncheckedUpdateManyWithoutContactedInput {
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

  input Auth_UserUpdateWithoutContactedInput {
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
    teams: Auth_UsersOnTeamsUpdateManyWithoutUserNestedInput
    contactedBy: Auth_UserUpdateManyWithoutContactedNestedInput
  }

  input Auth_UserUncheckedUpdateWithoutContactedInput {
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
    teams: Auth_UsersOnTeamsUncheckedUpdateManyWithoutUserNestedInput
    contactedBy: Auth_UserUncheckedUpdateManyWithoutContactedNestedInput
  }

  input Auth_UserUncheckedUpdateManyWithoutContactedByInput {
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

  input Auth_UsersOnTeamsCreateManyTeamInput {
    userId: Int!
    assignedAt: DateTime
  }

  input Auth_UsersOnTeamsUpdateWithoutTeamInput {
    user: Auth_UserUpdateOneRequiredWithoutTeamsNestedInput
    assignedAt: DateTime
  }

  input Auth_UsersOnTeamsUncheckedUpdateWithoutTeamInput {
    userId: Int
    assignedAt: DateTime
  }

  input Auth_UsersOnTeamsUncheckedUpdateManyWithoutUsersInput {
    userId: Int
    assignedAt: DateTime
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

  type AggregateUsersOnTeams @shareable {
    _count: UsersOnTeamsCountAggregateOutputType
    _avg: UsersOnTeamsAvgAggregateOutputType
    _sum: UsersOnTeamsSumAggregateOutputType
    _min: UsersOnTeamsMinAggregateOutputType
    _max: UsersOnTeamsMaxAggregateOutputType
  }

  type UsersOnTeamsGroupByOutputType @key(fields: "teamName userId") @shareable {
    teamName: String!
    userId: Int!
    assignedAt: DateTime!
    _count: UsersOnTeamsCountAggregateOutputType
    _avg: UsersOnTeamsAvgAggregateOutputType
    _sum: UsersOnTeamsSumAggregateOutputType
    _min: UsersOnTeamsMinAggregateOutputType
    _max: UsersOnTeamsMaxAggregateOutputType
  }

  type AggregateTeam @shareable {
    _count: TeamCountAggregateOutputType
    _min: TeamMinAggregateOutputType
    _max: TeamMaxAggregateOutputType
  }

  type TeamGroupByOutputType @key(fields: "teamName") @shareable {
    teamName: String!
    _count: TeamCountAggregateOutputType
    _min: TeamMinAggregateOutputType
    _max: TeamMaxAggregateOutputType
  }

  type UserCountOutputType @shareable {
    teams: Int!
    contacted: Int!
    contactedBy: Int!
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

  type UsersOnTeamsCountAggregateOutputType @key(fields: "teamName userId") @shareable {
    teamName: Int!
    userId: Int!
    assignedAt: Int!
    _all: Int!
  }

  type UsersOnTeamsAvgAggregateOutputType @shareable {
    userId: Float
  }

  type UsersOnTeamsSumAggregateOutputType @shareable {
    userId: Int
  }

  type UsersOnTeamsMinAggregateOutputType @key(fields: "teamName userId") @shareable {
    teamName: String
    userId: Int
    assignedAt: DateTime
  }

  type UsersOnTeamsMaxAggregateOutputType @key(fields: "teamName userId") @shareable {
    teamName: String
    userId: Int
    assignedAt: DateTime
  }

  type TeamCountOutputType @shareable {
    users: Int!
  }

  type TeamCountAggregateOutputType @key(fields: "teamName") @shareable {
    teamName: Int!
    _all: Int!
  }

  type TeamMinAggregateOutputType @key(fields: "teamName") @shareable {
    teamName: String
  }

  type TeamMaxAggregateOutputType @key(fields: "teamName") @shareable {
    teamName: String
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
    data: [Auth_UserCreateManyInput]
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
    data: [Auth_ProfileCreateManyInput]
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

  input Auth_createOneUsersOnTeamsInput {
    data: Auth_UsersOnTeamsCreateInput
  }

  input Auth_upsertOneUsersOnTeamsInput {
    where: Auth_UsersOnTeamsWhereUniqueInput
    create: Auth_UsersOnTeamsCreateInput
    update: Auth_UsersOnTeamsUpdateInput
  }

  input Auth_createManyUsersOnTeamsInput {
    data: [Auth_UsersOnTeamsCreateManyInput]
    skipDuplicates: Boolean
  }

  input Auth_deleteOneUsersOnTeamsInput {
    where: Auth_UsersOnTeamsWhereUniqueInput
  }

  input Auth_updateOneUsersOnTeamsInput {
    data: Auth_UsersOnTeamsUpdateInput
    where: Auth_UsersOnTeamsWhereUniqueInput
  }

  input Auth_updateManyUsersOnTeamsInput {
    data: Auth_UsersOnTeamsUpdateManyMutationInput
    where: Auth_UsersOnTeamsWhereInput
  }

  input Auth_deleteManyUsersOnTeamsInput {
    where: Auth_UsersOnTeamsWhereInput
  }

  input Auth_createOneTeamInput {
    data: Auth_TeamCreateInput
  }

  input Auth_upsertOneTeamInput {
    where: Auth_TeamWhereUniqueInput
    create: Auth_TeamCreateInput
    update: Auth_TeamUpdateInput
  }

  input Auth_createManyTeamInput {
    data: [Auth_TeamCreateManyInput]
    skipDuplicates: Boolean
  }

  input Auth_deleteOneTeamInput {
    where: Auth_TeamWhereUniqueInput
  }

  input Auth_updateOneTeamInput {
    data: Auth_TeamUpdateInput
    where: Auth_TeamWhereUniqueInput
  }

  input Auth_updateManyTeamInput {
    data: Auth_TeamUpdateManyMutationInput
    where: Auth_TeamWhereInput
  }

  input Auth_deleteManyTeamInput {
    where: Auth_TeamWhereInput
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
    Auth_createOneUsersOnTeams: Auth_createOneUsersOnTeamsInput
    Auth_upsertOneUsersOnTeams: Auth_upsertOneUsersOnTeamsInput
    Auth_createManyUsersOnTeams: Auth_createManyUsersOnTeamsInput
    Auth_deleteOneUsersOnTeams: Auth_deleteOneUsersOnTeamsInput
    Auth_updateOneUsersOnTeams: Auth_updateOneUsersOnTeamsInput
    Auth_updateManyUsersOnTeams: Auth_updateManyUsersOnTeamsInput
    Auth_deleteManyUsersOnTeams: Auth_deleteManyUsersOnTeamsInput
    Auth_createOneTeam: Auth_createOneTeamInput
    Auth_upsertOneTeam: Auth_upsertOneTeamInput
    Auth_createManyTeam: Auth_createManyTeamInput
    Auth_deleteOneTeam: Auth_deleteOneTeamInput
    Auth_updateOneTeam: Auth_updateOneTeamInput
    Auth_updateManyTeam: Auth_updateManyTeamInput
    Auth_deleteManyTeam: Auth_deleteManyTeamInput
  }
`;
