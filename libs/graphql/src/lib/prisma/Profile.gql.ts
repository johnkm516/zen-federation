import gql from 'graphql-tag';

import { ProfileFields } from '../fields';

export default gql`
  query FindUniqueProfile($where: ProfileWhereUniqueInput!) {
    findUniqueProfile(where: $where) {
      ...ProfileFields
    }
  }

  query FindFirstProfile(
    $where: ProfileWhereInput
    $orderBy: [ProfileOrderByWithRelationInput]
    $cursor: ProfileWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [ProfileScalarFieldEnum]
  ) {
    findFirstProfile(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      ...ProfileFields
    }
  }

  query FindManyProfile(
    $where: ProfileWhereInput
    $orderBy: [ProfileOrderByWithRelationInput]
    $cursor: ProfileWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [ProfileScalarFieldEnum]
  ) {
    findManyProfile(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      ...ProfileFields
    }
  }

  query FindManyProfileCount(
    $where: ProfileWhereInput
    $orderBy: [ProfileOrderByWithRelationInput]
    $cursor: ProfileWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [ProfileScalarFieldEnum]
  ) {
    findManyProfileCount(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    )
  }

  mutation CreateOneProfile($data: ProfileCreateInput!) {
    createOneProfile(data: $data) {
      ...ProfileFields
    }
  }

  mutation UpdateOneProfile($data: ProfileUpdateInput!, $where: ProfileWhereUniqueInput!) {
    updateOneProfile(data: $data, where: $where) {
      ...ProfileFields
    }
  }

  mutation UpdateManyProfile($data: ProfileUpdateManyMutationInput!, $where: ProfileWhereInput!) {
    updateManyProfile(data: $data, where: $where) {
      count
    }
  }

  mutation UpsertOneProfile(
    $where: ProfileWhereUniqueInput!
    $create: ProfileCreateInput!
    $update: ProfileUpdateInput!
  ) {
    upsertOneProfile(where: $where, create: $create, update: $update) {
      ...ProfileFields
    }
  }

  mutation DeleteOneProfile($where: ProfileWhereUniqueInput!) {
    deleteOneProfile(where: $where) {
      id
    }
  }

  mutation DeleteManyProfile($where: ProfileWhereInput!) {
    deleteManyProfile(where: $where) {
      count
    }
  }

  ${ProfileFields}
`;
