import Calendar from './Calendar/resolvers';
import CalendarEvent from './CalendarEvent/resolvers';
import CalendarEventsOnCalendars from './CalendarEventsOnCalendars/resolvers';
import CalendarsOnUsers from './CalendarsOnUsers/resolvers';
import TransactionalBatchMutation from './extended-resolvers';
import Profile from './Profile/resolvers';
import Team from './Team/resolvers';
import User from './User/resolvers';
import UsersOnCalendarEvents from './UsersOnCalendarEvents/resolvers';
import UsersOnTeams from './UsersOnTeams/resolvers';
export default [
  User,
  Profile,
  UsersOnTeams,
  Team,
  UsersOnCalendarEvents,
  CalendarEvent,
  CalendarEventsOnCalendars,
  Calendar,
  CalendarsOnUsers,
  TransactionalBatchMutation,
];
