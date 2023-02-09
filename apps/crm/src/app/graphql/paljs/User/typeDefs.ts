import gql from 'graphql-tag';

export default gql`
  type User @key(fields: "id") @shareable {
    id: Int!
    order: String
    test: String
  }

  type Query {
    crm_findUniqueUser(where: crm_UserWhereUniqueInput!): User
    crm_findUniqueUserOrThrow(where: crm_UserWhereUniqueInput!): User
    crm_findFirstUser(
      where: crm_UserWhereInput
      orderBy: [crm_UserOrderByWithRelationInput]
      cursor: crm_UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserScalarFieldEnum]
    ): User
    crm_findFirstUserOrThrow(
      where: crm_UserWhereInput
      orderBy: [crm_UserOrderByWithRelationInput]
      cursor: crm_UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserScalarFieldEnum]
    ): User
    crm_findManyUser(
      where: crm_UserWhereInput
      orderBy: [crm_UserOrderByWithRelationInput]
      cursor: crm_UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserScalarFieldEnum]
    ): [User!]
    crm_findManyUserCount(
      where: crm_UserWhereInput
      orderBy: [crm_UserOrderByWithRelationInput]
      cursor: crm_UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserScalarFieldEnum]
    ): Int!
    crm_aggregateUser(
      where: crm_UserWhereInput
      orderBy: [crm_UserOrderByWithRelationInput]
      cursor: crm_UserWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateUser
    crm_groupByUser(
      where: crm_UserWhereInput
      orderBy: [crm_UserOrderByWithAggregationInput]
      by: [UserScalarFieldEnum!]
      having: crm_UserScalarWhereWithAggregatesInput
      take: Int
      skip: Int
    ): [UserGroupByOutputType]
  }

  type Mutation {
    crm_createOneUser(data: crm_UserCreateInput!): User!
    crm_updateOneUser(data: crm_UserUpdateInput!, where: crm_UserWhereUniqueInput!): User!
    crm_deleteOneUser(where: crm_UserWhereUniqueInput!): User
    crm_upsertOneUser(
      where: crm_UserWhereUniqueInput!
      create: crm_UserCreateInput!
      update: crm_UserUpdateInput!
    ): User
    crm_deleteManyUser(where: crm_UserWhereInput): BatchPayload
    crm_updateManyUser(
      data: crm_UserUpdateManyMutationInput!
      where: crm_UserWhereInput
    ): BatchPayload
  }
`;
