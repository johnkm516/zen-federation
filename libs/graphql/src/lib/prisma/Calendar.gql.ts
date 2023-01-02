import gql from 'graphql-tag';

import { CalendarFields } from '../fields';

export default gql`
  query FindUniqueCalendar($where: CalendarWhereUniqueInput!) {
    findUniqueCalendar(where: $where) {
      ...CalendarFields
    }
  }

  query FindFirstCalendar(
    $where: CalendarWhereInput
    $orderBy: [CalendarOrderByWithRelationInput]
    $cursor: CalendarWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [CalendarScalarFieldEnum]
  ) {
    findFirstCalendar(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      ...CalendarFields
    }
  }

  query FindManyCalendar(
    $where: CalendarWhereInput
    $orderBy: [CalendarOrderByWithRelationInput]
    $cursor: CalendarWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [CalendarScalarFieldEnum]
  ) {
    findManyCalendar(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      ...CalendarFields
    }
  }

  query FindManyCalendarCount(
    $where: CalendarWhereInput
    $orderBy: [CalendarOrderByWithRelationInput]
    $cursor: CalendarWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [CalendarScalarFieldEnum]
  ) {
    findManyCalendarCount(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    )
  }

  mutation CreateOneCalendar($data: CalendarCreateInput!) {
    createOneCalendar(data: $data) {
      ...CalendarFields
    }
  }

  mutation UpdateOneCalendar($data: CalendarUpdateInput!, $where: CalendarWhereUniqueInput!) {
    updateOneCalendar(data: $data, where: $where) {
      ...CalendarFields
    }
  }

  mutation UpdateManyCalendar($data: CalendarUpdateManyMutationInput!, $where: CalendarWhereInput!) {
    updateManyCalendar(data: $data, where: $where) {
      count
    }
  }

  mutation UpsertOneCalendar(
    $where: CalendarWhereUniqueInput!
    $create: CalendarCreateInput!
    $update: CalendarUpdateInput!
  ) {
    upsertOneCalendar(where: $where, create: $create, update: $update) {
      ...CalendarFields
    }
  }

  mutation DeleteOneCalendar($where: CalendarWhereUniqueInput!) {
    deleteOneCalendar(where: $where) {
      id
    }
  }

  mutation DeleteManyCalendar($where: CalendarWhereInput!) {
    deleteManyCalendar(where: $where) {
      count
    }
  }

  ${CalendarFields}
`;
