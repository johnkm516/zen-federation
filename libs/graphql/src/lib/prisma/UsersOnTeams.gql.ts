import gql from 'graphql-tag';

import { UsersOnTeamsFields } from '../fields';

export default gql`
  query FindUniqueUsersOnTeams($where: UsersOnTeamsWhereUniqueInput!) {
    findUniqueUsersOnTeams(where: $where) {
      ...UsersOnTeamsFields
    }
  }

  query FindFirstUsersOnTeams(
    $where: UsersOnTeamsWhereInput
    $orderBy: [UsersOnTeamsOrderByWithRelationInput]
    $cursor: UsersOnTeamsWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [UsersOnTeamsScalarFieldEnum]
  ) {
    findFirstUsersOnTeams(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      ...UsersOnTeamsFields
    }
  }

  query FindManyUsersOnTeams(
    $where: UsersOnTeamsWhereInput
    $orderBy: [UsersOnTeamsOrderByWithRelationInput]
    $cursor: UsersOnTeamsWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [UsersOnTeamsScalarFieldEnum]
  ) {
    findManyUsersOnTeams(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      ...UsersOnTeamsFields
    }
  }

  query FindManyUsersOnTeamsCount(
    $where: UsersOnTeamsWhereInput
    $orderBy: [UsersOnTeamsOrderByWithRelationInput]
    $cursor: UsersOnTeamsWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [UsersOnTeamsScalarFieldEnum]
  ) {
    findManyUsersOnTeamsCount(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    )
  }

  mutation CreateOneUsersOnTeams($data: UsersOnTeamsCreateInput!) {
    createOneUsersOnTeams(data: $data) {
      ...UsersOnTeamsFields
    }
  }

  mutation UpdateOneUsersOnTeams($data: UsersOnTeamsUpdateInput!, $where: UsersOnTeamsWhereUniqueInput!) {
    updateOneUsersOnTeams(data: $data, where: $where) {
      ...UsersOnTeamsFields
    }
  }

  mutation UpdateManyUsersOnTeams($data: UsersOnTeamsUpdateManyMutationInput!, $where: UsersOnTeamsWhereInput!) {
    updateManyUsersOnTeams(data: $data, where: $where) {
      count
    }
  }

  mutation UpsertOneUsersOnTeams(
    $where: UsersOnTeamsWhereUniqueInput!
    $create: UsersOnTeamsCreateInput!
    $update: UsersOnTeamsUpdateInput!
  ) {
    upsertOneUsersOnTeams(where: $where, create: $create, update: $update) {
      ...UsersOnTeamsFields
    }
  }

  mutation DeleteOneUsersOnTeams($where: UsersOnTeamsWhereUniqueInput!) {
    deleteOneUsersOnTeams(where: $where) {
      id
    }
  }

  mutation DeleteManyUsersOnTeams($where: UsersOnTeamsWhereInput!) {
    deleteManyUsersOnTeams(where: $where) {
      count
    }
  }

  ${UsersOnTeamsFields}
`;
