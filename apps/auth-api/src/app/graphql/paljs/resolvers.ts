import TransactionalBatchMutation from './extended-resolvers';
import Profile from './Profile/resolvers';
import Team from './Team/resolvers';
import User from './User/resolvers';
import UsersOnTeams from './UsersOnTeams/resolvers';
export default [User, Profile, UsersOnTeams, Team, TransactionalBatchMutation];
