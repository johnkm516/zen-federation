import gql from 'graphql-tag';

import { CalendarEventsOnCalendarsFields } from '../fields';

export default gql`
  query FindUniqueCalendarEventsOnCalendars($where: CalendarEventsOnCalendarsWhereUniqueInput!) {
    findUniqueCalendarEventsOnCalendars(where: $where) {
      ...CalendarEventsOnCalendarsFields
    }
  }

  query FindFirstCalendarEventsOnCalendars(
    $where: CalendarEventsOnCalendarsWhereInput
    $orderBy: [CalendarEventsOnCalendarsOrderByWithRelationInput]
    $cursor: CalendarEventsOnCalendarsWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [CalendarEventsOnCalendarsScalarFieldEnum]
  ) {
    findFirstCalendarEventsOnCalendars(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      ...CalendarEventsOnCalendarsFields
    }
  }

  query FindManyCalendarEventsOnCalendars(
    $where: CalendarEventsOnCalendarsWhereInput
    $orderBy: [CalendarEventsOnCalendarsOrderByWithRelationInput]
    $cursor: CalendarEventsOnCalendarsWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [CalendarEventsOnCalendarsScalarFieldEnum]
  ) {
    findManyCalendarEventsOnCalendars(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      ...CalendarEventsOnCalendarsFields
    }
  }

  query FindManyCalendarEventsOnCalendarsCount(
    $where: CalendarEventsOnCalendarsWhereInput
    $orderBy: [CalendarEventsOnCalendarsOrderByWithRelationInput]
    $cursor: CalendarEventsOnCalendarsWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [CalendarEventsOnCalendarsScalarFieldEnum]
  ) {
    findManyCalendarEventsOnCalendarsCount(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    )
  }

  mutation CreateOneCalendarEventsOnCalendars($data: CalendarEventsOnCalendarsCreateInput!) {
    createOneCalendarEventsOnCalendars(data: $data) {
      ...CalendarEventsOnCalendarsFields
    }
  }

  mutation UpdateOneCalendarEventsOnCalendars($data: CalendarEventsOnCalendarsUpdateInput!, $where: CalendarEventsOnCalendarsWhereUniqueInput!) {
    updateOneCalendarEventsOnCalendars(data: $data, where: $where) {
      ...CalendarEventsOnCalendarsFields
    }
  }

  mutation UpdateManyCalendarEventsOnCalendars($data: CalendarEventsOnCalendarsUpdateManyMutationInput!, $where: CalendarEventsOnCalendarsWhereInput!) {
    updateManyCalendarEventsOnCalendars(data: $data, where: $where) {
      count
    }
  }

  mutation UpsertOneCalendarEventsOnCalendars(
    $where: CalendarEventsOnCalendarsWhereUniqueInput!
    $create: CalendarEventsOnCalendarsCreateInput!
    $update: CalendarEventsOnCalendarsUpdateInput!
  ) {
    upsertOneCalendarEventsOnCalendars(where: $where, create: $create, update: $update) {
      ...CalendarEventsOnCalendarsFields
    }
  }

  mutation DeleteOneCalendarEventsOnCalendars($where: CalendarEventsOnCalendarsWhereUniqueInput!) {
    deleteOneCalendarEventsOnCalendars(where: $where) {
      id
    }
  }

  mutation DeleteManyCalendarEventsOnCalendars($where: CalendarEventsOnCalendarsWhereInput!) {
    deleteManyCalendarEventsOnCalendars(where: $where) {
      count
    }
  }

  ${CalendarEventsOnCalendarsFields}
`;
