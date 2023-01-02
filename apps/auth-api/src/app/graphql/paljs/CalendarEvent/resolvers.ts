import { GraphQLError } from 'graphql/error';

import { Resolvers } from '../../resolversTypes';

const resolvers: Resolvers = {
  Query: {
    Auth_findUniqueCalendarEvent: (_parent, args, { prisma }) => {
      return prisma.calendarEvent.findUnique(args);
    },
    Auth_findUniqueCalendarEventOrThrow: (_parent, args, { prisma }) => {
      return prisma.calendarEvent.findUniqueOrThrow(args);
    },
    Auth_findFirstCalendarEvent: (_parent, args, { prisma }) => {
      return prisma.calendarEvent.findFirst(args);
    },
    Auth_findFirstCalendarEventOrThrow: (_parent, args, { prisma }) => {
      return prisma.calendarEvent.findFirstOrThrow(args);
    },
    Auth_findManyCalendarEvent: (_parent, args, { prisma }) => {
      return prisma.calendarEvent.findMany(args);
    },
    Auth_findManyCalendarEventCount: (_parent, args, { prisma }) => {
      return prisma.calendarEvent.count(args);
    },
    Auth_aggregateCalendarEvent: (_parent, args, { prisma }) => {
      return prisma.calendarEvent.aggregate(args);
    },
    Auth_groupByCalendarEvent: async (_parent, args, { prisma }) => {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        let result = await prisma.calendarEvent.groupBy(args);
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
    Auth_createOneCalendarEvent: (_parent, args, { prisma }) => {
      return prisma.calendarEvent.create(args);
    },
    Auth_updateOneCalendarEvent: (_parent, args, { prisma }) => {
      return prisma.calendarEvent.update(args);
    },
    Auth_deleteOneCalendarEvent: async (_parent, args, { prisma }) => {
      return prisma.calendarEvent.delete(args);
    },
    Auth_upsertOneCalendarEvent: async (_parent, args, { prisma }) => {
      return prisma.calendarEvent.upsert(args);
    },
    Auth_deleteManyCalendarEvent: async (_parent, args, { prisma }) => {
      return prisma.calendarEvent.deleteMany(args);
    },
    Auth_updateManyCalendarEvent: (_parent, args, { prisma }) => {
      return prisma.calendarEvent.updateMany(args);
    },
  },
  CalendarEvent: {
    __resolveReference(reference, { prisma }) {
      const [field, value] = Object.entries(reference).find(e => e[0] !== '__typename');
      return prisma.calendarevent.findUnique({ where: { [field]: value } });
    },
  },
};
export default resolvers;
