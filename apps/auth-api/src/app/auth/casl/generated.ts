import { Subjects } from '@casl/prisma';
import { 
  Calendar,
  CalendarEvent,
  CalendarEventsOnCalendars,
  CalendarsOnUsers,
  Profile,
  Team,
  User,
  UsersOnTeams,
} from '@nx-prisma/prisma-clients/Auth';

export type PrismaSubjects = Subjects<{
  Calendar: Calendar;
  CalendarEvent: CalendarEvent;
  CalendarEventsOnCalendars: CalendarEventsOnCalendars;
  CalendarsOnUsers: CalendarsOnUsers;
  Profile: Profile;
  Team: Team;
  User: User;
  UsersOnTeams: UsersOnTeams;
}>;
