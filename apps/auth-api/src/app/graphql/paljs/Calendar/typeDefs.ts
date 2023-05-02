import gql from 'graphql-tag';

export default gql`
  type Calendar @key(fields: "calendarOwnerId calendarType") @shareable {
    calendarType: String!
    calendarOwnerId: Int!
    users(
      where: Auth_CalendarsOnUsersWhereInput
      orderBy: Auth_CalendarsOnUsersOrderByWithRelationInput
      cursor: Auth_CalendarsOnUsersWhereUniqueInput
      take: Int
      skip: Int
      distinct: CalendarsOnUsersScalarFieldEnum
    ): [CalendarsOnUsers!]!
    calendarEvents(
      where: Auth_CalendarEventsOnCalendarsWhereInput
      orderBy: Auth_CalendarEventsOnCalendarsOrderByWithRelationInput
      cursor: Auth_CalendarEventsOnCalendarsWhereUniqueInput
      take: Int
      skip: Int
      distinct: CalendarEventsOnCalendarsScalarFieldEnum
    ): [CalendarEventsOnCalendars!]!
    calendarOwner: User!
    _count: CalendarCountOutputType!
  }

  type Query {
    Auth_findUniqueCalendar(where: Auth_CalendarWhereUniqueInput!): Calendar
    Auth_findUniqueCalendarOrThrow(where: Auth_CalendarWhereUniqueInput!): Calendar
    Auth_findFirstCalendar(
      where: Auth_CalendarWhereInput
      orderBy: [Auth_CalendarOrderByWithRelationInput]
      cursor: Auth_CalendarWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CalendarScalarFieldEnum]
    ): Calendar
    Auth_findFirstCalendarOrThrow(
      where: Auth_CalendarWhereInput
      orderBy: [Auth_CalendarOrderByWithRelationInput]
      cursor: Auth_CalendarWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CalendarScalarFieldEnum]
    ): Calendar
    Auth_findManyCalendar(
      where: Auth_CalendarWhereInput
      orderBy: [Auth_CalendarOrderByWithRelationInput]
      cursor: Auth_CalendarWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CalendarScalarFieldEnum]
    ): [Calendar!]
    Auth_findManyCalendarCount(
      where: Auth_CalendarWhereInput
      orderBy: [Auth_CalendarOrderByWithRelationInput]
      cursor: Auth_CalendarWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CalendarScalarFieldEnum]
    ): Int!
    Auth_aggregateCalendar(
      where: Auth_CalendarWhereInput
      orderBy: [Auth_CalendarOrderByWithRelationInput]
      cursor: Auth_CalendarWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateCalendar
    Auth_groupByCalendar(
      where: Auth_CalendarWhereInput
      orderBy: [Auth_CalendarOrderByWithAggregationInput]
      by: [CalendarScalarFieldEnum!]
      having: Auth_CalendarScalarWhereWithAggregatesInput
      take: Int
      skip: Int
    ): [CalendarGroupByOutputType]
  }

  type Mutation {
    Auth_createOneCalendar(data: Auth_CalendarCreateInput!): Calendar!
    Auth_updateOneCalendar(
      data: Auth_CalendarUpdateInput!
      where: Auth_CalendarWhereUniqueInput!
    ): Calendar!
    Auth_deleteOneCalendar(where: Auth_CalendarWhereUniqueInput!): Calendar
    Auth_upsertOneCalendar(
      where: Auth_CalendarWhereUniqueInput!
      create: Auth_CalendarCreateInput!
      update: Auth_CalendarUpdateInput!
    ): Calendar
    Auth_deleteManyCalendar(where: Auth_CalendarWhereInput): BatchPayload
    Auth_updateManyCalendar(
      data: Auth_CalendarUpdateManyMutationInput!
      where: Auth_CalendarWhereInput
    ): BatchPayload
  }
`;
