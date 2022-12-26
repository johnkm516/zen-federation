import TransactionalBatchMutation from './extended-resolvers';
import Profile from './Profile/resolvers';
import User from './User/resolvers';
export default [User, Profile, TransactionalBatchMutation];
