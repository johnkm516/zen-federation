import gql from 'graphql-tag';

import { UsersOnCalendarEventsFields } from '../fields';

export default gql`
  query FindUniqueUsersOnCalendarEvents($where: UsersOnCalendarEventsWhereUniqueInput!) {
    findUniqueUsersOnCalendarEvents(where: $where) {
      ...UsersOnCalendarEventsFields
    }
  }

  query FindFirstUsersOnCalendarEvents(
    $where: UsersOnCalendarEventsWhereInput
    $orderBy: [UsersOnCalendarEventsOrderByWithRelationInput]
    $cursor: UsersOnCalendarEventsWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [UsersOnCalendarEventsScalarFieldEnum]
  ) {
    findFirstUsersOnCalendarEvents(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      ...UsersOnCalendarEventsFields
    }
  }

  query FindManyUsersOnCalendarEvents(
    $where: UsersOnCalendarEventsWhereInput
    $orderBy: [UsersOnCalendarEventsOrderByWithRelationInput]
    $cursor: UsersOnCalendarEventsWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [UsersOnCalendarEventsScalarFieldEnum]
  ) {
    findManyUsersOnCalendarEvents(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      ...UsersOnCalendarEventsFields
    }
  }

  query FindManyUsersOnCalendarEventsCount(
    $where: UsersOnCalendarEventsWhereInput
    $orderBy: [UsersOnCalendarEventsOrderByWithRelationInput]
    $cursor: UsersOnCalendarEventsWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [UsersOnCalendarEventsScalarFieldEnum]
  ) {
    findManyUsersOnCalendarEventsCount(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    )
  }

  mutation CreateOneUsersOnCalendarEvents($data: UsersOnCalendarEventsCreateInput!) {
    createOneUsersOnCalendarEvents(data: $data) {
      ...UsersOnCalendarEventsFields
    }
  }

  mutation UpdateOneUsersOnCalendarEvents($data: UsersOnCalendarEventsUpdateInput!, $where: UsersOnCalendarEventsWhereUniqueInput!) {
    updateOneUsersOnCalendarEvents(data: $data, where: $where) {
      ...UsersOnCalendarEventsFields
    }
  }

  mutation UpdateManyUsersOnCalendarEvents($data: UsersOnCalendarEventsUpdateManyMutationInput!, $where: UsersOnCalendarEventsWhereInput!) {
    updateManyUsersOnCalendarEvents(data: $data, where: $where) {
      count
    }
  }

  mutation UpsertOneUsersOnCalendarEvents(
    $where: UsersOnCalendarEventsWhereUniqueInput!
    $create: UsersOnCalendarEventsCreateInput!
    $update: UsersOnCalendarEventsUpdateInput!
  ) {
    upsertOneUsersOnCalendarEvents(where: $where, create: $create, update: $update) {
      ...UsersOnCalendarEventsFields
    }
  }

  mutation DeleteOneUsersOnCalendarEvents($where: UsersOnCalendarEventsWhereUniqueInput!) {
    deleteOneUsersOnCalendarEvents(where: $where) {
      id
    }
  }

  mutation DeleteManyUsersOnCalendarEvents($where: UsersOnCalendarEventsWhereInput!) {
    deleteManyUsersOnCalendarEvents(where: $where) {
      count
    }
  }

  ${UsersOnCalendarEventsFields}
`;
