import gql from 'graphql-tag';

export default gql`
  type User @key(fields: "id") @key(fields: "email") @shareable {
    id: Int!
    createdAt: DateTime!
    username: String
    password: String
    email: String!
    roles: [String!]!
    googleId: String
    googleProfile: Json
    lastName: String
    firstName: String
    profile: Profile
    teams(
      where: Auth_UsersOnTeamsWhereInput
      orderBy: Auth_UsersOnTeamsOrderByWithRelationInput
      cursor: Auth_UsersOnTeamsWhereUniqueInput
      take: Int
      skip: Int
      distinct: UsersOnTeamsScalarFieldEnum
    ): [UsersOnTeams!]!
    calendars(
      where: Auth_CalendarsOnUsersWhereInput
      orderBy: Auth_CalendarsOnUsersOrderByWithRelationInput
      cursor: Auth_CalendarsOnUsersWhereUniqueInput
      take: Int
      skip: Int
      distinct: CalendarsOnUsersScalarFieldEnum
    ): [CalendarsOnUsers!]!
    eventsInvitedTo(
      where: Auth_UsersOnCalendarEventsWhereInput
      orderBy: Auth_UsersOnCalendarEventsOrderByWithRelationInput
      cursor: Auth_UsersOnCalendarEventsWhereUniqueInput
      take: Int
      skip: Int
      distinct: UsersOnCalendarEventsScalarFieldEnum
    ): [UsersOnCalendarEvents!]!
    contacted(
      where: Auth_UserWhereInput
      orderBy: Auth_UserOrderByWithRelationInput
      cursor: Auth_UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: UserScalarFieldEnum
    ): [User!]!
    contactedBy(
      where: Auth_UserWhereInput
      orderBy: Auth_UserOrderByWithRelationInput
      cursor: Auth_UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: UserScalarFieldEnum
    ): [User!]!
    calendarsCreated(
      where: Auth_CalendarWhereInput
      orderBy: Auth_CalendarOrderByWithRelationInput
      cursor: Auth_CalendarWhereUniqueInput
      take: Int
      skip: Int
      distinct: CalendarScalarFieldEnum
    ): [Calendar!]!
    _count: UserCountOutputType!
  }

  type Query {
    Auth_findUniqueUser(where: Auth_UserWhereUniqueInput!): User
    Auth_findUniqueUserOrThrow(where: Auth_UserWhereUniqueInput!): User
    Auth_findFirstUser(
      where: Auth_UserWhereInput
      orderBy: [Auth_UserOrderByWithRelationInput]
      cursor: Auth_UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserScalarFieldEnum]
    ): User
    Auth_findFirstUserOrThrow(
      where: Auth_UserWhereInput
      orderBy: [Auth_UserOrderByWithRelationInput]
      cursor: Auth_UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserScalarFieldEnum]
    ): User
    Auth_findManyUser(
      where: Auth_UserWhereInput
      orderBy: [Auth_UserOrderByWithRelationInput]
      cursor: Auth_UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserScalarFieldEnum]
    ): [User!]
    Auth_findManyUserCount(
      where: Auth_UserWhereInput
      orderBy: [Auth_UserOrderByWithRelationInput]
      cursor: Auth_UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserScalarFieldEnum]
    ): Int!
    Auth_aggregateUser(
      where: Auth_UserWhereInput
      orderBy: [Auth_UserOrderByWithRelationInput]
      cursor: Auth_UserWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateUser
    Auth_groupByUser(
      where: Auth_UserWhereInput
      orderBy: [Auth_UserOrderByWithAggregationInput]
      by: [UserScalarFieldEnum!]
      having: Auth_UserScalarWhereWithAggregatesInput
      take: Int
      skip: Int
    ): [UserGroupByOutputType]
  }

  type Mutation {
    Auth_createOneUser(data: Auth_UserCreateInput!): User!
    Auth_updateOneUser(data: Auth_UserUpdateInput!, where: Auth_UserWhereUniqueInput!): User!
    Auth_deleteOneUser(where: Auth_UserWhereUniqueInput!): User
    Auth_upsertOneUser(
      where: Auth_UserWhereUniqueInput!
      create: Auth_UserCreateInput!
      update: Auth_UserUpdateInput!
    ): User
    Auth_deleteManyUser(where: Auth_UserWhereInput): BatchPayload
    Auth_updateManyUser(
      data: Auth_UserUpdateManyMutationInput!
      where: Auth_UserWhereInput
    ): BatchPayload
  }
`;
