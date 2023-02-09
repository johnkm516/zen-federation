import * as Client from '@nx-prisma/prisma-clients/Auth';
import { GraphQLResolveInfo } from 'graphql';

import { Context } from './context';
type Resolver<T extends {}, A extends {}, R extends any> = (
  parent: T,
  args: A,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<R>;

// cause typescript not to expand types and preserve names
type NoExpand<T> = T extends unknown ? T : never;

// this type assumes the passed object is entirely optional
type AtLeast<O extends object, K extends string> = NoExpand<
  O extends unknown
    ?
        | (K extends keyof O ? { [P in K]: O[P] } & O : O)
        | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
    : never
>;

export type GroupByError =
  | `Error: Field "${any}" used in "having" needs to be provided in "by".`
  | [Error, 'Field ', any, ' in "having" needs to be provided in "by"'];

export interface Resolvers {
  [key: string]: { [key: string]: Resolver<any, any, any> };
  User?: User;
  Profile?: Profile;
  UsersOnTeams?: UsersOnTeams;
  Team?: Team;
  UsersOnCalendarEvents?: UsersOnCalendarEvents;
  CalendarEvent?: CalendarEvent;
  CalendarEventsOnCalendars?: CalendarEventsOnCalendars;
  Calendar?: Calendar;
  CalendarsOnUsers?: CalendarsOnUsers;
  Query?: Query;
  Mutation?: Mutation;
  AggregateUser?: AggregateUser;
  UserGroupByOutputType?: UserGroupByOutputType;
  AggregateProfile?: AggregateProfile;
  ProfileGroupByOutputType?: ProfileGroupByOutputType;
  AggregateUsersOnTeams?: AggregateUsersOnTeams;
  UsersOnTeamsGroupByOutputType?: UsersOnTeamsGroupByOutputType;
  AggregateTeam?: AggregateTeam;
  TeamGroupByOutputType?: TeamGroupByOutputType;
  AggregateUsersOnCalendarEvents?: AggregateUsersOnCalendarEvents;
  UsersOnCalendarEventsGroupByOutputType?: UsersOnCalendarEventsGroupByOutputType;
  AggregateCalendarEvent?: AggregateCalendarEvent;
  CalendarEventGroupByOutputType?: CalendarEventGroupByOutputType;
  AggregateCalendarEventsOnCalendars?: AggregateCalendarEventsOnCalendars;
  CalendarEventsOnCalendarsGroupByOutputType?: CalendarEventsOnCalendarsGroupByOutputType;
  AggregateCalendar?: AggregateCalendar;
  CalendarGroupByOutputType?: CalendarGroupByOutputType;
  AggregateCalendarsOnUsers?: AggregateCalendarsOnUsers;
  CalendarsOnUsersGroupByOutputType?: CalendarsOnUsersGroupByOutputType;
  AffectedRowsOutput?: AffectedRowsOutput;
  UserCountOutputType?: UserCountOutputType;
  UserCountAggregateOutputType?: UserCountAggregateOutputType;
  UserAvgAggregateOutputType?: UserAvgAggregateOutputType;
  UserSumAggregateOutputType?: UserSumAggregateOutputType;
  UserMinAggregateOutputType?: UserMinAggregateOutputType;
  UserMaxAggregateOutputType?: UserMaxAggregateOutputType;
  ProfileCountAggregateOutputType?: ProfileCountAggregateOutputType;
  ProfileAvgAggregateOutputType?: ProfileAvgAggregateOutputType;
  ProfileSumAggregateOutputType?: ProfileSumAggregateOutputType;
  ProfileMinAggregateOutputType?: ProfileMinAggregateOutputType;
  ProfileMaxAggregateOutputType?: ProfileMaxAggregateOutputType;
  UsersOnTeamsCountAggregateOutputType?: UsersOnTeamsCountAggregateOutputType;
  UsersOnTeamsAvgAggregateOutputType?: UsersOnTeamsAvgAggregateOutputType;
  UsersOnTeamsSumAggregateOutputType?: UsersOnTeamsSumAggregateOutputType;
  UsersOnTeamsMinAggregateOutputType?: UsersOnTeamsMinAggregateOutputType;
  UsersOnTeamsMaxAggregateOutputType?: UsersOnTeamsMaxAggregateOutputType;
  TeamCountOutputType?: TeamCountOutputType;
  TeamCountAggregateOutputType?: TeamCountAggregateOutputType;
  TeamMinAggregateOutputType?: TeamMinAggregateOutputType;
  TeamMaxAggregateOutputType?: TeamMaxAggregateOutputType;
  UsersOnCalendarEventsCountAggregateOutputType?: UsersOnCalendarEventsCountAggregateOutputType;
  UsersOnCalendarEventsAvgAggregateOutputType?: UsersOnCalendarEventsAvgAggregateOutputType;
  UsersOnCalendarEventsSumAggregateOutputType?: UsersOnCalendarEventsSumAggregateOutputType;
  UsersOnCalendarEventsMinAggregateOutputType?: UsersOnCalendarEventsMinAggregateOutputType;
  UsersOnCalendarEventsMaxAggregateOutputType?: UsersOnCalendarEventsMaxAggregateOutputType;
  CalendarEventCountOutputType?: CalendarEventCountOutputType;
  CalendarEventCountAggregateOutputType?: CalendarEventCountAggregateOutputType;
  CalendarEventAvgAggregateOutputType?: CalendarEventAvgAggregateOutputType;
  CalendarEventSumAggregateOutputType?: CalendarEventSumAggregateOutputType;
  CalendarEventMinAggregateOutputType?: CalendarEventMinAggregateOutputType;
  CalendarEventMaxAggregateOutputType?: CalendarEventMaxAggregateOutputType;
  CalendarEventsOnCalendarsCountAggregateOutputType?: CalendarEventsOnCalendarsCountAggregateOutputType;
  CalendarEventsOnCalendarsAvgAggregateOutputType?: CalendarEventsOnCalendarsAvgAggregateOutputType;
  CalendarEventsOnCalendarsSumAggregateOutputType?: CalendarEventsOnCalendarsSumAggregateOutputType;
  CalendarEventsOnCalendarsMinAggregateOutputType?: CalendarEventsOnCalendarsMinAggregateOutputType;
  CalendarEventsOnCalendarsMaxAggregateOutputType?: CalendarEventsOnCalendarsMaxAggregateOutputType;
  CalendarCountOutputType?: CalendarCountOutputType;
  CalendarCountAggregateOutputType?: CalendarCountAggregateOutputType;
  CalendarAvgAggregateOutputType?: CalendarAvgAggregateOutputType;
  CalendarSumAggregateOutputType?: CalendarSumAggregateOutputType;
  CalendarMinAggregateOutputType?: CalendarMinAggregateOutputType;
  CalendarMaxAggregateOutputType?: CalendarMaxAggregateOutputType;
  CalendarsOnUsersCountAggregateOutputType?: CalendarsOnUsersCountAggregateOutputType;
  CalendarsOnUsersAvgAggregateOutputType?: CalendarsOnUsersAvgAggregateOutputType;
  CalendarsOnUsersSumAggregateOutputType?: CalendarsOnUsersSumAggregateOutputType;
  CalendarsOnUsersMinAggregateOutputType?: CalendarsOnUsersMinAggregateOutputType;
  CalendarsOnUsersMaxAggregateOutputType?: CalendarsOnUsersMaxAggregateOutputType;
}

export interface User {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.User, {}, number>;
  createdAt?: Resolver<Client.User, {}, Date>;
  username?: Resolver<Client.User, {}, string | null>;
  password?: Resolver<Client.User, {}, string | null>;
  email?: Resolver<Client.User, {}, string>;
  roles?: Resolver<Client.User, {}, string[] | null>;
  googleId?: Resolver<Client.User, {}, string | null>;
  googleProfile?: Resolver<Client.User, {}, any | null>;
  lastName?: Resolver<Client.User, {}, string | null>;
  firstName?: Resolver<Client.User, {}, string | null>;
  profile?: Resolver<Client.User, Auth_UserProfileArgs, Client.Profile | null>;
  teams?: Resolver<Client.User, Auth_UserTeamsArgs, Client.UsersOnTeams[] | null>;
  calendars?: Resolver<Client.User, Auth_UserCalendarsArgs, Client.CalendarsOnUsers[] | null>;
  eventsInvitedTo?: Resolver<
    Client.User,
    Auth_UserEventsInvitedToArgs,
    Client.UsersOnCalendarEvents[] | null
  >;
  contacted?: Resolver<Client.User, Auth_UserContactedArgs, Client.User[] | null>;
  contactedBy?: Resolver<Client.User, Auth_UserContactedByArgs, Client.User[] | null>;
  calendarsCreated?: Resolver<Client.User, Auth_UserCalendarsCreatedArgs, Client.Calendar[] | null>;
  _count?: Resolver<Client.User, {}, Client.Prisma.UserCountOutputType>;

  __resolveReference?: any;
}

export interface Profile {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<Client.Profile, {}, number>;
  user?: Resolver<Client.Profile, {}, Client.User>;
  location?: Resolver<Client.Profile, {}, string | null>;
  joiningDate?: Resolver<Client.Profile, {}, Date | null>;
  businessPhone?: Resolver<Client.Profile, {}, string | null>;
  mobilePhone?: Resolver<Client.Profile, {}, string | null>;
  kakaoTalkId?: Resolver<Client.Profile, {}, string | null>;
  designation?: Resolver<Client.Profile, {}, string | null>;
  profileImg?: Resolver<Client.Profile, {}, string | null>;
  designationIcon?: Resolver<Client.Profile, {}, string | null>;
  coverImg?: Resolver<Client.Profile, {}, string | null>;

  __resolveReference?: any;
}

export interface UsersOnTeams {
  [key: string]: Resolver<any, any, any>;
  team?: Resolver<Client.UsersOnTeams, {}, Client.Team>;
  teamName?: Resolver<Client.UsersOnTeams, {}, string>;
  user?: Resolver<Client.UsersOnTeams, {}, Client.User>;
  userId?: Resolver<Client.UsersOnTeams, {}, number>;
  assignedAt?: Resolver<Client.UsersOnTeams, {}, Date>;

  __resolveReference?: any;
}

export interface Team {
  [key: string]: Resolver<any, any, any>;
  teamName?: Resolver<Client.Team, {}, string>;
  users?: Resolver<Client.Team, Auth_TeamUsersArgs, Client.UsersOnTeams[] | null>;
  teamType?: Resolver<Client.Team, {}, string | null>;
  teamIcon?: Resolver<Client.Team, {}, string | null>;
  _count?: Resolver<Client.Team, {}, Client.Prisma.TeamCountOutputType>;

  __resolveReference?: any;
}

export interface UsersOnCalendarEvents {
  [key: string]: Resolver<any, any, any>;
  user?: Resolver<Client.UsersOnCalendarEvents, {}, Client.User>;
  userId?: Resolver<Client.UsersOnCalendarEvents, {}, number>;
  calendarEvent?: Resolver<Client.UsersOnCalendarEvents, {}, Client.CalendarEvent>;
  calendarEventId?: Resolver<Client.UsersOnCalendarEvents, {}, number>;

  __resolveReference?: any;
}

export interface CalendarEvent {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.CalendarEvent, {}, number>;
  url?: Resolver<Client.CalendarEvent, {}, string | null>;
  title?: Resolver<Client.CalendarEvent, {}, string>;
  start?: Resolver<Client.CalendarEvent, {}, Date>;
  end?: Resolver<Client.CalendarEvent, {}, Date>;
  allDay?: Resolver<Client.CalendarEvent, {}, boolean>;
  guests?: Resolver<
    Client.CalendarEvent,
    Auth_CalendarEventGuestsArgs,
    Client.UsersOnCalendarEvents[] | null
  >;
  calendar?: Resolver<
    Client.CalendarEvent,
    Auth_CalendarEventCalendarArgs,
    Client.CalendarEventsOnCalendars[] | null
  >;
  _count?: Resolver<Client.CalendarEvent, {}, Client.Prisma.CalendarEventCountOutputType>;

  __resolveReference?: any;
}

export interface CalendarEventsOnCalendars {
  [key: string]: Resolver<any, any, any>;
  calendar?: Resolver<Client.CalendarEventsOnCalendars, {}, Client.Calendar>;
  calendarType?: Resolver<Client.CalendarEventsOnCalendars, {}, string>;
  calendarOwnerId?: Resolver<Client.CalendarEventsOnCalendars, {}, number>;
  calendarEvent?: Resolver<Client.CalendarEventsOnCalendars, {}, Client.CalendarEvent>;
  calendarEventId?: Resolver<Client.CalendarEventsOnCalendars, {}, number>;

  __resolveReference?: any;
}

export interface Calendar {
  [key: string]: Resolver<any, any, any>;
  calendarType?: Resolver<Client.Calendar, {}, string>;
  users?: Resolver<Client.Calendar, Auth_CalendarUsersArgs, Client.CalendarsOnUsers[] | null>;
  calendarEvents?: Resolver<
    Client.Calendar,
    Auth_CalendarCalendarEventsArgs,
    Client.CalendarEventsOnCalendars[] | null
  >;
  calendarOwnerId?: Resolver<Client.Calendar, {}, number>;
  calendarOwner?: Resolver<Client.Calendar, {}, Client.User>;
  _count?: Resolver<Client.Calendar, {}, Client.Prisma.CalendarCountOutputType>;

  __resolveReference?: any;
}

export interface CalendarsOnUsers {
  [key: string]: Resolver<any, any, any>;
  calendarAttributedTo?: Resolver<Client.CalendarsOnUsers, {}, Client.User>;
  calendarAttributedToId?: Resolver<Client.CalendarsOnUsers, {}, number>;
  calendar?: Resolver<Client.CalendarsOnUsers, {}, Client.Calendar>;
  calendarType?: Resolver<Client.CalendarsOnUsers, {}, string>;
  calendarOwnerId?: Resolver<Client.CalendarsOnUsers, {}, number>;

  __resolveReference?: any;
}

export interface Query {
  [key: string]: Resolver<any, any, any>;
  Auth_findFirstUser?: Resolver<{}, Auth_FindFirstUserArgs, Client.User | null>;
  Auth_findFirstUserOrThrow?: Resolver<{}, Auth_FindFirstUserOrThrowArgs, Client.User | null>;
  Auth_findManyUser?: Resolver<{}, Auth_FindManyUserArgs, Client.User[]>;
  Auth_findManyUserCount?: Resolver<{}, Auth_FindManyUserArgs, number>;
  Auth_aggregateUser?: Resolver<
    {},
    Auth_AggregateUserArgs,
    Client.Prisma.GetUserAggregateType<Auth_AggregateUserArgs>
  >;
  //Auth_groupByUser is not generated because model has only unique fields or relations.
  Auth_groupByUser?: Resolver<
    {},
    any,
    Client.Prisma.GetUserGroupByPayload<Auth_GroupByUserArgs> | GroupByError
  >;
  Auth_findUniqueUser?: Resolver<{}, Auth_FindUniqueUserArgs, Client.User | null>;
  Auth_findUniqueUserOrThrow?: Resolver<{}, Auth_FindUniqueUserOrThrowArgs, Client.User | null>;
  Auth_findFirstProfile?: Resolver<{}, Auth_FindFirstProfileArgs, Client.Profile | null>;
  Auth_findFirstProfileOrThrow?: Resolver<
    {},
    Auth_FindFirstProfileOrThrowArgs,
    Client.Profile | null
  >;
  Auth_findManyProfile?: Resolver<{}, Auth_FindManyProfileArgs, Client.Profile[]>;
  Auth_findManyProfileCount?: Resolver<{}, Auth_FindManyProfileArgs, number>;
  Auth_aggregateProfile?: Resolver<
    {},
    Auth_AggregateProfileArgs,
    Client.Prisma.GetProfileAggregateType<Auth_AggregateProfileArgs>
  >;
  //Auth_groupByProfile is not generated because model has only unique fields or relations.
  Auth_groupByProfile?: Resolver<
    {},
    any,
    Client.Prisma.GetProfileGroupByPayload<Auth_GroupByProfileArgs> | GroupByError
  >;
  Auth_findUniqueProfile?: Resolver<{}, Auth_FindUniqueProfileArgs, Client.Profile | null>;
  Auth_findUniqueProfileOrThrow?: Resolver<
    {},
    Auth_FindUniqueProfileOrThrowArgs,
    Client.Profile | null
  >;
  Auth_findFirstUsersOnTeams?: Resolver<
    {},
    Auth_FindFirstUsersOnTeamsArgs,
    Client.UsersOnTeams | null
  >;
  Auth_findFirstUsersOnTeamsOrThrow?: Resolver<
    {},
    Auth_FindFirstUsersOnTeamsOrThrowArgs,
    Client.UsersOnTeams | null
  >;
  Auth_findManyUsersOnTeams?: Resolver<{}, Auth_FindManyUsersOnTeamsArgs, Client.UsersOnTeams[]>;
  Auth_findManyUsersOnTeamsCount?: Resolver<{}, Auth_FindManyUsersOnTeamsArgs, number>;
  Auth_aggregateUsersOnTeams?: Resolver<
    {},
    Auth_AggregateUsersOnTeamsArgs,
    Client.Prisma.GetUsersOnTeamsAggregateType<Auth_AggregateUsersOnTeamsArgs>
  >;
  //Auth_groupByUsersOnTeams is not generated because model has only unique fields or relations.
  Auth_groupByUsersOnTeams?: Resolver<
    {},
    any,
    Client.Prisma.GetUsersOnTeamsGroupByPayload<Auth_GroupByUsersOnTeamsArgs> | GroupByError
  >;
  Auth_findUniqueUsersOnTeams?: Resolver<
    {},
    Auth_FindUniqueUsersOnTeamsArgs,
    Client.UsersOnTeams | null
  >;
  Auth_findUniqueUsersOnTeamsOrThrow?: Resolver<
    {},
    Auth_FindUniqueUsersOnTeamsOrThrowArgs,
    Client.UsersOnTeams | null
  >;
  Auth_findFirstTeam?: Resolver<{}, Auth_FindFirstTeamArgs, Client.Team | null>;
  Auth_findFirstTeamOrThrow?: Resolver<{}, Auth_FindFirstTeamOrThrowArgs, Client.Team | null>;
  Auth_findManyTeam?: Resolver<{}, Auth_FindManyTeamArgs, Client.Team[]>;
  Auth_findManyTeamCount?: Resolver<{}, Auth_FindManyTeamArgs, number>;
  Auth_aggregateTeam?: Resolver<
    {},
    Auth_AggregateTeamArgs,
    Client.Prisma.GetTeamAggregateType<Auth_AggregateTeamArgs>
  >;
  //Auth_groupByTeam is not generated because model has only unique fields or relations.
  Auth_groupByTeam?: Resolver<
    {},
    any,
    Client.Prisma.GetTeamGroupByPayload<Auth_GroupByTeamArgs> | GroupByError
  >;
  Auth_findUniqueTeam?: Resolver<{}, Auth_FindUniqueTeamArgs, Client.Team | null>;
  Auth_findUniqueTeamOrThrow?: Resolver<{}, Auth_FindUniqueTeamOrThrowArgs, Client.Team | null>;
  Auth_findFirstUsersOnCalendarEvents?: Resolver<
    {},
    Auth_FindFirstUsersOnCalendarEventsArgs,
    Client.UsersOnCalendarEvents | null
  >;
  Auth_findFirstUsersOnCalendarEventsOrThrow?: Resolver<
    {},
    Auth_FindFirstUsersOnCalendarEventsOrThrowArgs,
    Client.UsersOnCalendarEvents | null
  >;
  Auth_findManyUsersOnCalendarEvents?: Resolver<
    {},
    Auth_FindManyUsersOnCalendarEventsArgs,
    Client.UsersOnCalendarEvents[]
  >;
  Auth_findManyUsersOnCalendarEventsCount?: Resolver<
    {},
    Auth_FindManyUsersOnCalendarEventsArgs,
    number
  >;
  Auth_aggregateUsersOnCalendarEvents?: Resolver<
    {},
    Auth_AggregateUsersOnCalendarEventsArgs,
    Client.Prisma.GetUsersOnCalendarEventsAggregateType<Auth_AggregateUsersOnCalendarEventsArgs>
  >;
  //Auth_groupByUsersOnCalendarEvents is not generated because model has only unique fields or relations.
  Auth_groupByUsersOnCalendarEvents?: Resolver<
    {},
    any,
    | Client.Prisma.GetUsersOnCalendarEventsGroupByPayload<Auth_GroupByUsersOnCalendarEventsArgs>
    | GroupByError
  >;
  Auth_findUniqueUsersOnCalendarEvents?: Resolver<
    {},
    Auth_FindUniqueUsersOnCalendarEventsArgs,
    Client.UsersOnCalendarEvents | null
  >;
  Auth_findUniqueUsersOnCalendarEventsOrThrow?: Resolver<
    {},
    Auth_FindUniqueUsersOnCalendarEventsOrThrowArgs,
    Client.UsersOnCalendarEvents | null
  >;
  Auth_findFirstCalendarEvent?: Resolver<
    {},
    Auth_FindFirstCalendarEventArgs,
    Client.CalendarEvent | null
  >;
  Auth_findFirstCalendarEventOrThrow?: Resolver<
    {},
    Auth_FindFirstCalendarEventOrThrowArgs,
    Client.CalendarEvent | null
  >;
  Auth_findManyCalendarEvent?: Resolver<{}, Auth_FindManyCalendarEventArgs, Client.CalendarEvent[]>;
  Auth_findManyCalendarEventCount?: Resolver<{}, Auth_FindManyCalendarEventArgs, number>;
  Auth_aggregateCalendarEvent?: Resolver<
    {},
    Auth_AggregateCalendarEventArgs,
    Client.Prisma.GetCalendarEventAggregateType<Auth_AggregateCalendarEventArgs>
  >;
  //Auth_groupByCalendarEvent is not generated because model has only unique fields or relations.
  Auth_groupByCalendarEvent?: Resolver<
    {},
    any,
    Client.Prisma.GetCalendarEventGroupByPayload<Auth_GroupByCalendarEventArgs> | GroupByError
  >;
  Auth_findUniqueCalendarEvent?: Resolver<
    {},
    Auth_FindUniqueCalendarEventArgs,
    Client.CalendarEvent | null
  >;
  Auth_findUniqueCalendarEventOrThrow?: Resolver<
    {},
    Auth_FindUniqueCalendarEventOrThrowArgs,
    Client.CalendarEvent | null
  >;
  Auth_findFirstCalendarEventsOnCalendars?: Resolver<
    {},
    Auth_FindFirstCalendarEventsOnCalendarsArgs,
    Client.CalendarEventsOnCalendars | null
  >;
  Auth_findFirstCalendarEventsOnCalendarsOrThrow?: Resolver<
    {},
    Auth_FindFirstCalendarEventsOnCalendarsOrThrowArgs,
    Client.CalendarEventsOnCalendars | null
  >;
  Auth_findManyCalendarEventsOnCalendars?: Resolver<
    {},
    Auth_FindManyCalendarEventsOnCalendarsArgs,
    Client.CalendarEventsOnCalendars[]
  >;
  Auth_findManyCalendarEventsOnCalendarsCount?: Resolver<
    {},
    Auth_FindManyCalendarEventsOnCalendarsArgs,
    number
  >;
  Auth_aggregateCalendarEventsOnCalendars?: Resolver<
    {},
    Auth_AggregateCalendarEventsOnCalendarsArgs,
    Client.Prisma.GetCalendarEventsOnCalendarsAggregateType<Auth_AggregateCalendarEventsOnCalendarsArgs>
  >;
  //Auth_groupByCalendarEventsOnCalendars is not generated because model has only unique fields or relations.
  Auth_groupByCalendarEventsOnCalendars?: Resolver<
    {},
    any,
    | Client.Prisma.GetCalendarEventsOnCalendarsGroupByPayload<Auth_GroupByCalendarEventsOnCalendarsArgs>
    | GroupByError
  >;
  Auth_findUniqueCalendarEventsOnCalendars?: Resolver<
    {},
    Auth_FindUniqueCalendarEventsOnCalendarsArgs,
    Client.CalendarEventsOnCalendars | null
  >;
  Auth_findUniqueCalendarEventsOnCalendarsOrThrow?: Resolver<
    {},
    Auth_FindUniqueCalendarEventsOnCalendarsOrThrowArgs,
    Client.CalendarEventsOnCalendars | null
  >;
  Auth_findFirstCalendar?: Resolver<{}, Auth_FindFirstCalendarArgs, Client.Calendar | null>;
  Auth_findFirstCalendarOrThrow?: Resolver<
    {},
    Auth_FindFirstCalendarOrThrowArgs,
    Client.Calendar | null
  >;
  Auth_findManyCalendar?: Resolver<{}, Auth_FindManyCalendarArgs, Client.Calendar[]>;
  Auth_findManyCalendarCount?: Resolver<{}, Auth_FindManyCalendarArgs, number>;
  Auth_aggregateCalendar?: Resolver<
    {},
    Auth_AggregateCalendarArgs,
    Client.Prisma.GetCalendarAggregateType<Auth_AggregateCalendarArgs>
  >;
  //Auth_groupByCalendar is not generated because model has only unique fields or relations.
  Auth_groupByCalendar?: Resolver<
    {},
    any,
    Client.Prisma.GetCalendarGroupByPayload<Auth_GroupByCalendarArgs> | GroupByError
  >;
  Auth_findUniqueCalendar?: Resolver<{}, Auth_FindUniqueCalendarArgs, Client.Calendar | null>;
  Auth_findUniqueCalendarOrThrow?: Resolver<
    {},
    Auth_FindUniqueCalendarOrThrowArgs,
    Client.Calendar | null
  >;
  Auth_findFirstCalendarsOnUsers?: Resolver<
    {},
    Auth_FindFirstCalendarsOnUsersArgs,
    Client.CalendarsOnUsers | null
  >;
  Auth_findFirstCalendarsOnUsersOrThrow?: Resolver<
    {},
    Auth_FindFirstCalendarsOnUsersOrThrowArgs,
    Client.CalendarsOnUsers | null
  >;
  Auth_findManyCalendarsOnUsers?: Resolver<
    {},
    Auth_FindManyCalendarsOnUsersArgs,
    Client.CalendarsOnUsers[]
  >;
  Auth_findManyCalendarsOnUsersCount?: Resolver<{}, Auth_FindManyCalendarsOnUsersArgs, number>;
  Auth_aggregateCalendarsOnUsers?: Resolver<
    {},
    Auth_AggregateCalendarsOnUsersArgs,
    Client.Prisma.GetCalendarsOnUsersAggregateType<Auth_AggregateCalendarsOnUsersArgs>
  >;
  //Auth_groupByCalendarsOnUsers is not generated because model has only unique fields or relations.
  Auth_groupByCalendarsOnUsers?: Resolver<
    {},
    any,
    Client.Prisma.GetCalendarsOnUsersGroupByPayload<Auth_GroupByCalendarsOnUsersArgs> | GroupByError
  >;
  Auth_findUniqueCalendarsOnUsers?: Resolver<
    {},
    Auth_FindUniqueCalendarsOnUsersArgs,
    Client.CalendarsOnUsers | null
  >;
  Auth_findUniqueCalendarsOnUsersOrThrow?: Resolver<
    {},
    Auth_FindUniqueCalendarsOnUsersOrThrowArgs,
    Client.CalendarsOnUsers | null
  >;
}

export interface Mutation {
  [key: string]: Resolver<any, any, any>;
  Auth_createOneUser?: Resolver<{}, Auth_CreateOneUserArgs, Client.User>;
  Auth_upsertOneUser?: Resolver<{}, Auth_UpsertOneUserArgs, Client.User>;
  Auth_createManyUser?: Resolver<{}, Auth_CreateManyUserArgs, Client.Prisma.BatchPayload>;
  Auth_deleteOneUser?: Resolver<{}, Auth_DeleteOneUserArgs, Client.User | null>;
  Auth_updateOneUser?: Resolver<{}, Auth_UpdateOneUserArgs, Client.User | null>;
  //Auth_updateManyUser is not generated because model has only unique fields or relations.
  Auth_deleteManyUser?: Resolver<{}, Auth_DeleteManyUserArgs, Client.Prisma.BatchPayload>;
  Auth_createOneProfile?: Resolver<{}, Auth_CreateOneProfileArgs, Client.Profile>;
  Auth_upsertOneProfile?: Resolver<{}, Auth_UpsertOneProfileArgs, Client.Profile>;
  Auth_createManyProfile?: Resolver<{}, Auth_CreateManyProfileArgs, Client.Prisma.BatchPayload>;
  Auth_deleteOneProfile?: Resolver<{}, Auth_DeleteOneProfileArgs, Client.Profile | null>;
  Auth_updateOneProfile?: Resolver<{}, Auth_UpdateOneProfileArgs, Client.Profile | null>;
  //Auth_updateManyProfile is not generated because model has only unique fields or relations.
  Auth_deleteManyProfile?: Resolver<{}, Auth_DeleteManyProfileArgs, Client.Prisma.BatchPayload>;
  Auth_createOneUsersOnTeams?: Resolver<{}, Auth_CreateOneUsersOnTeamsArgs, Client.UsersOnTeams>;
  Auth_upsertOneUsersOnTeams?: Resolver<{}, Auth_UpsertOneUsersOnTeamsArgs, Client.UsersOnTeams>;
  Auth_createManyUsersOnTeams?: Resolver<
    {},
    Auth_CreateManyUsersOnTeamsArgs,
    Client.Prisma.BatchPayload
  >;
  Auth_deleteOneUsersOnTeams?: Resolver<
    {},
    Auth_DeleteOneUsersOnTeamsArgs,
    Client.UsersOnTeams | null
  >;
  Auth_updateOneUsersOnTeams?: Resolver<
    {},
    Auth_UpdateOneUsersOnTeamsArgs,
    Client.UsersOnTeams | null
  >;
  //Auth_updateManyUsersOnTeams is not generated because model has only unique fields or relations.
  Auth_deleteManyUsersOnTeams?: Resolver<
    {},
    Auth_DeleteManyUsersOnTeamsArgs,
    Client.Prisma.BatchPayload
  >;
  Auth_createOneTeam?: Resolver<{}, Auth_CreateOneTeamArgs, Client.Team>;
  Auth_upsertOneTeam?: Resolver<{}, Auth_UpsertOneTeamArgs, Client.Team>;
  Auth_createManyTeam?: Resolver<{}, Auth_CreateManyTeamArgs, Client.Prisma.BatchPayload>;
  Auth_deleteOneTeam?: Resolver<{}, Auth_DeleteOneTeamArgs, Client.Team | null>;
  Auth_updateOneTeam?: Resolver<{}, Auth_UpdateOneTeamArgs, Client.Team | null>;
  //Auth_updateManyTeam is not generated because model has only unique fields or relations.
  Auth_deleteManyTeam?: Resolver<{}, Auth_DeleteManyTeamArgs, Client.Prisma.BatchPayload>;
  Auth_createOneUsersOnCalendarEvents?: Resolver<
    {},
    Auth_CreateOneUsersOnCalendarEventsArgs,
    Client.UsersOnCalendarEvents
  >;
  Auth_upsertOneUsersOnCalendarEvents?: Resolver<
    {},
    Auth_UpsertOneUsersOnCalendarEventsArgs,
    Client.UsersOnCalendarEvents
  >;
  Auth_createManyUsersOnCalendarEvents?: Resolver<
    {},
    Auth_CreateManyUsersOnCalendarEventsArgs,
    Client.Prisma.BatchPayload
  >;
  Auth_deleteOneUsersOnCalendarEvents?: Resolver<
    {},
    Auth_DeleteOneUsersOnCalendarEventsArgs,
    Client.UsersOnCalendarEvents | null
  >;
  Auth_updateOneUsersOnCalendarEvents?: Resolver<
    {},
    Auth_UpdateOneUsersOnCalendarEventsArgs,
    Client.UsersOnCalendarEvents | null
  >;
  //Auth_updateManyUsersOnCalendarEvents is not generated because model has only unique fields or relations.
  Auth_deleteManyUsersOnCalendarEvents?: Resolver<
    {},
    Auth_DeleteManyUsersOnCalendarEventsArgs,
    Client.Prisma.BatchPayload
  >;
  Auth_createOneCalendarEvent?: Resolver<{}, Auth_CreateOneCalendarEventArgs, Client.CalendarEvent>;
  Auth_upsertOneCalendarEvent?: Resolver<{}, Auth_UpsertOneCalendarEventArgs, Client.CalendarEvent>;
  Auth_createManyCalendarEvent?: Resolver<
    {},
    Auth_CreateManyCalendarEventArgs,
    Client.Prisma.BatchPayload
  >;
  Auth_deleteOneCalendarEvent?: Resolver<
    {},
    Auth_DeleteOneCalendarEventArgs,
    Client.CalendarEvent | null
  >;
  Auth_updateOneCalendarEvent?: Resolver<
    {},
    Auth_UpdateOneCalendarEventArgs,
    Client.CalendarEvent | null
  >;
  //Auth_updateManyCalendarEvent is not generated because model has only unique fields or relations.
  Auth_deleteManyCalendarEvent?: Resolver<
    {},
    Auth_DeleteManyCalendarEventArgs,
    Client.Prisma.BatchPayload
  >;
  Auth_createOneCalendarEventsOnCalendars?: Resolver<
    {},
    Auth_CreateOneCalendarEventsOnCalendarsArgs,
    Client.CalendarEventsOnCalendars
  >;
  Auth_upsertOneCalendarEventsOnCalendars?: Resolver<
    {},
    Auth_UpsertOneCalendarEventsOnCalendarsArgs,
    Client.CalendarEventsOnCalendars
  >;
  Auth_createManyCalendarEventsOnCalendars?: Resolver<
    {},
    Auth_CreateManyCalendarEventsOnCalendarsArgs,
    Client.Prisma.BatchPayload
  >;
  Auth_deleteOneCalendarEventsOnCalendars?: Resolver<
    {},
    Auth_DeleteOneCalendarEventsOnCalendarsArgs,
    Client.CalendarEventsOnCalendars | null
  >;
  Auth_updateOneCalendarEventsOnCalendars?: Resolver<
    {},
    Auth_UpdateOneCalendarEventsOnCalendarsArgs,
    Client.CalendarEventsOnCalendars | null
  >;
  //Auth_updateManyCalendarEventsOnCalendars is not generated because model has only unique fields or relations.
  Auth_deleteManyCalendarEventsOnCalendars?: Resolver<
    {},
    Auth_DeleteManyCalendarEventsOnCalendarsArgs,
    Client.Prisma.BatchPayload
  >;
  Auth_createOneCalendar?: Resolver<{}, Auth_CreateOneCalendarArgs, Client.Calendar>;
  Auth_upsertOneCalendar?: Resolver<{}, Auth_UpsertOneCalendarArgs, Client.Calendar>;
  Auth_createManyCalendar?: Resolver<{}, Auth_CreateManyCalendarArgs, Client.Prisma.BatchPayload>;
  Auth_deleteOneCalendar?: Resolver<{}, Auth_DeleteOneCalendarArgs, Client.Calendar | null>;
  Auth_updateOneCalendar?: Resolver<{}, Auth_UpdateOneCalendarArgs, Client.Calendar | null>;
  //Auth_updateManyCalendar is not generated because model has only unique fields or relations.
  Auth_deleteManyCalendar?: Resolver<{}, Auth_DeleteManyCalendarArgs, Client.Prisma.BatchPayload>;
  Auth_createOneCalendarsOnUsers?: Resolver<
    {},
    Auth_CreateOneCalendarsOnUsersArgs,
    Client.CalendarsOnUsers
  >;
  Auth_upsertOneCalendarsOnUsers?: Resolver<
    {},
    Auth_UpsertOneCalendarsOnUsersArgs,
    Client.CalendarsOnUsers
  >;
  Auth_createManyCalendarsOnUsers?: Resolver<
    {},
    Auth_CreateManyCalendarsOnUsersArgs,
    Client.Prisma.BatchPayload
  >;
  Auth_deleteOneCalendarsOnUsers?: Resolver<
    {},
    Auth_DeleteOneCalendarsOnUsersArgs,
    Client.CalendarsOnUsers | null
  >;
  Auth_updateOneCalendarsOnUsers?: Resolver<
    {},
    Auth_UpdateOneCalendarsOnUsersArgs,
    Client.CalendarsOnUsers | null
  >;
  //Auth_updateManyCalendarsOnUsers is not generated because model has only unique fields or relations.
  Auth_deleteManyCalendarsOnUsers?: Resolver<
    {},
    Auth_DeleteManyCalendarsOnUsersArgs,
    Client.Prisma.BatchPayload
  >;
  Auth_executeRaw?: Resolver<{}, Auth_ExecuteRawArgs, any>;
  Auth_queryRaw?: Resolver<{}, Auth_QueryRawArgs, any>;
  Auth_transactionalBatchMutation?: Resolver<{}, Auth_TransactionalBatchMutationArgs, any>;
}

export interface AggregateUser {
  [key: string]: Resolver<any, any, any>;
  _count?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserCountAggregateOutputType | null
  >;
  _avg?: Resolver<Client.Prisma.AggregateUser, {}, Client.Prisma.UserAvgAggregateOutputType | null>;
  _sum?: Resolver<Client.Prisma.AggregateUser, {}, Client.Prisma.UserSumAggregateOutputType | null>;
  _min?: Resolver<Client.Prisma.AggregateUser, {}, Client.Prisma.UserMinAggregateOutputType | null>;
  _max?: Resolver<Client.Prisma.AggregateUser, {}, Client.Prisma.UserMaxAggregateOutputType | null>;
}

export interface UserGroupByOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.UserGroupByOutputType, {}, number>;
  createdAt?: Resolver<Client.Prisma.UserGroupByOutputType, {}, Date>;
  username?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>;
  password?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>;
  email?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string>;
  roles?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string[] | null>;
  googleId?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>;
  googleProfile?: Resolver<Client.Prisma.UserGroupByOutputType, {}, any | null>;
  lastName?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>;
  firstName?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>;
  _count?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserMaxAggregateOutputType | null
  >;
}

export interface AggregateProfile {
  [key: string]: Resolver<any, any, any>;
  _count?: Resolver<
    Client.Prisma.AggregateProfile,
    {},
    Client.Prisma.ProfileCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.AggregateProfile,
    {},
    Client.Prisma.ProfileAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.AggregateProfile,
    {},
    Client.Prisma.ProfileSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.AggregateProfile,
    {},
    Client.Prisma.ProfileMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.AggregateProfile,
    {},
    Client.Prisma.ProfileMaxAggregateOutputType | null
  >;
}

export interface ProfileGroupByOutputType {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<Client.Prisma.ProfileGroupByOutputType, {}, number>;
  location?: Resolver<Client.Prisma.ProfileGroupByOutputType, {}, string | null>;
  joiningDate?: Resolver<Client.Prisma.ProfileGroupByOutputType, {}, Date | null>;
  businessPhone?: Resolver<Client.Prisma.ProfileGroupByOutputType, {}, string | null>;
  mobilePhone?: Resolver<Client.Prisma.ProfileGroupByOutputType, {}, string | null>;
  kakaoTalkId?: Resolver<Client.Prisma.ProfileGroupByOutputType, {}, string | null>;
  designation?: Resolver<Client.Prisma.ProfileGroupByOutputType, {}, string | null>;
  profileImg?: Resolver<Client.Prisma.ProfileGroupByOutputType, {}, string | null>;
  designationIcon?: Resolver<Client.Prisma.ProfileGroupByOutputType, {}, string | null>;
  coverImg?: Resolver<Client.Prisma.ProfileGroupByOutputType, {}, string | null>;
  _count?: Resolver<
    Client.Prisma.ProfileGroupByOutputType,
    {},
    Client.Prisma.ProfileCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.ProfileGroupByOutputType,
    {},
    Client.Prisma.ProfileAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.ProfileGroupByOutputType,
    {},
    Client.Prisma.ProfileSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.ProfileGroupByOutputType,
    {},
    Client.Prisma.ProfileMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.ProfileGroupByOutputType,
    {},
    Client.Prisma.ProfileMaxAggregateOutputType | null
  >;
}

export interface AggregateUsersOnTeams {
  [key: string]: Resolver<any, any, any>;
  _count?: Resolver<
    Client.Prisma.AggregateUsersOnTeams,
    {},
    Client.Prisma.UsersOnTeamsCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.AggregateUsersOnTeams,
    {},
    Client.Prisma.UsersOnTeamsAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.AggregateUsersOnTeams,
    {},
    Client.Prisma.UsersOnTeamsSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.AggregateUsersOnTeams,
    {},
    Client.Prisma.UsersOnTeamsMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.AggregateUsersOnTeams,
    {},
    Client.Prisma.UsersOnTeamsMaxAggregateOutputType | null
  >;
}

export interface UsersOnTeamsGroupByOutputType {
  [key: string]: Resolver<any, any, any>;
  teamName?: Resolver<Client.Prisma.UsersOnTeamsGroupByOutputType, {}, string>;
  userId?: Resolver<Client.Prisma.UsersOnTeamsGroupByOutputType, {}, number>;
  assignedAt?: Resolver<Client.Prisma.UsersOnTeamsGroupByOutputType, {}, Date>;
  _count?: Resolver<
    Client.Prisma.UsersOnTeamsGroupByOutputType,
    {},
    Client.Prisma.UsersOnTeamsCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.UsersOnTeamsGroupByOutputType,
    {},
    Client.Prisma.UsersOnTeamsAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.UsersOnTeamsGroupByOutputType,
    {},
    Client.Prisma.UsersOnTeamsSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.UsersOnTeamsGroupByOutputType,
    {},
    Client.Prisma.UsersOnTeamsMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.UsersOnTeamsGroupByOutputType,
    {},
    Client.Prisma.UsersOnTeamsMaxAggregateOutputType | null
  >;
}

export interface AggregateTeam {
  [key: string]: Resolver<any, any, any>;
  _count?: Resolver<
    Client.Prisma.AggregateTeam,
    {},
    Client.Prisma.TeamCountAggregateOutputType | null
  >;
  _min?: Resolver<Client.Prisma.AggregateTeam, {}, Client.Prisma.TeamMinAggregateOutputType | null>;
  _max?: Resolver<Client.Prisma.AggregateTeam, {}, Client.Prisma.TeamMaxAggregateOutputType | null>;
}

export interface TeamGroupByOutputType {
  [key: string]: Resolver<any, any, any>;
  teamName?: Resolver<Client.Prisma.TeamGroupByOutputType, {}, string>;
  teamType?: Resolver<Client.Prisma.TeamGroupByOutputType, {}, string | null>;
  teamIcon?: Resolver<Client.Prisma.TeamGroupByOutputType, {}, string | null>;
  _count?: Resolver<
    Client.Prisma.TeamGroupByOutputType,
    {},
    Client.Prisma.TeamCountAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.TeamGroupByOutputType,
    {},
    Client.Prisma.TeamMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.TeamGroupByOutputType,
    {},
    Client.Prisma.TeamMaxAggregateOutputType | null
  >;
}

export interface AggregateUsersOnCalendarEvents {
  [key: string]: Resolver<any, any, any>;
  _count?: Resolver<
    Client.Prisma.AggregateUsersOnCalendarEvents,
    {},
    Client.Prisma.UsersOnCalendarEventsCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.AggregateUsersOnCalendarEvents,
    {},
    Client.Prisma.UsersOnCalendarEventsAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.AggregateUsersOnCalendarEvents,
    {},
    Client.Prisma.UsersOnCalendarEventsSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.AggregateUsersOnCalendarEvents,
    {},
    Client.Prisma.UsersOnCalendarEventsMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.AggregateUsersOnCalendarEvents,
    {},
    Client.Prisma.UsersOnCalendarEventsMaxAggregateOutputType | null
  >;
}

export interface UsersOnCalendarEventsGroupByOutputType {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<Client.Prisma.UsersOnCalendarEventsGroupByOutputType, {}, number>;
  calendarEventId?: Resolver<Client.Prisma.UsersOnCalendarEventsGroupByOutputType, {}, number>;
  _count?: Resolver<
    Client.Prisma.UsersOnCalendarEventsGroupByOutputType,
    {},
    Client.Prisma.UsersOnCalendarEventsCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.UsersOnCalendarEventsGroupByOutputType,
    {},
    Client.Prisma.UsersOnCalendarEventsAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.UsersOnCalendarEventsGroupByOutputType,
    {},
    Client.Prisma.UsersOnCalendarEventsSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.UsersOnCalendarEventsGroupByOutputType,
    {},
    Client.Prisma.UsersOnCalendarEventsMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.UsersOnCalendarEventsGroupByOutputType,
    {},
    Client.Prisma.UsersOnCalendarEventsMaxAggregateOutputType | null
  >;
}

export interface AggregateCalendarEvent {
  [key: string]: Resolver<any, any, any>;
  _count?: Resolver<
    Client.Prisma.AggregateCalendarEvent,
    {},
    Client.Prisma.CalendarEventCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.AggregateCalendarEvent,
    {},
    Client.Prisma.CalendarEventAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.AggregateCalendarEvent,
    {},
    Client.Prisma.CalendarEventSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.AggregateCalendarEvent,
    {},
    Client.Prisma.CalendarEventMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.AggregateCalendarEvent,
    {},
    Client.Prisma.CalendarEventMaxAggregateOutputType | null
  >;
}

export interface CalendarEventGroupByOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.CalendarEventGroupByOutputType, {}, number>;
  url?: Resolver<Client.Prisma.CalendarEventGroupByOutputType, {}, string | null>;
  title?: Resolver<Client.Prisma.CalendarEventGroupByOutputType, {}, string>;
  start?: Resolver<Client.Prisma.CalendarEventGroupByOutputType, {}, Date>;
  end?: Resolver<Client.Prisma.CalendarEventGroupByOutputType, {}, Date>;
  allDay?: Resolver<Client.Prisma.CalendarEventGroupByOutputType, {}, boolean>;
  _count?: Resolver<
    Client.Prisma.CalendarEventGroupByOutputType,
    {},
    Client.Prisma.CalendarEventCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.CalendarEventGroupByOutputType,
    {},
    Client.Prisma.CalendarEventAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.CalendarEventGroupByOutputType,
    {},
    Client.Prisma.CalendarEventSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.CalendarEventGroupByOutputType,
    {},
    Client.Prisma.CalendarEventMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.CalendarEventGroupByOutputType,
    {},
    Client.Prisma.CalendarEventMaxAggregateOutputType | null
  >;
}

export interface AggregateCalendarEventsOnCalendars {
  [key: string]: Resolver<any, any, any>;
  _count?: Resolver<
    Client.Prisma.AggregateCalendarEventsOnCalendars,
    {},
    Client.Prisma.CalendarEventsOnCalendarsCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.AggregateCalendarEventsOnCalendars,
    {},
    Client.Prisma.CalendarEventsOnCalendarsAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.AggregateCalendarEventsOnCalendars,
    {},
    Client.Prisma.CalendarEventsOnCalendarsSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.AggregateCalendarEventsOnCalendars,
    {},
    Client.Prisma.CalendarEventsOnCalendarsMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.AggregateCalendarEventsOnCalendars,
    {},
    Client.Prisma.CalendarEventsOnCalendarsMaxAggregateOutputType | null
  >;
}

export interface CalendarEventsOnCalendarsGroupByOutputType {
  [key: string]: Resolver<any, any, any>;
  calendarType?: Resolver<Client.Prisma.CalendarEventsOnCalendarsGroupByOutputType, {}, string>;
  calendarOwnerId?: Resolver<Client.Prisma.CalendarEventsOnCalendarsGroupByOutputType, {}, number>;
  calendarEventId?: Resolver<Client.Prisma.CalendarEventsOnCalendarsGroupByOutputType, {}, number>;
  _count?: Resolver<
    Client.Prisma.CalendarEventsOnCalendarsGroupByOutputType,
    {},
    Client.Prisma.CalendarEventsOnCalendarsCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.CalendarEventsOnCalendarsGroupByOutputType,
    {},
    Client.Prisma.CalendarEventsOnCalendarsAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.CalendarEventsOnCalendarsGroupByOutputType,
    {},
    Client.Prisma.CalendarEventsOnCalendarsSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.CalendarEventsOnCalendarsGroupByOutputType,
    {},
    Client.Prisma.CalendarEventsOnCalendarsMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.CalendarEventsOnCalendarsGroupByOutputType,
    {},
    Client.Prisma.CalendarEventsOnCalendarsMaxAggregateOutputType | null
  >;
}

export interface AggregateCalendar {
  [key: string]: Resolver<any, any, any>;
  _count?: Resolver<
    Client.Prisma.AggregateCalendar,
    {},
    Client.Prisma.CalendarCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.AggregateCalendar,
    {},
    Client.Prisma.CalendarAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.AggregateCalendar,
    {},
    Client.Prisma.CalendarSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.AggregateCalendar,
    {},
    Client.Prisma.CalendarMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.AggregateCalendar,
    {},
    Client.Prisma.CalendarMaxAggregateOutputType | null
  >;
}

export interface CalendarGroupByOutputType {
  [key: string]: Resolver<any, any, any>;
  calendarType?: Resolver<Client.Prisma.CalendarGroupByOutputType, {}, string>;
  calendarOwnerId?: Resolver<Client.Prisma.CalendarGroupByOutputType, {}, number>;
  _count?: Resolver<
    Client.Prisma.CalendarGroupByOutputType,
    {},
    Client.Prisma.CalendarCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.CalendarGroupByOutputType,
    {},
    Client.Prisma.CalendarAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.CalendarGroupByOutputType,
    {},
    Client.Prisma.CalendarSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.CalendarGroupByOutputType,
    {},
    Client.Prisma.CalendarMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.CalendarGroupByOutputType,
    {},
    Client.Prisma.CalendarMaxAggregateOutputType | null
  >;
}

export interface AggregateCalendarsOnUsers {
  [key: string]: Resolver<any, any, any>;
  _count?: Resolver<
    Client.Prisma.AggregateCalendarsOnUsers,
    {},
    Client.Prisma.CalendarsOnUsersCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.AggregateCalendarsOnUsers,
    {},
    Client.Prisma.CalendarsOnUsersAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.AggregateCalendarsOnUsers,
    {},
    Client.Prisma.CalendarsOnUsersSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.AggregateCalendarsOnUsers,
    {},
    Client.Prisma.CalendarsOnUsersMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.AggregateCalendarsOnUsers,
    {},
    Client.Prisma.CalendarsOnUsersMaxAggregateOutputType | null
  >;
}

export interface CalendarsOnUsersGroupByOutputType {
  [key: string]: Resolver<any, any, any>;
  calendarAttributedToId?: Resolver<Client.Prisma.CalendarsOnUsersGroupByOutputType, {}, number>;
  calendarType?: Resolver<Client.Prisma.CalendarsOnUsersGroupByOutputType, {}, string>;
  calendarOwnerId?: Resolver<Client.Prisma.CalendarsOnUsersGroupByOutputType, {}, number>;
  _count?: Resolver<
    Client.Prisma.CalendarsOnUsersGroupByOutputType,
    {},
    Client.Prisma.CalendarsOnUsersCountAggregateOutputType | null
  >;
  _avg?: Resolver<
    Client.Prisma.CalendarsOnUsersGroupByOutputType,
    {},
    Client.Prisma.CalendarsOnUsersAvgAggregateOutputType | null
  >;
  _sum?: Resolver<
    Client.Prisma.CalendarsOnUsersGroupByOutputType,
    {},
    Client.Prisma.CalendarsOnUsersSumAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.CalendarsOnUsersGroupByOutputType,
    {},
    Client.Prisma.CalendarsOnUsersMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.CalendarsOnUsersGroupByOutputType,
    {},
    Client.Prisma.CalendarsOnUsersMaxAggregateOutputType | null
  >;
}

export interface AffectedRowsOutput {
  [key: string]: Resolver<any, any, any>;
  count?: Resolver<Client.Prisma.BatchPayload, {}, number>;
}

export interface UserCountOutputType {
  [key: string]: Resolver<any, any, any>;
  teams?: Resolver<Client.Prisma.UserCountOutputType, {}, number>;
  calendars?: Resolver<Client.Prisma.UserCountOutputType, {}, number>;
  eventsInvitedTo?: Resolver<Client.Prisma.UserCountOutputType, {}, number>;
  contacted?: Resolver<Client.Prisma.UserCountOutputType, {}, number>;
  contactedBy?: Resolver<Client.Prisma.UserCountOutputType, {}, number>;
  calendarsCreated?: Resolver<Client.Prisma.UserCountOutputType, {}, number>;
}

export interface UserCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  createdAt?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  username?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  password?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  email?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  roles?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  googleId?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  googleProfile?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  lastName?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  firstName?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  _all?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
}

export interface UserAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.UserAvgAggregateOutputType, {}, number | null>;
}

export interface UserSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.UserSumAggregateOutputType, {}, number | null>;
}

export interface UserMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, number | null>;
  createdAt?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, Date | null>;
  username?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>;
  password?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>;
  email?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>;
  googleId?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>;
  lastName?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>;
  firstName?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>;
}

export interface UserMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, number | null>;
  createdAt?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, Date | null>;
  username?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>;
  password?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>;
  email?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>;
  googleId?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>;
  lastName?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>;
  firstName?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>;
}

export interface ProfileCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<Client.Prisma.ProfileCountAggregateOutputType, {}, number>;
  location?: Resolver<Client.Prisma.ProfileCountAggregateOutputType, {}, number>;
  joiningDate?: Resolver<Client.Prisma.ProfileCountAggregateOutputType, {}, number>;
  businessPhone?: Resolver<Client.Prisma.ProfileCountAggregateOutputType, {}, number>;
  mobilePhone?: Resolver<Client.Prisma.ProfileCountAggregateOutputType, {}, number>;
  kakaoTalkId?: Resolver<Client.Prisma.ProfileCountAggregateOutputType, {}, number>;
  designation?: Resolver<Client.Prisma.ProfileCountAggregateOutputType, {}, number>;
  profileImg?: Resolver<Client.Prisma.ProfileCountAggregateOutputType, {}, number>;
  designationIcon?: Resolver<Client.Prisma.ProfileCountAggregateOutputType, {}, number>;
  coverImg?: Resolver<Client.Prisma.ProfileCountAggregateOutputType, {}, number>;
  _all?: Resolver<Client.Prisma.ProfileCountAggregateOutputType, {}, number>;
}

export interface ProfileAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<Client.Prisma.ProfileAvgAggregateOutputType, {}, number | null>;
}

export interface ProfileSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<Client.Prisma.ProfileSumAggregateOutputType, {}, number | null>;
}

export interface ProfileMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<Client.Prisma.ProfileMinAggregateOutputType, {}, number | null>;
  location?: Resolver<Client.Prisma.ProfileMinAggregateOutputType, {}, string | null>;
  joiningDate?: Resolver<Client.Prisma.ProfileMinAggregateOutputType, {}, Date | null>;
  businessPhone?: Resolver<Client.Prisma.ProfileMinAggregateOutputType, {}, string | null>;
  mobilePhone?: Resolver<Client.Prisma.ProfileMinAggregateOutputType, {}, string | null>;
  kakaoTalkId?: Resolver<Client.Prisma.ProfileMinAggregateOutputType, {}, string | null>;
  designation?: Resolver<Client.Prisma.ProfileMinAggregateOutputType, {}, string | null>;
  profileImg?: Resolver<Client.Prisma.ProfileMinAggregateOutputType, {}, string | null>;
  designationIcon?: Resolver<Client.Prisma.ProfileMinAggregateOutputType, {}, string | null>;
  coverImg?: Resolver<Client.Prisma.ProfileMinAggregateOutputType, {}, string | null>;
}

export interface ProfileMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<Client.Prisma.ProfileMaxAggregateOutputType, {}, number | null>;
  location?: Resolver<Client.Prisma.ProfileMaxAggregateOutputType, {}, string | null>;
  joiningDate?: Resolver<Client.Prisma.ProfileMaxAggregateOutputType, {}, Date | null>;
  businessPhone?: Resolver<Client.Prisma.ProfileMaxAggregateOutputType, {}, string | null>;
  mobilePhone?: Resolver<Client.Prisma.ProfileMaxAggregateOutputType, {}, string | null>;
  kakaoTalkId?: Resolver<Client.Prisma.ProfileMaxAggregateOutputType, {}, string | null>;
  designation?: Resolver<Client.Prisma.ProfileMaxAggregateOutputType, {}, string | null>;
  profileImg?: Resolver<Client.Prisma.ProfileMaxAggregateOutputType, {}, string | null>;
  designationIcon?: Resolver<Client.Prisma.ProfileMaxAggregateOutputType, {}, string | null>;
  coverImg?: Resolver<Client.Prisma.ProfileMaxAggregateOutputType, {}, string | null>;
}

export interface UsersOnTeamsCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  teamName?: Resolver<Client.Prisma.UsersOnTeamsCountAggregateOutputType, {}, number>;
  userId?: Resolver<Client.Prisma.UsersOnTeamsCountAggregateOutputType, {}, number>;
  assignedAt?: Resolver<Client.Prisma.UsersOnTeamsCountAggregateOutputType, {}, number>;
  _all?: Resolver<Client.Prisma.UsersOnTeamsCountAggregateOutputType, {}, number>;
}

export interface UsersOnTeamsAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<Client.Prisma.UsersOnTeamsAvgAggregateOutputType, {}, number | null>;
}

export interface UsersOnTeamsSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<Client.Prisma.UsersOnTeamsSumAggregateOutputType, {}, number | null>;
}

export interface UsersOnTeamsMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  teamName?: Resolver<Client.Prisma.UsersOnTeamsMinAggregateOutputType, {}, string | null>;
  userId?: Resolver<Client.Prisma.UsersOnTeamsMinAggregateOutputType, {}, number | null>;
  assignedAt?: Resolver<Client.Prisma.UsersOnTeamsMinAggregateOutputType, {}, Date | null>;
}

export interface UsersOnTeamsMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  teamName?: Resolver<Client.Prisma.UsersOnTeamsMaxAggregateOutputType, {}, string | null>;
  userId?: Resolver<Client.Prisma.UsersOnTeamsMaxAggregateOutputType, {}, number | null>;
  assignedAt?: Resolver<Client.Prisma.UsersOnTeamsMaxAggregateOutputType, {}, Date | null>;
}

export interface TeamCountOutputType {
  [key: string]: Resolver<any, any, any>;
  users?: Resolver<Client.Prisma.TeamCountOutputType, {}, number>;
}

export interface TeamCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  teamName?: Resolver<Client.Prisma.TeamCountAggregateOutputType, {}, number>;
  teamType?: Resolver<Client.Prisma.TeamCountAggregateOutputType, {}, number>;
  teamIcon?: Resolver<Client.Prisma.TeamCountAggregateOutputType, {}, number>;
  _all?: Resolver<Client.Prisma.TeamCountAggregateOutputType, {}, number>;
}

export interface TeamMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  teamName?: Resolver<Client.Prisma.TeamMinAggregateOutputType, {}, string | null>;
  teamType?: Resolver<Client.Prisma.TeamMinAggregateOutputType, {}, string | null>;
  teamIcon?: Resolver<Client.Prisma.TeamMinAggregateOutputType, {}, string | null>;
}

export interface TeamMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  teamName?: Resolver<Client.Prisma.TeamMaxAggregateOutputType, {}, string | null>;
  teamType?: Resolver<Client.Prisma.TeamMaxAggregateOutputType, {}, string | null>;
  teamIcon?: Resolver<Client.Prisma.TeamMaxAggregateOutputType, {}, string | null>;
}

export interface UsersOnCalendarEventsCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<Client.Prisma.UsersOnCalendarEventsCountAggregateOutputType, {}, number>;
  calendarEventId?: Resolver<
    Client.Prisma.UsersOnCalendarEventsCountAggregateOutputType,
    {},
    number
  >;
  _all?: Resolver<Client.Prisma.UsersOnCalendarEventsCountAggregateOutputType, {}, number>;
}

export interface UsersOnCalendarEventsAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<Client.Prisma.UsersOnCalendarEventsAvgAggregateOutputType, {}, number | null>;
  calendarEventId?: Resolver<
    Client.Prisma.UsersOnCalendarEventsAvgAggregateOutputType,
    {},
    number | null
  >;
}

export interface UsersOnCalendarEventsSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<Client.Prisma.UsersOnCalendarEventsSumAggregateOutputType, {}, number | null>;
  calendarEventId?: Resolver<
    Client.Prisma.UsersOnCalendarEventsSumAggregateOutputType,
    {},
    number | null
  >;
}

export interface UsersOnCalendarEventsMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<Client.Prisma.UsersOnCalendarEventsMinAggregateOutputType, {}, number | null>;
  calendarEventId?: Resolver<
    Client.Prisma.UsersOnCalendarEventsMinAggregateOutputType,
    {},
    number | null
  >;
}

export interface UsersOnCalendarEventsMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  userId?: Resolver<Client.Prisma.UsersOnCalendarEventsMaxAggregateOutputType, {}, number | null>;
  calendarEventId?: Resolver<
    Client.Prisma.UsersOnCalendarEventsMaxAggregateOutputType,
    {},
    number | null
  >;
}

export interface CalendarEventCountOutputType {
  [key: string]: Resolver<any, any, any>;
  guests?: Resolver<Client.Prisma.CalendarEventCountOutputType, {}, number>;
  calendar?: Resolver<Client.Prisma.CalendarEventCountOutputType, {}, number>;
}

export interface CalendarEventCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.CalendarEventCountAggregateOutputType, {}, number>;
  url?: Resolver<Client.Prisma.CalendarEventCountAggregateOutputType, {}, number>;
  title?: Resolver<Client.Prisma.CalendarEventCountAggregateOutputType, {}, number>;
  start?: Resolver<Client.Prisma.CalendarEventCountAggregateOutputType, {}, number>;
  end?: Resolver<Client.Prisma.CalendarEventCountAggregateOutputType, {}, number>;
  allDay?: Resolver<Client.Prisma.CalendarEventCountAggregateOutputType, {}, number>;
  _all?: Resolver<Client.Prisma.CalendarEventCountAggregateOutputType, {}, number>;
}

export interface CalendarEventAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.CalendarEventAvgAggregateOutputType, {}, number | null>;
}

export interface CalendarEventSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.CalendarEventSumAggregateOutputType, {}, number | null>;
}

export interface CalendarEventMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.CalendarEventMinAggregateOutputType, {}, number | null>;
  url?: Resolver<Client.Prisma.CalendarEventMinAggregateOutputType, {}, string | null>;
  title?: Resolver<Client.Prisma.CalendarEventMinAggregateOutputType, {}, string | null>;
  start?: Resolver<Client.Prisma.CalendarEventMinAggregateOutputType, {}, Date | null>;
  end?: Resolver<Client.Prisma.CalendarEventMinAggregateOutputType, {}, Date | null>;
  allDay?: Resolver<Client.Prisma.CalendarEventMinAggregateOutputType, {}, boolean | null>;
}

export interface CalendarEventMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  id?: Resolver<Client.Prisma.CalendarEventMaxAggregateOutputType, {}, number | null>;
  url?: Resolver<Client.Prisma.CalendarEventMaxAggregateOutputType, {}, string | null>;
  title?: Resolver<Client.Prisma.CalendarEventMaxAggregateOutputType, {}, string | null>;
  start?: Resolver<Client.Prisma.CalendarEventMaxAggregateOutputType, {}, Date | null>;
  end?: Resolver<Client.Prisma.CalendarEventMaxAggregateOutputType, {}, Date | null>;
  allDay?: Resolver<Client.Prisma.CalendarEventMaxAggregateOutputType, {}, boolean | null>;
}

export interface CalendarEventsOnCalendarsCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  calendarType?: Resolver<
    Client.Prisma.CalendarEventsOnCalendarsCountAggregateOutputType,
    {},
    number
  >;
  calendarOwnerId?: Resolver<
    Client.Prisma.CalendarEventsOnCalendarsCountAggregateOutputType,
    {},
    number
  >;
  calendarEventId?: Resolver<
    Client.Prisma.CalendarEventsOnCalendarsCountAggregateOutputType,
    {},
    number
  >;
  _all?: Resolver<Client.Prisma.CalendarEventsOnCalendarsCountAggregateOutputType, {}, number>;
}

export interface CalendarEventsOnCalendarsAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  calendarOwnerId?: Resolver<
    Client.Prisma.CalendarEventsOnCalendarsAvgAggregateOutputType,
    {},
    number | null
  >;
  calendarEventId?: Resolver<
    Client.Prisma.CalendarEventsOnCalendarsAvgAggregateOutputType,
    {},
    number | null
  >;
}

export interface CalendarEventsOnCalendarsSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  calendarOwnerId?: Resolver<
    Client.Prisma.CalendarEventsOnCalendarsSumAggregateOutputType,
    {},
    number | null
  >;
  calendarEventId?: Resolver<
    Client.Prisma.CalendarEventsOnCalendarsSumAggregateOutputType,
    {},
    number | null
  >;
}

export interface CalendarEventsOnCalendarsMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  calendarType?: Resolver<
    Client.Prisma.CalendarEventsOnCalendarsMinAggregateOutputType,
    {},
    string | null
  >;
  calendarOwnerId?: Resolver<
    Client.Prisma.CalendarEventsOnCalendarsMinAggregateOutputType,
    {},
    number | null
  >;
  calendarEventId?: Resolver<
    Client.Prisma.CalendarEventsOnCalendarsMinAggregateOutputType,
    {},
    number | null
  >;
}

export interface CalendarEventsOnCalendarsMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  calendarType?: Resolver<
    Client.Prisma.CalendarEventsOnCalendarsMaxAggregateOutputType,
    {},
    string | null
  >;
  calendarOwnerId?: Resolver<
    Client.Prisma.CalendarEventsOnCalendarsMaxAggregateOutputType,
    {},
    number | null
  >;
  calendarEventId?: Resolver<
    Client.Prisma.CalendarEventsOnCalendarsMaxAggregateOutputType,
    {},
    number | null
  >;
}

export interface CalendarCountOutputType {
  [key: string]: Resolver<any, any, any>;
  users?: Resolver<Client.Prisma.CalendarCountOutputType, {}, number>;
  calendarEvents?: Resolver<Client.Prisma.CalendarCountOutputType, {}, number>;
}

export interface CalendarCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  calendarType?: Resolver<Client.Prisma.CalendarCountAggregateOutputType, {}, number>;
  calendarOwnerId?: Resolver<Client.Prisma.CalendarCountAggregateOutputType, {}, number>;
  _all?: Resolver<Client.Prisma.CalendarCountAggregateOutputType, {}, number>;
}

export interface CalendarAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  calendarOwnerId?: Resolver<Client.Prisma.CalendarAvgAggregateOutputType, {}, number | null>;
}

export interface CalendarSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  calendarOwnerId?: Resolver<Client.Prisma.CalendarSumAggregateOutputType, {}, number | null>;
}

export interface CalendarMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  calendarType?: Resolver<Client.Prisma.CalendarMinAggregateOutputType, {}, string | null>;
  calendarOwnerId?: Resolver<Client.Prisma.CalendarMinAggregateOutputType, {}, number | null>;
}

export interface CalendarMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  calendarType?: Resolver<Client.Prisma.CalendarMaxAggregateOutputType, {}, string | null>;
  calendarOwnerId?: Resolver<Client.Prisma.CalendarMaxAggregateOutputType, {}, number | null>;
}

export interface CalendarsOnUsersCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  calendarAttributedToId?: Resolver<
    Client.Prisma.CalendarsOnUsersCountAggregateOutputType,
    {},
    number
  >;
  calendarType?: Resolver<Client.Prisma.CalendarsOnUsersCountAggregateOutputType, {}, number>;
  calendarOwnerId?: Resolver<Client.Prisma.CalendarsOnUsersCountAggregateOutputType, {}, number>;
  _all?: Resolver<Client.Prisma.CalendarsOnUsersCountAggregateOutputType, {}, number>;
}

export interface CalendarsOnUsersAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  calendarAttributedToId?: Resolver<
    Client.Prisma.CalendarsOnUsersAvgAggregateOutputType,
    {},
    number | null
  >;
  calendarOwnerId?: Resolver<
    Client.Prisma.CalendarsOnUsersAvgAggregateOutputType,
    {},
    number | null
  >;
}

export interface CalendarsOnUsersSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  calendarAttributedToId?: Resolver<
    Client.Prisma.CalendarsOnUsersSumAggregateOutputType,
    {},
    number | null
  >;
  calendarOwnerId?: Resolver<
    Client.Prisma.CalendarsOnUsersSumAggregateOutputType,
    {},
    number | null
  >;
}

export interface CalendarsOnUsersMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  calendarAttributedToId?: Resolver<
    Client.Prisma.CalendarsOnUsersMinAggregateOutputType,
    {},
    number | null
  >;
  calendarType?: Resolver<Client.Prisma.CalendarsOnUsersMinAggregateOutputType, {}, string | null>;
  calendarOwnerId?: Resolver<
    Client.Prisma.CalendarsOnUsersMinAggregateOutputType,
    {},
    number | null
  >;
}

export interface CalendarsOnUsersMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>;
  calendarAttributedToId?: Resolver<
    Client.Prisma.CalendarsOnUsersMaxAggregateOutputType,
    {},
    number | null
  >;
  calendarType?: Resolver<Client.Prisma.CalendarsOnUsersMaxAggregateOutputType, {}, string | null>;
  calendarOwnerId?: Resolver<
    Client.Prisma.CalendarsOnUsersMaxAggregateOutputType,
    {},
    number | null
  >;
}

export interface Auth_UserProfileArgs {
  where?: Auth_ProfileWhereInput | null;
}

export interface Auth_UserTeamsArgs {
  where?: Auth_UsersOnTeamsWhereInput | null;
  orderBy?: Auth_UsersOnTeamsOrderByWithRelationInput[] | null;
  cursor?: Auth_UsersOnTeamsWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: UsersOnTeamsScalarFieldEnum[] | null;
}

export interface Auth_UserCalendarsArgs {
  where?: Auth_CalendarsOnUsersWhereInput | null;
  orderBy?: Auth_CalendarsOnUsersOrderByWithRelationInput[] | null;
  cursor?: Auth_CalendarsOnUsersWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: CalendarsOnUsersScalarFieldEnum[] | null;
}

export interface Auth_UserEventsInvitedToArgs {
  where?: Auth_UsersOnCalendarEventsWhereInput | null;
  orderBy?: Auth_UsersOnCalendarEventsOrderByWithRelationInput[] | null;
  cursor?: Auth_UsersOnCalendarEventsWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: UsersOnCalendarEventsScalarFieldEnum[] | null;
}

export interface Auth_UserContactedArgs {
  where?: Auth_UserWhereInput | null;
  orderBy?: Auth_UserOrderByWithRelationInput[] | null;
  cursor?: Auth_UserWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: UserScalarFieldEnum[] | null;
}

export interface Auth_UserContactedByArgs {
  where?: Auth_UserWhereInput | null;
  orderBy?: Auth_UserOrderByWithRelationInput[] | null;
  cursor?: Auth_UserWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: UserScalarFieldEnum[] | null;
}

export interface Auth_UserCalendarsCreatedArgs {
  where?: Auth_CalendarWhereInput | null;
  orderBy?: Auth_CalendarOrderByWithRelationInput[] | null;
  cursor?: Auth_CalendarWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: CalendarScalarFieldEnum[] | null;
}

export interface Auth_TeamUsersArgs {
  where?: Auth_UsersOnTeamsWhereInput | null;
  orderBy?: Auth_UsersOnTeamsOrderByWithRelationInput[] | null;
  cursor?: Auth_UsersOnTeamsWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: UsersOnTeamsScalarFieldEnum[] | null;
}

export interface Auth_CalendarEventGuestsArgs {
  where?: Auth_UsersOnCalendarEventsWhereInput | null;
  orderBy?: Auth_UsersOnCalendarEventsOrderByWithRelationInput[] | null;
  cursor?: Auth_UsersOnCalendarEventsWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: UsersOnCalendarEventsScalarFieldEnum[] | null;
}

export interface Auth_CalendarEventCalendarArgs {
  where?: Auth_CalendarEventsOnCalendarsWhereInput | null;
  orderBy?: Auth_CalendarEventsOnCalendarsOrderByWithRelationInput[] | null;
  cursor?: Auth_CalendarEventsOnCalendarsWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: CalendarEventsOnCalendarsScalarFieldEnum[] | null;
}

export interface Auth_CalendarUsersArgs {
  where?: Auth_CalendarsOnUsersWhereInput | null;
  orderBy?: Auth_CalendarsOnUsersOrderByWithRelationInput[] | null;
  cursor?: Auth_CalendarsOnUsersWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: CalendarsOnUsersScalarFieldEnum[] | null;
}

export interface Auth_CalendarCalendarEventsArgs {
  where?: Auth_CalendarEventsOnCalendarsWhereInput | null;
  orderBy?: Auth_CalendarEventsOnCalendarsOrderByWithRelationInput[] | null;
  cursor?: Auth_CalendarEventsOnCalendarsWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: CalendarEventsOnCalendarsScalarFieldEnum[] | null;
}

export interface Auth_FindFirstUserArgs {
  where?: Auth_UserWhereInput | null;
  orderBy?: Auth_UserOrderByWithRelationInput[] | null;
  cursor?: Auth_UserWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: UserScalarFieldEnum[] | null;
}

export interface Auth_FindFirstUserOrThrowArgs {
  where?: Auth_UserWhereInput | null;
  orderBy?: Auth_UserOrderByWithRelationInput[] | null;
  cursor?: Auth_UserWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: UserScalarFieldEnum[] | null;
}

export interface Auth_FindManyUserArgs {
  where?: Auth_UserWhereInput;
  orderBy?: Auth_UserOrderByWithRelationInput[];
  cursor?: Auth_UserWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: UserScalarFieldEnum[];
}

export interface Auth_AggregateUserArgs {
  where?: Auth_UserWhereInput;
  orderBy?: Auth_UserOrderByWithRelationInput[];
  cursor?: Auth_UserWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: Client.Prisma.UserCountAggregateInputType;
  _avg?: Client.Prisma.UserAvgAggregateInputType;
  _sum?: Client.Prisma.UserSumAggregateInputType;
  _min?: Client.Prisma.UserMinAggregateInputType;
  _max?: Client.Prisma.UserMaxAggregateInputType;
}

export interface Auth_GroupByUserArgs {
  where?: Auth_UserWhereInput;
  orderBy?: Auth_UserOrderByWithAggregationInput[];
  by: UserScalarFieldEnum[];
  having?: Auth_UserScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
}

export interface Auth_FindUniqueUserArgs {
  where: Auth_UserWhereUniqueInput | null;
}

export interface Auth_FindUniqueUserOrThrowArgs {
  where: Auth_UserWhereUniqueInput | null;
}

export interface Auth_FindFirstProfileArgs {
  where?: Auth_ProfileWhereInput | null;
  orderBy?: Auth_ProfileOrderByWithRelationInput[] | null;
  cursor?: Auth_ProfileWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: ProfileScalarFieldEnum[] | null;
}

export interface Auth_FindFirstProfileOrThrowArgs {
  where?: Auth_ProfileWhereInput | null;
  orderBy?: Auth_ProfileOrderByWithRelationInput[] | null;
  cursor?: Auth_ProfileWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: ProfileScalarFieldEnum[] | null;
}

export interface Auth_FindManyProfileArgs {
  where?: Auth_ProfileWhereInput;
  orderBy?: Auth_ProfileOrderByWithRelationInput[];
  cursor?: Auth_ProfileWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: ProfileScalarFieldEnum[];
}

export interface Auth_AggregateProfileArgs {
  where?: Auth_ProfileWhereInput;
  orderBy?: Auth_ProfileOrderByWithRelationInput[];
  cursor?: Auth_ProfileWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: Client.Prisma.ProfileCountAggregateInputType;
  _avg?: Client.Prisma.ProfileAvgAggregateInputType;
  _sum?: Client.Prisma.ProfileSumAggregateInputType;
  _min?: Client.Prisma.ProfileMinAggregateInputType;
  _max?: Client.Prisma.ProfileMaxAggregateInputType;
}

export interface Auth_GroupByProfileArgs {
  where?: Auth_ProfileWhereInput;
  orderBy?: Auth_ProfileOrderByWithAggregationInput[];
  by: ProfileScalarFieldEnum[];
  having?: Auth_ProfileScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
}

export interface Auth_FindUniqueProfileArgs {
  where: Auth_ProfileWhereUniqueInput | null;
}

export interface Auth_FindUniqueProfileOrThrowArgs {
  where: Auth_ProfileWhereUniqueInput | null;
}

export interface Auth_FindFirstUsersOnTeamsArgs {
  where?: Auth_UsersOnTeamsWhereInput | null;
  orderBy?: Auth_UsersOnTeamsOrderByWithRelationInput[] | null;
  cursor?: Auth_UsersOnTeamsWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: UsersOnTeamsScalarFieldEnum[] | null;
}

export interface Auth_FindFirstUsersOnTeamsOrThrowArgs {
  where?: Auth_UsersOnTeamsWhereInput | null;
  orderBy?: Auth_UsersOnTeamsOrderByWithRelationInput[] | null;
  cursor?: Auth_UsersOnTeamsWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: UsersOnTeamsScalarFieldEnum[] | null;
}

export interface Auth_FindManyUsersOnTeamsArgs {
  where?: Auth_UsersOnTeamsWhereInput;
  orderBy?: Auth_UsersOnTeamsOrderByWithRelationInput[];
  cursor?: Auth_UsersOnTeamsWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: UsersOnTeamsScalarFieldEnum[];
}

export interface Auth_AggregateUsersOnTeamsArgs {
  where?: Auth_UsersOnTeamsWhereInput;
  orderBy?: Auth_UsersOnTeamsOrderByWithRelationInput[];
  cursor?: Auth_UsersOnTeamsWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: Client.Prisma.UsersOnTeamsCountAggregateInputType;
  _avg?: Client.Prisma.UsersOnTeamsAvgAggregateInputType;
  _sum?: Client.Prisma.UsersOnTeamsSumAggregateInputType;
  _min?: Client.Prisma.UsersOnTeamsMinAggregateInputType;
  _max?: Client.Prisma.UsersOnTeamsMaxAggregateInputType;
}

export interface Auth_GroupByUsersOnTeamsArgs {
  where?: Auth_UsersOnTeamsWhereInput;
  orderBy?: Auth_UsersOnTeamsOrderByWithAggregationInput[];
  by: UsersOnTeamsScalarFieldEnum[];
  having?: Auth_UsersOnTeamsScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
}

export interface Auth_FindUniqueUsersOnTeamsArgs {
  where: Auth_UsersOnTeamsWhereUniqueInput | null;
}

export interface Auth_FindUniqueUsersOnTeamsOrThrowArgs {
  where: Auth_UsersOnTeamsWhereUniqueInput | null;
}

export interface Auth_FindFirstTeamArgs {
  where?: Auth_TeamWhereInput | null;
  orderBy?: Auth_TeamOrderByWithRelationInput[] | null;
  cursor?: Auth_TeamWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: TeamScalarFieldEnum[] | null;
}

export interface Auth_FindFirstTeamOrThrowArgs {
  where?: Auth_TeamWhereInput | null;
  orderBy?: Auth_TeamOrderByWithRelationInput[] | null;
  cursor?: Auth_TeamWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: TeamScalarFieldEnum[] | null;
}

export interface Auth_FindManyTeamArgs {
  where?: Auth_TeamWhereInput;
  orderBy?: Auth_TeamOrderByWithRelationInput[];
  cursor?: Auth_TeamWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: TeamScalarFieldEnum[];
}

export interface Auth_AggregateTeamArgs {
  where?: Auth_TeamWhereInput;
  orderBy?: Auth_TeamOrderByWithRelationInput[];
  cursor?: Auth_TeamWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: Client.Prisma.TeamCountAggregateInputType;
  _min?: Client.Prisma.TeamMinAggregateInputType;
  _max?: Client.Prisma.TeamMaxAggregateInputType;
}

export interface Auth_GroupByTeamArgs {
  where?: Auth_TeamWhereInput;
  orderBy?: Auth_TeamOrderByWithAggregationInput[];
  by: TeamScalarFieldEnum[];
  having?: Auth_TeamScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
}

export interface Auth_FindUniqueTeamArgs {
  where: Auth_TeamWhereUniqueInput | null;
}

export interface Auth_FindUniqueTeamOrThrowArgs {
  where: Auth_TeamWhereUniqueInput | null;
}

export interface Auth_FindFirstUsersOnCalendarEventsArgs {
  where?: Auth_UsersOnCalendarEventsWhereInput | null;
  orderBy?: Auth_UsersOnCalendarEventsOrderByWithRelationInput[] | null;
  cursor?: Auth_UsersOnCalendarEventsWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: UsersOnCalendarEventsScalarFieldEnum[] | null;
}

export interface Auth_FindFirstUsersOnCalendarEventsOrThrowArgs {
  where?: Auth_UsersOnCalendarEventsWhereInput | null;
  orderBy?: Auth_UsersOnCalendarEventsOrderByWithRelationInput[] | null;
  cursor?: Auth_UsersOnCalendarEventsWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: UsersOnCalendarEventsScalarFieldEnum[] | null;
}

export interface Auth_FindManyUsersOnCalendarEventsArgs {
  where?: Auth_UsersOnCalendarEventsWhereInput;
  orderBy?: Auth_UsersOnCalendarEventsOrderByWithRelationInput[];
  cursor?: Auth_UsersOnCalendarEventsWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: UsersOnCalendarEventsScalarFieldEnum[];
}

export interface Auth_AggregateUsersOnCalendarEventsArgs {
  where?: Auth_UsersOnCalendarEventsWhereInput;
  orderBy?: Auth_UsersOnCalendarEventsOrderByWithRelationInput[];
  cursor?: Auth_UsersOnCalendarEventsWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: Client.Prisma.UsersOnCalendarEventsCountAggregateInputType;
  _avg?: Client.Prisma.UsersOnCalendarEventsAvgAggregateInputType;
  _sum?: Client.Prisma.UsersOnCalendarEventsSumAggregateInputType;
  _min?: Client.Prisma.UsersOnCalendarEventsMinAggregateInputType;
  _max?: Client.Prisma.UsersOnCalendarEventsMaxAggregateInputType;
}

export interface Auth_GroupByUsersOnCalendarEventsArgs {
  where?: Auth_UsersOnCalendarEventsWhereInput;
  orderBy?: Auth_UsersOnCalendarEventsOrderByWithAggregationInput[];
  by: UsersOnCalendarEventsScalarFieldEnum[];
  having?: Auth_UsersOnCalendarEventsScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
}

export interface Auth_FindUniqueUsersOnCalendarEventsArgs {
  where: Auth_UsersOnCalendarEventsWhereUniqueInput | null;
}

export interface Auth_FindUniqueUsersOnCalendarEventsOrThrowArgs {
  where: Auth_UsersOnCalendarEventsWhereUniqueInput | null;
}

export interface Auth_FindFirstCalendarEventArgs {
  where?: Auth_CalendarEventWhereInput | null;
  orderBy?: Auth_CalendarEventOrderByWithRelationInput[] | null;
  cursor?: Auth_CalendarEventWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: CalendarEventScalarFieldEnum[] | null;
}

export interface Auth_FindFirstCalendarEventOrThrowArgs {
  where?: Auth_CalendarEventWhereInput | null;
  orderBy?: Auth_CalendarEventOrderByWithRelationInput[] | null;
  cursor?: Auth_CalendarEventWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: CalendarEventScalarFieldEnum[] | null;
}

export interface Auth_FindManyCalendarEventArgs {
  where?: Auth_CalendarEventWhereInput;
  orderBy?: Auth_CalendarEventOrderByWithRelationInput[];
  cursor?: Auth_CalendarEventWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: CalendarEventScalarFieldEnum[];
}

export interface Auth_AggregateCalendarEventArgs {
  where?: Auth_CalendarEventWhereInput;
  orderBy?: Auth_CalendarEventOrderByWithRelationInput[];
  cursor?: Auth_CalendarEventWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: Client.Prisma.CalendarEventCountAggregateInputType;
  _avg?: Client.Prisma.CalendarEventAvgAggregateInputType;
  _sum?: Client.Prisma.CalendarEventSumAggregateInputType;
  _min?: Client.Prisma.CalendarEventMinAggregateInputType;
  _max?: Client.Prisma.CalendarEventMaxAggregateInputType;
}

export interface Auth_GroupByCalendarEventArgs {
  where?: Auth_CalendarEventWhereInput;
  orderBy?: Auth_CalendarEventOrderByWithAggregationInput[];
  by: CalendarEventScalarFieldEnum[];
  having?: Auth_CalendarEventScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
}

export interface Auth_FindUniqueCalendarEventArgs {
  where: Auth_CalendarEventWhereUniqueInput | null;
}

export interface Auth_FindUniqueCalendarEventOrThrowArgs {
  where: Auth_CalendarEventWhereUniqueInput | null;
}

export interface Auth_FindFirstCalendarEventsOnCalendarsArgs {
  where?: Auth_CalendarEventsOnCalendarsWhereInput | null;
  orderBy?: Auth_CalendarEventsOnCalendarsOrderByWithRelationInput[] | null;
  cursor?: Auth_CalendarEventsOnCalendarsWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: CalendarEventsOnCalendarsScalarFieldEnum[] | null;
}

export interface Auth_FindFirstCalendarEventsOnCalendarsOrThrowArgs {
  where?: Auth_CalendarEventsOnCalendarsWhereInput | null;
  orderBy?: Auth_CalendarEventsOnCalendarsOrderByWithRelationInput[] | null;
  cursor?: Auth_CalendarEventsOnCalendarsWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: CalendarEventsOnCalendarsScalarFieldEnum[] | null;
}

export interface Auth_FindManyCalendarEventsOnCalendarsArgs {
  where?: Auth_CalendarEventsOnCalendarsWhereInput;
  orderBy?: Auth_CalendarEventsOnCalendarsOrderByWithRelationInput[];
  cursor?: Auth_CalendarEventsOnCalendarsWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: CalendarEventsOnCalendarsScalarFieldEnum[];
}

export interface Auth_AggregateCalendarEventsOnCalendarsArgs {
  where?: Auth_CalendarEventsOnCalendarsWhereInput;
  orderBy?: Auth_CalendarEventsOnCalendarsOrderByWithRelationInput[];
  cursor?: Auth_CalendarEventsOnCalendarsWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: Client.Prisma.CalendarEventsOnCalendarsCountAggregateInputType;
  _avg?: Client.Prisma.CalendarEventsOnCalendarsAvgAggregateInputType;
  _sum?: Client.Prisma.CalendarEventsOnCalendarsSumAggregateInputType;
  _min?: Client.Prisma.CalendarEventsOnCalendarsMinAggregateInputType;
  _max?: Client.Prisma.CalendarEventsOnCalendarsMaxAggregateInputType;
}

export interface Auth_GroupByCalendarEventsOnCalendarsArgs {
  where?: Auth_CalendarEventsOnCalendarsWhereInput;
  orderBy?: Auth_CalendarEventsOnCalendarsOrderByWithAggregationInput[];
  by: CalendarEventsOnCalendarsScalarFieldEnum[];
  having?: Auth_CalendarEventsOnCalendarsScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
}

export interface Auth_FindUniqueCalendarEventsOnCalendarsArgs {
  where: Auth_CalendarEventsOnCalendarsWhereUniqueInput | null;
}

export interface Auth_FindUniqueCalendarEventsOnCalendarsOrThrowArgs {
  where: Auth_CalendarEventsOnCalendarsWhereUniqueInput | null;
}

export interface Auth_FindFirstCalendarArgs {
  where?: Auth_CalendarWhereInput | null;
  orderBy?: Auth_CalendarOrderByWithRelationInput[] | null;
  cursor?: Auth_CalendarWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: CalendarScalarFieldEnum[] | null;
}

export interface Auth_FindFirstCalendarOrThrowArgs {
  where?: Auth_CalendarWhereInput | null;
  orderBy?: Auth_CalendarOrderByWithRelationInput[] | null;
  cursor?: Auth_CalendarWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: CalendarScalarFieldEnum[] | null;
}

export interface Auth_FindManyCalendarArgs {
  where?: Auth_CalendarWhereInput;
  orderBy?: Auth_CalendarOrderByWithRelationInput[];
  cursor?: Auth_CalendarWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: CalendarScalarFieldEnum[];
}

export interface Auth_AggregateCalendarArgs {
  where?: Auth_CalendarWhereInput;
  orderBy?: Auth_CalendarOrderByWithRelationInput[];
  cursor?: Auth_CalendarWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: Client.Prisma.CalendarCountAggregateInputType;
  _avg?: Client.Prisma.CalendarAvgAggregateInputType;
  _sum?: Client.Prisma.CalendarSumAggregateInputType;
  _min?: Client.Prisma.CalendarMinAggregateInputType;
  _max?: Client.Prisma.CalendarMaxAggregateInputType;
}

export interface Auth_GroupByCalendarArgs {
  where?: Auth_CalendarWhereInput;
  orderBy?: Auth_CalendarOrderByWithAggregationInput[];
  by: CalendarScalarFieldEnum[];
  having?: Auth_CalendarScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
}

export interface Auth_FindUniqueCalendarArgs {
  where: Auth_CalendarWhereUniqueInput | null;
}

export interface Auth_FindUniqueCalendarOrThrowArgs {
  where: Auth_CalendarWhereUniqueInput | null;
}

export interface Auth_FindFirstCalendarsOnUsersArgs {
  where?: Auth_CalendarsOnUsersWhereInput | null;
  orderBy?: Auth_CalendarsOnUsersOrderByWithRelationInput[] | null;
  cursor?: Auth_CalendarsOnUsersWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: CalendarsOnUsersScalarFieldEnum[] | null;
}

export interface Auth_FindFirstCalendarsOnUsersOrThrowArgs {
  where?: Auth_CalendarsOnUsersWhereInput | null;
  orderBy?: Auth_CalendarsOnUsersOrderByWithRelationInput[] | null;
  cursor?: Auth_CalendarsOnUsersWhereUniqueInput | null;
  take?: number | null;
  skip?: number | null;
  distinct?: CalendarsOnUsersScalarFieldEnum[] | null;
}

export interface Auth_FindManyCalendarsOnUsersArgs {
  where?: Auth_CalendarsOnUsersWhereInput;
  orderBy?: Auth_CalendarsOnUsersOrderByWithRelationInput[];
  cursor?: Auth_CalendarsOnUsersWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: CalendarsOnUsersScalarFieldEnum[];
}

export interface Auth_AggregateCalendarsOnUsersArgs {
  where?: Auth_CalendarsOnUsersWhereInput;
  orderBy?: Auth_CalendarsOnUsersOrderByWithRelationInput[];
  cursor?: Auth_CalendarsOnUsersWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: Client.Prisma.CalendarsOnUsersCountAggregateInputType;
  _avg?: Client.Prisma.CalendarsOnUsersAvgAggregateInputType;
  _sum?: Client.Prisma.CalendarsOnUsersSumAggregateInputType;
  _min?: Client.Prisma.CalendarsOnUsersMinAggregateInputType;
  _max?: Client.Prisma.CalendarsOnUsersMaxAggregateInputType;
}

export interface Auth_GroupByCalendarsOnUsersArgs {
  where?: Auth_CalendarsOnUsersWhereInput;
  orderBy?: Auth_CalendarsOnUsersOrderByWithAggregationInput[];
  by: CalendarsOnUsersScalarFieldEnum[];
  having?: Auth_CalendarsOnUsersScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
}

export interface Auth_FindUniqueCalendarsOnUsersArgs {
  where: Auth_CalendarsOnUsersWhereUniqueInput | null;
}

export interface Auth_FindUniqueCalendarsOnUsersOrThrowArgs {
  where: Auth_CalendarsOnUsersWhereUniqueInput | null;
}

export interface Auth_CreateOneUserArgs {
  data: Auth_UserCreateInput;
}

export interface Auth_UpsertOneUserArgs {
  where: Auth_UserWhereUniqueInput;
  create: Auth_UserCreateInput;
  update: Auth_UserUpdateInput;
}

export interface Auth_CreateManyUserArgs {
  data: Auth_UserCreateManyInput[];
  skipDuplicates?: boolean;
}

export interface Auth_DeleteOneUserArgs {
  where: Auth_UserWhereUniqueInput | null;
}

export interface Auth_UpdateOneUserArgs {
  data: Auth_UserUpdateInput | null;
  where: Auth_UserWhereUniqueInput | null;
}

export interface Auth_UpdateManyUserArgs {
  data: Auth_UserUpdateManyMutationInput;
  where?: Auth_UserWhereInput;
}

export interface Auth_DeleteManyUserArgs {
  where?: Auth_UserWhereInput;
}

export interface Auth_CreateOneProfileArgs {
  data: Auth_ProfileCreateInput;
}

export interface Auth_UpsertOneProfileArgs {
  where: Auth_ProfileWhereUniqueInput;
  create: Auth_ProfileCreateInput;
  update: Auth_ProfileUpdateInput;
}

export interface Auth_CreateManyProfileArgs {
  data: Auth_ProfileCreateManyInput[];
  skipDuplicates?: boolean;
}

export interface Auth_DeleteOneProfileArgs {
  where: Auth_ProfileWhereUniqueInput | null;
}

export interface Auth_UpdateOneProfileArgs {
  data: Auth_ProfileUpdateInput | null;
  where: Auth_ProfileWhereUniqueInput | null;
}

export interface Auth_UpdateManyProfileArgs {
  data: Auth_ProfileUpdateManyMutationInput;
  where?: Auth_ProfileWhereInput;
}

export interface Auth_DeleteManyProfileArgs {
  where?: Auth_ProfileWhereInput;
}

export interface Auth_CreateOneUsersOnTeamsArgs {
  data: Auth_UsersOnTeamsCreateInput;
}

export interface Auth_UpsertOneUsersOnTeamsArgs {
  where: Auth_UsersOnTeamsWhereUniqueInput;
  create: Auth_UsersOnTeamsCreateInput;
  update: Auth_UsersOnTeamsUpdateInput;
}

export interface Auth_CreateManyUsersOnTeamsArgs {
  data: Auth_UsersOnTeamsCreateManyInput[];
  skipDuplicates?: boolean;
}

export interface Auth_DeleteOneUsersOnTeamsArgs {
  where: Auth_UsersOnTeamsWhereUniqueInput | null;
}

export interface Auth_UpdateOneUsersOnTeamsArgs {
  data: Auth_UsersOnTeamsUpdateInput | null;
  where: Auth_UsersOnTeamsWhereUniqueInput | null;
}

export interface Auth_UpdateManyUsersOnTeamsArgs {
  data: Auth_UsersOnTeamsUpdateManyMutationInput;
  where?: Auth_UsersOnTeamsWhereInput;
}

export interface Auth_DeleteManyUsersOnTeamsArgs {
  where?: Auth_UsersOnTeamsWhereInput;
}

export interface Auth_CreateOneTeamArgs {
  data: Auth_TeamCreateInput;
}

export interface Auth_UpsertOneTeamArgs {
  where: Auth_TeamWhereUniqueInput;
  create: Auth_TeamCreateInput;
  update: Auth_TeamUpdateInput;
}

export interface Auth_CreateManyTeamArgs {
  data: Auth_TeamCreateManyInput[];
  skipDuplicates?: boolean;
}

export interface Auth_DeleteOneTeamArgs {
  where: Auth_TeamWhereUniqueInput | null;
}

export interface Auth_UpdateOneTeamArgs {
  data: Auth_TeamUpdateInput | null;
  where: Auth_TeamWhereUniqueInput | null;
}

export interface Auth_UpdateManyTeamArgs {
  data: Auth_TeamUpdateManyMutationInput;
  where?: Auth_TeamWhereInput;
}

export interface Auth_DeleteManyTeamArgs {
  where?: Auth_TeamWhereInput;
}

export interface Auth_CreateOneUsersOnCalendarEventsArgs {
  data: Auth_UsersOnCalendarEventsCreateInput;
}

export interface Auth_UpsertOneUsersOnCalendarEventsArgs {
  where: Auth_UsersOnCalendarEventsWhereUniqueInput;
  create: Auth_UsersOnCalendarEventsCreateInput;
  update: Auth_UsersOnCalendarEventsUpdateInput;
}

export interface Auth_CreateManyUsersOnCalendarEventsArgs {
  data: Auth_UsersOnCalendarEventsCreateManyInput[];
  skipDuplicates?: boolean;
}

export interface Auth_DeleteOneUsersOnCalendarEventsArgs {
  where: Auth_UsersOnCalendarEventsWhereUniqueInput | null;
}

export interface Auth_UpdateOneUsersOnCalendarEventsArgs {
  data: Auth_UsersOnCalendarEventsUpdateInput | null;
  where: Auth_UsersOnCalendarEventsWhereUniqueInput | null;
}

//UpdateManyUsersOnCalendarEventsArgs is not generated as the related model contains only unique or relation fields

export interface Auth_DeleteManyUsersOnCalendarEventsArgs {
  where?: Auth_UsersOnCalendarEventsWhereInput;
}

export interface Auth_CreateOneCalendarEventArgs {
  data: Auth_CalendarEventCreateInput;
}

export interface Auth_UpsertOneCalendarEventArgs {
  where: Auth_CalendarEventWhereUniqueInput;
  create: Auth_CalendarEventCreateInput;
  update: Auth_CalendarEventUpdateInput;
}

export interface Auth_CreateManyCalendarEventArgs {
  data: Auth_CalendarEventCreateManyInput[];
  skipDuplicates?: boolean;
}

export interface Auth_DeleteOneCalendarEventArgs {
  where: Auth_CalendarEventWhereUniqueInput | null;
}

export interface Auth_UpdateOneCalendarEventArgs {
  data: Auth_CalendarEventUpdateInput | null;
  where: Auth_CalendarEventWhereUniqueInput | null;
}

export interface Auth_UpdateManyCalendarEventArgs {
  data: Auth_CalendarEventUpdateManyMutationInput;
  where?: Auth_CalendarEventWhereInput;
}

export interface Auth_DeleteManyCalendarEventArgs {
  where?: Auth_CalendarEventWhereInput;
}

export interface Auth_CreateOneCalendarEventsOnCalendarsArgs {
  data: Auth_CalendarEventsOnCalendarsCreateInput;
}

export interface Auth_UpsertOneCalendarEventsOnCalendarsArgs {
  where: Auth_CalendarEventsOnCalendarsWhereUniqueInput;
  create: Auth_CalendarEventsOnCalendarsCreateInput;
  update: Auth_CalendarEventsOnCalendarsUpdateInput;
}

export interface Auth_CreateManyCalendarEventsOnCalendarsArgs {
  data: Auth_CalendarEventsOnCalendarsCreateManyInput[];
  skipDuplicates?: boolean;
}

export interface Auth_DeleteOneCalendarEventsOnCalendarsArgs {
  where: Auth_CalendarEventsOnCalendarsWhereUniqueInput | null;
}

export interface Auth_UpdateOneCalendarEventsOnCalendarsArgs {
  data: Auth_CalendarEventsOnCalendarsUpdateInput | null;
  where: Auth_CalendarEventsOnCalendarsWhereUniqueInput | null;
}

//UpdateManyCalendarEventsOnCalendarsArgs is not generated as the related model contains only unique or relation fields

export interface Auth_DeleteManyCalendarEventsOnCalendarsArgs {
  where?: Auth_CalendarEventsOnCalendarsWhereInput;
}

export interface Auth_CreateOneCalendarArgs {
  data: Auth_CalendarCreateInput;
}

export interface Auth_UpsertOneCalendarArgs {
  where: Auth_CalendarWhereUniqueInput;
  create: Auth_CalendarCreateInput;
  update: Auth_CalendarUpdateInput;
}

export interface Auth_CreateManyCalendarArgs {
  data: Auth_CalendarCreateManyInput[];
  skipDuplicates?: boolean;
}

export interface Auth_DeleteOneCalendarArgs {
  where: Auth_CalendarWhereUniqueInput | null;
}

export interface Auth_UpdateOneCalendarArgs {
  data: Auth_CalendarUpdateInput | null;
  where: Auth_CalendarWhereUniqueInput | null;
}

export interface Auth_UpdateManyCalendarArgs {
  data: Auth_CalendarUpdateManyMutationInput;
  where?: Auth_CalendarWhereInput;
}

export interface Auth_DeleteManyCalendarArgs {
  where?: Auth_CalendarWhereInput;
}

export interface Auth_CreateOneCalendarsOnUsersArgs {
  data: Auth_CalendarsOnUsersCreateInput;
}

export interface Auth_UpsertOneCalendarsOnUsersArgs {
  where: Auth_CalendarsOnUsersWhereUniqueInput;
  create: Auth_CalendarsOnUsersCreateInput;
  update: Auth_CalendarsOnUsersUpdateInput;
}

export interface Auth_CreateManyCalendarsOnUsersArgs {
  data: Auth_CalendarsOnUsersCreateManyInput[];
  skipDuplicates?: boolean;
}

export interface Auth_DeleteOneCalendarsOnUsersArgs {
  where: Auth_CalendarsOnUsersWhereUniqueInput | null;
}

export interface Auth_UpdateOneCalendarsOnUsersArgs {
  data: Auth_CalendarsOnUsersUpdateInput | null;
  where: Auth_CalendarsOnUsersWhereUniqueInput | null;
}

//UpdateManyCalendarsOnUsersArgs is not generated as the related model contains only unique or relation fields

export interface Auth_DeleteManyCalendarsOnUsersArgs {
  where?: Auth_CalendarsOnUsersWhereInput;
}

export interface Auth_ExecuteRawArgs {
  query: string;
  parameters?: any;
}

export interface Auth_QueryRawArgs {
  query: string;
  parameters?: any;
}

export interface Auth_UserWhereInput {
  AND?: Auth_UserWhereInput[];
  OR?: Auth_UserWhereInput[];
  NOT?: Auth_UserWhereInput[];
  id?: IntFilter;
  createdAt?: DateTimeFilter;
  username?: StringNullableFilter | null;
  password?: StringNullableFilter | null;
  email?: StringFilter;
  roles?: StringNullableListFilter;
  googleId?: StringNullableFilter | null;
  googleProfile?: JsonNullableFilter;
  lastName?: StringNullableFilter | null;
  firstName?: StringNullableFilter | null;
  profile?: Auth_ProfileWhereInput | null;
  teams?: Auth_UsersOnTeamsListRelationFilter;
  calendars?: Auth_CalendarsOnUsersListRelationFilter;
  eventsInvitedTo?: Auth_UsersOnCalendarEventsListRelationFilter;
  contacted?: Auth_UserListRelationFilter;
  contactedBy?: Auth_UserListRelationFilter;
  calendarsCreated?: Auth_CalendarListRelationFilter;
}

export interface Auth_UserOrderByWithRelationInput {
  id?: SortOrder;
  createdAt?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  email?: SortOrder;
  roles?: SortOrder;
  googleId?: SortOrder;
  googleProfile?: SortOrder;
  lastName?: SortOrder;
  firstName?: SortOrder;
  profile?: Auth_ProfileOrderByWithRelationInput;
  teams?: Auth_UsersOnTeamsOrderByRelationAggregateInput;
  calendars?: Auth_CalendarsOnUsersOrderByRelationAggregateInput;
  eventsInvitedTo?: Auth_UsersOnCalendarEventsOrderByRelationAggregateInput;
  contacted?: Auth_UserOrderByRelationAggregateInput;
  contactedBy?: Auth_UserOrderByRelationAggregateInput;
  calendarsCreated?: Auth_CalendarOrderByRelationAggregateInput;
}

export type Auth_UserWhereUniqueInput = AtLeast<
  {
    id?: number;
    username?: string;
    email?: string;
    googleId?: string;
    AND?: Auth_UserWhereInput[];
    OR?: Auth_UserWhereInput[];
    NOT?: Auth_UserWhereInput[];
    createdAt?: DateTimeFilter;
    password?: StringNullableFilter | null;
    roles?: StringNullableListFilter;
    googleProfile?: JsonNullableFilter;
    lastName?: StringNullableFilter | null;
    firstName?: StringNullableFilter | null;
    profile?: Auth_ProfileWhereInput | null;
    teams?: Auth_UsersOnTeamsListRelationFilter;
    calendars?: Auth_CalendarsOnUsersListRelationFilter;
    eventsInvitedTo?: Auth_UsersOnCalendarEventsListRelationFilter;
    contacted?: Auth_UserListRelationFilter;
    contactedBy?: Auth_UserListRelationFilter;
    calendarsCreated?: Auth_CalendarListRelationFilter;
  },
  'id' | 'username' | 'email' | 'googleId'
>;

export interface Auth_UserOrderByWithAggregationInput {
  id?: SortOrder;
  createdAt?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  email?: SortOrder;
  roles?: SortOrder;
  googleId?: SortOrder;
  googleProfile?: SortOrder;
  lastName?: SortOrder;
  firstName?: SortOrder;
  _count?: Auth_UserCountOrderByAggregateInput;
  _avg?: Auth_UserAvgOrderByAggregateInput;
  _max?: Auth_UserMaxOrderByAggregateInput;
  _min?: Auth_UserMinOrderByAggregateInput;
  _sum?: Auth_UserSumOrderByAggregateInput;
}

export interface Auth_UserScalarWhereWithAggregatesInput {
  AND?: Auth_UserScalarWhereWithAggregatesInput[];
  OR?: Auth_UserScalarWhereWithAggregatesInput[];
  NOT?: Auth_UserScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  username?: StringNullableWithAggregatesFilter | null;
  password?: StringNullableWithAggregatesFilter | null;
  email?: StringWithAggregatesFilter;
  roles?: StringNullableListFilter;
  googleId?: StringNullableWithAggregatesFilter | null;
  googleProfile?: JsonNullableWithAggregatesFilter;
  lastName?: StringNullableWithAggregatesFilter | null;
  firstName?: StringNullableWithAggregatesFilter | null;
}

export interface Auth_ProfileWhereInput {
  AND?: Auth_ProfileWhereInput[];
  OR?: Auth_ProfileWhereInput[];
  NOT?: Auth_ProfileWhereInput[];
  userId?: IntFilter;
  user?: Auth_UserWhereInput;
  location?: StringNullableFilter | null;
  joiningDate?: DateTimeNullableFilter | null;
  businessPhone?: StringNullableFilter | null;
  mobilePhone?: StringNullableFilter | null;
  kakaoTalkId?: StringNullableFilter | null;
  designation?: StringNullableFilter | null;
  profileImg?: StringNullableFilter | null;
  designationIcon?: StringNullableFilter | null;
  coverImg?: StringNullableFilter | null;
}

export interface Auth_ProfileOrderByWithRelationInput {
  userId?: SortOrder;
  user?: Auth_UserOrderByWithRelationInput;
  location?: SortOrder;
  joiningDate?: SortOrder;
  businessPhone?: SortOrder;
  mobilePhone?: SortOrder;
  kakaoTalkId?: SortOrder;
  designation?: SortOrder;
  profileImg?: SortOrder;
  designationIcon?: SortOrder;
  coverImg?: SortOrder;
}

export type Auth_ProfileWhereUniqueInput = AtLeast<
  {
    userId?: number;
    businessPhone?: string;
    mobilePhone?: string;
    kakaoTalkId?: string;
    AND?: Auth_ProfileWhereInput[];
    OR?: Auth_ProfileWhereInput[];
    NOT?: Auth_ProfileWhereInput[];
    user?: Auth_UserWhereInput;
    location?: StringNullableFilter | null;
    joiningDate?: DateTimeNullableFilter | null;
    designation?: StringNullableFilter | null;
    profileImg?: StringNullableFilter | null;
    designationIcon?: StringNullableFilter | null;
    coverImg?: StringNullableFilter | null;
  },
  'userId' | 'businessPhone' | 'mobilePhone' | 'kakaoTalkId'
>;

export interface Auth_ProfileOrderByWithAggregationInput {
  userId?: SortOrder;
  location?: SortOrder;
  joiningDate?: SortOrder;
  businessPhone?: SortOrder;
  mobilePhone?: SortOrder;
  kakaoTalkId?: SortOrder;
  designation?: SortOrder;
  profileImg?: SortOrder;
  designationIcon?: SortOrder;
  coverImg?: SortOrder;
  _count?: Auth_ProfileCountOrderByAggregateInput;
  _avg?: Auth_ProfileAvgOrderByAggregateInput;
  _max?: Auth_ProfileMaxOrderByAggregateInput;
  _min?: Auth_ProfileMinOrderByAggregateInput;
  _sum?: Auth_ProfileSumOrderByAggregateInput;
}

export interface Auth_ProfileScalarWhereWithAggregatesInput {
  AND?: Auth_ProfileScalarWhereWithAggregatesInput[];
  OR?: Auth_ProfileScalarWhereWithAggregatesInput[];
  NOT?: Auth_ProfileScalarWhereWithAggregatesInput[];
  userId?: IntWithAggregatesFilter;
  location?: StringNullableWithAggregatesFilter | null;
  joiningDate?: DateTimeNullableWithAggregatesFilter | null;
  businessPhone?: StringNullableWithAggregatesFilter | null;
  mobilePhone?: StringNullableWithAggregatesFilter | null;
  kakaoTalkId?: StringNullableWithAggregatesFilter | null;
  designation?: StringNullableWithAggregatesFilter | null;
  profileImg?: StringNullableWithAggregatesFilter | null;
  designationIcon?: StringNullableWithAggregatesFilter | null;
  coverImg?: StringNullableWithAggregatesFilter | null;
}

export interface Auth_UsersOnTeamsWhereInput {
  AND?: Auth_UsersOnTeamsWhereInput[];
  OR?: Auth_UsersOnTeamsWhereInput[];
  NOT?: Auth_UsersOnTeamsWhereInput[];
  team?: Auth_TeamWhereInput;
  teamName?: StringFilter;
  user?: Auth_UserWhereInput;
  userId?: IntFilter;
  assignedAt?: DateTimeFilter;
}

export interface Auth_UsersOnTeamsOrderByWithRelationInput {
  team?: Auth_TeamOrderByWithRelationInput;
  teamName?: SortOrder;
  user?: Auth_UserOrderByWithRelationInput;
  userId?: SortOrder;
  assignedAt?: SortOrder;
}

export type Auth_UsersOnTeamsWhereUniqueInput = AtLeast<
  {
    teamName_userId?: Auth_UsersOnTeamsTeamNameUserIdCompoundUniqueInput;
    AND?: Auth_UsersOnTeamsWhereInput[];
    OR?: Auth_UsersOnTeamsWhereInput[];
    NOT?: Auth_UsersOnTeamsWhereInput[];
    team?: Auth_TeamWhereInput;
    teamName?: StringFilter;
    user?: Auth_UserWhereInput;
    userId?: IntFilter;
    assignedAt?: DateTimeFilter;
  },
  'teamName_userId'
>;

export interface Auth_UsersOnTeamsOrderByWithAggregationInput {
  teamName?: SortOrder;
  userId?: SortOrder;
  assignedAt?: SortOrder;
  _count?: Auth_UsersOnTeamsCountOrderByAggregateInput;
  _avg?: Auth_UsersOnTeamsAvgOrderByAggregateInput;
  _max?: Auth_UsersOnTeamsMaxOrderByAggregateInput;
  _min?: Auth_UsersOnTeamsMinOrderByAggregateInput;
  _sum?: Auth_UsersOnTeamsSumOrderByAggregateInput;
}

export interface Auth_UsersOnTeamsScalarWhereWithAggregatesInput {
  AND?: Auth_UsersOnTeamsScalarWhereWithAggregatesInput[];
  OR?: Auth_UsersOnTeamsScalarWhereWithAggregatesInput[];
  NOT?: Auth_UsersOnTeamsScalarWhereWithAggregatesInput[];
  teamName?: StringWithAggregatesFilter;
  userId?: IntWithAggregatesFilter;
  assignedAt?: DateTimeWithAggregatesFilter;
}

export interface Auth_TeamWhereInput {
  AND?: Auth_TeamWhereInput[];
  OR?: Auth_TeamWhereInput[];
  NOT?: Auth_TeamWhereInput[];
  teamName?: StringFilter;
  users?: Auth_UsersOnTeamsListRelationFilter;
  teamType?: StringNullableFilter | null;
  teamIcon?: StringNullableFilter | null;
}

export interface Auth_TeamOrderByWithRelationInput {
  teamName?: SortOrder;
  users?: Auth_UsersOnTeamsOrderByRelationAggregateInput;
  teamType?: SortOrder;
  teamIcon?: SortOrder;
}

export type Auth_TeamWhereUniqueInput = AtLeast<
  {
    teamName?: string;
    AND?: Auth_TeamWhereInput[];
    OR?: Auth_TeamWhereInput[];
    NOT?: Auth_TeamWhereInput[];
    users?: Auth_UsersOnTeamsListRelationFilter;
    teamType?: StringNullableFilter | null;
    teamIcon?: StringNullableFilter | null;
  },
  'teamName'
>;

export interface Auth_TeamOrderByWithAggregationInput {
  teamName?: SortOrder;
  teamType?: SortOrder;
  teamIcon?: SortOrder;
  _count?: Auth_TeamCountOrderByAggregateInput;
  _max?: Auth_TeamMaxOrderByAggregateInput;
  _min?: Auth_TeamMinOrderByAggregateInput;
}

export interface Auth_TeamScalarWhereWithAggregatesInput {
  AND?: Auth_TeamScalarWhereWithAggregatesInput[];
  OR?: Auth_TeamScalarWhereWithAggregatesInput[];
  NOT?: Auth_TeamScalarWhereWithAggregatesInput[];
  teamName?: StringWithAggregatesFilter;
  teamType?: StringNullableWithAggregatesFilter | null;
  teamIcon?: StringNullableWithAggregatesFilter | null;
}

export interface Auth_UsersOnCalendarEventsWhereInput {
  AND?: Auth_UsersOnCalendarEventsWhereInput[];
  OR?: Auth_UsersOnCalendarEventsWhereInput[];
  NOT?: Auth_UsersOnCalendarEventsWhereInput[];
  user?: Auth_UserWhereInput;
  userId?: IntFilter;
  calendarEvent?: Auth_CalendarEventWhereInput;
  calendarEventId?: IntFilter;
}

export interface Auth_UsersOnCalendarEventsOrderByWithRelationInput {
  user?: Auth_UserOrderByWithRelationInput;
  userId?: SortOrder;
  calendarEvent?: Auth_CalendarEventOrderByWithRelationInput;
  calendarEventId?: SortOrder;
}

export type Auth_UsersOnCalendarEventsWhereUniqueInput = AtLeast<
  {
    userId_calendarEventId?: Auth_UsersOnCalendarEventsUserIdCalendarEventIdCompoundUniqueInput;
    AND?: Auth_UsersOnCalendarEventsWhereInput[];
    OR?: Auth_UsersOnCalendarEventsWhereInput[];
    NOT?: Auth_UsersOnCalendarEventsWhereInput[];
    user?: Auth_UserWhereInput;
    userId?: IntFilter;
    calendarEvent?: Auth_CalendarEventWhereInput;
    calendarEventId?: IntFilter;
  },
  'userId_calendarEventId'
>;

export interface Auth_UsersOnCalendarEventsOrderByWithAggregationInput {
  userId?: SortOrder;
  calendarEventId?: SortOrder;
  _count?: Auth_UsersOnCalendarEventsCountOrderByAggregateInput;
  _avg?: Auth_UsersOnCalendarEventsAvgOrderByAggregateInput;
  _max?: Auth_UsersOnCalendarEventsMaxOrderByAggregateInput;
  _min?: Auth_UsersOnCalendarEventsMinOrderByAggregateInput;
  _sum?: Auth_UsersOnCalendarEventsSumOrderByAggregateInput;
}

export interface Auth_UsersOnCalendarEventsScalarWhereWithAggregatesInput {
  AND?: Auth_UsersOnCalendarEventsScalarWhereWithAggregatesInput[];
  OR?: Auth_UsersOnCalendarEventsScalarWhereWithAggregatesInput[];
  NOT?: Auth_UsersOnCalendarEventsScalarWhereWithAggregatesInput[];
  userId?: IntWithAggregatesFilter;
  calendarEventId?: IntWithAggregatesFilter;
}

export interface Auth_CalendarEventWhereInput {
  AND?: Auth_CalendarEventWhereInput[];
  OR?: Auth_CalendarEventWhereInput[];
  NOT?: Auth_CalendarEventWhereInput[];
  id?: IntFilter;
  url?: StringNullableFilter | null;
  title?: StringFilter;
  start?: DateTimeFilter;
  end?: DateTimeFilter;
  allDay?: BoolFilter;
  guests?: Auth_UsersOnCalendarEventsListRelationFilter;
  calendar?: Auth_CalendarEventsOnCalendarsListRelationFilter;
}

export interface Auth_CalendarEventOrderByWithRelationInput {
  id?: SortOrder;
  url?: SortOrder;
  title?: SortOrder;
  start?: SortOrder;
  end?: SortOrder;
  allDay?: SortOrder;
  guests?: Auth_UsersOnCalendarEventsOrderByRelationAggregateInput;
  calendar?: Auth_CalendarEventsOnCalendarsOrderByRelationAggregateInput;
}

export type Auth_CalendarEventWhereUniqueInput = AtLeast<
  {
    id?: number;
    AND?: Auth_CalendarEventWhereInput[];
    OR?: Auth_CalendarEventWhereInput[];
    NOT?: Auth_CalendarEventWhereInput[];
    url?: StringNullableFilter | null;
    title?: StringFilter;
    start?: DateTimeFilter;
    end?: DateTimeFilter;
    allDay?: BoolFilter;
    guests?: Auth_UsersOnCalendarEventsListRelationFilter;
    calendar?: Auth_CalendarEventsOnCalendarsListRelationFilter;
  },
  'id'
>;

export interface Auth_CalendarEventOrderByWithAggregationInput {
  id?: SortOrder;
  url?: SortOrder;
  title?: SortOrder;
  start?: SortOrder;
  end?: SortOrder;
  allDay?: SortOrder;
  _count?: Auth_CalendarEventCountOrderByAggregateInput;
  _avg?: Auth_CalendarEventAvgOrderByAggregateInput;
  _max?: Auth_CalendarEventMaxOrderByAggregateInput;
  _min?: Auth_CalendarEventMinOrderByAggregateInput;
  _sum?: Auth_CalendarEventSumOrderByAggregateInput;
}

export interface Auth_CalendarEventScalarWhereWithAggregatesInput {
  AND?: Auth_CalendarEventScalarWhereWithAggregatesInput[];
  OR?: Auth_CalendarEventScalarWhereWithAggregatesInput[];
  NOT?: Auth_CalendarEventScalarWhereWithAggregatesInput[];
  id?: IntWithAggregatesFilter;
  url?: StringNullableWithAggregatesFilter | null;
  title?: StringWithAggregatesFilter;
  start?: DateTimeWithAggregatesFilter;
  end?: DateTimeWithAggregatesFilter;
  allDay?: BoolWithAggregatesFilter;
}

export interface Auth_CalendarEventsOnCalendarsWhereInput {
  AND?: Auth_CalendarEventsOnCalendarsWhereInput[];
  OR?: Auth_CalendarEventsOnCalendarsWhereInput[];
  NOT?: Auth_CalendarEventsOnCalendarsWhereInput[];
  calendar?: Auth_CalendarWhereInput;
  calendarType?: StringFilter;
  calendarOwnerId?: IntFilter;
  calendarEvent?: Auth_CalendarEventWhereInput;
  calendarEventId?: IntFilter;
}

export interface Auth_CalendarEventsOnCalendarsOrderByWithRelationInput {
  calendar?: Auth_CalendarOrderByWithRelationInput;
  calendarType?: SortOrder;
  calendarOwnerId?: SortOrder;
  calendarEvent?: Auth_CalendarEventOrderByWithRelationInput;
  calendarEventId?: SortOrder;
}

export type Auth_CalendarEventsOnCalendarsWhereUniqueInput = AtLeast<
  {
    calendarType_calendarOwnerId_calendarEventId?: Auth_CalendarEventsOnCalendarsCalendarTypeCalendarOwnerIdCalendarEventIdCompoundUniqueInput;
    AND?: Auth_CalendarEventsOnCalendarsWhereInput[];
    OR?: Auth_CalendarEventsOnCalendarsWhereInput[];
    NOT?: Auth_CalendarEventsOnCalendarsWhereInput[];
    calendar?: Auth_CalendarWhereInput;
    calendarType?: StringFilter;
    calendarOwnerId?: IntFilter;
    calendarEvent?: Auth_CalendarEventWhereInput;
    calendarEventId?: IntFilter;
  },
  'calendarType_calendarOwnerId_calendarEventId'
>;

export interface Auth_CalendarEventsOnCalendarsOrderByWithAggregationInput {
  calendarType?: SortOrder;
  calendarOwnerId?: SortOrder;
  calendarEventId?: SortOrder;
  _count?: Auth_CalendarEventsOnCalendarsCountOrderByAggregateInput;
  _avg?: Auth_CalendarEventsOnCalendarsAvgOrderByAggregateInput;
  _max?: Auth_CalendarEventsOnCalendarsMaxOrderByAggregateInput;
  _min?: Auth_CalendarEventsOnCalendarsMinOrderByAggregateInput;
  _sum?: Auth_CalendarEventsOnCalendarsSumOrderByAggregateInput;
}

export interface Auth_CalendarEventsOnCalendarsScalarWhereWithAggregatesInput {
  AND?: Auth_CalendarEventsOnCalendarsScalarWhereWithAggregatesInput[];
  OR?: Auth_CalendarEventsOnCalendarsScalarWhereWithAggregatesInput[];
  NOT?: Auth_CalendarEventsOnCalendarsScalarWhereWithAggregatesInput[];
  calendarType?: StringWithAggregatesFilter;
  calendarOwnerId?: IntWithAggregatesFilter;
  calendarEventId?: IntWithAggregatesFilter;
}

export interface Auth_CalendarWhereInput {
  AND?: Auth_CalendarWhereInput[];
  OR?: Auth_CalendarWhereInput[];
  NOT?: Auth_CalendarWhereInput[];
  calendarType?: StringFilter;
  users?: Auth_CalendarsOnUsersListRelationFilter;
  calendarEvents?: Auth_CalendarEventsOnCalendarsListRelationFilter;
  calendarOwnerId?: IntFilter;
  calendarOwner?: Auth_UserWhereInput;
}

export interface Auth_CalendarOrderByWithRelationInput {
  calendarType?: SortOrder;
  users?: Auth_CalendarsOnUsersOrderByRelationAggregateInput;
  calendarEvents?: Auth_CalendarEventsOnCalendarsOrderByRelationAggregateInput;
  calendarOwnerId?: SortOrder;
  calendarOwner?: Auth_UserOrderByWithRelationInput;
}

export type Auth_CalendarWhereUniqueInput = AtLeast<
  {
    calendarOwnerId_calendarType?: Auth_CalendarCalendarOwnerIdCalendarTypeCompoundUniqueInput;
    AND?: Auth_CalendarWhereInput[];
    OR?: Auth_CalendarWhereInput[];
    NOT?: Auth_CalendarWhereInput[];
    calendarType?: StringFilter;
    users?: Auth_CalendarsOnUsersListRelationFilter;
    calendarEvents?: Auth_CalendarEventsOnCalendarsListRelationFilter;
    calendarOwnerId?: IntFilter;
    calendarOwner?: Auth_UserWhereInput;
  },
  'calendarOwnerId_calendarType'
>;

export interface Auth_CalendarOrderByWithAggregationInput {
  calendarType?: SortOrder;
  calendarOwnerId?: SortOrder;
  _count?: Auth_CalendarCountOrderByAggregateInput;
  _avg?: Auth_CalendarAvgOrderByAggregateInput;
  _max?: Auth_CalendarMaxOrderByAggregateInput;
  _min?: Auth_CalendarMinOrderByAggregateInput;
  _sum?: Auth_CalendarSumOrderByAggregateInput;
}

export interface Auth_CalendarScalarWhereWithAggregatesInput {
  AND?: Auth_CalendarScalarWhereWithAggregatesInput[];
  OR?: Auth_CalendarScalarWhereWithAggregatesInput[];
  NOT?: Auth_CalendarScalarWhereWithAggregatesInput[];
  calendarType?: StringWithAggregatesFilter;
  calendarOwnerId?: IntWithAggregatesFilter;
}

export interface Auth_CalendarsOnUsersWhereInput {
  AND?: Auth_CalendarsOnUsersWhereInput[];
  OR?: Auth_CalendarsOnUsersWhereInput[];
  NOT?: Auth_CalendarsOnUsersWhereInput[];
  calendarAttributedTo?: Auth_UserWhereInput;
  calendarAttributedToId?: IntFilter;
  calendar?: Auth_CalendarWhereInput;
  calendarType?: StringFilter;
  calendarOwnerId?: IntFilter;
}

export interface Auth_CalendarsOnUsersOrderByWithRelationInput {
  calendarAttributedTo?: Auth_UserOrderByWithRelationInput;
  calendarAttributedToId?: SortOrder;
  calendar?: Auth_CalendarOrderByWithRelationInput;
  calendarType?: SortOrder;
  calendarOwnerId?: SortOrder;
}

export type Auth_CalendarsOnUsersWhereUniqueInput = AtLeast<
  {
    calendarType_calendarAttributedToId?: Auth_CalendarsOnUsersCalendarTypeCalendarAttributedToIdCompoundUniqueInput;
    calendarAttributedToId_calendarType_calendarOwnerId?: Auth_CalendarsOnUsersCalendarAttributedToIdCalendarTypeCalendarOwnerIdCompoundUniqueInput;
    AND?: Auth_CalendarsOnUsersWhereInput[];
    OR?: Auth_CalendarsOnUsersWhereInput[];
    NOT?: Auth_CalendarsOnUsersWhereInput[];
    calendarAttributedTo?: Auth_UserWhereInput;
    calendarAttributedToId?: IntFilter;
    calendar?: Auth_CalendarWhereInput;
    calendarType?: StringFilter;
    calendarOwnerId?: IntFilter;
  },
  'calendarType_calendarAttributedToId' | 'calendarAttributedToId_calendarType_calendarOwnerId'
>;

export interface Auth_CalendarsOnUsersOrderByWithAggregationInput {
  calendarAttributedToId?: SortOrder;
  calendarType?: SortOrder;
  calendarOwnerId?: SortOrder;
  _count?: Auth_CalendarsOnUsersCountOrderByAggregateInput;
  _avg?: Auth_CalendarsOnUsersAvgOrderByAggregateInput;
  _max?: Auth_CalendarsOnUsersMaxOrderByAggregateInput;
  _min?: Auth_CalendarsOnUsersMinOrderByAggregateInput;
  _sum?: Auth_CalendarsOnUsersSumOrderByAggregateInput;
}

export interface Auth_CalendarsOnUsersScalarWhereWithAggregatesInput {
  AND?: Auth_CalendarsOnUsersScalarWhereWithAggregatesInput[];
  OR?: Auth_CalendarsOnUsersScalarWhereWithAggregatesInput[];
  NOT?: Auth_CalendarsOnUsersScalarWhereWithAggregatesInput[];
  calendarAttributedToId?: IntWithAggregatesFilter;
  calendarType?: StringWithAggregatesFilter;
  calendarOwnerId?: IntWithAggregatesFilter;
}

export interface Auth_UserCreateInput {
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: Auth_UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Auth_ProfileCreateNestedOneWithoutUserInput;
  teams?: Auth_UsersOnTeamsCreateNestedManyWithoutUserInput;
  calendars?: Auth_CalendarsOnUsersCreateNestedManyWithoutCalendarAttributedToInput;
  eventsInvitedTo?: Auth_UsersOnCalendarEventsCreateNestedManyWithoutUserInput;
  contacted?: Auth_UserCreateNestedManyWithoutContactedByInput;
  contactedBy?: Auth_UserCreateNestedManyWithoutContactedInput;
  calendarsCreated?: Auth_CalendarCreateNestedManyWithoutCalendarOwnerInput;
}

export interface Auth_UserUncheckedCreateInput {
  id?: number;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: Auth_UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Auth_ProfileUncheckedCreateNestedOneWithoutUserInput;
  teams?: Auth_UsersOnTeamsUncheckedCreateNestedManyWithoutUserInput;
  calendars?: Auth_CalendarsOnUsersUncheckedCreateNestedManyWithoutCalendarAttributedToInput;
  eventsInvitedTo?: Auth_UsersOnCalendarEventsUncheckedCreateNestedManyWithoutUserInput;
  contacted?: Auth_UserUncheckedCreateNestedManyWithoutContactedByInput;
  contactedBy?: Auth_UserUncheckedCreateNestedManyWithoutContactedInput;
  calendarsCreated?: Auth_CalendarUncheckedCreateNestedManyWithoutCalendarOwnerInput;
}

export interface Auth_UserUpdateInput {
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: Auth_UserUpdaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Auth_ProfileUpdateOneWithoutUserNestedInput;
  teams?: Auth_UsersOnTeamsUpdateManyWithoutUserNestedInput;
  calendars?: Auth_CalendarsOnUsersUpdateManyWithoutCalendarAttributedToNestedInput;
  eventsInvitedTo?: Auth_UsersOnCalendarEventsUpdateManyWithoutUserNestedInput;
  contacted?: Auth_UserUpdateManyWithoutContactedByNestedInput;
  contactedBy?: Auth_UserUpdateManyWithoutContactedNestedInput;
  calendarsCreated?: Auth_CalendarUpdateManyWithoutCalendarOwnerNestedInput;
}

export interface Auth_UserUncheckedUpdateInput {
  id?: number;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: Auth_UserUpdaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Auth_ProfileUncheckedUpdateOneWithoutUserNestedInput;
  teams?: Auth_UsersOnTeamsUncheckedUpdateManyWithoutUserNestedInput;
  calendars?: Auth_CalendarsOnUsersUncheckedUpdateManyWithoutCalendarAttributedToNestedInput;
  eventsInvitedTo?: Auth_UsersOnCalendarEventsUncheckedUpdateManyWithoutUserNestedInput;
  contacted?: Auth_UserUncheckedUpdateManyWithoutContactedByNestedInput;
  contactedBy?: Auth_UserUncheckedUpdateManyWithoutContactedNestedInput;
  calendarsCreated?: Auth_CalendarUncheckedUpdateManyWithoutCalendarOwnerNestedInput;
}

export interface Auth_UserCreateManyInput {
  id?: number;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: Auth_UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
}

export interface Auth_UserUpdateManyMutationInput {
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: Auth_UserUpdaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
}

export interface Auth_UserUncheckedUpdateManyInput {
  id?: number;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: Auth_UserUpdaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
}

export interface Auth_ProfileCreateInput {
  user: Auth_UserCreateNestedOneWithoutProfileInput;
  location?: string | null;
  joiningDate?: Date | null;
  businessPhone?: string | null;
  mobilePhone?: string | null;
  kakaoTalkId?: string | null;
  designation?: string | null;
  profileImg?: string | null;
  designationIcon?: string | null;
  coverImg?: string | null;
}

export interface Auth_ProfileUncheckedCreateInput {
  userId: number;
  location?: string | null;
  joiningDate?: Date | null;
  businessPhone?: string | null;
  mobilePhone?: string | null;
  kakaoTalkId?: string | null;
  designation?: string | null;
  profileImg?: string | null;
  designationIcon?: string | null;
  coverImg?: string | null;
}

export interface Auth_ProfileUpdateInput {
  user?: Auth_UserUpdateOneRequiredWithoutProfileNestedInput;
  location?: string | null;
  joiningDate?: Date | null;
  businessPhone?: string | null;
  mobilePhone?: string | null;
  kakaoTalkId?: string | null;
  designation?: string | null;
  profileImg?: string | null;
  designationIcon?: string | null;
  coverImg?: string | null;
}

export interface Auth_ProfileUncheckedUpdateInput {
  userId?: number;
  location?: string | null;
  joiningDate?: Date | null;
  businessPhone?: string | null;
  mobilePhone?: string | null;
  kakaoTalkId?: string | null;
  designation?: string | null;
  profileImg?: string | null;
  designationIcon?: string | null;
  coverImg?: string | null;
}

export interface Auth_ProfileCreateManyInput {
  userId: number;
  location?: string | null;
  joiningDate?: Date | null;
  businessPhone?: string | null;
  mobilePhone?: string | null;
  kakaoTalkId?: string | null;
  designation?: string | null;
  profileImg?: string | null;
  designationIcon?: string | null;
  coverImg?: string | null;
}

export interface Auth_ProfileUpdateManyMutationInput {
  location?: string | null;
  joiningDate?: Date | null;
  businessPhone?: string | null;
  mobilePhone?: string | null;
  kakaoTalkId?: string | null;
  designation?: string | null;
  profileImg?: string | null;
  designationIcon?: string | null;
  coverImg?: string | null;
}

export interface Auth_ProfileUncheckedUpdateManyInput {
  userId?: number;
  location?: string | null;
  joiningDate?: Date | null;
  businessPhone?: string | null;
  mobilePhone?: string | null;
  kakaoTalkId?: string | null;
  designation?: string | null;
  profileImg?: string | null;
  designationIcon?: string | null;
  coverImg?: string | null;
}

export interface Auth_UsersOnTeamsCreateInput {
  team: Auth_TeamCreateNestedOneWithoutUsersInput;
  user: Auth_UserCreateNestedOneWithoutTeamsInput;
  assignedAt?: Date;
}

export interface Auth_UsersOnTeamsUncheckedCreateInput {
  teamName: string;
  userId: number;
  assignedAt?: Date;
}

export interface Auth_UsersOnTeamsUpdateInput {
  team?: Auth_TeamUpdateOneRequiredWithoutUsersNestedInput;
  user?: Auth_UserUpdateOneRequiredWithoutTeamsNestedInput;
  assignedAt?: Date;
}

export interface Auth_UsersOnTeamsUncheckedUpdateInput {
  teamName?: string;
  userId?: number;
  assignedAt?: Date;
}

export interface Auth_UsersOnTeamsCreateManyInput {
  teamName: string;
  userId: number;
  assignedAt?: Date;
}

export interface Auth_UsersOnTeamsUpdateManyMutationInput {
  assignedAt?: Date;
}

export interface Auth_UsersOnTeamsUncheckedUpdateManyInput {
  teamName?: string;
  userId?: number;
  assignedAt?: Date;
}

export interface Auth_TeamCreateInput {
  teamName: string;
  users?: Auth_UsersOnTeamsCreateNestedManyWithoutTeamInput;
  teamType?: string | null;
  teamIcon?: string | null;
}

export interface Auth_TeamUncheckedCreateInput {
  teamName: string;
  users?: Auth_UsersOnTeamsUncheckedCreateNestedManyWithoutTeamInput;
  teamType?: string | null;
  teamIcon?: string | null;
}

export interface Auth_TeamUpdateInput {
  teamName?: string;
  users?: Auth_UsersOnTeamsUpdateManyWithoutTeamNestedInput;
  teamType?: string | null;
  teamIcon?: string | null;
}

export interface Auth_TeamUncheckedUpdateInput {
  teamName?: string;
  users?: Auth_UsersOnTeamsUncheckedUpdateManyWithoutTeamNestedInput;
  teamType?: string | null;
  teamIcon?: string | null;
}

export interface Auth_TeamCreateManyInput {
  teamName: string;
  teamType?: string | null;
  teamIcon?: string | null;
}

export interface Auth_TeamUpdateManyMutationInput {
  teamName?: string;
  teamType?: string | null;
  teamIcon?: string | null;
}

export interface Auth_TeamUncheckedUpdateManyInput {
  teamName?: string;
  teamType?: string | null;
  teamIcon?: string | null;
}

export interface Auth_UsersOnCalendarEventsCreateInput {
  user: Auth_UserCreateNestedOneWithoutEventsInvitedToInput;
  calendarEvent: Auth_CalendarEventCreateNestedOneWithoutGuestsInput;
}

export interface Auth_UsersOnCalendarEventsUncheckedCreateInput {
  userId: number;
  calendarEventId: number;
}

export interface Auth_UsersOnCalendarEventsUpdateInput {
  user?: Auth_UserUpdateOneRequiredWithoutEventsInvitedToNestedInput;
  calendarEvent?: Auth_CalendarEventUpdateOneRequiredWithoutGuestsNestedInput;
}

export interface Auth_UsersOnCalendarEventsUncheckedUpdateInput {
  userId?: number;
  calendarEventId?: number;
}

export interface Auth_UsersOnCalendarEventsCreateManyInput {
  userId: number;
  calendarEventId: number;
}

export interface Auth_UsersOnCalendarEventsUncheckedUpdateManyInput {
  userId?: number;
  calendarEventId?: number;
}

export interface Auth_CalendarEventCreateInput {
  url?: string | null;
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  guests?: Auth_UsersOnCalendarEventsCreateNestedManyWithoutCalendarEventInput;
  calendar?: Auth_CalendarEventsOnCalendarsCreateNestedManyWithoutCalendarEventInput;
}

export interface Auth_CalendarEventUncheckedCreateInput {
  id?: number;
  url?: string | null;
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  guests?: Auth_UsersOnCalendarEventsUncheckedCreateNestedManyWithoutCalendarEventInput;
  calendar?: Auth_CalendarEventsOnCalendarsUncheckedCreateNestedManyWithoutCalendarEventInput;
}

export interface Auth_CalendarEventUpdateInput {
  url?: string | null;
  title?: string;
  start?: Date;
  end?: Date;
  allDay?: boolean;
  guests?: Auth_UsersOnCalendarEventsUpdateManyWithoutCalendarEventNestedInput;
  calendar?: Auth_CalendarEventsOnCalendarsUpdateManyWithoutCalendarEventNestedInput;
}

export interface Auth_CalendarEventUncheckedUpdateInput {
  id?: number;
  url?: string | null;
  title?: string;
  start?: Date;
  end?: Date;
  allDay?: boolean;
  guests?: Auth_UsersOnCalendarEventsUncheckedUpdateManyWithoutCalendarEventNestedInput;
  calendar?: Auth_CalendarEventsOnCalendarsUncheckedUpdateManyWithoutCalendarEventNestedInput;
}

export interface Auth_CalendarEventCreateManyInput {
  id?: number;
  url?: string | null;
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
}

export interface Auth_CalendarEventUpdateManyMutationInput {
  url?: string | null;
  title?: string;
  start?: Date;
  end?: Date;
  allDay?: boolean;
}

export interface Auth_CalendarEventUncheckedUpdateManyInput {
  id?: number;
  url?: string | null;
  title?: string;
  start?: Date;
  end?: Date;
  allDay?: boolean;
}

export interface Auth_CalendarEventsOnCalendarsCreateInput {
  calendar: Auth_CalendarCreateNestedOneWithoutCalendarEventsInput;
  calendarEvent: Auth_CalendarEventCreateNestedOneWithoutCalendarInput;
}

export interface Auth_CalendarEventsOnCalendarsUncheckedCreateInput {
  calendarType: string;
  calendarOwnerId: number;
  calendarEventId: number;
}

export interface Auth_CalendarEventsOnCalendarsUpdateInput {
  calendar?: Auth_CalendarUpdateOneRequiredWithoutCalendarEventsNestedInput;
  calendarEvent?: Auth_CalendarEventUpdateOneRequiredWithoutCalendarNestedInput;
}

export interface Auth_CalendarEventsOnCalendarsUncheckedUpdateInput {
  calendarType?: string;
  calendarOwnerId?: number;
  calendarEventId?: number;
}

export interface Auth_CalendarEventsOnCalendarsCreateManyInput {
  calendarType: string;
  calendarOwnerId: number;
  calendarEventId: number;
}

export interface Auth_CalendarEventsOnCalendarsUncheckedUpdateManyInput {
  calendarType?: string;
  calendarOwnerId?: number;
  calendarEventId?: number;
}

export interface Auth_CalendarCreateInput {
  calendarType: string;
  users?: Auth_CalendarsOnUsersCreateNestedManyWithoutCalendarInput;
  calendarEvents?: Auth_CalendarEventsOnCalendarsCreateNestedManyWithoutCalendarInput;
  calendarOwner: Auth_UserCreateNestedOneWithoutCalendarsCreatedInput;
}

export interface Auth_CalendarUncheckedCreateInput {
  calendarType: string;
  users?: Auth_CalendarsOnUsersUncheckedCreateNestedManyWithoutCalendarInput;
  calendarEvents?: Auth_CalendarEventsOnCalendarsUncheckedCreateNestedManyWithoutCalendarInput;
  calendarOwnerId: number;
}

export interface Auth_CalendarUpdateInput {
  calendarType?: string;
  users?: Auth_CalendarsOnUsersUpdateManyWithoutCalendarNestedInput;
  calendarEvents?: Auth_CalendarEventsOnCalendarsUpdateManyWithoutCalendarNestedInput;
  calendarOwner?: Auth_UserUpdateOneRequiredWithoutCalendarsCreatedNestedInput;
}

export interface Auth_CalendarUncheckedUpdateInput {
  calendarType?: string;
  users?: Auth_CalendarsOnUsersUncheckedUpdateManyWithoutCalendarNestedInput;
  calendarEvents?: Auth_CalendarEventsOnCalendarsUncheckedUpdateManyWithoutCalendarNestedInput;
  calendarOwnerId?: number;
}

export interface Auth_CalendarCreateManyInput {
  calendarType: string;
  calendarOwnerId: number;
}

export interface Auth_CalendarUpdateManyMutationInput {
  calendarType?: string;
}

export interface Auth_CalendarUncheckedUpdateManyInput {
  calendarType?: string;
  calendarOwnerId?: number;
}

export interface Auth_CalendarsOnUsersCreateInput {
  calendarAttributedTo: Auth_UserCreateNestedOneWithoutCalendarsInput;
  calendar: Auth_CalendarCreateNestedOneWithoutUsersInput;
}

export interface Auth_CalendarsOnUsersUncheckedCreateInput {
  calendarAttributedToId: number;
  calendarType: string;
  calendarOwnerId: number;
}

export interface Auth_CalendarsOnUsersUpdateInput {
  calendarAttributedTo?: Auth_UserUpdateOneRequiredWithoutCalendarsNestedInput;
  calendar?: Auth_CalendarUpdateOneRequiredWithoutUsersNestedInput;
}

export interface Auth_CalendarsOnUsersUncheckedUpdateInput {
  calendarAttributedToId?: number;
  calendarType?: string;
  calendarOwnerId?: number;
}

export interface Auth_CalendarsOnUsersCreateManyInput {
  calendarAttributedToId: number;
  calendarType: string;
  calendarOwnerId: number;
}

export interface Auth_CalendarsOnUsersUncheckedUpdateManyInput {
  calendarAttributedToId?: number;
  calendarType?: string;
  calendarOwnerId?: number;
}

export interface IntFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntFilter;
}

export interface DateTimeFilter {
  equals?: Date;
  in?: Date[];
  notIn?: Date[];
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: NestedDateTimeFilter;
}

export interface StringNullableFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringNullableFilter | null;
}

export interface StringFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringFilter;
}

export interface StringNullableListFilter {
  equals?: string[] | null;
  has?: string | null;
  hasEvery?: string[];
  hasSome?: string[];
  isEmpty?: boolean;
}

export interface JsonNullableFilter {
  equals?: any;
  path?: string[];
  string_contains?: string;
  string_starts_with?: string;
  string_ends_with?: string;
  array_contains?: any | null;
  array_starts_with?: any | null;
  array_ends_with?: any | null;
  lt?: any;
  lte?: any;
  gt?: any;
  gte?: any;
  not?: any;
}

export interface Auth_ProfileRelationFilter {
  is?: Auth_ProfileWhereInput | null;
  isNot?: Auth_ProfileWhereInput | null;
}

export interface Auth_UsersOnTeamsListRelationFilter {
  every?: Auth_UsersOnTeamsWhereInput;
  some?: Auth_UsersOnTeamsWhereInput;
  none?: Auth_UsersOnTeamsWhereInput;
}

export interface Auth_CalendarsOnUsersListRelationFilter {
  every?: Auth_CalendarsOnUsersWhereInput;
  some?: Auth_CalendarsOnUsersWhereInput;
  none?: Auth_CalendarsOnUsersWhereInput;
}

export interface Auth_UsersOnCalendarEventsListRelationFilter {
  every?: Auth_UsersOnCalendarEventsWhereInput;
  some?: Auth_UsersOnCalendarEventsWhereInput;
  none?: Auth_UsersOnCalendarEventsWhereInput;
}

export interface Auth_UserListRelationFilter {
  every?: Auth_UserWhereInput;
  some?: Auth_UserWhereInput;
  none?: Auth_UserWhereInput;
}

export interface Auth_CalendarListRelationFilter {
  every?: Auth_CalendarWhereInput;
  some?: Auth_CalendarWhereInput;
  none?: Auth_CalendarWhereInput;
}

export interface Auth_UsersOnTeamsOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface Auth_CalendarsOnUsersOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface Auth_UsersOnCalendarEventsOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface Auth_UserOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface Auth_CalendarOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface Auth_UserCountOrderByAggregateInput {
  id?: SortOrder;
  createdAt?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  email?: SortOrder;
  roles?: SortOrder;
  googleId?: SortOrder;
  googleProfile?: SortOrder;
  lastName?: SortOrder;
  firstName?: SortOrder;
}

export interface Auth_UserAvgOrderByAggregateInput {
  id?: SortOrder;
}

export interface Auth_UserMaxOrderByAggregateInput {
  id?: SortOrder;
  createdAt?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  email?: SortOrder;
  googleId?: SortOrder;
  lastName?: SortOrder;
  firstName?: SortOrder;
}

export interface Auth_UserMinOrderByAggregateInput {
  id?: SortOrder;
  createdAt?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  email?: SortOrder;
  googleId?: SortOrder;
  lastName?: SortOrder;
  firstName?: SortOrder;
}

export interface Auth_UserSumOrderByAggregateInput {
  id?: SortOrder;
}

export interface IntWithAggregatesFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntWithAggregatesFilter;
  _count?: NestedIntFilter;
  _avg?: NestedFloatFilter;
  _sum?: NestedIntFilter;
  _min?: NestedIntFilter;
  _max?: NestedIntFilter;
}

export interface DateTimeWithAggregatesFilter {
  equals?: Date;
  in?: Date[];
  notIn?: Date[];
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: NestedDateTimeWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedDateTimeFilter;
  _max?: NestedDateTimeFilter;
}

export interface StringNullableWithAggregatesFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringNullableWithAggregatesFilter | null;
  _count?: NestedIntNullableFilter;
  _min?: NestedStringNullableFilter;
  _max?: NestedStringNullableFilter;
}

export interface StringWithAggregatesFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedStringFilter;
  _max?: NestedStringFilter;
}

export interface JsonNullableWithAggregatesFilter {
  equals?: any;
  path?: string[];
  string_contains?: string;
  string_starts_with?: string;
  string_ends_with?: string;
  array_contains?: any | null;
  array_starts_with?: any | null;
  array_ends_with?: any | null;
  lt?: any;
  lte?: any;
  gt?: any;
  gte?: any;
  not?: any;
  _count?: NestedIntNullableFilter;
  _min?: NestedJsonNullableFilter;
  _max?: NestedJsonNullableFilter;
}

export interface Auth_UserRelationFilter {
  is?: Auth_UserWhereInput;
  isNot?: Auth_UserWhereInput;
}

export interface DateTimeNullableFilter {
  equals?: Date | null;
  in?: Date[] | null;
  notIn?: Date[] | null;
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: NestedDateTimeNullableFilter | null;
}

export interface Auth_ProfileCountOrderByAggregateInput {
  userId?: SortOrder;
  location?: SortOrder;
  joiningDate?: SortOrder;
  businessPhone?: SortOrder;
  mobilePhone?: SortOrder;
  kakaoTalkId?: SortOrder;
  designation?: SortOrder;
  profileImg?: SortOrder;
  designationIcon?: SortOrder;
  coverImg?: SortOrder;
}

export interface Auth_ProfileAvgOrderByAggregateInput {
  userId?: SortOrder;
}

export interface Auth_ProfileMaxOrderByAggregateInput {
  userId?: SortOrder;
  location?: SortOrder;
  joiningDate?: SortOrder;
  businessPhone?: SortOrder;
  mobilePhone?: SortOrder;
  kakaoTalkId?: SortOrder;
  designation?: SortOrder;
  profileImg?: SortOrder;
  designationIcon?: SortOrder;
  coverImg?: SortOrder;
}

export interface Auth_ProfileMinOrderByAggregateInput {
  userId?: SortOrder;
  location?: SortOrder;
  joiningDate?: SortOrder;
  businessPhone?: SortOrder;
  mobilePhone?: SortOrder;
  kakaoTalkId?: SortOrder;
  designation?: SortOrder;
  profileImg?: SortOrder;
  designationIcon?: SortOrder;
  coverImg?: SortOrder;
}

export interface Auth_ProfileSumOrderByAggregateInput {
  userId?: SortOrder;
}

export interface DateTimeNullableWithAggregatesFilter {
  equals?: Date | null;
  in?: Date[] | null;
  notIn?: Date[] | null;
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: NestedDateTimeNullableWithAggregatesFilter | null;
  _count?: NestedIntNullableFilter;
  _min?: NestedDateTimeNullableFilter;
  _max?: NestedDateTimeNullableFilter;
}

export interface Auth_TeamRelationFilter {
  is?: Auth_TeamWhereInput;
  isNot?: Auth_TeamWhereInput;
}

export interface Auth_UsersOnTeamsTeamNameUserIdCompoundUniqueInput {
  teamName: string;
  userId: number;
}

export interface Auth_UsersOnTeamsCountOrderByAggregateInput {
  teamName?: SortOrder;
  userId?: SortOrder;
  assignedAt?: SortOrder;
}

export interface Auth_UsersOnTeamsAvgOrderByAggregateInput {
  userId?: SortOrder;
}

export interface Auth_UsersOnTeamsMaxOrderByAggregateInput {
  teamName?: SortOrder;
  userId?: SortOrder;
  assignedAt?: SortOrder;
}

export interface Auth_UsersOnTeamsMinOrderByAggregateInput {
  teamName?: SortOrder;
  userId?: SortOrder;
  assignedAt?: SortOrder;
}

export interface Auth_UsersOnTeamsSumOrderByAggregateInput {
  userId?: SortOrder;
}

export interface Auth_TeamCountOrderByAggregateInput {
  teamName?: SortOrder;
  teamType?: SortOrder;
  teamIcon?: SortOrder;
}

export interface Auth_TeamMaxOrderByAggregateInput {
  teamName?: SortOrder;
  teamType?: SortOrder;
  teamIcon?: SortOrder;
}

export interface Auth_TeamMinOrderByAggregateInput {
  teamName?: SortOrder;
  teamType?: SortOrder;
  teamIcon?: SortOrder;
}

export interface Auth_CalendarEventRelationFilter {
  is?: Auth_CalendarEventWhereInput;
  isNot?: Auth_CalendarEventWhereInput;
}

export interface Auth_UsersOnCalendarEventsUserIdCalendarEventIdCompoundUniqueInput {
  userId: number;
  calendarEventId: number;
}

export interface Auth_UsersOnCalendarEventsCountOrderByAggregateInput {
  userId?: SortOrder;
  calendarEventId?: SortOrder;
}

export interface Auth_UsersOnCalendarEventsAvgOrderByAggregateInput {
  userId?: SortOrder;
  calendarEventId?: SortOrder;
}

export interface Auth_UsersOnCalendarEventsMaxOrderByAggregateInput {
  userId?: SortOrder;
  calendarEventId?: SortOrder;
}

export interface Auth_UsersOnCalendarEventsMinOrderByAggregateInput {
  userId?: SortOrder;
  calendarEventId?: SortOrder;
}

export interface Auth_UsersOnCalendarEventsSumOrderByAggregateInput {
  userId?: SortOrder;
  calendarEventId?: SortOrder;
}

export interface BoolFilter {
  equals?: boolean;
  not?: NestedBoolFilter;
}

export interface Auth_CalendarEventsOnCalendarsListRelationFilter {
  every?: Auth_CalendarEventsOnCalendarsWhereInput;
  some?: Auth_CalendarEventsOnCalendarsWhereInput;
  none?: Auth_CalendarEventsOnCalendarsWhereInput;
}

export interface Auth_CalendarEventsOnCalendarsOrderByRelationAggregateInput {
  _count?: SortOrder;
}

export interface Auth_CalendarEventCountOrderByAggregateInput {
  id?: SortOrder;
  url?: SortOrder;
  title?: SortOrder;
  start?: SortOrder;
  end?: SortOrder;
  allDay?: SortOrder;
}

export interface Auth_CalendarEventAvgOrderByAggregateInput {
  id?: SortOrder;
}

export interface Auth_CalendarEventMaxOrderByAggregateInput {
  id?: SortOrder;
  url?: SortOrder;
  title?: SortOrder;
  start?: SortOrder;
  end?: SortOrder;
  allDay?: SortOrder;
}

export interface Auth_CalendarEventMinOrderByAggregateInput {
  id?: SortOrder;
  url?: SortOrder;
  title?: SortOrder;
  start?: SortOrder;
  end?: SortOrder;
  allDay?: SortOrder;
}

export interface Auth_CalendarEventSumOrderByAggregateInput {
  id?: SortOrder;
}

export interface BoolWithAggregatesFilter {
  equals?: boolean;
  not?: NestedBoolWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedBoolFilter;
  _max?: NestedBoolFilter;
}

export interface Auth_CalendarRelationFilter {
  is?: Auth_CalendarWhereInput;
  isNot?: Auth_CalendarWhereInput;
}

export interface Auth_CalendarEventsOnCalendarsCalendarTypeCalendarOwnerIdCalendarEventIdCompoundUniqueInput {
  calendarType: string;
  calendarOwnerId: number;
  calendarEventId: number;
}

export interface Auth_CalendarEventsOnCalendarsCountOrderByAggregateInput {
  calendarType?: SortOrder;
  calendarOwnerId?: SortOrder;
  calendarEventId?: SortOrder;
}

export interface Auth_CalendarEventsOnCalendarsAvgOrderByAggregateInput {
  calendarOwnerId?: SortOrder;
  calendarEventId?: SortOrder;
}

export interface Auth_CalendarEventsOnCalendarsMaxOrderByAggregateInput {
  calendarType?: SortOrder;
  calendarOwnerId?: SortOrder;
  calendarEventId?: SortOrder;
}

export interface Auth_CalendarEventsOnCalendarsMinOrderByAggregateInput {
  calendarType?: SortOrder;
  calendarOwnerId?: SortOrder;
  calendarEventId?: SortOrder;
}

export interface Auth_CalendarEventsOnCalendarsSumOrderByAggregateInput {
  calendarOwnerId?: SortOrder;
  calendarEventId?: SortOrder;
}

export interface Auth_CalendarCalendarOwnerIdCalendarTypeCompoundUniqueInput {
  calendarOwnerId: number;
  calendarType: string;
}

export interface Auth_CalendarCountOrderByAggregateInput {
  calendarType?: SortOrder;
  calendarOwnerId?: SortOrder;
}

export interface Auth_CalendarAvgOrderByAggregateInput {
  calendarOwnerId?: SortOrder;
}

export interface Auth_CalendarMaxOrderByAggregateInput {
  calendarType?: SortOrder;
  calendarOwnerId?: SortOrder;
}

export interface Auth_CalendarMinOrderByAggregateInput {
  calendarType?: SortOrder;
  calendarOwnerId?: SortOrder;
}

export interface Auth_CalendarSumOrderByAggregateInput {
  calendarOwnerId?: SortOrder;
}

export interface Auth_CalendarsOnUsersCalendarTypeCalendarAttributedToIdCompoundUniqueInput {
  calendarType: string;
  calendarAttributedToId: number;
}

export interface Auth_CalendarsOnUsersCalendarAttributedToIdCalendarTypeCalendarOwnerIdCompoundUniqueInput {
  calendarAttributedToId: number;
  calendarType: string;
  calendarOwnerId: number;
}

export interface Auth_CalendarsOnUsersCountOrderByAggregateInput {
  calendarAttributedToId?: SortOrder;
  calendarType?: SortOrder;
  calendarOwnerId?: SortOrder;
}

export interface Auth_CalendarsOnUsersAvgOrderByAggregateInput {
  calendarAttributedToId?: SortOrder;
  calendarOwnerId?: SortOrder;
}

export interface Auth_CalendarsOnUsersMaxOrderByAggregateInput {
  calendarAttributedToId?: SortOrder;
  calendarType?: SortOrder;
  calendarOwnerId?: SortOrder;
}

export interface Auth_CalendarsOnUsersMinOrderByAggregateInput {
  calendarAttributedToId?: SortOrder;
  calendarType?: SortOrder;
  calendarOwnerId?: SortOrder;
}

export interface Auth_CalendarsOnUsersSumOrderByAggregateInput {
  calendarAttributedToId?: SortOrder;
  calendarOwnerId?: SortOrder;
}

export interface Auth_UserCreaterolesInput {
  set: string[];
}

export interface Auth_ProfileCreateNestedOneWithoutUserInput {
  create?: Auth_ProfileUncheckedCreateWithoutUserInput;
  connectOrCreate?: Auth_ProfileCreateOrConnectWithoutUserInput;
  connect?: Auth_ProfileWhereUniqueInput;
}

export interface Auth_UsersOnTeamsCreateNestedManyWithoutUserInput {
  create?: Auth_UsersOnTeamsCreateWithoutUserInput[];
  connectOrCreate?: Auth_UsersOnTeamsCreateOrConnectWithoutUserInput[];
  createMany?: Auth_UsersOnTeamsCreateManyUserInputEnvelope;
  connect?: Auth_UsersOnTeamsWhereUniqueInput[];
}

export interface Auth_CalendarsOnUsersCreateNestedManyWithoutCalendarAttributedToInput {
  create?: Auth_CalendarsOnUsersCreateWithoutCalendarAttributedToInput[];
  connectOrCreate?: Auth_CalendarsOnUsersCreateOrConnectWithoutCalendarAttributedToInput[];
  createMany?: Auth_CalendarsOnUsersCreateManyCalendarAttributedToInputEnvelope;
  connect?: Auth_CalendarsOnUsersWhereUniqueInput[];
}

export interface Auth_UsersOnCalendarEventsCreateNestedManyWithoutUserInput {
  create?: Auth_UsersOnCalendarEventsCreateWithoutUserInput[];
  connectOrCreate?: Auth_UsersOnCalendarEventsCreateOrConnectWithoutUserInput[];
  createMany?: Auth_UsersOnCalendarEventsCreateManyUserInputEnvelope;
  connect?: Auth_UsersOnCalendarEventsWhereUniqueInput[];
}

export interface Auth_UserCreateNestedManyWithoutContactedByInput {
  create?: Auth_UserCreateWithoutContactedByInput[];
  connectOrCreate?: Auth_UserCreateOrConnectWithoutContactedByInput[];
  connect?: Auth_UserWhereUniqueInput[];
}

export interface Auth_UserCreateNestedManyWithoutContactedInput {
  create?: Auth_UserCreateWithoutContactedInput[];
  connectOrCreate?: Auth_UserCreateOrConnectWithoutContactedInput[];
  connect?: Auth_UserWhereUniqueInput[];
}

export interface Auth_CalendarCreateNestedManyWithoutCalendarOwnerInput {
  create?: Auth_CalendarCreateWithoutCalendarOwnerInput[];
  connectOrCreate?: Auth_CalendarCreateOrConnectWithoutCalendarOwnerInput[];
  createMany?: Auth_CalendarCreateManyCalendarOwnerInputEnvelope;
  connect?: Auth_CalendarWhereUniqueInput[];
}

export interface Auth_ProfileUncheckedCreateNestedOneWithoutUserInput {
  create?: Auth_ProfileUncheckedCreateWithoutUserInput;
  connectOrCreate?: Auth_ProfileCreateOrConnectWithoutUserInput;
  connect?: Auth_ProfileWhereUniqueInput;
}

export interface Auth_UsersOnTeamsUncheckedCreateNestedManyWithoutUserInput {
  create?: Auth_UsersOnTeamsCreateWithoutUserInput[];
  connectOrCreate?: Auth_UsersOnTeamsCreateOrConnectWithoutUserInput[];
  createMany?: Auth_UsersOnTeamsCreateManyUserInputEnvelope;
  connect?: Auth_UsersOnTeamsWhereUniqueInput[];
}

export interface Auth_CalendarsOnUsersUncheckedCreateNestedManyWithoutCalendarAttributedToInput {
  create?: Auth_CalendarsOnUsersCreateWithoutCalendarAttributedToInput[];
  connectOrCreate?: Auth_CalendarsOnUsersCreateOrConnectWithoutCalendarAttributedToInput[];
  createMany?: Auth_CalendarsOnUsersCreateManyCalendarAttributedToInputEnvelope;
  connect?: Auth_CalendarsOnUsersWhereUniqueInput[];
}

export interface Auth_UsersOnCalendarEventsUncheckedCreateNestedManyWithoutUserInput {
  create?: Auth_UsersOnCalendarEventsCreateWithoutUserInput[];
  connectOrCreate?: Auth_UsersOnCalendarEventsCreateOrConnectWithoutUserInput[];
  createMany?: Auth_UsersOnCalendarEventsCreateManyUserInputEnvelope;
  connect?: Auth_UsersOnCalendarEventsWhereUniqueInput[];
}

export interface Auth_UserUncheckedCreateNestedManyWithoutContactedByInput {
  create?: Auth_UserCreateWithoutContactedByInput[];
  connectOrCreate?: Auth_UserCreateOrConnectWithoutContactedByInput[];
  connect?: Auth_UserWhereUniqueInput[];
}

export interface Auth_UserUncheckedCreateNestedManyWithoutContactedInput {
  create?: Auth_UserCreateWithoutContactedInput[];
  connectOrCreate?: Auth_UserCreateOrConnectWithoutContactedInput[];
  connect?: Auth_UserWhereUniqueInput[];
}

export interface Auth_CalendarUncheckedCreateNestedManyWithoutCalendarOwnerInput {
  create?: Auth_CalendarCreateWithoutCalendarOwnerInput[];
  connectOrCreate?: Auth_CalendarCreateOrConnectWithoutCalendarOwnerInput[];
  createMany?: Auth_CalendarCreateManyCalendarOwnerInputEnvelope;
  connect?: Auth_CalendarWhereUniqueInput[];
}

export interface DateTimeFieldUpdateOperationsInput {
  set?: Date;
}

export interface NullableStringFieldUpdateOperationsInput {
  set?: string | null;
}

export interface StringFieldUpdateOperationsInput {
  set?: string;
}

export interface Auth_UserUpdaterolesInput {
  set?: string[];
  push?: string;
}

export interface Auth_ProfileUpdateOneWithoutUserNestedInput {
  create?: Auth_ProfileUncheckedCreateWithoutUserInput;
  connectOrCreate?: Auth_ProfileCreateOrConnectWithoutUserInput;
  upsert?: Auth_ProfileUpsertWithoutUserInput;
  disconnect?: Auth_ProfileWhereInput;
  delete?: Auth_ProfileWhereInput;
  connect?: Auth_ProfileWhereUniqueInput;
  update?: Auth_ProfileUpdateWithoutUserInput;
}

export interface Auth_UsersOnTeamsUpdateManyWithoutUserNestedInput {
  create?: Auth_UsersOnTeamsCreateWithoutUserInput[];
  connectOrCreate?: Auth_UsersOnTeamsCreateOrConnectWithoutUserInput[];
  upsert?: Auth_UsersOnTeamsUpsertWithWhereUniqueWithoutUserInput[];
  createMany?: Auth_UsersOnTeamsCreateManyUserInputEnvelope;
  set?: Auth_UsersOnTeamsWhereUniqueInput[];
  disconnect?: Auth_UsersOnTeamsWhereUniqueInput[];
  delete?: Auth_UsersOnTeamsWhereUniqueInput[];
  connect?: Auth_UsersOnTeamsWhereUniqueInput[];
  update?: Auth_UsersOnTeamsUpdateWithWhereUniqueWithoutUserInput[];
  updateMany?: Auth_UsersOnTeamsUpdateManyWithWhereWithoutUserInput[];
  deleteMany?: Auth_UsersOnTeamsScalarWhereInput[];
}

export interface Auth_CalendarsOnUsersUpdateManyWithoutCalendarAttributedToNestedInput {
  create?: Auth_CalendarsOnUsersCreateWithoutCalendarAttributedToInput[];
  connectOrCreate?: Auth_CalendarsOnUsersCreateOrConnectWithoutCalendarAttributedToInput[];
  upsert?: Auth_CalendarsOnUsersUpsertWithWhereUniqueWithoutCalendarAttributedToInput[];
  createMany?: Auth_CalendarsOnUsersCreateManyCalendarAttributedToInputEnvelope;
  set?: Auth_CalendarsOnUsersWhereUniqueInput[];
  disconnect?: Auth_CalendarsOnUsersWhereUniqueInput[];
  delete?: Auth_CalendarsOnUsersWhereUniqueInput[];
  connect?: Auth_CalendarsOnUsersWhereUniqueInput[];
  update?: Auth_CalendarsOnUsersUpdateWithWhereUniqueWithoutCalendarAttributedToInput[];
  updateMany?: Auth_CalendarsOnUsersUpdateManyWithWhereWithoutCalendarAttributedToInput[];
  deleteMany?: Auth_CalendarsOnUsersScalarWhereInput[];
}

export interface Auth_UsersOnCalendarEventsUpdateManyWithoutUserNestedInput {
  create?: Auth_UsersOnCalendarEventsCreateWithoutUserInput[];
  connectOrCreate?: Auth_UsersOnCalendarEventsCreateOrConnectWithoutUserInput[];
  upsert?: Auth_UsersOnCalendarEventsUpsertWithWhereUniqueWithoutUserInput[];
  createMany?: Auth_UsersOnCalendarEventsCreateManyUserInputEnvelope;
  set?: Auth_UsersOnCalendarEventsWhereUniqueInput[];
  disconnect?: Auth_UsersOnCalendarEventsWhereUniqueInput[];
  delete?: Auth_UsersOnCalendarEventsWhereUniqueInput[];
  connect?: Auth_UsersOnCalendarEventsWhereUniqueInput[];
  update?: Auth_UsersOnCalendarEventsUpdateWithWhereUniqueWithoutUserInput[];
  updateMany?: Auth_UsersOnCalendarEventsUpdateManyWithWhereWithoutUserInput[];
  deleteMany?: Auth_UsersOnCalendarEventsScalarWhereInput[];
}

export interface Auth_UserUpdateManyWithoutContactedByNestedInput {
  create?: Auth_UserCreateWithoutContactedByInput[];
  connectOrCreate?: Auth_UserCreateOrConnectWithoutContactedByInput[];
  upsert?: Auth_UserUpsertWithWhereUniqueWithoutContactedByInput[];
  set?: Auth_UserWhereUniqueInput[];
  disconnect?: Auth_UserWhereUniqueInput[];
  delete?: Auth_UserWhereUniqueInput[];
  connect?: Auth_UserWhereUniqueInput[];
  update?: Auth_UserUpdateWithWhereUniqueWithoutContactedByInput[];
  updateMany?: Auth_UserUpdateManyWithWhereWithoutContactedByInput[];
  deleteMany?: Auth_UserScalarWhereInput[];
}

export interface Auth_UserUpdateManyWithoutContactedNestedInput {
  create?: Auth_UserCreateWithoutContactedInput[];
  connectOrCreate?: Auth_UserCreateOrConnectWithoutContactedInput[];
  upsert?: Auth_UserUpsertWithWhereUniqueWithoutContactedInput[];
  set?: Auth_UserWhereUniqueInput[];
  disconnect?: Auth_UserWhereUniqueInput[];
  delete?: Auth_UserWhereUniqueInput[];
  connect?: Auth_UserWhereUniqueInput[];
  update?: Auth_UserUpdateWithWhereUniqueWithoutContactedInput[];
  updateMany?: Auth_UserUpdateManyWithWhereWithoutContactedInput[];
  deleteMany?: Auth_UserScalarWhereInput[];
}

export interface Auth_CalendarUpdateManyWithoutCalendarOwnerNestedInput {
  create?: Auth_CalendarCreateWithoutCalendarOwnerInput[];
  connectOrCreate?: Auth_CalendarCreateOrConnectWithoutCalendarOwnerInput[];
  upsert?: Auth_CalendarUpsertWithWhereUniqueWithoutCalendarOwnerInput[];
  createMany?: Auth_CalendarCreateManyCalendarOwnerInputEnvelope;
  set?: Auth_CalendarWhereUniqueInput[];
  disconnect?: Auth_CalendarWhereUniqueInput[];
  delete?: Auth_CalendarWhereUniqueInput[];
  connect?: Auth_CalendarWhereUniqueInput[];
  update?: Auth_CalendarUpdateWithWhereUniqueWithoutCalendarOwnerInput[];
  updateMany?: Auth_CalendarUpdateManyWithWhereWithoutCalendarOwnerInput[];
  deleteMany?: Auth_CalendarScalarWhereInput[];
}

export interface IntFieldUpdateOperationsInput {
  set?: number;
  increment?: number;
  decrement?: number;
  multiply?: number;
  divide?: number;
}

export interface Auth_ProfileUncheckedUpdateOneWithoutUserNestedInput {
  create?: Auth_ProfileUncheckedCreateWithoutUserInput;
  connectOrCreate?: Auth_ProfileCreateOrConnectWithoutUserInput;
  upsert?: Auth_ProfileUpsertWithoutUserInput;
  disconnect?: Auth_ProfileWhereInput;
  delete?: Auth_ProfileWhereInput;
  connect?: Auth_ProfileWhereUniqueInput;
  update?: Auth_ProfileUpdateWithoutUserInput;
}

export interface Auth_UsersOnTeamsUncheckedUpdateManyWithoutUserNestedInput {
  create?: Auth_UsersOnTeamsCreateWithoutUserInput[];
  connectOrCreate?: Auth_UsersOnTeamsCreateOrConnectWithoutUserInput[];
  upsert?: Auth_UsersOnTeamsUpsertWithWhereUniqueWithoutUserInput[];
  createMany?: Auth_UsersOnTeamsCreateManyUserInputEnvelope;
  set?: Auth_UsersOnTeamsWhereUniqueInput[];
  disconnect?: Auth_UsersOnTeamsWhereUniqueInput[];
  delete?: Auth_UsersOnTeamsWhereUniqueInput[];
  connect?: Auth_UsersOnTeamsWhereUniqueInput[];
  update?: Auth_UsersOnTeamsUpdateWithWhereUniqueWithoutUserInput[];
  updateMany?: Auth_UsersOnTeamsUpdateManyWithWhereWithoutUserInput[];
  deleteMany?: Auth_UsersOnTeamsScalarWhereInput[];
}

export interface Auth_CalendarsOnUsersUncheckedUpdateManyWithoutCalendarAttributedToNestedInput {
  create?: Auth_CalendarsOnUsersCreateWithoutCalendarAttributedToInput[];
  connectOrCreate?: Auth_CalendarsOnUsersCreateOrConnectWithoutCalendarAttributedToInput[];
  upsert?: Auth_CalendarsOnUsersUpsertWithWhereUniqueWithoutCalendarAttributedToInput[];
  createMany?: Auth_CalendarsOnUsersCreateManyCalendarAttributedToInputEnvelope;
  set?: Auth_CalendarsOnUsersWhereUniqueInput[];
  disconnect?: Auth_CalendarsOnUsersWhereUniqueInput[];
  delete?: Auth_CalendarsOnUsersWhereUniqueInput[];
  connect?: Auth_CalendarsOnUsersWhereUniqueInput[];
  update?: Auth_CalendarsOnUsersUpdateWithWhereUniqueWithoutCalendarAttributedToInput[];
  updateMany?: Auth_CalendarsOnUsersUpdateManyWithWhereWithoutCalendarAttributedToInput[];
  deleteMany?: Auth_CalendarsOnUsersScalarWhereInput[];
}

export interface Auth_UsersOnCalendarEventsUncheckedUpdateManyWithoutUserNestedInput {
  create?: Auth_UsersOnCalendarEventsCreateWithoutUserInput[];
  connectOrCreate?: Auth_UsersOnCalendarEventsCreateOrConnectWithoutUserInput[];
  upsert?: Auth_UsersOnCalendarEventsUpsertWithWhereUniqueWithoutUserInput[];
  createMany?: Auth_UsersOnCalendarEventsCreateManyUserInputEnvelope;
  set?: Auth_UsersOnCalendarEventsWhereUniqueInput[];
  disconnect?: Auth_UsersOnCalendarEventsWhereUniqueInput[];
  delete?: Auth_UsersOnCalendarEventsWhereUniqueInput[];
  connect?: Auth_UsersOnCalendarEventsWhereUniqueInput[];
  update?: Auth_UsersOnCalendarEventsUpdateWithWhereUniqueWithoutUserInput[];
  updateMany?: Auth_UsersOnCalendarEventsUpdateManyWithWhereWithoutUserInput[];
  deleteMany?: Auth_UsersOnCalendarEventsScalarWhereInput[];
}

export interface Auth_UserUncheckedUpdateManyWithoutContactedByNestedInput {
  create?: Auth_UserCreateWithoutContactedByInput[];
  connectOrCreate?: Auth_UserCreateOrConnectWithoutContactedByInput[];
  upsert?: Auth_UserUpsertWithWhereUniqueWithoutContactedByInput[];
  set?: Auth_UserWhereUniqueInput[];
  disconnect?: Auth_UserWhereUniqueInput[];
  delete?: Auth_UserWhereUniqueInput[];
  connect?: Auth_UserWhereUniqueInput[];
  update?: Auth_UserUpdateWithWhereUniqueWithoutContactedByInput[];
  updateMany?: Auth_UserUpdateManyWithWhereWithoutContactedByInput[];
  deleteMany?: Auth_UserScalarWhereInput[];
}

export interface Auth_UserUncheckedUpdateManyWithoutContactedNestedInput {
  create?: Auth_UserCreateWithoutContactedInput[];
  connectOrCreate?: Auth_UserCreateOrConnectWithoutContactedInput[];
  upsert?: Auth_UserUpsertWithWhereUniqueWithoutContactedInput[];
  set?: Auth_UserWhereUniqueInput[];
  disconnect?: Auth_UserWhereUniqueInput[];
  delete?: Auth_UserWhereUniqueInput[];
  connect?: Auth_UserWhereUniqueInput[];
  update?: Auth_UserUpdateWithWhereUniqueWithoutContactedInput[];
  updateMany?: Auth_UserUpdateManyWithWhereWithoutContactedInput[];
  deleteMany?: Auth_UserScalarWhereInput[];
}

export interface Auth_CalendarUncheckedUpdateManyWithoutCalendarOwnerNestedInput {
  create?: Auth_CalendarCreateWithoutCalendarOwnerInput[];
  connectOrCreate?: Auth_CalendarCreateOrConnectWithoutCalendarOwnerInput[];
  upsert?: Auth_CalendarUpsertWithWhereUniqueWithoutCalendarOwnerInput[];
  createMany?: Auth_CalendarCreateManyCalendarOwnerInputEnvelope;
  set?: Auth_CalendarWhereUniqueInput[];
  disconnect?: Auth_CalendarWhereUniqueInput[];
  delete?: Auth_CalendarWhereUniqueInput[];
  connect?: Auth_CalendarWhereUniqueInput[];
  update?: Auth_CalendarUpdateWithWhereUniqueWithoutCalendarOwnerInput[];
  updateMany?: Auth_CalendarUpdateManyWithWhereWithoutCalendarOwnerInput[];
  deleteMany?: Auth_CalendarScalarWhereInput[];
}

export interface Auth_UserCreateNestedOneWithoutProfileInput {
  create?: Auth_UserUncheckedCreateWithoutProfileInput;
  connectOrCreate?: Auth_UserCreateOrConnectWithoutProfileInput;
  connect?: Auth_UserWhereUniqueInput;
}

export interface Auth_UserUpdateOneRequiredWithoutProfileNestedInput {
  create?: Auth_UserUncheckedCreateWithoutProfileInput;
  connectOrCreate?: Auth_UserCreateOrConnectWithoutProfileInput;
  upsert?: Auth_UserUpsertWithoutProfileInput;
  connect?: Auth_UserWhereUniqueInput;
  update?: Auth_UserUpdateWithoutProfileInput;
}

export interface NullableDateTimeFieldUpdateOperationsInput {
  set?: Date | null;
}

export interface Auth_TeamCreateNestedOneWithoutUsersInput {
  create?: Auth_TeamUncheckedCreateWithoutUsersInput;
  connectOrCreate?: Auth_TeamCreateOrConnectWithoutUsersInput;
  connect?: Auth_TeamWhereUniqueInput;
}

export interface Auth_UserCreateNestedOneWithoutTeamsInput {
  create?: Auth_UserUncheckedCreateWithoutTeamsInput;
  connectOrCreate?: Auth_UserCreateOrConnectWithoutTeamsInput;
  connect?: Auth_UserWhereUniqueInput;
}

export interface Auth_TeamUpdateOneRequiredWithoutUsersNestedInput {
  create?: Auth_TeamUncheckedCreateWithoutUsersInput;
  connectOrCreate?: Auth_TeamCreateOrConnectWithoutUsersInput;
  upsert?: Auth_TeamUpsertWithoutUsersInput;
  connect?: Auth_TeamWhereUniqueInput;
  update?: Auth_TeamUpdateWithoutUsersInput;
}

export interface Auth_UserUpdateOneRequiredWithoutTeamsNestedInput {
  create?: Auth_UserUncheckedCreateWithoutTeamsInput;
  connectOrCreate?: Auth_UserCreateOrConnectWithoutTeamsInput;
  upsert?: Auth_UserUpsertWithoutTeamsInput;
  connect?: Auth_UserWhereUniqueInput;
  update?: Auth_UserUpdateWithoutTeamsInput;
}

export interface Auth_UsersOnTeamsCreateNestedManyWithoutTeamInput {
  create?: Auth_UsersOnTeamsCreateWithoutTeamInput[];
  connectOrCreate?: Auth_UsersOnTeamsCreateOrConnectWithoutTeamInput[];
  createMany?: Auth_UsersOnTeamsCreateManyTeamInputEnvelope;
  connect?: Auth_UsersOnTeamsWhereUniqueInput[];
}

export interface Auth_UsersOnTeamsUncheckedCreateNestedManyWithoutTeamInput {
  create?: Auth_UsersOnTeamsCreateWithoutTeamInput[];
  connectOrCreate?: Auth_UsersOnTeamsCreateOrConnectWithoutTeamInput[];
  createMany?: Auth_UsersOnTeamsCreateManyTeamInputEnvelope;
  connect?: Auth_UsersOnTeamsWhereUniqueInput[];
}

export interface Auth_UsersOnTeamsUpdateManyWithoutTeamNestedInput {
  create?: Auth_UsersOnTeamsCreateWithoutTeamInput[];
  connectOrCreate?: Auth_UsersOnTeamsCreateOrConnectWithoutTeamInput[];
  upsert?: Auth_UsersOnTeamsUpsertWithWhereUniqueWithoutTeamInput[];
  createMany?: Auth_UsersOnTeamsCreateManyTeamInputEnvelope;
  set?: Auth_UsersOnTeamsWhereUniqueInput[];
  disconnect?: Auth_UsersOnTeamsWhereUniqueInput[];
  delete?: Auth_UsersOnTeamsWhereUniqueInput[];
  connect?: Auth_UsersOnTeamsWhereUniqueInput[];
  update?: Auth_UsersOnTeamsUpdateWithWhereUniqueWithoutTeamInput[];
  updateMany?: Auth_UsersOnTeamsUpdateManyWithWhereWithoutTeamInput[];
  deleteMany?: Auth_UsersOnTeamsScalarWhereInput[];
}

export interface Auth_UsersOnTeamsUncheckedUpdateManyWithoutTeamNestedInput {
  create?: Auth_UsersOnTeamsCreateWithoutTeamInput[];
  connectOrCreate?: Auth_UsersOnTeamsCreateOrConnectWithoutTeamInput[];
  upsert?: Auth_UsersOnTeamsUpsertWithWhereUniqueWithoutTeamInput[];
  createMany?: Auth_UsersOnTeamsCreateManyTeamInputEnvelope;
  set?: Auth_UsersOnTeamsWhereUniqueInput[];
  disconnect?: Auth_UsersOnTeamsWhereUniqueInput[];
  delete?: Auth_UsersOnTeamsWhereUniqueInput[];
  connect?: Auth_UsersOnTeamsWhereUniqueInput[];
  update?: Auth_UsersOnTeamsUpdateWithWhereUniqueWithoutTeamInput[];
  updateMany?: Auth_UsersOnTeamsUpdateManyWithWhereWithoutTeamInput[];
  deleteMany?: Auth_UsersOnTeamsScalarWhereInput[];
}

export interface Auth_UserCreateNestedOneWithoutEventsInvitedToInput {
  create?: Auth_UserUncheckedCreateWithoutEventsInvitedToInput;
  connectOrCreate?: Auth_UserCreateOrConnectWithoutEventsInvitedToInput;
  connect?: Auth_UserWhereUniqueInput;
}

export interface Auth_CalendarEventCreateNestedOneWithoutGuestsInput {
  create?: Auth_CalendarEventUncheckedCreateWithoutGuestsInput;
  connectOrCreate?: Auth_CalendarEventCreateOrConnectWithoutGuestsInput;
  connect?: Auth_CalendarEventWhereUniqueInput;
}

export interface Auth_UserUpdateOneRequiredWithoutEventsInvitedToNestedInput {
  create?: Auth_UserUncheckedCreateWithoutEventsInvitedToInput;
  connectOrCreate?: Auth_UserCreateOrConnectWithoutEventsInvitedToInput;
  upsert?: Auth_UserUpsertWithoutEventsInvitedToInput;
  connect?: Auth_UserWhereUniqueInput;
  update?: Auth_UserUpdateWithoutEventsInvitedToInput;
}

export interface Auth_CalendarEventUpdateOneRequiredWithoutGuestsNestedInput {
  create?: Auth_CalendarEventUncheckedCreateWithoutGuestsInput;
  connectOrCreate?: Auth_CalendarEventCreateOrConnectWithoutGuestsInput;
  upsert?: Auth_CalendarEventUpsertWithoutGuestsInput;
  connect?: Auth_CalendarEventWhereUniqueInput;
  update?: Auth_CalendarEventUpdateWithoutGuestsInput;
}

export interface Auth_UsersOnCalendarEventsCreateNestedManyWithoutCalendarEventInput {
  create?: Auth_UsersOnCalendarEventsCreateWithoutCalendarEventInput[];
  connectOrCreate?: Auth_UsersOnCalendarEventsCreateOrConnectWithoutCalendarEventInput[];
  createMany?: Auth_UsersOnCalendarEventsCreateManyCalendarEventInputEnvelope;
  connect?: Auth_UsersOnCalendarEventsWhereUniqueInput[];
}

export interface Auth_CalendarEventsOnCalendarsCreateNestedManyWithoutCalendarEventInput {
  create?: Auth_CalendarEventsOnCalendarsCreateWithoutCalendarEventInput[];
  connectOrCreate?: Auth_CalendarEventsOnCalendarsCreateOrConnectWithoutCalendarEventInput[];
  createMany?: Auth_CalendarEventsOnCalendarsCreateManyCalendarEventInputEnvelope;
  connect?: Auth_CalendarEventsOnCalendarsWhereUniqueInput[];
}

export interface Auth_UsersOnCalendarEventsUncheckedCreateNestedManyWithoutCalendarEventInput {
  create?: Auth_UsersOnCalendarEventsCreateWithoutCalendarEventInput[];
  connectOrCreate?: Auth_UsersOnCalendarEventsCreateOrConnectWithoutCalendarEventInput[];
  createMany?: Auth_UsersOnCalendarEventsCreateManyCalendarEventInputEnvelope;
  connect?: Auth_UsersOnCalendarEventsWhereUniqueInput[];
}

export interface Auth_CalendarEventsOnCalendarsUncheckedCreateNestedManyWithoutCalendarEventInput {
  create?: Auth_CalendarEventsOnCalendarsCreateWithoutCalendarEventInput[];
  connectOrCreate?: Auth_CalendarEventsOnCalendarsCreateOrConnectWithoutCalendarEventInput[];
  createMany?: Auth_CalendarEventsOnCalendarsCreateManyCalendarEventInputEnvelope;
  connect?: Auth_CalendarEventsOnCalendarsWhereUniqueInput[];
}

export interface BoolFieldUpdateOperationsInput {
  set?: boolean;
}

export interface Auth_UsersOnCalendarEventsUpdateManyWithoutCalendarEventNestedInput {
  create?: Auth_UsersOnCalendarEventsCreateWithoutCalendarEventInput[];
  connectOrCreate?: Auth_UsersOnCalendarEventsCreateOrConnectWithoutCalendarEventInput[];
  upsert?: Auth_UsersOnCalendarEventsUpsertWithWhereUniqueWithoutCalendarEventInput[];
  createMany?: Auth_UsersOnCalendarEventsCreateManyCalendarEventInputEnvelope;
  set?: Auth_UsersOnCalendarEventsWhereUniqueInput[];
  disconnect?: Auth_UsersOnCalendarEventsWhereUniqueInput[];
  delete?: Auth_UsersOnCalendarEventsWhereUniqueInput[];
  connect?: Auth_UsersOnCalendarEventsWhereUniqueInput[];
  update?: Auth_UsersOnCalendarEventsUpdateWithWhereUniqueWithoutCalendarEventInput[];
  updateMany?: Auth_UsersOnCalendarEventsUpdateManyWithWhereWithoutCalendarEventInput[];
  deleteMany?: Auth_UsersOnCalendarEventsScalarWhereInput[];
}

export interface Auth_CalendarEventsOnCalendarsUpdateManyWithoutCalendarEventNestedInput {
  create?: Auth_CalendarEventsOnCalendarsCreateWithoutCalendarEventInput[];
  connectOrCreate?: Auth_CalendarEventsOnCalendarsCreateOrConnectWithoutCalendarEventInput[];
  upsert?: Auth_CalendarEventsOnCalendarsUpsertWithWhereUniqueWithoutCalendarEventInput[];
  createMany?: Auth_CalendarEventsOnCalendarsCreateManyCalendarEventInputEnvelope;
  set?: Auth_CalendarEventsOnCalendarsWhereUniqueInput[];
  disconnect?: Auth_CalendarEventsOnCalendarsWhereUniqueInput[];
  delete?: Auth_CalendarEventsOnCalendarsWhereUniqueInput[];
  connect?: Auth_CalendarEventsOnCalendarsWhereUniqueInput[];
  update?: Auth_CalendarEventsOnCalendarsUpdateWithWhereUniqueWithoutCalendarEventInput[];
  updateMany?: Auth_CalendarEventsOnCalendarsUpdateManyWithWhereWithoutCalendarEventInput[];
  deleteMany?: Auth_CalendarEventsOnCalendarsScalarWhereInput[];
}

export interface Auth_UsersOnCalendarEventsUncheckedUpdateManyWithoutCalendarEventNestedInput {
  create?: Auth_UsersOnCalendarEventsCreateWithoutCalendarEventInput[];
  connectOrCreate?: Auth_UsersOnCalendarEventsCreateOrConnectWithoutCalendarEventInput[];
  upsert?: Auth_UsersOnCalendarEventsUpsertWithWhereUniqueWithoutCalendarEventInput[];
  createMany?: Auth_UsersOnCalendarEventsCreateManyCalendarEventInputEnvelope;
  set?: Auth_UsersOnCalendarEventsWhereUniqueInput[];
  disconnect?: Auth_UsersOnCalendarEventsWhereUniqueInput[];
  delete?: Auth_UsersOnCalendarEventsWhereUniqueInput[];
  connect?: Auth_UsersOnCalendarEventsWhereUniqueInput[];
  update?: Auth_UsersOnCalendarEventsUpdateWithWhereUniqueWithoutCalendarEventInput[];
  updateMany?: Auth_UsersOnCalendarEventsUpdateManyWithWhereWithoutCalendarEventInput[];
  deleteMany?: Auth_UsersOnCalendarEventsScalarWhereInput[];
}

export interface Auth_CalendarEventsOnCalendarsUncheckedUpdateManyWithoutCalendarEventNestedInput {
  create?: Auth_CalendarEventsOnCalendarsCreateWithoutCalendarEventInput[];
  connectOrCreate?: Auth_CalendarEventsOnCalendarsCreateOrConnectWithoutCalendarEventInput[];
  upsert?: Auth_CalendarEventsOnCalendarsUpsertWithWhereUniqueWithoutCalendarEventInput[];
  createMany?: Auth_CalendarEventsOnCalendarsCreateManyCalendarEventInputEnvelope;
  set?: Auth_CalendarEventsOnCalendarsWhereUniqueInput[];
  disconnect?: Auth_CalendarEventsOnCalendarsWhereUniqueInput[];
  delete?: Auth_CalendarEventsOnCalendarsWhereUniqueInput[];
  connect?: Auth_CalendarEventsOnCalendarsWhereUniqueInput[];
  update?: Auth_CalendarEventsOnCalendarsUpdateWithWhereUniqueWithoutCalendarEventInput[];
  updateMany?: Auth_CalendarEventsOnCalendarsUpdateManyWithWhereWithoutCalendarEventInput[];
  deleteMany?: Auth_CalendarEventsOnCalendarsScalarWhereInput[];
}

export interface Auth_CalendarCreateNestedOneWithoutCalendarEventsInput {
  create?: Auth_CalendarUncheckedCreateWithoutCalendarEventsInput;
  connectOrCreate?: Auth_CalendarCreateOrConnectWithoutCalendarEventsInput;
  connect?: Auth_CalendarWhereUniqueInput;
}

export interface Auth_CalendarEventCreateNestedOneWithoutCalendarInput {
  create?: Auth_CalendarEventUncheckedCreateWithoutCalendarInput;
  connectOrCreate?: Auth_CalendarEventCreateOrConnectWithoutCalendarInput;
  connect?: Auth_CalendarEventWhereUniqueInput;
}

export interface Auth_CalendarUpdateOneRequiredWithoutCalendarEventsNestedInput {
  create?: Auth_CalendarUncheckedCreateWithoutCalendarEventsInput;
  connectOrCreate?: Auth_CalendarCreateOrConnectWithoutCalendarEventsInput;
  upsert?: Auth_CalendarUpsertWithoutCalendarEventsInput;
  connect?: Auth_CalendarWhereUniqueInput;
  update?: Auth_CalendarUpdateWithoutCalendarEventsInput;
}

export interface Auth_CalendarEventUpdateOneRequiredWithoutCalendarNestedInput {
  create?: Auth_CalendarEventUncheckedCreateWithoutCalendarInput;
  connectOrCreate?: Auth_CalendarEventCreateOrConnectWithoutCalendarInput;
  upsert?: Auth_CalendarEventUpsertWithoutCalendarInput;
  connect?: Auth_CalendarEventWhereUniqueInput;
  update?: Auth_CalendarEventUpdateWithoutCalendarInput;
}

export interface Auth_CalendarsOnUsersCreateNestedManyWithoutCalendarInput {
  create?: Auth_CalendarsOnUsersCreateWithoutCalendarInput[];
  connectOrCreate?: Auth_CalendarsOnUsersCreateOrConnectWithoutCalendarInput[];
  createMany?: Auth_CalendarsOnUsersCreateManyCalendarInputEnvelope;
  connect?: Auth_CalendarsOnUsersWhereUniqueInput[];
}

export interface Auth_CalendarEventsOnCalendarsCreateNestedManyWithoutCalendarInput {
  create?: Auth_CalendarEventsOnCalendarsCreateWithoutCalendarInput[];
  connectOrCreate?: Auth_CalendarEventsOnCalendarsCreateOrConnectWithoutCalendarInput[];
  createMany?: Auth_CalendarEventsOnCalendarsCreateManyCalendarInputEnvelope;
  connect?: Auth_CalendarEventsOnCalendarsWhereUniqueInput[];
}

export interface Auth_UserCreateNestedOneWithoutCalendarsCreatedInput {
  create?: Auth_UserUncheckedCreateWithoutCalendarsCreatedInput;
  connectOrCreate?: Auth_UserCreateOrConnectWithoutCalendarsCreatedInput;
  connect?: Auth_UserWhereUniqueInput;
}

export interface Auth_CalendarsOnUsersUncheckedCreateNestedManyWithoutCalendarInput {
  create?: Auth_CalendarsOnUsersCreateWithoutCalendarInput[];
  connectOrCreate?: Auth_CalendarsOnUsersCreateOrConnectWithoutCalendarInput[];
  createMany?: Auth_CalendarsOnUsersCreateManyCalendarInputEnvelope;
  connect?: Auth_CalendarsOnUsersWhereUniqueInput[];
}

export interface Auth_CalendarEventsOnCalendarsUncheckedCreateNestedManyWithoutCalendarInput {
  create?: Auth_CalendarEventsOnCalendarsCreateWithoutCalendarInput[];
  connectOrCreate?: Auth_CalendarEventsOnCalendarsCreateOrConnectWithoutCalendarInput[];
  createMany?: Auth_CalendarEventsOnCalendarsCreateManyCalendarInputEnvelope;
  connect?: Auth_CalendarEventsOnCalendarsWhereUniqueInput[];
}

export interface Auth_CalendarsOnUsersUpdateManyWithoutCalendarNestedInput {
  create?: Auth_CalendarsOnUsersCreateWithoutCalendarInput[];
  connectOrCreate?: Auth_CalendarsOnUsersCreateOrConnectWithoutCalendarInput[];
  upsert?: Auth_CalendarsOnUsersUpsertWithWhereUniqueWithoutCalendarInput[];
  createMany?: Auth_CalendarsOnUsersCreateManyCalendarInputEnvelope;
  set?: Auth_CalendarsOnUsersWhereUniqueInput[];
  disconnect?: Auth_CalendarsOnUsersWhereUniqueInput[];
  delete?: Auth_CalendarsOnUsersWhereUniqueInput[];
  connect?: Auth_CalendarsOnUsersWhereUniqueInput[];
  update?: Auth_CalendarsOnUsersUpdateWithWhereUniqueWithoutCalendarInput[];
  updateMany?: Auth_CalendarsOnUsersUpdateManyWithWhereWithoutCalendarInput[];
  deleteMany?: Auth_CalendarsOnUsersScalarWhereInput[];
}

export interface Auth_CalendarEventsOnCalendarsUpdateManyWithoutCalendarNestedInput {
  create?: Auth_CalendarEventsOnCalendarsCreateWithoutCalendarInput[];
  connectOrCreate?: Auth_CalendarEventsOnCalendarsCreateOrConnectWithoutCalendarInput[];
  upsert?: Auth_CalendarEventsOnCalendarsUpsertWithWhereUniqueWithoutCalendarInput[];
  createMany?: Auth_CalendarEventsOnCalendarsCreateManyCalendarInputEnvelope;
  set?: Auth_CalendarEventsOnCalendarsWhereUniqueInput[];
  disconnect?: Auth_CalendarEventsOnCalendarsWhereUniqueInput[];
  delete?: Auth_CalendarEventsOnCalendarsWhereUniqueInput[];
  connect?: Auth_CalendarEventsOnCalendarsWhereUniqueInput[];
  update?: Auth_CalendarEventsOnCalendarsUpdateWithWhereUniqueWithoutCalendarInput[];
  updateMany?: Auth_CalendarEventsOnCalendarsUpdateManyWithWhereWithoutCalendarInput[];
  deleteMany?: Auth_CalendarEventsOnCalendarsScalarWhereInput[];
}

export interface Auth_UserUpdateOneRequiredWithoutCalendarsCreatedNestedInput {
  create?: Auth_UserUncheckedCreateWithoutCalendarsCreatedInput;
  connectOrCreate?: Auth_UserCreateOrConnectWithoutCalendarsCreatedInput;
  upsert?: Auth_UserUpsertWithoutCalendarsCreatedInput;
  connect?: Auth_UserWhereUniqueInput;
  update?: Auth_UserUpdateWithoutCalendarsCreatedInput;
}

export interface Auth_CalendarsOnUsersUncheckedUpdateManyWithoutCalendarNestedInput {
  create?: Auth_CalendarsOnUsersCreateWithoutCalendarInput[];
  connectOrCreate?: Auth_CalendarsOnUsersCreateOrConnectWithoutCalendarInput[];
  upsert?: Auth_CalendarsOnUsersUpsertWithWhereUniqueWithoutCalendarInput[];
  createMany?: Auth_CalendarsOnUsersCreateManyCalendarInputEnvelope;
  set?: Auth_CalendarsOnUsersWhereUniqueInput[];
  disconnect?: Auth_CalendarsOnUsersWhereUniqueInput[];
  delete?: Auth_CalendarsOnUsersWhereUniqueInput[];
  connect?: Auth_CalendarsOnUsersWhereUniqueInput[];
  update?: Auth_CalendarsOnUsersUpdateWithWhereUniqueWithoutCalendarInput[];
  updateMany?: Auth_CalendarsOnUsersUpdateManyWithWhereWithoutCalendarInput[];
  deleteMany?: Auth_CalendarsOnUsersScalarWhereInput[];
}

export interface Auth_CalendarEventsOnCalendarsUncheckedUpdateManyWithoutCalendarNestedInput {
  create?: Auth_CalendarEventsOnCalendarsCreateWithoutCalendarInput[];
  connectOrCreate?: Auth_CalendarEventsOnCalendarsCreateOrConnectWithoutCalendarInput[];
  upsert?: Auth_CalendarEventsOnCalendarsUpsertWithWhereUniqueWithoutCalendarInput[];
  createMany?: Auth_CalendarEventsOnCalendarsCreateManyCalendarInputEnvelope;
  set?: Auth_CalendarEventsOnCalendarsWhereUniqueInput[];
  disconnect?: Auth_CalendarEventsOnCalendarsWhereUniqueInput[];
  delete?: Auth_CalendarEventsOnCalendarsWhereUniqueInput[];
  connect?: Auth_CalendarEventsOnCalendarsWhereUniqueInput[];
  update?: Auth_CalendarEventsOnCalendarsUpdateWithWhereUniqueWithoutCalendarInput[];
  updateMany?: Auth_CalendarEventsOnCalendarsUpdateManyWithWhereWithoutCalendarInput[];
  deleteMany?: Auth_CalendarEventsOnCalendarsScalarWhereInput[];
}

export interface Auth_UserCreateNestedOneWithoutCalendarsInput {
  create?: Auth_UserUncheckedCreateWithoutCalendarsInput;
  connectOrCreate?: Auth_UserCreateOrConnectWithoutCalendarsInput;
  connect?: Auth_UserWhereUniqueInput;
}

export interface Auth_CalendarCreateNestedOneWithoutUsersInput {
  create?: Auth_CalendarUncheckedCreateWithoutUsersInput;
  connectOrCreate?: Auth_CalendarCreateOrConnectWithoutUsersInput;
  connect?: Auth_CalendarWhereUniqueInput;
}

export interface Auth_UserUpdateOneRequiredWithoutCalendarsNestedInput {
  create?: Auth_UserUncheckedCreateWithoutCalendarsInput;
  connectOrCreate?: Auth_UserCreateOrConnectWithoutCalendarsInput;
  upsert?: Auth_UserUpsertWithoutCalendarsInput;
  connect?: Auth_UserWhereUniqueInput;
  update?: Auth_UserUpdateWithoutCalendarsInput;
}

export interface Auth_CalendarUpdateOneRequiredWithoutUsersNestedInput {
  create?: Auth_CalendarUncheckedCreateWithoutUsersInput;
  connectOrCreate?: Auth_CalendarCreateOrConnectWithoutUsersInput;
  upsert?: Auth_CalendarUpsertWithoutUsersInput;
  connect?: Auth_CalendarWhereUniqueInput;
  update?: Auth_CalendarUpdateWithoutUsersInput;
}

export interface NestedIntFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntFilter;
}

export interface NestedDateTimeFilter {
  equals?: Date;
  in?: Date[];
  notIn?: Date[];
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: NestedDateTimeFilter;
}

export interface NestedStringNullableFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringNullableFilter | null;
}

export interface NestedStringFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringFilter;
}

export interface NestedIntWithAggregatesFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntWithAggregatesFilter;
  _count?: NestedIntFilter;
  _avg?: NestedFloatFilter;
  _sum?: NestedIntFilter;
  _min?: NestedIntFilter;
  _max?: NestedIntFilter;
}

export interface NestedFloatFilter {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedFloatFilter;
}

export interface NestedDateTimeWithAggregatesFilter {
  equals?: Date;
  in?: Date[];
  notIn?: Date[];
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: NestedDateTimeWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedDateTimeFilter;
  _max?: NestedDateTimeFilter;
}

export interface NestedStringNullableWithAggregatesFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringNullableWithAggregatesFilter | null;
  _count?: NestedIntNullableFilter;
  _min?: NestedStringNullableFilter;
  _max?: NestedStringNullableFilter;
}

export interface NestedIntNullableFilter {
  equals?: number | null;
  in?: number[] | null;
  notIn?: number[] | null;
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntNullableFilter | null;
}

export interface NestedStringWithAggregatesFilter {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedStringFilter;
  _max?: NestedStringFilter;
}

export interface NestedJsonNullableFilter {
  equals?: any;
  path?: string[];
  string_contains?: string;
  string_starts_with?: string;
  string_ends_with?: string;
  array_contains?: any | null;
  array_starts_with?: any | null;
  array_ends_with?: any | null;
  lt?: any;
  lte?: any;
  gt?: any;
  gte?: any;
  not?: any;
}

export interface NestedDateTimeNullableFilter {
  equals?: Date | null;
  in?: Date[] | null;
  notIn?: Date[] | null;
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: NestedDateTimeNullableFilter | null;
}

export interface NestedDateTimeNullableWithAggregatesFilter {
  equals?: Date | null;
  in?: Date[] | null;
  notIn?: Date[] | null;
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: NestedDateTimeNullableWithAggregatesFilter | null;
  _count?: NestedIntNullableFilter;
  _min?: NestedDateTimeNullableFilter;
  _max?: NestedDateTimeNullableFilter;
}

export interface NestedBoolFilter {
  equals?: boolean;
  not?: NestedBoolFilter;
}

export interface NestedBoolWithAggregatesFilter {
  equals?: boolean;
  not?: NestedBoolWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedBoolFilter;
  _max?: NestedBoolFilter;
}

export interface Auth_ProfileCreateWithoutUserInput {
  location?: string | null;
  joiningDate?: Date | null;
  businessPhone?: string | null;
  mobilePhone?: string | null;
  kakaoTalkId?: string | null;
  designation?: string | null;
  profileImg?: string | null;
  designationIcon?: string | null;
  coverImg?: string | null;
}

export interface Auth_ProfileUncheckedCreateWithoutUserInput {
  location?: string | null;
  joiningDate?: Date | null;
  businessPhone?: string | null;
  mobilePhone?: string | null;
  kakaoTalkId?: string | null;
  designation?: string | null;
  profileImg?: string | null;
  designationIcon?: string | null;
  coverImg?: string | null;
}

export interface Auth_ProfileCreateOrConnectWithoutUserInput {
  where: Auth_ProfileWhereUniqueInput;
  create: Auth_ProfileUncheckedCreateWithoutUserInput;
}

export interface Auth_UsersOnTeamsCreateWithoutUserInput {
  team: Auth_TeamCreateNestedOneWithoutUsersInput;
  assignedAt?: Date;
}

export interface Auth_UsersOnTeamsUncheckedCreateWithoutUserInput {
  teamName: string;
  assignedAt?: Date;
}

export interface Auth_UsersOnTeamsCreateOrConnectWithoutUserInput {
  where: Auth_UsersOnTeamsWhereUniqueInput;
  create: Auth_UsersOnTeamsUncheckedCreateWithoutUserInput;
}

export interface Auth_UsersOnTeamsCreateManyUserInputEnvelope {
  data: Auth_UsersOnTeamsCreateManyUserInput[];
  skipDuplicates?: boolean;
}

export interface Auth_CalendarsOnUsersCreateWithoutCalendarAttributedToInput {
  calendar: Auth_CalendarCreateNestedOneWithoutUsersInput;
}

export interface Auth_CalendarsOnUsersUncheckedCreateWithoutCalendarAttributedToInput {
  calendarType: string;
  calendarOwnerId: number;
}

export interface Auth_CalendarsOnUsersCreateOrConnectWithoutCalendarAttributedToInput {
  where: Auth_CalendarsOnUsersWhereUniqueInput;
  create: Auth_CalendarsOnUsersUncheckedCreateWithoutCalendarAttributedToInput;
}

export interface Auth_CalendarsOnUsersCreateManyCalendarAttributedToInputEnvelope {
  data: Auth_CalendarsOnUsersCreateManyCalendarAttributedToInput[];
  skipDuplicates?: boolean;
}

export interface Auth_UsersOnCalendarEventsCreateWithoutUserInput {
  calendarEvent: Auth_CalendarEventCreateNestedOneWithoutGuestsInput;
}

export interface Auth_UsersOnCalendarEventsUncheckedCreateWithoutUserInput {
  calendarEventId: number;
}

export interface Auth_UsersOnCalendarEventsCreateOrConnectWithoutUserInput {
  where: Auth_UsersOnCalendarEventsWhereUniqueInput;
  create: Auth_UsersOnCalendarEventsUncheckedCreateWithoutUserInput;
}

export interface Auth_UsersOnCalendarEventsCreateManyUserInputEnvelope {
  data: Auth_UsersOnCalendarEventsCreateManyUserInput[];
  skipDuplicates?: boolean;
}

export interface Auth_UserCreateWithoutContactedByInput {
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: Auth_UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Auth_ProfileCreateNestedOneWithoutUserInput;
  teams?: Auth_UsersOnTeamsCreateNestedManyWithoutUserInput;
  calendars?: Auth_CalendarsOnUsersCreateNestedManyWithoutCalendarAttributedToInput;
  eventsInvitedTo?: Auth_UsersOnCalendarEventsCreateNestedManyWithoutUserInput;
  contacted?: Auth_UserCreateNestedManyWithoutContactedByInput;
  calendarsCreated?: Auth_CalendarCreateNestedManyWithoutCalendarOwnerInput;
}

export interface Auth_UserUncheckedCreateWithoutContactedByInput {
  id?: number;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: Auth_UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Auth_ProfileUncheckedCreateNestedOneWithoutUserInput;
  teams?: Auth_UsersOnTeamsUncheckedCreateNestedManyWithoutUserInput;
  calendars?: Auth_CalendarsOnUsersUncheckedCreateNestedManyWithoutCalendarAttributedToInput;
  eventsInvitedTo?: Auth_UsersOnCalendarEventsUncheckedCreateNestedManyWithoutUserInput;
  contacted?: Auth_UserUncheckedCreateNestedManyWithoutContactedByInput;
  calendarsCreated?: Auth_CalendarUncheckedCreateNestedManyWithoutCalendarOwnerInput;
}

export interface Auth_UserCreateOrConnectWithoutContactedByInput {
  where: Auth_UserWhereUniqueInput;
  create: Auth_UserUncheckedCreateWithoutContactedByInput;
}

export interface Auth_UserCreateWithoutContactedInput {
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: Auth_UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Auth_ProfileCreateNestedOneWithoutUserInput;
  teams?: Auth_UsersOnTeamsCreateNestedManyWithoutUserInput;
  calendars?: Auth_CalendarsOnUsersCreateNestedManyWithoutCalendarAttributedToInput;
  eventsInvitedTo?: Auth_UsersOnCalendarEventsCreateNestedManyWithoutUserInput;
  contactedBy?: Auth_UserCreateNestedManyWithoutContactedInput;
  calendarsCreated?: Auth_CalendarCreateNestedManyWithoutCalendarOwnerInput;
}

export interface Auth_UserUncheckedCreateWithoutContactedInput {
  id?: number;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: Auth_UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Auth_ProfileUncheckedCreateNestedOneWithoutUserInput;
  teams?: Auth_UsersOnTeamsUncheckedCreateNestedManyWithoutUserInput;
  calendars?: Auth_CalendarsOnUsersUncheckedCreateNestedManyWithoutCalendarAttributedToInput;
  eventsInvitedTo?: Auth_UsersOnCalendarEventsUncheckedCreateNestedManyWithoutUserInput;
  contactedBy?: Auth_UserUncheckedCreateNestedManyWithoutContactedInput;
  calendarsCreated?: Auth_CalendarUncheckedCreateNestedManyWithoutCalendarOwnerInput;
}

export interface Auth_UserCreateOrConnectWithoutContactedInput {
  where: Auth_UserWhereUniqueInput;
  create: Auth_UserUncheckedCreateWithoutContactedInput;
}

export interface Auth_CalendarCreateWithoutCalendarOwnerInput {
  calendarType: string;
  users?: Auth_CalendarsOnUsersCreateNestedManyWithoutCalendarInput;
  calendarEvents?: Auth_CalendarEventsOnCalendarsCreateNestedManyWithoutCalendarInput;
}

export interface Auth_CalendarUncheckedCreateWithoutCalendarOwnerInput {
  calendarType: string;
  users?: Auth_CalendarsOnUsersUncheckedCreateNestedManyWithoutCalendarInput;
  calendarEvents?: Auth_CalendarEventsOnCalendarsUncheckedCreateNestedManyWithoutCalendarInput;
}

export interface Auth_CalendarCreateOrConnectWithoutCalendarOwnerInput {
  where: Auth_CalendarWhereUniqueInput;
  create: Auth_CalendarUncheckedCreateWithoutCalendarOwnerInput;
}

export interface Auth_CalendarCreateManyCalendarOwnerInputEnvelope {
  data: Auth_CalendarCreateManyCalendarOwnerInput[];
  skipDuplicates?: boolean;
}

export interface Auth_ProfileUpsertWithoutUserInput {
  update: Auth_ProfileUncheckedUpdateWithoutUserInput;
  create: Auth_ProfileUncheckedCreateWithoutUserInput;
  where?: Auth_ProfileWhereInput;
}

export interface Auth_ProfileUpdateToOneWithWhereWithoutUserInput {
  where?: Auth_ProfileWhereInput;
  data: Auth_ProfileUncheckedUpdateWithoutUserInput;
}

export interface Auth_ProfileUpdateWithoutUserInput {
  location?: string | null;
  joiningDate?: Date | null;
  businessPhone?: string | null;
  mobilePhone?: string | null;
  kakaoTalkId?: string | null;
  designation?: string | null;
  profileImg?: string | null;
  designationIcon?: string | null;
  coverImg?: string | null;
}

export interface Auth_ProfileUncheckedUpdateWithoutUserInput {
  location?: string | null;
  joiningDate?: Date | null;
  businessPhone?: string | null;
  mobilePhone?: string | null;
  kakaoTalkId?: string | null;
  designation?: string | null;
  profileImg?: string | null;
  designationIcon?: string | null;
  coverImg?: string | null;
}

export interface Auth_UsersOnTeamsUpsertWithWhereUniqueWithoutUserInput {
  where: Auth_UsersOnTeamsWhereUniqueInput;
  update: Auth_UsersOnTeamsUncheckedUpdateWithoutUserInput;
  create: Auth_UsersOnTeamsUncheckedCreateWithoutUserInput;
}

export interface Auth_UsersOnTeamsUpdateWithWhereUniqueWithoutUserInput {
  where: Auth_UsersOnTeamsWhereUniqueInput;
  data: Auth_UsersOnTeamsUncheckedUpdateWithoutUserInput;
}

export interface Auth_UsersOnTeamsUpdateManyWithWhereWithoutUserInput {
  where: Auth_UsersOnTeamsScalarWhereInput;
  data: Auth_UsersOnTeamsUncheckedUpdateManyWithoutTeamsInput;
}

export interface Auth_UsersOnTeamsScalarWhereInput {
  AND?: Auth_UsersOnTeamsScalarWhereInput[];
  OR?: Auth_UsersOnTeamsScalarWhereInput[];
  NOT?: Auth_UsersOnTeamsScalarWhereInput[];
  teamName?: StringFilter;
  userId?: IntFilter;
  assignedAt?: DateTimeFilter;
}

export interface Auth_CalendarsOnUsersUpsertWithWhereUniqueWithoutCalendarAttributedToInput {
  where: Auth_CalendarsOnUsersWhereUniqueInput;
  update: Auth_CalendarsOnUsersUncheckedUpdateWithoutCalendarAttributedToInput;
  create: Auth_CalendarsOnUsersUncheckedCreateWithoutCalendarAttributedToInput;
}

export interface Auth_CalendarsOnUsersUpdateWithWhereUniqueWithoutCalendarAttributedToInput {
  where: Auth_CalendarsOnUsersWhereUniqueInput;
  data: Auth_CalendarsOnUsersUncheckedUpdateWithoutCalendarAttributedToInput;
}

export interface Auth_CalendarsOnUsersUpdateManyWithWhereWithoutCalendarAttributedToInput {
  where: Auth_CalendarsOnUsersScalarWhereInput;
  data: Auth_CalendarsOnUsersUncheckedUpdateManyWithoutCalendarsInput;
}

export interface Auth_CalendarsOnUsersScalarWhereInput {
  AND?: Auth_CalendarsOnUsersScalarWhereInput[];
  OR?: Auth_CalendarsOnUsersScalarWhereInput[];
  NOT?: Auth_CalendarsOnUsersScalarWhereInput[];
  calendarAttributedToId?: IntFilter;
  calendarType?: StringFilter;
  calendarOwnerId?: IntFilter;
}

export interface Auth_UsersOnCalendarEventsUpsertWithWhereUniqueWithoutUserInput {
  where: Auth_UsersOnCalendarEventsWhereUniqueInput;
  update: Auth_UsersOnCalendarEventsUncheckedUpdateWithoutUserInput;
  create: Auth_UsersOnCalendarEventsUncheckedCreateWithoutUserInput;
}

export interface Auth_UsersOnCalendarEventsUpdateWithWhereUniqueWithoutUserInput {
  where: Auth_UsersOnCalendarEventsWhereUniqueInput;
  data: Auth_UsersOnCalendarEventsUncheckedUpdateWithoutUserInput;
}

export interface Auth_UsersOnCalendarEventsUpdateManyWithWhereWithoutUserInput {
  where: Auth_UsersOnCalendarEventsScalarWhereInput;
  data: Auth_UsersOnCalendarEventsUncheckedUpdateManyWithoutEventsInvitedToInput;
}

export interface Auth_UsersOnCalendarEventsScalarWhereInput {
  AND?: Auth_UsersOnCalendarEventsScalarWhereInput[];
  OR?: Auth_UsersOnCalendarEventsScalarWhereInput[];
  NOT?: Auth_UsersOnCalendarEventsScalarWhereInput[];
  userId?: IntFilter;
  calendarEventId?: IntFilter;
}

export interface Auth_UserUpsertWithWhereUniqueWithoutContactedByInput {
  where: Auth_UserWhereUniqueInput;
  update: Auth_UserUncheckedUpdateWithoutContactedByInput;
  create: Auth_UserUncheckedCreateWithoutContactedByInput;
}

export interface Auth_UserUpdateWithWhereUniqueWithoutContactedByInput {
  where: Auth_UserWhereUniqueInput;
  data: Auth_UserUncheckedUpdateWithoutContactedByInput;
}

export interface Auth_UserUpdateManyWithWhereWithoutContactedByInput {
  where: Auth_UserScalarWhereInput;
  data: Auth_UserUncheckedUpdateManyWithoutContactedInput;
}

export interface Auth_UserScalarWhereInput {
  AND?: Auth_UserScalarWhereInput[];
  OR?: Auth_UserScalarWhereInput[];
  NOT?: Auth_UserScalarWhereInput[];
  id?: IntFilter;
  createdAt?: DateTimeFilter;
  username?: StringNullableFilter | null;
  password?: StringNullableFilter | null;
  email?: StringFilter;
  roles?: StringNullableListFilter;
  googleId?: StringNullableFilter | null;
  googleProfile?: JsonNullableFilter;
  lastName?: StringNullableFilter | null;
  firstName?: StringNullableFilter | null;
}

export interface Auth_UserUpsertWithWhereUniqueWithoutContactedInput {
  where: Auth_UserWhereUniqueInput;
  update: Auth_UserUncheckedUpdateWithoutContactedInput;
  create: Auth_UserUncheckedCreateWithoutContactedInput;
}

export interface Auth_UserUpdateWithWhereUniqueWithoutContactedInput {
  where: Auth_UserWhereUniqueInput;
  data: Auth_UserUncheckedUpdateWithoutContactedInput;
}

export interface Auth_UserUpdateManyWithWhereWithoutContactedInput {
  where: Auth_UserScalarWhereInput;
  data: Auth_UserUncheckedUpdateManyWithoutContactedByInput;
}

export interface Auth_CalendarUpsertWithWhereUniqueWithoutCalendarOwnerInput {
  where: Auth_CalendarWhereUniqueInput;
  update: Auth_CalendarUncheckedUpdateWithoutCalendarOwnerInput;
  create: Auth_CalendarUncheckedCreateWithoutCalendarOwnerInput;
}

export interface Auth_CalendarUpdateWithWhereUniqueWithoutCalendarOwnerInput {
  where: Auth_CalendarWhereUniqueInput;
  data: Auth_CalendarUncheckedUpdateWithoutCalendarOwnerInput;
}

export interface Auth_CalendarUpdateManyWithWhereWithoutCalendarOwnerInput {
  where: Auth_CalendarScalarWhereInput;
  data: Auth_CalendarUncheckedUpdateManyWithoutCalendarsCreatedInput;
}

export interface Auth_CalendarScalarWhereInput {
  AND?: Auth_CalendarScalarWhereInput[];
  OR?: Auth_CalendarScalarWhereInput[];
  NOT?: Auth_CalendarScalarWhereInput[];
  calendarType?: StringFilter;
  calendarOwnerId?: IntFilter;
}

export interface Auth_UserCreateWithoutProfileInput {
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: Auth_UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  teams?: Auth_UsersOnTeamsCreateNestedManyWithoutUserInput;
  calendars?: Auth_CalendarsOnUsersCreateNestedManyWithoutCalendarAttributedToInput;
  eventsInvitedTo?: Auth_UsersOnCalendarEventsCreateNestedManyWithoutUserInput;
  contacted?: Auth_UserCreateNestedManyWithoutContactedByInput;
  contactedBy?: Auth_UserCreateNestedManyWithoutContactedInput;
  calendarsCreated?: Auth_CalendarCreateNestedManyWithoutCalendarOwnerInput;
}

export interface Auth_UserUncheckedCreateWithoutProfileInput {
  id?: number;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: Auth_UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  teams?: Auth_UsersOnTeamsUncheckedCreateNestedManyWithoutUserInput;
  calendars?: Auth_CalendarsOnUsersUncheckedCreateNestedManyWithoutCalendarAttributedToInput;
  eventsInvitedTo?: Auth_UsersOnCalendarEventsUncheckedCreateNestedManyWithoutUserInput;
  contacted?: Auth_UserUncheckedCreateNestedManyWithoutContactedByInput;
  contactedBy?: Auth_UserUncheckedCreateNestedManyWithoutContactedInput;
  calendarsCreated?: Auth_CalendarUncheckedCreateNestedManyWithoutCalendarOwnerInput;
}

export interface Auth_UserCreateOrConnectWithoutProfileInput {
  where: Auth_UserWhereUniqueInput;
  create: Auth_UserUncheckedCreateWithoutProfileInput;
}

export interface Auth_UserUpsertWithoutProfileInput {
  update: Auth_UserUncheckedUpdateWithoutProfileInput;
  create: Auth_UserUncheckedCreateWithoutProfileInput;
  where?: Auth_UserWhereInput;
}

export interface Auth_UserUpdateToOneWithWhereWithoutProfileInput {
  where?: Auth_UserWhereInput;
  data: Auth_UserUncheckedUpdateWithoutProfileInput;
}

export interface Auth_UserUpdateWithoutProfileInput {
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: Auth_UserUpdaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  teams?: Auth_UsersOnTeamsUpdateManyWithoutUserNestedInput;
  calendars?: Auth_CalendarsOnUsersUpdateManyWithoutCalendarAttributedToNestedInput;
  eventsInvitedTo?: Auth_UsersOnCalendarEventsUpdateManyWithoutUserNestedInput;
  contacted?: Auth_UserUpdateManyWithoutContactedByNestedInput;
  contactedBy?: Auth_UserUpdateManyWithoutContactedNestedInput;
  calendarsCreated?: Auth_CalendarUpdateManyWithoutCalendarOwnerNestedInput;
}

export interface Auth_UserUncheckedUpdateWithoutProfileInput {
  id?: number;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: Auth_UserUpdaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  teams?: Auth_UsersOnTeamsUncheckedUpdateManyWithoutUserNestedInput;
  calendars?: Auth_CalendarsOnUsersUncheckedUpdateManyWithoutCalendarAttributedToNestedInput;
  eventsInvitedTo?: Auth_UsersOnCalendarEventsUncheckedUpdateManyWithoutUserNestedInput;
  contacted?: Auth_UserUncheckedUpdateManyWithoutContactedByNestedInput;
  contactedBy?: Auth_UserUncheckedUpdateManyWithoutContactedNestedInput;
  calendarsCreated?: Auth_CalendarUncheckedUpdateManyWithoutCalendarOwnerNestedInput;
}

export interface Auth_TeamCreateWithoutUsersInput {
  teamName: string;
  teamType?: string | null;
  teamIcon?: string | null;
}

export interface Auth_TeamUncheckedCreateWithoutUsersInput {
  teamName: string;
  teamType?: string | null;
  teamIcon?: string | null;
}

export interface Auth_TeamCreateOrConnectWithoutUsersInput {
  where: Auth_TeamWhereUniqueInput;
  create: Auth_TeamUncheckedCreateWithoutUsersInput;
}

export interface Auth_UserCreateWithoutTeamsInput {
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: Auth_UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Auth_ProfileCreateNestedOneWithoutUserInput;
  calendars?: Auth_CalendarsOnUsersCreateNestedManyWithoutCalendarAttributedToInput;
  eventsInvitedTo?: Auth_UsersOnCalendarEventsCreateNestedManyWithoutUserInput;
  contacted?: Auth_UserCreateNestedManyWithoutContactedByInput;
  contactedBy?: Auth_UserCreateNestedManyWithoutContactedInput;
  calendarsCreated?: Auth_CalendarCreateNestedManyWithoutCalendarOwnerInput;
}

export interface Auth_UserUncheckedCreateWithoutTeamsInput {
  id?: number;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: Auth_UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Auth_ProfileUncheckedCreateNestedOneWithoutUserInput;
  calendars?: Auth_CalendarsOnUsersUncheckedCreateNestedManyWithoutCalendarAttributedToInput;
  eventsInvitedTo?: Auth_UsersOnCalendarEventsUncheckedCreateNestedManyWithoutUserInput;
  contacted?: Auth_UserUncheckedCreateNestedManyWithoutContactedByInput;
  contactedBy?: Auth_UserUncheckedCreateNestedManyWithoutContactedInput;
  calendarsCreated?: Auth_CalendarUncheckedCreateNestedManyWithoutCalendarOwnerInput;
}

export interface Auth_UserCreateOrConnectWithoutTeamsInput {
  where: Auth_UserWhereUniqueInput;
  create: Auth_UserUncheckedCreateWithoutTeamsInput;
}

export interface Auth_TeamUpsertWithoutUsersInput {
  update: Auth_TeamUncheckedUpdateWithoutUsersInput;
  create: Auth_TeamUncheckedCreateWithoutUsersInput;
  where?: Auth_TeamWhereInput;
}

export interface Auth_TeamUpdateToOneWithWhereWithoutUsersInput {
  where?: Auth_TeamWhereInput;
  data: Auth_TeamUncheckedUpdateWithoutUsersInput;
}

export interface Auth_TeamUpdateWithoutUsersInput {
  teamName?: string;
  teamType?: string | null;
  teamIcon?: string | null;
}

export interface Auth_TeamUncheckedUpdateWithoutUsersInput {
  teamName?: string;
  teamType?: string | null;
  teamIcon?: string | null;
}

export interface Auth_UserUpsertWithoutTeamsInput {
  update: Auth_UserUncheckedUpdateWithoutTeamsInput;
  create: Auth_UserUncheckedCreateWithoutTeamsInput;
  where?: Auth_UserWhereInput;
}

export interface Auth_UserUpdateToOneWithWhereWithoutTeamsInput {
  where?: Auth_UserWhereInput;
  data: Auth_UserUncheckedUpdateWithoutTeamsInput;
}

export interface Auth_UserUpdateWithoutTeamsInput {
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: Auth_UserUpdaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Auth_ProfileUpdateOneWithoutUserNestedInput;
  calendars?: Auth_CalendarsOnUsersUpdateManyWithoutCalendarAttributedToNestedInput;
  eventsInvitedTo?: Auth_UsersOnCalendarEventsUpdateManyWithoutUserNestedInput;
  contacted?: Auth_UserUpdateManyWithoutContactedByNestedInput;
  contactedBy?: Auth_UserUpdateManyWithoutContactedNestedInput;
  calendarsCreated?: Auth_CalendarUpdateManyWithoutCalendarOwnerNestedInput;
}

export interface Auth_UserUncheckedUpdateWithoutTeamsInput {
  id?: number;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: Auth_UserUpdaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Auth_ProfileUncheckedUpdateOneWithoutUserNestedInput;
  calendars?: Auth_CalendarsOnUsersUncheckedUpdateManyWithoutCalendarAttributedToNestedInput;
  eventsInvitedTo?: Auth_UsersOnCalendarEventsUncheckedUpdateManyWithoutUserNestedInput;
  contacted?: Auth_UserUncheckedUpdateManyWithoutContactedByNestedInput;
  contactedBy?: Auth_UserUncheckedUpdateManyWithoutContactedNestedInput;
  calendarsCreated?: Auth_CalendarUncheckedUpdateManyWithoutCalendarOwnerNestedInput;
}

export interface Auth_UsersOnTeamsCreateWithoutTeamInput {
  user: Auth_UserCreateNestedOneWithoutTeamsInput;
  assignedAt?: Date;
}

export interface Auth_UsersOnTeamsUncheckedCreateWithoutTeamInput {
  userId: number;
  assignedAt?: Date;
}

export interface Auth_UsersOnTeamsCreateOrConnectWithoutTeamInput {
  where: Auth_UsersOnTeamsWhereUniqueInput;
  create: Auth_UsersOnTeamsUncheckedCreateWithoutTeamInput;
}

export interface Auth_UsersOnTeamsCreateManyTeamInputEnvelope {
  data: Auth_UsersOnTeamsCreateManyTeamInput[];
  skipDuplicates?: boolean;
}

export interface Auth_UsersOnTeamsUpsertWithWhereUniqueWithoutTeamInput {
  where: Auth_UsersOnTeamsWhereUniqueInput;
  update: Auth_UsersOnTeamsUncheckedUpdateWithoutTeamInput;
  create: Auth_UsersOnTeamsUncheckedCreateWithoutTeamInput;
}

export interface Auth_UsersOnTeamsUpdateWithWhereUniqueWithoutTeamInput {
  where: Auth_UsersOnTeamsWhereUniqueInput;
  data: Auth_UsersOnTeamsUncheckedUpdateWithoutTeamInput;
}

export interface Auth_UsersOnTeamsUpdateManyWithWhereWithoutTeamInput {
  where: Auth_UsersOnTeamsScalarWhereInput;
  data: Auth_UsersOnTeamsUncheckedUpdateManyWithoutUsersInput;
}

export interface Auth_UserCreateWithoutEventsInvitedToInput {
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: Auth_UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Auth_ProfileCreateNestedOneWithoutUserInput;
  teams?: Auth_UsersOnTeamsCreateNestedManyWithoutUserInput;
  calendars?: Auth_CalendarsOnUsersCreateNestedManyWithoutCalendarAttributedToInput;
  contacted?: Auth_UserCreateNestedManyWithoutContactedByInput;
  contactedBy?: Auth_UserCreateNestedManyWithoutContactedInput;
  calendarsCreated?: Auth_CalendarCreateNestedManyWithoutCalendarOwnerInput;
}

export interface Auth_UserUncheckedCreateWithoutEventsInvitedToInput {
  id?: number;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: Auth_UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Auth_ProfileUncheckedCreateNestedOneWithoutUserInput;
  teams?: Auth_UsersOnTeamsUncheckedCreateNestedManyWithoutUserInput;
  calendars?: Auth_CalendarsOnUsersUncheckedCreateNestedManyWithoutCalendarAttributedToInput;
  contacted?: Auth_UserUncheckedCreateNestedManyWithoutContactedByInput;
  contactedBy?: Auth_UserUncheckedCreateNestedManyWithoutContactedInput;
  calendarsCreated?: Auth_CalendarUncheckedCreateNestedManyWithoutCalendarOwnerInput;
}

export interface Auth_UserCreateOrConnectWithoutEventsInvitedToInput {
  where: Auth_UserWhereUniqueInput;
  create: Auth_UserUncheckedCreateWithoutEventsInvitedToInput;
}

export interface Auth_CalendarEventCreateWithoutGuestsInput {
  url?: string | null;
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  calendar?: Auth_CalendarEventsOnCalendarsCreateNestedManyWithoutCalendarEventInput;
}

export interface Auth_CalendarEventUncheckedCreateWithoutGuestsInput {
  id?: number;
  url?: string | null;
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  calendar?: Auth_CalendarEventsOnCalendarsUncheckedCreateNestedManyWithoutCalendarEventInput;
}

export interface Auth_CalendarEventCreateOrConnectWithoutGuestsInput {
  where: Auth_CalendarEventWhereUniqueInput;
  create: Auth_CalendarEventUncheckedCreateWithoutGuestsInput;
}

export interface Auth_UserUpsertWithoutEventsInvitedToInput {
  update: Auth_UserUncheckedUpdateWithoutEventsInvitedToInput;
  create: Auth_UserUncheckedCreateWithoutEventsInvitedToInput;
  where?: Auth_UserWhereInput;
}

export interface Auth_UserUpdateToOneWithWhereWithoutEventsInvitedToInput {
  where?: Auth_UserWhereInput;
  data: Auth_UserUncheckedUpdateWithoutEventsInvitedToInput;
}

export interface Auth_UserUpdateWithoutEventsInvitedToInput {
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: Auth_UserUpdaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Auth_ProfileUpdateOneWithoutUserNestedInput;
  teams?: Auth_UsersOnTeamsUpdateManyWithoutUserNestedInput;
  calendars?: Auth_CalendarsOnUsersUpdateManyWithoutCalendarAttributedToNestedInput;
  contacted?: Auth_UserUpdateManyWithoutContactedByNestedInput;
  contactedBy?: Auth_UserUpdateManyWithoutContactedNestedInput;
  calendarsCreated?: Auth_CalendarUpdateManyWithoutCalendarOwnerNestedInput;
}

export interface Auth_UserUncheckedUpdateWithoutEventsInvitedToInput {
  id?: number;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: Auth_UserUpdaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Auth_ProfileUncheckedUpdateOneWithoutUserNestedInput;
  teams?: Auth_UsersOnTeamsUncheckedUpdateManyWithoutUserNestedInput;
  calendars?: Auth_CalendarsOnUsersUncheckedUpdateManyWithoutCalendarAttributedToNestedInput;
  contacted?: Auth_UserUncheckedUpdateManyWithoutContactedByNestedInput;
  contactedBy?: Auth_UserUncheckedUpdateManyWithoutContactedNestedInput;
  calendarsCreated?: Auth_CalendarUncheckedUpdateManyWithoutCalendarOwnerNestedInput;
}

export interface Auth_CalendarEventUpsertWithoutGuestsInput {
  update: Auth_CalendarEventUncheckedUpdateWithoutGuestsInput;
  create: Auth_CalendarEventUncheckedCreateWithoutGuestsInput;
  where?: Auth_CalendarEventWhereInput;
}

export interface Auth_CalendarEventUpdateToOneWithWhereWithoutGuestsInput {
  where?: Auth_CalendarEventWhereInput;
  data: Auth_CalendarEventUncheckedUpdateWithoutGuestsInput;
}

export interface Auth_CalendarEventUpdateWithoutGuestsInput {
  url?: string | null;
  title?: string;
  start?: Date;
  end?: Date;
  allDay?: boolean;
  calendar?: Auth_CalendarEventsOnCalendarsUpdateManyWithoutCalendarEventNestedInput;
}

export interface Auth_CalendarEventUncheckedUpdateWithoutGuestsInput {
  id?: number;
  url?: string | null;
  title?: string;
  start?: Date;
  end?: Date;
  allDay?: boolean;
  calendar?: Auth_CalendarEventsOnCalendarsUncheckedUpdateManyWithoutCalendarEventNestedInput;
}

export interface Auth_UsersOnCalendarEventsCreateWithoutCalendarEventInput {
  user: Auth_UserCreateNestedOneWithoutEventsInvitedToInput;
}

export interface Auth_UsersOnCalendarEventsUncheckedCreateWithoutCalendarEventInput {
  userId: number;
}

export interface Auth_UsersOnCalendarEventsCreateOrConnectWithoutCalendarEventInput {
  where: Auth_UsersOnCalendarEventsWhereUniqueInput;
  create: Auth_UsersOnCalendarEventsUncheckedCreateWithoutCalendarEventInput;
}

export interface Auth_UsersOnCalendarEventsCreateManyCalendarEventInputEnvelope {
  data: Auth_UsersOnCalendarEventsCreateManyCalendarEventInput[];
  skipDuplicates?: boolean;
}

export interface Auth_CalendarEventsOnCalendarsCreateWithoutCalendarEventInput {
  calendar: Auth_CalendarCreateNestedOneWithoutCalendarEventsInput;
}

export interface Auth_CalendarEventsOnCalendarsUncheckedCreateWithoutCalendarEventInput {
  calendarType: string;
  calendarOwnerId: number;
}

export interface Auth_CalendarEventsOnCalendarsCreateOrConnectWithoutCalendarEventInput {
  where: Auth_CalendarEventsOnCalendarsWhereUniqueInput;
  create: Auth_CalendarEventsOnCalendarsUncheckedCreateWithoutCalendarEventInput;
}

export interface Auth_CalendarEventsOnCalendarsCreateManyCalendarEventInputEnvelope {
  data: Auth_CalendarEventsOnCalendarsCreateManyCalendarEventInput[];
  skipDuplicates?: boolean;
}

export interface Auth_UsersOnCalendarEventsUpsertWithWhereUniqueWithoutCalendarEventInput {
  where: Auth_UsersOnCalendarEventsWhereUniqueInput;
  update: Auth_UsersOnCalendarEventsUncheckedUpdateWithoutCalendarEventInput;
  create: Auth_UsersOnCalendarEventsUncheckedCreateWithoutCalendarEventInput;
}

export interface Auth_UsersOnCalendarEventsUpdateWithWhereUniqueWithoutCalendarEventInput {
  where: Auth_UsersOnCalendarEventsWhereUniqueInput;
  data: Auth_UsersOnCalendarEventsUncheckedUpdateWithoutCalendarEventInput;
}

export interface Auth_UsersOnCalendarEventsUpdateManyWithWhereWithoutCalendarEventInput {
  where: Auth_UsersOnCalendarEventsScalarWhereInput;
  data: Auth_UsersOnCalendarEventsUncheckedUpdateManyWithoutGuestsInput;
}

export interface Auth_CalendarEventsOnCalendarsUpsertWithWhereUniqueWithoutCalendarEventInput {
  where: Auth_CalendarEventsOnCalendarsWhereUniqueInput;
  update: Auth_CalendarEventsOnCalendarsUncheckedUpdateWithoutCalendarEventInput;
  create: Auth_CalendarEventsOnCalendarsUncheckedCreateWithoutCalendarEventInput;
}

export interface Auth_CalendarEventsOnCalendarsUpdateWithWhereUniqueWithoutCalendarEventInput {
  where: Auth_CalendarEventsOnCalendarsWhereUniqueInput;
  data: Auth_CalendarEventsOnCalendarsUncheckedUpdateWithoutCalendarEventInput;
}

export interface Auth_CalendarEventsOnCalendarsUpdateManyWithWhereWithoutCalendarEventInput {
  where: Auth_CalendarEventsOnCalendarsScalarWhereInput;
  data: Auth_CalendarEventsOnCalendarsUncheckedUpdateManyWithoutCalendarInput;
}

export interface Auth_CalendarEventsOnCalendarsScalarWhereInput {
  AND?: Auth_CalendarEventsOnCalendarsScalarWhereInput[];
  OR?: Auth_CalendarEventsOnCalendarsScalarWhereInput[];
  NOT?: Auth_CalendarEventsOnCalendarsScalarWhereInput[];
  calendarType?: StringFilter;
  calendarOwnerId?: IntFilter;
  calendarEventId?: IntFilter;
}

export interface Auth_CalendarCreateWithoutCalendarEventsInput {
  calendarType: string;
  users?: Auth_CalendarsOnUsersCreateNestedManyWithoutCalendarInput;
  calendarOwner: Auth_UserCreateNestedOneWithoutCalendarsCreatedInput;
}

export interface Auth_CalendarUncheckedCreateWithoutCalendarEventsInput {
  calendarType: string;
  users?: Auth_CalendarsOnUsersUncheckedCreateNestedManyWithoutCalendarInput;
  calendarOwnerId: number;
}

export interface Auth_CalendarCreateOrConnectWithoutCalendarEventsInput {
  where: Auth_CalendarWhereUniqueInput;
  create: Auth_CalendarUncheckedCreateWithoutCalendarEventsInput;
}

export interface Auth_CalendarEventCreateWithoutCalendarInput {
  url?: string | null;
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  guests?: Auth_UsersOnCalendarEventsCreateNestedManyWithoutCalendarEventInput;
}

export interface Auth_CalendarEventUncheckedCreateWithoutCalendarInput {
  id?: number;
  url?: string | null;
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  guests?: Auth_UsersOnCalendarEventsUncheckedCreateNestedManyWithoutCalendarEventInput;
}

export interface Auth_CalendarEventCreateOrConnectWithoutCalendarInput {
  where: Auth_CalendarEventWhereUniqueInput;
  create: Auth_CalendarEventUncheckedCreateWithoutCalendarInput;
}

export interface Auth_CalendarUpsertWithoutCalendarEventsInput {
  update: Auth_CalendarUncheckedUpdateWithoutCalendarEventsInput;
  create: Auth_CalendarUncheckedCreateWithoutCalendarEventsInput;
  where?: Auth_CalendarWhereInput;
}

export interface Auth_CalendarUpdateToOneWithWhereWithoutCalendarEventsInput {
  where?: Auth_CalendarWhereInput;
  data: Auth_CalendarUncheckedUpdateWithoutCalendarEventsInput;
}

export interface Auth_CalendarUpdateWithoutCalendarEventsInput {
  calendarType?: string;
  users?: Auth_CalendarsOnUsersUpdateManyWithoutCalendarNestedInput;
  calendarOwner?: Auth_UserUpdateOneRequiredWithoutCalendarsCreatedNestedInput;
}

export interface Auth_CalendarUncheckedUpdateWithoutCalendarEventsInput {
  calendarType?: string;
  users?: Auth_CalendarsOnUsersUncheckedUpdateManyWithoutCalendarNestedInput;
  calendarOwnerId?: number;
}

export interface Auth_CalendarEventUpsertWithoutCalendarInput {
  update: Auth_CalendarEventUncheckedUpdateWithoutCalendarInput;
  create: Auth_CalendarEventUncheckedCreateWithoutCalendarInput;
  where?: Auth_CalendarEventWhereInput;
}

export interface Auth_CalendarEventUpdateToOneWithWhereWithoutCalendarInput {
  where?: Auth_CalendarEventWhereInput;
  data: Auth_CalendarEventUncheckedUpdateWithoutCalendarInput;
}

export interface Auth_CalendarEventUpdateWithoutCalendarInput {
  url?: string | null;
  title?: string;
  start?: Date;
  end?: Date;
  allDay?: boolean;
  guests?: Auth_UsersOnCalendarEventsUpdateManyWithoutCalendarEventNestedInput;
}

export interface Auth_CalendarEventUncheckedUpdateWithoutCalendarInput {
  id?: number;
  url?: string | null;
  title?: string;
  start?: Date;
  end?: Date;
  allDay?: boolean;
  guests?: Auth_UsersOnCalendarEventsUncheckedUpdateManyWithoutCalendarEventNestedInput;
}

export interface Auth_CalendarsOnUsersCreateWithoutCalendarInput {
  calendarAttributedTo: Auth_UserCreateNestedOneWithoutCalendarsInput;
}

export interface Auth_CalendarsOnUsersUncheckedCreateWithoutCalendarInput {
  calendarAttributedToId: number;
}

export interface Auth_CalendarsOnUsersCreateOrConnectWithoutCalendarInput {
  where: Auth_CalendarsOnUsersWhereUniqueInput;
  create: Auth_CalendarsOnUsersUncheckedCreateWithoutCalendarInput;
}

export interface Auth_CalendarsOnUsersCreateManyCalendarInputEnvelope {
  data: Auth_CalendarsOnUsersCreateManyCalendarInput[];
  skipDuplicates?: boolean;
}

export interface Auth_CalendarEventsOnCalendarsCreateWithoutCalendarInput {
  calendarEvent: Auth_CalendarEventCreateNestedOneWithoutCalendarInput;
}

export interface Auth_CalendarEventsOnCalendarsUncheckedCreateWithoutCalendarInput {
  calendarEventId: number;
}

export interface Auth_CalendarEventsOnCalendarsCreateOrConnectWithoutCalendarInput {
  where: Auth_CalendarEventsOnCalendarsWhereUniqueInput;
  create: Auth_CalendarEventsOnCalendarsUncheckedCreateWithoutCalendarInput;
}

export interface Auth_CalendarEventsOnCalendarsCreateManyCalendarInputEnvelope {
  data: Auth_CalendarEventsOnCalendarsCreateManyCalendarInput[];
  skipDuplicates?: boolean;
}

export interface Auth_UserCreateWithoutCalendarsCreatedInput {
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: Auth_UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Auth_ProfileCreateNestedOneWithoutUserInput;
  teams?: Auth_UsersOnTeamsCreateNestedManyWithoutUserInput;
  calendars?: Auth_CalendarsOnUsersCreateNestedManyWithoutCalendarAttributedToInput;
  eventsInvitedTo?: Auth_UsersOnCalendarEventsCreateNestedManyWithoutUserInput;
  contacted?: Auth_UserCreateNestedManyWithoutContactedByInput;
  contactedBy?: Auth_UserCreateNestedManyWithoutContactedInput;
}

export interface Auth_UserUncheckedCreateWithoutCalendarsCreatedInput {
  id?: number;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: Auth_UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Auth_ProfileUncheckedCreateNestedOneWithoutUserInput;
  teams?: Auth_UsersOnTeamsUncheckedCreateNestedManyWithoutUserInput;
  calendars?: Auth_CalendarsOnUsersUncheckedCreateNestedManyWithoutCalendarAttributedToInput;
  eventsInvitedTo?: Auth_UsersOnCalendarEventsUncheckedCreateNestedManyWithoutUserInput;
  contacted?: Auth_UserUncheckedCreateNestedManyWithoutContactedByInput;
  contactedBy?: Auth_UserUncheckedCreateNestedManyWithoutContactedInput;
}

export interface Auth_UserCreateOrConnectWithoutCalendarsCreatedInput {
  where: Auth_UserWhereUniqueInput;
  create: Auth_UserUncheckedCreateWithoutCalendarsCreatedInput;
}

export interface Auth_CalendarsOnUsersUpsertWithWhereUniqueWithoutCalendarInput {
  where: Auth_CalendarsOnUsersWhereUniqueInput;
  update: Auth_CalendarsOnUsersUncheckedUpdateWithoutCalendarInput;
  create: Auth_CalendarsOnUsersUncheckedCreateWithoutCalendarInput;
}

export interface Auth_CalendarsOnUsersUpdateWithWhereUniqueWithoutCalendarInput {
  where: Auth_CalendarsOnUsersWhereUniqueInput;
  data: Auth_CalendarsOnUsersUncheckedUpdateWithoutCalendarInput;
}

export interface Auth_CalendarsOnUsersUpdateManyWithWhereWithoutCalendarInput {
  where: Auth_CalendarsOnUsersScalarWhereInput;
  data: Auth_CalendarsOnUsersUncheckedUpdateManyWithoutUsersInput;
}

export interface Auth_CalendarEventsOnCalendarsUpsertWithWhereUniqueWithoutCalendarInput {
  where: Auth_CalendarEventsOnCalendarsWhereUniqueInput;
  update: Auth_CalendarEventsOnCalendarsUncheckedUpdateWithoutCalendarInput;
  create: Auth_CalendarEventsOnCalendarsUncheckedCreateWithoutCalendarInput;
}

export interface Auth_CalendarEventsOnCalendarsUpdateWithWhereUniqueWithoutCalendarInput {
  where: Auth_CalendarEventsOnCalendarsWhereUniqueInput;
  data: Auth_CalendarEventsOnCalendarsUncheckedUpdateWithoutCalendarInput;
}

export interface Auth_CalendarEventsOnCalendarsUpdateManyWithWhereWithoutCalendarInput {
  where: Auth_CalendarEventsOnCalendarsScalarWhereInput;
  data: Auth_CalendarEventsOnCalendarsUncheckedUpdateManyWithoutCalendarEventsInput;
}

export interface Auth_UserUpsertWithoutCalendarsCreatedInput {
  update: Auth_UserUncheckedUpdateWithoutCalendarsCreatedInput;
  create: Auth_UserUncheckedCreateWithoutCalendarsCreatedInput;
  where?: Auth_UserWhereInput;
}

export interface Auth_UserUpdateToOneWithWhereWithoutCalendarsCreatedInput {
  where?: Auth_UserWhereInput;
  data: Auth_UserUncheckedUpdateWithoutCalendarsCreatedInput;
}

export interface Auth_UserUpdateWithoutCalendarsCreatedInput {
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: Auth_UserUpdaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Auth_ProfileUpdateOneWithoutUserNestedInput;
  teams?: Auth_UsersOnTeamsUpdateManyWithoutUserNestedInput;
  calendars?: Auth_CalendarsOnUsersUpdateManyWithoutCalendarAttributedToNestedInput;
  eventsInvitedTo?: Auth_UsersOnCalendarEventsUpdateManyWithoutUserNestedInput;
  contacted?: Auth_UserUpdateManyWithoutContactedByNestedInput;
  contactedBy?: Auth_UserUpdateManyWithoutContactedNestedInput;
}

export interface Auth_UserUncheckedUpdateWithoutCalendarsCreatedInput {
  id?: number;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: Auth_UserUpdaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Auth_ProfileUncheckedUpdateOneWithoutUserNestedInput;
  teams?: Auth_UsersOnTeamsUncheckedUpdateManyWithoutUserNestedInput;
  calendars?: Auth_CalendarsOnUsersUncheckedUpdateManyWithoutCalendarAttributedToNestedInput;
  eventsInvitedTo?: Auth_UsersOnCalendarEventsUncheckedUpdateManyWithoutUserNestedInput;
  contacted?: Auth_UserUncheckedUpdateManyWithoutContactedByNestedInput;
  contactedBy?: Auth_UserUncheckedUpdateManyWithoutContactedNestedInput;
}

export interface Auth_UserCreateWithoutCalendarsInput {
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: Auth_UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Auth_ProfileCreateNestedOneWithoutUserInput;
  teams?: Auth_UsersOnTeamsCreateNestedManyWithoutUserInput;
  eventsInvitedTo?: Auth_UsersOnCalendarEventsCreateNestedManyWithoutUserInput;
  contacted?: Auth_UserCreateNestedManyWithoutContactedByInput;
  contactedBy?: Auth_UserCreateNestedManyWithoutContactedInput;
  calendarsCreated?: Auth_CalendarCreateNestedManyWithoutCalendarOwnerInput;
}

export interface Auth_UserUncheckedCreateWithoutCalendarsInput {
  id?: number;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: Auth_UserCreaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Auth_ProfileUncheckedCreateNestedOneWithoutUserInput;
  teams?: Auth_UsersOnTeamsUncheckedCreateNestedManyWithoutUserInput;
  eventsInvitedTo?: Auth_UsersOnCalendarEventsUncheckedCreateNestedManyWithoutUserInput;
  contacted?: Auth_UserUncheckedCreateNestedManyWithoutContactedByInput;
  contactedBy?: Auth_UserUncheckedCreateNestedManyWithoutContactedInput;
  calendarsCreated?: Auth_CalendarUncheckedCreateNestedManyWithoutCalendarOwnerInput;
}

export interface Auth_UserCreateOrConnectWithoutCalendarsInput {
  where: Auth_UserWhereUniqueInput;
  create: Auth_UserUncheckedCreateWithoutCalendarsInput;
}

export interface Auth_CalendarCreateWithoutUsersInput {
  calendarType: string;
  calendarEvents?: Auth_CalendarEventsOnCalendarsCreateNestedManyWithoutCalendarInput;
  calendarOwner: Auth_UserCreateNestedOneWithoutCalendarsCreatedInput;
}

export interface Auth_CalendarUncheckedCreateWithoutUsersInput {
  calendarType: string;
  calendarEvents?: Auth_CalendarEventsOnCalendarsUncheckedCreateNestedManyWithoutCalendarInput;
  calendarOwnerId: number;
}

export interface Auth_CalendarCreateOrConnectWithoutUsersInput {
  where: Auth_CalendarWhereUniqueInput;
  create: Auth_CalendarUncheckedCreateWithoutUsersInput;
}

export interface Auth_UserUpsertWithoutCalendarsInput {
  update: Auth_UserUncheckedUpdateWithoutCalendarsInput;
  create: Auth_UserUncheckedCreateWithoutCalendarsInput;
  where?: Auth_UserWhereInput;
}

export interface Auth_UserUpdateToOneWithWhereWithoutCalendarsInput {
  where?: Auth_UserWhereInput;
  data: Auth_UserUncheckedUpdateWithoutCalendarsInput;
}

export interface Auth_UserUpdateWithoutCalendarsInput {
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: Auth_UserUpdaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Auth_ProfileUpdateOneWithoutUserNestedInput;
  teams?: Auth_UsersOnTeamsUpdateManyWithoutUserNestedInput;
  eventsInvitedTo?: Auth_UsersOnCalendarEventsUpdateManyWithoutUserNestedInput;
  contacted?: Auth_UserUpdateManyWithoutContactedByNestedInput;
  contactedBy?: Auth_UserUpdateManyWithoutContactedNestedInput;
  calendarsCreated?: Auth_CalendarUpdateManyWithoutCalendarOwnerNestedInput;
}

export interface Auth_UserUncheckedUpdateWithoutCalendarsInput {
  id?: number;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: Auth_UserUpdaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Auth_ProfileUncheckedUpdateOneWithoutUserNestedInput;
  teams?: Auth_UsersOnTeamsUncheckedUpdateManyWithoutUserNestedInput;
  eventsInvitedTo?: Auth_UsersOnCalendarEventsUncheckedUpdateManyWithoutUserNestedInput;
  contacted?: Auth_UserUncheckedUpdateManyWithoutContactedByNestedInput;
  contactedBy?: Auth_UserUncheckedUpdateManyWithoutContactedNestedInput;
  calendarsCreated?: Auth_CalendarUncheckedUpdateManyWithoutCalendarOwnerNestedInput;
}

export interface Auth_CalendarUpsertWithoutUsersInput {
  update: Auth_CalendarUncheckedUpdateWithoutUsersInput;
  create: Auth_CalendarUncheckedCreateWithoutUsersInput;
  where?: Auth_CalendarWhereInput;
}

export interface Auth_CalendarUpdateToOneWithWhereWithoutUsersInput {
  where?: Auth_CalendarWhereInput;
  data: Auth_CalendarUncheckedUpdateWithoutUsersInput;
}

export interface Auth_CalendarUpdateWithoutUsersInput {
  calendarType?: string;
  calendarEvents?: Auth_CalendarEventsOnCalendarsUpdateManyWithoutCalendarNestedInput;
  calendarOwner?: Auth_UserUpdateOneRequiredWithoutCalendarsCreatedNestedInput;
}

export interface Auth_CalendarUncheckedUpdateWithoutUsersInput {
  calendarType?: string;
  calendarEvents?: Auth_CalendarEventsOnCalendarsUncheckedUpdateManyWithoutCalendarNestedInput;
  calendarOwnerId?: number;
}

export interface Auth_UsersOnTeamsCreateManyUserInput {
  teamName: string;
  assignedAt?: Date;
}

export interface Auth_CalendarsOnUsersCreateManyCalendarAttributedToInput {
  calendarType: string;
  calendarOwnerId: number;
}

export interface Auth_UsersOnCalendarEventsCreateManyUserInput {
  calendarEventId: number;
}

export interface Auth_CalendarCreateManyCalendarOwnerInput {
  calendarType: string;
}

export interface Auth_UsersOnTeamsUpdateWithoutUserInput {
  team?: Auth_TeamUpdateOneRequiredWithoutUsersNestedInput;
  assignedAt?: Date;
}

export interface Auth_UsersOnTeamsUncheckedUpdateWithoutUserInput {
  teamName?: string;
  assignedAt?: Date;
}

export interface Auth_UsersOnTeamsUncheckedUpdateManyWithoutTeamsInput {
  teamName?: string;
  assignedAt?: Date;
}

export interface Auth_CalendarsOnUsersUpdateWithoutCalendarAttributedToInput {
  calendar?: Auth_CalendarUpdateOneRequiredWithoutUsersNestedInput;
}

export interface Auth_CalendarsOnUsersUncheckedUpdateWithoutCalendarAttributedToInput {
  calendarType?: string;
  calendarOwnerId?: number;
}

export interface Auth_CalendarsOnUsersUncheckedUpdateManyWithoutCalendarsInput {
  calendarType?: string;
  calendarOwnerId?: number;
}

export interface Auth_UsersOnCalendarEventsUpdateWithoutUserInput {
  calendarEvent?: Auth_CalendarEventUpdateOneRequiredWithoutGuestsNestedInput;
}

export interface Auth_UsersOnCalendarEventsUncheckedUpdateWithoutUserInput {
  calendarEventId?: number;
}

export interface Auth_UsersOnCalendarEventsUncheckedUpdateManyWithoutEventsInvitedToInput {
  calendarEventId?: number;
}

export interface Auth_UserUpdateWithoutContactedByInput {
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: Auth_UserUpdaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Auth_ProfileUpdateOneWithoutUserNestedInput;
  teams?: Auth_UsersOnTeamsUpdateManyWithoutUserNestedInput;
  calendars?: Auth_CalendarsOnUsersUpdateManyWithoutCalendarAttributedToNestedInput;
  eventsInvitedTo?: Auth_UsersOnCalendarEventsUpdateManyWithoutUserNestedInput;
  contacted?: Auth_UserUpdateManyWithoutContactedByNestedInput;
  calendarsCreated?: Auth_CalendarUpdateManyWithoutCalendarOwnerNestedInput;
}

export interface Auth_UserUncheckedUpdateWithoutContactedByInput {
  id?: number;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: Auth_UserUpdaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Auth_ProfileUncheckedUpdateOneWithoutUserNestedInput;
  teams?: Auth_UsersOnTeamsUncheckedUpdateManyWithoutUserNestedInput;
  calendars?: Auth_CalendarsOnUsersUncheckedUpdateManyWithoutCalendarAttributedToNestedInput;
  eventsInvitedTo?: Auth_UsersOnCalendarEventsUncheckedUpdateManyWithoutUserNestedInput;
  contacted?: Auth_UserUncheckedUpdateManyWithoutContactedByNestedInput;
  calendarsCreated?: Auth_CalendarUncheckedUpdateManyWithoutCalendarOwnerNestedInput;
}

export interface Auth_UserUncheckedUpdateManyWithoutContactedInput {
  id?: number;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: Auth_UserUpdaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
}

export interface Auth_UserUpdateWithoutContactedInput {
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: Auth_UserUpdaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Auth_ProfileUpdateOneWithoutUserNestedInput;
  teams?: Auth_UsersOnTeamsUpdateManyWithoutUserNestedInput;
  calendars?: Auth_CalendarsOnUsersUpdateManyWithoutCalendarAttributedToNestedInput;
  eventsInvitedTo?: Auth_UsersOnCalendarEventsUpdateManyWithoutUserNestedInput;
  contactedBy?: Auth_UserUpdateManyWithoutContactedNestedInput;
  calendarsCreated?: Auth_CalendarUpdateManyWithoutCalendarOwnerNestedInput;
}

export interface Auth_UserUncheckedUpdateWithoutContactedInput {
  id?: number;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: Auth_UserUpdaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
  profile?: Auth_ProfileUncheckedUpdateOneWithoutUserNestedInput;
  teams?: Auth_UsersOnTeamsUncheckedUpdateManyWithoutUserNestedInput;
  calendars?: Auth_CalendarsOnUsersUncheckedUpdateManyWithoutCalendarAttributedToNestedInput;
  eventsInvitedTo?: Auth_UsersOnCalendarEventsUncheckedUpdateManyWithoutUserNestedInput;
  contactedBy?: Auth_UserUncheckedUpdateManyWithoutContactedNestedInput;
  calendarsCreated?: Auth_CalendarUncheckedUpdateManyWithoutCalendarOwnerNestedInput;
}

export interface Auth_UserUncheckedUpdateManyWithoutContactedByInput {
  id?: number;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: Auth_UserUpdaterolesInput;
  googleId?: string | null;
  googleProfile?: NullableJsonNullValueInput;
  lastName?: string | null;
  firstName?: string | null;
}

export interface Auth_CalendarUpdateWithoutCalendarOwnerInput {
  calendarType?: string;
  users?: Auth_CalendarsOnUsersUpdateManyWithoutCalendarNestedInput;
  calendarEvents?: Auth_CalendarEventsOnCalendarsUpdateManyWithoutCalendarNestedInput;
}

export interface Auth_CalendarUncheckedUpdateWithoutCalendarOwnerInput {
  calendarType?: string;
  users?: Auth_CalendarsOnUsersUncheckedUpdateManyWithoutCalendarNestedInput;
  calendarEvents?: Auth_CalendarEventsOnCalendarsUncheckedUpdateManyWithoutCalendarNestedInput;
}

export interface Auth_CalendarUncheckedUpdateManyWithoutCalendarsCreatedInput {
  calendarType?: string;
}

export interface Auth_UsersOnTeamsCreateManyTeamInput {
  userId: number;
  assignedAt?: Date;
}

export interface Auth_UsersOnTeamsUpdateWithoutTeamInput {
  user?: Auth_UserUpdateOneRequiredWithoutTeamsNestedInput;
  assignedAt?: Date;
}

export interface Auth_UsersOnTeamsUncheckedUpdateWithoutTeamInput {
  userId?: number;
  assignedAt?: Date;
}

export interface Auth_UsersOnTeamsUncheckedUpdateManyWithoutUsersInput {
  userId?: number;
  assignedAt?: Date;
}

export interface Auth_UsersOnCalendarEventsCreateManyCalendarEventInput {
  userId: number;
}

export interface Auth_CalendarEventsOnCalendarsCreateManyCalendarEventInput {
  calendarType: string;
  calendarOwnerId: number;
}

export interface Auth_UsersOnCalendarEventsUpdateWithoutCalendarEventInput {
  user?: Auth_UserUpdateOneRequiredWithoutEventsInvitedToNestedInput;
}

export interface Auth_UsersOnCalendarEventsUncheckedUpdateWithoutCalendarEventInput {
  userId?: number;
}

export interface Auth_UsersOnCalendarEventsUncheckedUpdateManyWithoutGuestsInput {
  userId?: number;
}

export interface Auth_CalendarEventsOnCalendarsUpdateWithoutCalendarEventInput {
  calendar?: Auth_CalendarUpdateOneRequiredWithoutCalendarEventsNestedInput;
}

export interface Auth_CalendarEventsOnCalendarsUncheckedUpdateWithoutCalendarEventInput {
  calendarType?: string;
  calendarOwnerId?: number;
}

export interface Auth_CalendarEventsOnCalendarsUncheckedUpdateManyWithoutCalendarInput {
  calendarType?: string;
  calendarOwnerId?: number;
}

export interface Auth_CalendarsOnUsersCreateManyCalendarInput {
  calendarAttributedToId: number;
}

export interface Auth_CalendarEventsOnCalendarsCreateManyCalendarInput {
  calendarEventId: number;
}

export interface Auth_CalendarsOnUsersUpdateWithoutCalendarInput {
  calendarAttributedTo?: Auth_UserUpdateOneRequiredWithoutCalendarsNestedInput;
}

export interface Auth_CalendarsOnUsersUncheckedUpdateWithoutCalendarInput {
  calendarAttributedToId?: number;
}

export interface Auth_CalendarsOnUsersUncheckedUpdateManyWithoutUsersInput {
  calendarAttributedToId?: number;
}

export interface Auth_CalendarEventsOnCalendarsUpdateWithoutCalendarInput {
  calendarEvent?: Auth_CalendarEventUpdateOneRequiredWithoutCalendarNestedInput;
}

export interface Auth_CalendarEventsOnCalendarsUncheckedUpdateWithoutCalendarInput {
  calendarEventId?: number;
}

export interface Auth_CalendarEventsOnCalendarsUncheckedUpdateManyWithoutCalendarEventsInput {
  calendarEventId?: number;
}

export enum CalendarEventScalarFieldEnum {
  id = 'id',
  url = 'url',
  title = 'title',
  start = 'start',
  end = 'end',
  allDay = 'allDay',
}
export enum CalendarEventsOnCalendarsScalarFieldEnum {
  calendarType = 'calendarType',
  calendarOwnerId = 'calendarOwnerId',
  calendarEventId = 'calendarEventId',
}
export enum CalendarScalarFieldEnum {
  calendarType = 'calendarType',
  calendarOwnerId = 'calendarOwnerId',
}
export enum CalendarsOnUsersScalarFieldEnum {
  calendarAttributedToId = 'calendarAttributedToId',
  calendarType = 'calendarType',
  calendarOwnerId = 'calendarOwnerId',
}
export enum JsonNullValueFilter {
  DbNull = 'DbNull',
  JsonNull = 'JsonNull',
  AnyNull = 'AnyNull',
}
export enum NullableJsonNullValueInput {
  DbNull = 'DbNull',
  JsonNull = 'JsonNull',
}
export enum ProfileScalarFieldEnum {
  userId = 'userId',
  location = 'location',
  joiningDate = 'joiningDate',
  businessPhone = 'businessPhone',
  mobilePhone = 'mobilePhone',
  kakaoTalkId = 'kakaoTalkId',
  designation = 'designation',
  profileImg = 'profileImg',
  designationIcon = 'designationIcon',
  coverImg = 'coverImg',
}
export enum QueryMode {
  default = 'default',
  insensitive = 'insensitive',
}
export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}
export enum TeamScalarFieldEnum {
  teamName = 'teamName',
  teamType = 'teamType',
  teamIcon = 'teamIcon',
}
export enum TransactionIsolationLevel {
  ReadUncommitted = 'ReadUncommitted',
  ReadCommitted = 'ReadCommitted',
  RepeatableRead = 'RepeatableRead',
  Serializable = 'Serializable',
}
export enum UserScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  username = 'username',
  password = 'password',
  email = 'email',
  roles = 'roles',
  googleId = 'googleId',
  googleProfile = 'googleProfile',
  lastName = 'lastName',
  firstName = 'firstName',
}
export enum UsersOnCalendarEventsScalarFieldEnum {
  userId = 'userId',
  calendarEventId = 'calendarEventId',
}
export enum UsersOnTeamsScalarFieldEnum {
  teamName = 'teamName',
  userId = 'userId',
  assignedAt = 'assignedAt',
}

export interface Auth_TransactionalMutationInput {
  Auth_CreateOneUser: Auth_CreateOneUserArgs;
  Auth_UpsertOneUser: Auth_UpsertOneUserArgs;
  Auth_CreateManyUser: Auth_CreateManyUserArgs;
  Auth_DeleteOneUser: Auth_DeleteOneUserArgs;
  Auth_UpdateOneUser: Auth_UpdateOneUserArgs;
  Auth_DeleteManyUser: Auth_DeleteManyUserArgs;
  Auth_CreateOneProfile: Auth_CreateOneProfileArgs;
  Auth_UpsertOneProfile: Auth_UpsertOneProfileArgs;
  Auth_CreateManyProfile: Auth_CreateManyProfileArgs;
  Auth_DeleteOneProfile: Auth_DeleteOneProfileArgs;
  Auth_UpdateOneProfile: Auth_UpdateOneProfileArgs;
  Auth_DeleteManyProfile: Auth_DeleteManyProfileArgs;
  Auth_CreateOneUsersOnTeams: Auth_CreateOneUsersOnTeamsArgs;
  Auth_UpsertOneUsersOnTeams: Auth_UpsertOneUsersOnTeamsArgs;
  Auth_CreateManyUsersOnTeams: Auth_CreateManyUsersOnTeamsArgs;
  Auth_DeleteOneUsersOnTeams: Auth_DeleteOneUsersOnTeamsArgs;
  Auth_UpdateOneUsersOnTeams: Auth_UpdateOneUsersOnTeamsArgs;
  Auth_DeleteManyUsersOnTeams: Auth_DeleteManyUsersOnTeamsArgs;
  Auth_CreateOneTeam: Auth_CreateOneTeamArgs;
  Auth_UpsertOneTeam: Auth_UpsertOneTeamArgs;
  Auth_CreateManyTeam: Auth_CreateManyTeamArgs;
  Auth_DeleteOneTeam: Auth_DeleteOneTeamArgs;
  Auth_UpdateOneTeam: Auth_UpdateOneTeamArgs;
  Auth_DeleteManyTeam: Auth_DeleteManyTeamArgs;
  Auth_CreateOneUsersOnCalendarEvents: Auth_CreateOneUsersOnCalendarEventsArgs;
  Auth_UpsertOneUsersOnCalendarEvents: Auth_UpsertOneUsersOnCalendarEventsArgs;
  Auth_CreateManyUsersOnCalendarEvents: Auth_CreateManyUsersOnCalendarEventsArgs;
  Auth_DeleteOneUsersOnCalendarEvents: Auth_DeleteOneUsersOnCalendarEventsArgs;
  Auth_UpdateOneUsersOnCalendarEvents: Auth_UpdateOneUsersOnCalendarEventsArgs;
  Auth_DeleteManyUsersOnCalendarEvents: Auth_DeleteManyUsersOnCalendarEventsArgs;
  Auth_CreateOneCalendarEvent: Auth_CreateOneCalendarEventArgs;
  Auth_UpsertOneCalendarEvent: Auth_UpsertOneCalendarEventArgs;
  Auth_CreateManyCalendarEvent: Auth_CreateManyCalendarEventArgs;
  Auth_DeleteOneCalendarEvent: Auth_DeleteOneCalendarEventArgs;
  Auth_UpdateOneCalendarEvent: Auth_UpdateOneCalendarEventArgs;
  Auth_DeleteManyCalendarEvent: Auth_DeleteManyCalendarEventArgs;
  Auth_CreateOneCalendarEventsOnCalendars: Auth_CreateOneCalendarEventsOnCalendarsArgs;
  Auth_UpsertOneCalendarEventsOnCalendars: Auth_UpsertOneCalendarEventsOnCalendarsArgs;
  Auth_CreateManyCalendarEventsOnCalendars: Auth_CreateManyCalendarEventsOnCalendarsArgs;
  Auth_DeleteOneCalendarEventsOnCalendars: Auth_DeleteOneCalendarEventsOnCalendarsArgs;
  Auth_UpdateOneCalendarEventsOnCalendars: Auth_UpdateOneCalendarEventsOnCalendarsArgs;
  Auth_DeleteManyCalendarEventsOnCalendars: Auth_DeleteManyCalendarEventsOnCalendarsArgs;
  Auth_CreateOneCalendar: Auth_CreateOneCalendarArgs;
  Auth_UpsertOneCalendar: Auth_UpsertOneCalendarArgs;
  Auth_CreateManyCalendar: Auth_CreateManyCalendarArgs;
  Auth_DeleteOneCalendar: Auth_DeleteOneCalendarArgs;
  Auth_UpdateOneCalendar: Auth_UpdateOneCalendarArgs;
  Auth_DeleteManyCalendar: Auth_DeleteManyCalendarArgs;
  Auth_CreateOneCalendarsOnUsers: Auth_CreateOneCalendarsOnUsersArgs;
  Auth_UpsertOneCalendarsOnUsers: Auth_UpsertOneCalendarsOnUsersArgs;
  Auth_CreateManyCalendarsOnUsers: Auth_CreateManyCalendarsOnUsersArgs;
  Auth_DeleteOneCalendarsOnUsers: Auth_DeleteOneCalendarsOnUsersArgs;
  Auth_UpdateOneCalendarsOnUsers: Auth_UpdateOneCalendarsOnUsersArgs;
  Auth_DeleteManyCalendarsOnUsers: Auth_DeleteManyCalendarsOnUsersArgs;
}

export interface Auth_TransactionalBatchMutationArgs {
  mutations: Auth_TransactionalMutationInput[];
}

export interface TransactionSucceeded {
  transactionSucceeded: boolean;
}
