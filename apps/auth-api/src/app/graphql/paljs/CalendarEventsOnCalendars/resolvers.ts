import { GraphQLError } from 'graphql/error';

import { Resolvers } from '../../resolversTypes';

const resolvers: Resolvers = {
  Query: {
    Auth_findUniqueCalendarEventsOnCalendars: (_parent, args, { prisma }) => {
      return prisma.calendarEventsOnCalendars.findUnique(args);
    },
    Auth_findUniqueCalendarEventsOnCalendarsOrThrow: (_parent, args, { prisma }) => {
      return prisma.calendarEventsOnCalendars.findUniqueOrThrow(args);
    },
    Auth_findFirstCalendarEventsOnCalendars: (_parent, args, { prisma }) => {
      return prisma.calendarEventsOnCalendars.findFirst(args);
    },
    Auth_findFirstCalendarEventsOnCalendarsOrThrow: (_parent, args, { prisma }) => {
      return prisma.calendarEventsOnCalendars.findFirstOrThrow(args);
    },
    Auth_findManyCalendarEventsOnCalendars: (_parent, args, { prisma }) => {
      return prisma.calendarEventsOnCalendars.findMany(args);
    },
    Auth_findManyCalendarEventsOnCalendarsCount: (_parent, args, { prisma }) => {
      return prisma.calendarEventsOnCalendars.count(args);
    },
    Auth_aggregateCalendarEventsOnCalendars: (_parent, args, { prisma }) => {
      return prisma.calendarEventsOnCalendars.aggregate(args);
    },
    Auth_groupByCalendarEventsOnCalendars: async (_parent, args, { prisma }) => {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        let result = await prisma.calendarEventsOnCalendars.groupBy(args);
        return result;
      } catch (e) {
        if (e.toString().includes('Argument by is missing')) {
          throw new GraphQLError(`Argument 'by' is missing`, {
            extensions: {
              code: 'BAD_USER_INPUT',
            },
          });
        }
      }
    },
  },
  Mutation: {
    Auth_createOneCalendarEventsOnCalendars: (_parent, args, { prisma }) => {
      return prisma.calendarEventsOnCalendars.create(args);
    },
    Auth_updateOneCalendarEventsOnCalendars: (_parent, args, { prisma }) => {
      return prisma.calendarEventsOnCalendars.update(args);
    },
    Auth_deleteOneCalendarEventsOnCalendars: async (_parent, args, { prisma }) => {
      return prisma.calendarEventsOnCalendars.delete(args);
    },
    Auth_upsertOneCalendarEventsOnCalendars: async (_parent, args, { prisma }) => {
      return prisma.calendarEventsOnCalendars.upsert(args);
    },
    Auth_deleteManyCalendarEventsOnCalendars: async (_parent, args, { prisma }) => {
      return prisma.calendarEventsOnCalendars.deleteMany(args);
    },
    //updateMany for this model cannot exist as this model contains only unique fields or relations.
  },
  CalendarEventsOnCalendars: {
    __resolveReference(reference, { prisma }) {
      const [field, value] = Object.entries(reference).find(e => e[0] !== '__typename');
      return prisma.calendareventsoncalendars.findUnique({
        where: { [field]: value },
      });
    },
  },
};
export default resolvers;
