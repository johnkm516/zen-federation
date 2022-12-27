import gql from 'graphql-tag';

export default gql`
  type Mutation {
    Auth_transactionalBatchMutation(
      mutations: [Auth_transactionalMutationInput]
    ): TransactionSucceeded!
  }
`;
