import gql from 'graphql-tag';

import { CalendarsOnUsersFields } from '../fields';

export default gql`
  query FindUniqueCalendarsOnUsers($where: CalendarsOnUsersWhereUniqueInput!) {
    findUniqueCalendarsOnUsers(where: $where) {
      ...CalendarsOnUsersFields
    }
  }

  query FindFirstCalendarsOnUsers(
    $where: CalendarsOnUsersWhereInput
    $orderBy: [CalendarsOnUsersOrderByWithRelationInput]
    $cursor: CalendarsOnUsersWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [CalendarsOnUsersScalarFieldEnum]
  ) {
    findFirstCalendarsOnUsers(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      ...CalendarsOnUsersFields
    }
  }

  query FindManyCalendarsOnUsers(
    $where: CalendarsOnUsersWhereInput
    $orderBy: [CalendarsOnUsersOrderByWithRelationInput]
    $cursor: CalendarsOnUsersWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [CalendarsOnUsersScalarFieldEnum]
  ) {
    findManyCalendarsOnUsers(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      ...CalendarsOnUsersFields
    }
  }

  query FindManyCalendarsOnUsersCount(
    $where: CalendarsOnUsersWhereInput
    $orderBy: [CalendarsOnUsersOrderByWithRelationInput]
    $cursor: CalendarsOnUsersWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [CalendarsOnUsersScalarFieldEnum]
  ) {
    findManyCalendarsOnUsersCount(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    )
  }

  mutation CreateOneCalendarsOnUsers($data: CalendarsOnUsersCreateInput!) {
    createOneCalendarsOnUsers(data: $data) {
      ...CalendarsOnUsersFields
    }
  }

  mutation UpdateOneCalendarsOnUsers($data: CalendarsOnUsersUpdateInput!, $where: CalendarsOnUsersWhereUniqueInput!) {
    updateOneCalendarsOnUsers(data: $data, where: $where) {
      ...CalendarsOnUsersFields
    }
  }

  mutation UpdateManyCalendarsOnUsers($data: CalendarsOnUsersUpdateManyMutationInput!, $where: CalendarsOnUsersWhereInput!) {
    updateManyCalendarsOnUsers(data: $data, where: $where) {
      count
    }
  }

  mutation UpsertOneCalendarsOnUsers(
    $where: CalendarsOnUsersWhereUniqueInput!
    $create: CalendarsOnUsersCreateInput!
    $update: CalendarsOnUsersUpdateInput!
  ) {
    upsertOneCalendarsOnUsers(where: $where, create: $create, update: $update) {
      ...CalendarsOnUsersFields
    }
  }

  mutation DeleteOneCalendarsOnUsers($where: CalendarsOnUsersWhereUniqueInput!) {
    deleteOneCalendarsOnUsers(where: $where) {
      id
    }
  }

  mutation DeleteManyCalendarsOnUsers($where: CalendarsOnUsersWhereInput!) {
    deleteManyCalendarsOnUsers(where: $where) {
      count
    }
  }

  ${CalendarsOnUsersFields}
`;
