import { mergeTypeDefs } from '@graphql-tools/merge';

import typeDefsExtensions from './extended-typeDefs';
import Profile from './Profile/typeDefs';
import SDLInputs from './sdl-inputs';
import Team from './Team/typeDefs';
import User from './User/typeDefs';
import UsersOnTeams from './UsersOnTeams/typeDefs';

export default mergeTypeDefs([SDLInputs, Profile, Team, User, UsersOnTeams, typeDefsExtensions]);
