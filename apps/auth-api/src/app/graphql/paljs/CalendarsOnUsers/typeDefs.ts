import gql from 'graphql-tag';

export default gql`
  type CalendarsOnUsers
    @key(fields: "calendarAttributedToId calendarType calendarOwnerId")
    @key(fields: "calendarType calendarAttributedToId")
    @shareable {
    calendarAttributedTo: User!
    calendarAttributedToId: Int!
    calendar: Calendar!
    calendarType: String!
    calendarOwnerId: Int!
  }

  type Query {
    Auth_findUniqueCalendarsOnUsers(where: Auth_CalendarsOnUsersWhereUniqueInput!): CalendarsOnUsers
    Auth_findUniqueCalendarsOnUsersOrThrow(
      where: Auth_CalendarsOnUsersWhereUniqueInput!
    ): CalendarsOnUsers
    Auth_findFirstCalendarsOnUsers(
      where: Auth_CalendarsOnUsersWhereInput
      orderBy: [Auth_CalendarsOnUsersOrderByWithRelationInput]
      cursor: Auth_CalendarsOnUsersWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CalendarsOnUsersScalarFieldEnum]
    ): CalendarsOnUsers
    Auth_findFirstCalendarsOnUsersOrThrow(
      where: Auth_CalendarsOnUsersWhereInput
      orderBy: [Auth_CalendarsOnUsersOrderByWithRelationInput]
      cursor: Auth_CalendarsOnUsersWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CalendarsOnUsersScalarFieldEnum]
    ): CalendarsOnUsers
    Auth_findManyCalendarsOnUsers(
      where: Auth_CalendarsOnUsersWhereInput
      orderBy: [Auth_CalendarsOnUsersOrderByWithRelationInput]
      cursor: Auth_CalendarsOnUsersWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CalendarsOnUsersScalarFieldEnum]
    ): [CalendarsOnUsers!]
    Auth_findManyCalendarsOnUsersCount(
      where: Auth_CalendarsOnUsersWhereInput
      orderBy: [Auth_CalendarsOnUsersOrderByWithRelationInput]
      cursor: Auth_CalendarsOnUsersWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CalendarsOnUsersScalarFieldEnum]
    ): Int!
    Auth_aggregateCalendarsOnUsers(
      where: Auth_CalendarsOnUsersWhereInput
      orderBy: [Auth_CalendarsOnUsersOrderByWithRelationInput]
      cursor: Auth_CalendarsOnUsersWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateCalendarsOnUsers
    Auth_groupByCalendarsOnUsers(
      where: Auth_CalendarsOnUsersWhereInput
      orderBy: [Auth_CalendarsOnUsersOrderByWithAggregationInput]
      by: [CalendarsOnUsersScalarFieldEnum!]
      having: Auth_CalendarsOnUsersScalarWhereWithAggregatesInput
      take: Int
      skip: Int
    ): [CalendarsOnUsersGroupByOutputType]
  }

  type Mutation {
    Auth_createOneCalendarsOnUsers(data: Auth_CalendarsOnUsersCreateInput!): CalendarsOnUsers!
    Auth_updateOneCalendarsOnUsers(
      data: Auth_CalendarsOnUsersUpdateInput!
      where: Auth_CalendarsOnUsersWhereUniqueInput!
    ): CalendarsOnUsers!
    Auth_deleteOneCalendarsOnUsers(where: Auth_CalendarsOnUsersWhereUniqueInput!): CalendarsOnUsers
    Auth_upsertOneCalendarsOnUsers(
      where: Auth_CalendarsOnUsersWhereUniqueInput!
      create: Auth_CalendarsOnUsersCreateInput!
      update: Auth_CalendarsOnUsersUpdateInput!
    ): CalendarsOnUsers
    Auth_deleteManyCalendarsOnUsers(where: Auth_CalendarsOnUsersWhereInput): BatchPayload
    # updateMany for this model cannot exist as this model contains only unique fields or relations.
  }
`;
