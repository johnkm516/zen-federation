import gql from 'graphql-tag';

import { CalendarEventFields } from '../fields';

export default gql`
  query FindUniqueCalendarEvent($where: CalendarEventWhereUniqueInput!) {
    findUniqueCalendarEvent(where: $where) {
      ...CalendarEventFields
    }
  }

  query FindFirstCalendarEvent(
    $where: CalendarEventWhereInput
    $orderBy: [CalendarEventOrderByWithRelationInput]
    $cursor: CalendarEventWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [CalendarEventScalarFieldEnum]
  ) {
    findFirstCalendarEvent(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      ...CalendarEventFields
    }
  }

  query FindManyCalendarEvent(
    $where: CalendarEventWhereInput
    $orderBy: [CalendarEventOrderByWithRelationInput]
    $cursor: CalendarEventWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [CalendarEventScalarFieldEnum]
  ) {
    findManyCalendarEvent(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      ...CalendarEventFields
    }
  }

  query FindManyCalendarEventCount(
    $where: CalendarEventWhereInput
    $orderBy: [CalendarEventOrderByWithRelationInput]
    $cursor: CalendarEventWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [CalendarEventScalarFieldEnum]
  ) {
    findManyCalendarEventCount(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    )
  }

  mutation CreateOneCalendarEvent($data: CalendarEventCreateInput!) {
    createOneCalendarEvent(data: $data) {
      ...CalendarEventFields
    }
  }

  mutation UpdateOneCalendarEvent($data: CalendarEventUpdateInput!, $where: CalendarEventWhereUniqueInput!) {
    updateOneCalendarEvent(data: $data, where: $where) {
      ...CalendarEventFields
    }
  }

  mutation UpdateManyCalendarEvent($data: CalendarEventUpdateManyMutationInput!, $where: CalendarEventWhereInput!) {
    updateManyCalendarEvent(data: $data, where: $where) {
      count
    }
  }

  mutation UpsertOneCalendarEvent(
    $where: CalendarEventWhereUniqueInput!
    $create: CalendarEventCreateInput!
    $update: CalendarEventUpdateInput!
  ) {
    upsertOneCalendarEvent(where: $where, create: $create, update: $update) {
      ...CalendarEventFields
    }
  }

  mutation DeleteOneCalendarEvent($where: CalendarEventWhereUniqueInput!) {
    deleteOneCalendarEvent(where: $where) {
      id
    }
  }

  mutation DeleteManyCalendarEvent($where: CalendarEventWhereInput!) {
    deleteManyCalendarEvent(where: $where) {
      count
    }
  }

  ${CalendarEventFields}
`;
