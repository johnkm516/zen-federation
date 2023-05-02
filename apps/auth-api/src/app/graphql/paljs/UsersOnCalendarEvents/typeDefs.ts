import gql from 'graphql-tag';

export default gql`
  type UsersOnCalendarEvents @key(fields: "userId calendarEventId") @shareable {
    userId: Int!
    calendarEventId: Int!
    user: User!
    calendarEvent: CalendarEvent!
  }

  type Query {
    Auth_findUniqueUsersOnCalendarEvents(
      where: Auth_UsersOnCalendarEventsWhereUniqueInput!
    ): UsersOnCalendarEvents
    Auth_findUniqueUsersOnCalendarEventsOrThrow(
      where: Auth_UsersOnCalendarEventsWhereUniqueInput!
    ): UsersOnCalendarEvents
    Auth_findFirstUsersOnCalendarEvents(
      where: Auth_UsersOnCalendarEventsWhereInput
      orderBy: [Auth_UsersOnCalendarEventsOrderByWithRelationInput]
      cursor: Auth_UsersOnCalendarEventsWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UsersOnCalendarEventsScalarFieldEnum]
    ): UsersOnCalendarEvents
    Auth_findFirstUsersOnCalendarEventsOrThrow(
      where: Auth_UsersOnCalendarEventsWhereInput
      orderBy: [Auth_UsersOnCalendarEventsOrderByWithRelationInput]
      cursor: Auth_UsersOnCalendarEventsWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UsersOnCalendarEventsScalarFieldEnum]
    ): UsersOnCalendarEvents
    Auth_findManyUsersOnCalendarEvents(
      where: Auth_UsersOnCalendarEventsWhereInput
      orderBy: [Auth_UsersOnCalendarEventsOrderByWithRelationInput]
      cursor: Auth_UsersOnCalendarEventsWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UsersOnCalendarEventsScalarFieldEnum]
    ): [UsersOnCalendarEvents!]
    Auth_findManyUsersOnCalendarEventsCount(
      where: Auth_UsersOnCalendarEventsWhereInput
      orderBy: [Auth_UsersOnCalendarEventsOrderByWithRelationInput]
      cursor: Auth_UsersOnCalendarEventsWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UsersOnCalendarEventsScalarFieldEnum]
    ): Int!
    Auth_aggregateUsersOnCalendarEvents(
      where: Auth_UsersOnCalendarEventsWhereInput
      orderBy: [Auth_UsersOnCalendarEventsOrderByWithRelationInput]
      cursor: Auth_UsersOnCalendarEventsWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateUsersOnCalendarEvents
    Auth_groupByUsersOnCalendarEvents(
      where: Auth_UsersOnCalendarEventsWhereInput
      orderBy: [Auth_UsersOnCalendarEventsOrderByWithAggregationInput]
      by: [UsersOnCalendarEventsScalarFieldEnum!]
      having: Auth_UsersOnCalendarEventsScalarWhereWithAggregatesInput
      take: Int
      skip: Int
    ): [UsersOnCalendarEventsGroupByOutputType]
  }

  type Mutation {
    Auth_createOneUsersOnCalendarEvents(
      data: Auth_UsersOnCalendarEventsCreateInput!
    ): UsersOnCalendarEvents!
    Auth_updateOneUsersOnCalendarEvents(
      data: Auth_UsersOnCalendarEventsUpdateInput!
      where: Auth_UsersOnCalendarEventsWhereUniqueInput!
    ): UsersOnCalendarEvents!
    Auth_deleteOneUsersOnCalendarEvents(
      where: Auth_UsersOnCalendarEventsWhereUniqueInput!
    ): UsersOnCalendarEvents
    Auth_upsertOneUsersOnCalendarEvents(
      where: Auth_UsersOnCalendarEventsWhereUniqueInput!
      create: Auth_UsersOnCalendarEventsCreateInput!
      update: Auth_UsersOnCalendarEventsUpdateInput!
    ): UsersOnCalendarEvents
    Auth_deleteManyUsersOnCalendarEvents(where: Auth_UsersOnCalendarEventsWhereInput): BatchPayload
    # updateMany for this model cannot exist as this model contains only unique fields or relations.
  }
`;
