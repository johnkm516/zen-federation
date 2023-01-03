import gql from 'graphql-tag';

export default gql`
  type CalendarEvent @key(fields: "id") @shareable {
    id: Int!
    url: String
    title: String!
    start: DateTime!
    end: DateTime!
    allDay: Boolean!
    calendar(
      where: Auth_CalendarEventsOnCalendarsWhereInput
      orderBy: Auth_CalendarEventsOnCalendarsOrderByWithRelationInput
      cursor: Auth_CalendarEventsOnCalendarsWhereUniqueInput
      take: Int
      skip: Int
      distinct: CalendarEventsOnCalendarsScalarFieldEnum
    ): [CalendarEventsOnCalendars!]!
    _count: CalendarEventCountOutputType!
  }

  type Query {
    Auth_findUniqueCalendarEvent(where: Auth_CalendarEventWhereUniqueInput!): CalendarEvent
    Auth_findUniqueCalendarEventOrThrow(where: Auth_CalendarEventWhereUniqueInput!): CalendarEvent
    Auth_findFirstCalendarEvent(
      where: Auth_CalendarEventWhereInput
      orderBy: [Auth_CalendarEventOrderByWithRelationInput]
      cursor: Auth_CalendarEventWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CalendarEventScalarFieldEnum]
    ): CalendarEvent
    Auth_findFirstCalendarEventOrThrow(
      where: Auth_CalendarEventWhereInput
      orderBy: [Auth_CalendarEventOrderByWithRelationInput]
      cursor: Auth_CalendarEventWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CalendarEventScalarFieldEnum]
    ): CalendarEvent
    Auth_findManyCalendarEvent(
      where: Auth_CalendarEventWhereInput
      orderBy: [Auth_CalendarEventOrderByWithRelationInput]
      cursor: Auth_CalendarEventWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CalendarEventScalarFieldEnum]
    ): [CalendarEvent!]
    Auth_findManyCalendarEventCount(
      where: Auth_CalendarEventWhereInput
      orderBy: [Auth_CalendarEventOrderByWithRelationInput]
      cursor: Auth_CalendarEventWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CalendarEventScalarFieldEnum]
    ): Int!
    Auth_aggregateCalendarEvent(
      where: Auth_CalendarEventWhereInput
      orderBy: [Auth_CalendarEventOrderByWithRelationInput]
      cursor: Auth_CalendarEventWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateCalendarEvent
    Auth_groupByCalendarEvent(
      where: Auth_CalendarEventWhereInput
      orderBy: [Auth_CalendarEventOrderByWithAggregationInput]
      by: [CalendarEventScalarFieldEnum!]
      having: Auth_CalendarEventScalarWhereWithAggregatesInput
      take: Int
      skip: Int
    ): [CalendarEventGroupByOutputType]
  }

  type Mutation {
    Auth_createOneCalendarEvent(data: Auth_CalendarEventCreateInput!): CalendarEvent!
    Auth_updateOneCalendarEvent(
      data: Auth_CalendarEventUpdateInput!
      where: Auth_CalendarEventWhereUniqueInput!
    ): CalendarEvent!
    Auth_deleteOneCalendarEvent(where: Auth_CalendarEventWhereUniqueInput!): CalendarEvent
    Auth_upsertOneCalendarEvent(
      where: Auth_CalendarEventWhereUniqueInput!
      create: Auth_CalendarEventCreateInput!
      update: Auth_CalendarEventUpdateInput!
    ): CalendarEvent
    Auth_deleteManyCalendarEvent(where: Auth_CalendarEventWhereInput): BatchPayload
    Auth_updateManyCalendarEvent(
      data: Auth_CalendarEventUpdateManyMutationInput!
      where: Auth_CalendarEventWhereInput
    ): BatchPayload
  }
`;
