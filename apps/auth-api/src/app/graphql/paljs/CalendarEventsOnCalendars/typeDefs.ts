import gql from 'graphql-tag';

export default gql`
  type CalendarEventsOnCalendars
    @key(fields: "calendarType calendarOwnerId calendarEventId")
    @shareable {
    calendarType: String!
    calendarOwnerId: Int!
    calendarEventId: Int!
    calendar: Calendar!
    calendarEvent: CalendarEvent!
  }

  type Query {
    Auth_findUniqueCalendarEventsOnCalendars(
      where: Auth_CalendarEventsOnCalendarsWhereUniqueInput!
    ): CalendarEventsOnCalendars
    Auth_findUniqueCalendarEventsOnCalendarsOrThrow(
      where: Auth_CalendarEventsOnCalendarsWhereUniqueInput!
    ): CalendarEventsOnCalendars
    Auth_findFirstCalendarEventsOnCalendars(
      where: Auth_CalendarEventsOnCalendarsWhereInput
      orderBy: [Auth_CalendarEventsOnCalendarsOrderByWithRelationInput]
      cursor: Auth_CalendarEventsOnCalendarsWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CalendarEventsOnCalendarsScalarFieldEnum]
    ): CalendarEventsOnCalendars
    Auth_findFirstCalendarEventsOnCalendarsOrThrow(
      where: Auth_CalendarEventsOnCalendarsWhereInput
      orderBy: [Auth_CalendarEventsOnCalendarsOrderByWithRelationInput]
      cursor: Auth_CalendarEventsOnCalendarsWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CalendarEventsOnCalendarsScalarFieldEnum]
    ): CalendarEventsOnCalendars
    Auth_findManyCalendarEventsOnCalendars(
      where: Auth_CalendarEventsOnCalendarsWhereInput
      orderBy: [Auth_CalendarEventsOnCalendarsOrderByWithRelationInput]
      cursor: Auth_CalendarEventsOnCalendarsWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CalendarEventsOnCalendarsScalarFieldEnum]
    ): [CalendarEventsOnCalendars!]
    Auth_findManyCalendarEventsOnCalendarsCount(
      where: Auth_CalendarEventsOnCalendarsWhereInput
      orderBy: [Auth_CalendarEventsOnCalendarsOrderByWithRelationInput]
      cursor: Auth_CalendarEventsOnCalendarsWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CalendarEventsOnCalendarsScalarFieldEnum]
    ): Int!
    Auth_aggregateCalendarEventsOnCalendars(
      where: Auth_CalendarEventsOnCalendarsWhereInput
      orderBy: [Auth_CalendarEventsOnCalendarsOrderByWithRelationInput]
      cursor: Auth_CalendarEventsOnCalendarsWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateCalendarEventsOnCalendars
    Auth_groupByCalendarEventsOnCalendars(
      where: Auth_CalendarEventsOnCalendarsWhereInput
      orderBy: [Auth_CalendarEventsOnCalendarsOrderByWithAggregationInput]
      by: [CalendarEventsOnCalendarsScalarFieldEnum!]
      having: Auth_CalendarEventsOnCalendarsScalarWhereWithAggregatesInput
      take: Int
      skip: Int
    ): [CalendarEventsOnCalendarsGroupByOutputType]
  }

  type Mutation {
    Auth_createOneCalendarEventsOnCalendars(
      data: Auth_CalendarEventsOnCalendarsCreateInput!
    ): CalendarEventsOnCalendars!
    Auth_updateOneCalendarEventsOnCalendars(
      data: Auth_CalendarEventsOnCalendarsUpdateInput!
      where: Auth_CalendarEventsOnCalendarsWhereUniqueInput!
    ): CalendarEventsOnCalendars!
    Auth_deleteOneCalendarEventsOnCalendars(
      where: Auth_CalendarEventsOnCalendarsWhereUniqueInput!
    ): CalendarEventsOnCalendars
    Auth_upsertOneCalendarEventsOnCalendars(
      where: Auth_CalendarEventsOnCalendarsWhereUniqueInput!
      create: Auth_CalendarEventsOnCalendarsCreateInput!
      update: Auth_CalendarEventsOnCalendarsUpdateInput!
    ): CalendarEventsOnCalendars
    Auth_deleteManyCalendarEventsOnCalendars(
      where: Auth_CalendarEventsOnCalendarsWhereInput
    ): BatchPayload
    # updateMany for this model cannot exist as this model contains only unique fields or relations.
  }
`;
