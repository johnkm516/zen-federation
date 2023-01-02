import { GraphQLError } from 'graphql/error';

import { Resolvers } from '../../resolversTypes';

const resolvers: Resolvers = {
  Query: {
    Auth_findUniqueCalendar: (_parent, args, { prisma }) => {
      return prisma.calendar.findUnique(args);
    },
    Auth_findUniqueCalendarOrThrow: (_parent, args, { prisma }) => {
      return prisma.calendar.findUniqueOrThrow(args);
    },
    Auth_findFirstCalendar: (_parent, args, { prisma }) => {
      return prisma.calendar.findFirst(args);
    },
    Auth_findFirstCalendarOrThrow: (_parent, args, { prisma }) => {
      return prisma.calendar.findFirstOrThrow(args);
    },
    Auth_findManyCalendar: (_parent, args, { prisma }) => {
      return prisma.calendar.findMany(args);
    },
    Auth_findManyCalendarCount: (_parent, args, { prisma }) => {
      return prisma.calendar.count(args);
    },
    Auth_aggregateCalendar: (_parent, args, { prisma }) => {
      return prisma.calendar.aggregate(args);
    },
    Auth_groupByCalendar: async (_parent, args, { prisma }) => {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        let result = await prisma.calendar.groupBy(args);
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
    Auth_createOneCalendar: (_parent, args, { prisma }) => {
      return prisma.calendar.create(args);
    },
    Auth_updateOneCalendar: (_parent, args, { prisma }) => {
      return prisma.calendar.update(args);
    },
    Auth_deleteOneCalendar: async (_parent, args, { prisma }) => {
      return prisma.calendar.delete(args);
    },
    Auth_upsertOneCalendar: async (_parent, args, { prisma }) => {
      return prisma.calendar.upsert(args);
    },
    Auth_deleteManyCalendar: async (_parent, args, { prisma }) => {
      return prisma.calendar.deleteMany(args);
    },
    Auth_updateManyCalendar: (_parent, args, { prisma }) => {
      return prisma.calendar.updateMany(args);
    },
  },
  Calendar: {
    __resolveReference(reference, { prisma }) {
      const [field, value] = Object.entries(reference).find(e => e[0] !== '__typename');
      return prisma.calendar.findUnique({ where: { [field]: value } });
    },
  },
};
export default resolvers;
