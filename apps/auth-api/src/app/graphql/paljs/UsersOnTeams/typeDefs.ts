import gql from 'graphql-tag';

export default gql`
  type UsersOnTeams @key(fields: "teamName userId") @shareable {
    teamName: String!
    userId: Int!
    assignedAt: DateTime!
    team: Team!
    user: User!
  }

  type Query {
    Auth_findUniqueUsersOnTeams(where: Auth_UsersOnTeamsWhereUniqueInput!): UsersOnTeams
    Auth_findUniqueUsersOnTeamsOrThrow(where: Auth_UsersOnTeamsWhereUniqueInput!): UsersOnTeams
    Auth_findFirstUsersOnTeams(
      where: Auth_UsersOnTeamsWhereInput
      orderBy: [Auth_UsersOnTeamsOrderByWithRelationInput]
      cursor: Auth_UsersOnTeamsWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UsersOnTeamsScalarFieldEnum]
    ): UsersOnTeams
    Auth_findFirstUsersOnTeamsOrThrow(
      where: Auth_UsersOnTeamsWhereInput
      orderBy: [Auth_UsersOnTeamsOrderByWithRelationInput]
      cursor: Auth_UsersOnTeamsWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UsersOnTeamsScalarFieldEnum]
    ): UsersOnTeams
    Auth_findManyUsersOnTeams(
      where: Auth_UsersOnTeamsWhereInput
      orderBy: [Auth_UsersOnTeamsOrderByWithRelationInput]
      cursor: Auth_UsersOnTeamsWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UsersOnTeamsScalarFieldEnum]
    ): [UsersOnTeams!]
    Auth_findManyUsersOnTeamsCount(
      where: Auth_UsersOnTeamsWhereInput
      orderBy: [Auth_UsersOnTeamsOrderByWithRelationInput]
      cursor: Auth_UsersOnTeamsWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UsersOnTeamsScalarFieldEnum]
    ): Int!
    Auth_aggregateUsersOnTeams(
      where: Auth_UsersOnTeamsWhereInput
      orderBy: [Auth_UsersOnTeamsOrderByWithRelationInput]
      cursor: Auth_UsersOnTeamsWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateUsersOnTeams
    Auth_groupByUsersOnTeams(
      where: Auth_UsersOnTeamsWhereInput
      orderBy: [Auth_UsersOnTeamsOrderByWithAggregationInput]
      by: [UsersOnTeamsScalarFieldEnum!]
      having: Auth_UsersOnTeamsScalarWhereWithAggregatesInput
      take: Int
      skip: Int
    ): [UsersOnTeamsGroupByOutputType]
  }

  type Mutation {
    Auth_createOneUsersOnTeams(data: Auth_UsersOnTeamsCreateInput!): UsersOnTeams!
    Auth_updateOneUsersOnTeams(
      data: Auth_UsersOnTeamsUpdateInput!
      where: Auth_UsersOnTeamsWhereUniqueInput!
    ): UsersOnTeams!
    Auth_deleteOneUsersOnTeams(where: Auth_UsersOnTeamsWhereUniqueInput!): UsersOnTeams
    Auth_upsertOneUsersOnTeams(
      where: Auth_UsersOnTeamsWhereUniqueInput!
      create: Auth_UsersOnTeamsCreateInput!
      update: Auth_UsersOnTeamsUpdateInput!
    ): UsersOnTeams
    Auth_deleteManyUsersOnTeams(where: Auth_UsersOnTeamsWhereInput): BatchPayload
    Auth_updateManyUsersOnTeams(
      data: Auth_UsersOnTeamsUpdateManyMutationInput!
      where: Auth_UsersOnTeamsWhereInput
    ): BatchPayload
  }
`;
