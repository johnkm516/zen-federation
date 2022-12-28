import gql from 'graphql-tag';

import { TeamFields } from '../fields';

export default gql`
  query FindUniqueTeam($where: TeamWhereUniqueInput!) {
    findUniqueTeam(where: $where) {
      ...TeamFields
    }
  }

  query FindFirstTeam(
    $where: TeamWhereInput
    $orderBy: [TeamOrderByWithRelationInput]
    $cursor: TeamWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [TeamScalarFieldEnum]
  ) {
    findFirstTeam(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      ...TeamFields
    }
  }

  query FindManyTeam(
    $where: TeamWhereInput
    $orderBy: [TeamOrderByWithRelationInput]
    $cursor: TeamWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [TeamScalarFieldEnum]
  ) {
    findManyTeam(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      ...TeamFields
    }
  }

  query FindManyTeamCount(
    $where: TeamWhereInput
    $orderBy: [TeamOrderByWithRelationInput]
    $cursor: TeamWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [TeamScalarFieldEnum]
  ) {
    findManyTeamCount(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    )
  }

  mutation CreateOneTeam($data: TeamCreateInput!) {
    createOneTeam(data: $data) {
      ...TeamFields
    }
  }

  mutation UpdateOneTeam($data: TeamUpdateInput!, $where: TeamWhereUniqueInput!) {
    updateOneTeam(data: $data, where: $where) {
      ...TeamFields
    }
  }

  mutation UpdateManyTeam($data: TeamUpdateManyMutationInput!, $where: TeamWhereInput!) {
    updateManyTeam(data: $data, where: $where) {
      count
    }
  }

  mutation UpsertOneTeam(
    $where: TeamWhereUniqueInput!
    $create: TeamCreateInput!
    $update: TeamUpdateInput!
  ) {
    upsertOneTeam(where: $where, create: $create, update: $update) {
      ...TeamFields
    }
  }

  mutation DeleteOneTeam($where: TeamWhereUniqueInput!) {
    deleteOneTeam(where: $where) {
      id
    }
  }

  mutation DeleteManyTeam($where: TeamWhereInput!) {
    deleteManyTeam(where: $where) {
      count
    }
  }

  ${TeamFields}
`;
