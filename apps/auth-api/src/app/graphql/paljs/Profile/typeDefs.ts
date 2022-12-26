import gql from 'graphql-tag';

export default gql`
  type Profile @key(fields: "userId") @shareable {
    userId: Int!
    user: User!
    location: String
    joiningDate: DateTime
    designation: String
    profileImg: String
    designationIcon: String
    coverImg: String
  }

  type Query {
    Auth_findUniqueProfile(where: Auth_ProfileWhereUniqueInput!): Profile
    Auth_findUniqueProfileOrThrow(where: Auth_ProfileWhereUniqueInput!): Profile
    Auth_findFirstProfile(
      where: Auth_ProfileWhereInput
      orderBy: [Auth_ProfileOrderByWithRelationInput]
      cursor: Auth_ProfileWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ProfileScalarFieldEnum]
    ): Profile
    Auth_findFirstProfileOrThrow(
      where: Auth_ProfileWhereInput
      orderBy: [Auth_ProfileOrderByWithRelationInput]
      cursor: Auth_ProfileWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ProfileScalarFieldEnum]
    ): Profile
    Auth_findManyProfile(
      where: Auth_ProfileWhereInput
      orderBy: [Auth_ProfileOrderByWithRelationInput]
      cursor: Auth_ProfileWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ProfileScalarFieldEnum]
    ): [Profile!]
    Auth_findManyProfileCount(
      where: Auth_ProfileWhereInput
      orderBy: [Auth_ProfileOrderByWithRelationInput]
      cursor: Auth_ProfileWhereUniqueInput
      take: Int
      skip: Int
      distinct: [ProfileScalarFieldEnum]
    ): Int!
    Auth_aggregateProfile(
      where: Auth_ProfileWhereInput
      orderBy: [Auth_ProfileOrderByWithRelationInput]
      cursor: Auth_ProfileWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateProfile
    Auth_groupByProfile(
      where: Auth_ProfileWhereInput
      orderBy: [Auth_ProfileOrderByWithAggregationInput]
      by: [ProfileScalarFieldEnum!]
      having: Auth_ProfileScalarWhereWithAggregatesInput
      take: Int
      skip: Int
    ): [ProfileGroupByOutputType]
  }

  type Mutation {
    Auth_createOneProfile(data: Auth_ProfileCreateInput!): Profile!
    Auth_updateOneProfile(
      data: Auth_ProfileUpdateInput!
      where: Auth_ProfileWhereUniqueInput!
    ): Profile!
    Auth_deleteOneProfile(where: Auth_ProfileWhereUniqueInput!): Profile
    Auth_upsertOneProfile(
      where: Auth_ProfileWhereUniqueInput!
      create: Auth_ProfileCreateInput!
      update: Auth_ProfileUpdateInput!
    ): Profile
    Auth_deleteManyProfile(where: Auth_ProfileWhereInput): BatchPayload
    Auth_updateManyProfile(
      data: Auth_ProfileUpdateManyMutationInput!
      where: Auth_ProfileWhereInput
    ): BatchPayload
  }
`;
