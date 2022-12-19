import { mergeTypeDefs } from '@graphql-tools/merge';

import Profile from './Profile/typeDefs';
import SDLInputs from './sdl-inputs';
import User from './User/typeDefs';

export default mergeTypeDefs([SDLInputs, Profile, User]);
