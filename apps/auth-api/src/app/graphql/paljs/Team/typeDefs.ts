import gql from 'graphql-tag';

export default gql`
  type Team @key(fields: "teamName") @shareable {
    teamName: String!
    teamType: String
    teamIcon: String
    users(
      where: Auth_UsersOnTeamsWhereInput
      orderBy: Auth_UsersOnTeamsOrderByWithRelationInput
      cursor: Auth_UsersOnTeamsWhereUniqueInput
      take: Int
      skip: Int
      distinct: UsersOnTeamsScalarFieldEnum
    ): [UsersOnTeams!]!
    _count: TeamCountOutputType!
  }

  type Query {
    Auth_findUniqueTeam(where: Auth_TeamWhereUniqueInput!): Team
    Auth_findUniqueTeamOrThrow(where: Auth_TeamWhereUniqueInput!): Team
    Auth_findFirstTeam(
      where: Auth_TeamWhereInput
      orderBy: [Auth_TeamOrderByWithRelationInput]
      cursor: Auth_TeamWhereUniqueInput
      take: Int
      skip: Int
      distinct: [TeamScalarFieldEnum]
    ): Team
    Auth_findFirstTeamOrThrow(
      where: Auth_TeamWhereInput
      orderBy: [Auth_TeamOrderByWithRelationInput]
      cursor: Auth_TeamWhereUniqueInput
      take: Int
      skip: Int
      distinct: [TeamScalarFieldEnum]
    ): Team
    Auth_findManyTeam(
      where: Auth_TeamWhereInput
      orderBy: [Auth_TeamOrderByWithRelationInput]
      cursor: Auth_TeamWhereUniqueInput
      take: Int
      skip: Int
      distinct: [TeamScalarFieldEnum]
    ): [Team!]
    Auth_findManyTeamCount(
      where: Auth_TeamWhereInput
      orderBy: [Auth_TeamOrderByWithRelationInput]
      cursor: Auth_TeamWhereUniqueInput
      take: Int
      skip: Int
      distinct: [TeamScalarFieldEnum]
    ): Int!
    Auth_aggregateTeam(
      where: Auth_TeamWhereInput
      orderBy: [Auth_TeamOrderByWithRelationInput]
      cursor: Auth_TeamWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateTeam
    Auth_groupByTeam(
      where: Auth_TeamWhereInput
      orderBy: [Auth_TeamOrderByWithAggregationInput]
      by: [TeamScalarFieldEnum!]
      having: Auth_TeamScalarWhereWithAggregatesInput
      take: Int
      skip: Int
    ): [TeamGroupByOutputType]
  }

  type Mutation {
    Auth_createOneTeam(data: Auth_TeamCreateInput!): Team!
    Auth_updateOneTeam(data: Auth_TeamUpdateInput!, where: Auth_TeamWhereUniqueInput!): Team!
    Auth_deleteOneTeam(where: Auth_TeamWhereUniqueInput!): Team
    Auth_upsertOneTeam(
      where: Auth_TeamWhereUniqueInput!
      create: Auth_TeamCreateInput!
      update: Auth_TeamUpdateInput!
    ): Team
    Auth_deleteManyTeam(where: Auth_TeamWhereInput): BatchPayload
    Auth_updateManyTeam(
      data: Auth_TeamUpdateManyMutationInput!
      where: Auth_TeamWhereInput
    ): BatchPayload
  }
`;
