import { mergeTypeDefs } from '@graphql-tools/merge';

import Calendar from './Calendar/typeDefs';
import CalendarEvent from './CalendarEvent/typeDefs';
import CalendarEventsOnCalendars from './CalendarEventsOnCalendars/typeDefs';
import CalendarsOnUsers from './CalendarsOnUsers/typeDefs';
import typeDefsExtensions from './extended-typeDefs';
import Profile from './Profile/typeDefs';
import SDLInputs from './sdl-inputs';
import Team from './Team/typeDefs';
import User from './User/typeDefs';
import UsersOnCalendarEvents from './UsersOnCalendarEvents/typeDefs';
import UsersOnTeams from './UsersOnTeams/typeDefs';

export default mergeTypeDefs([
  SDLInputs,
  Calendar,
  CalendarEvent,
  CalendarEventsOnCalendars,
  CalendarsOnUsers,
  Profile,
  Team,
  User,
  UsersOnCalendarEvents,
  UsersOnTeams,
  typeDefsExtensions,
]);
