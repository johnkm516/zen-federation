import { GraphQLError } from 'graphql/error';

import { Resolvers } from '../../resolversTypes';

const resolvers: Resolvers = {
  Query: {
    Auth_findUniqueUsersOnCalendarEvents: (_parent, args, { prisma }) => {
      return prisma.usersOnCalendarEvents.findUnique(args);
    },
    Auth_findUniqueUsersOnCalendarEventsOrThrow: (_parent, args, { prisma }) => {
      return prisma.usersOnCalendarEvents.findUniqueOrThrow(args);
    },
    Auth_findFirstUsersOnCalendarEvents: (_parent, args, { prisma }) => {
      return prisma.usersOnCalendarEvents.findFirst(args);
    },
    Auth_findFirstUsersOnCalendarEventsOrThrow: (_parent, args, { prisma }) => {
      return prisma.usersOnCalendarEvents.findFirstOrThrow(args);
    },
    Auth_findManyUsersOnCalendarEvents: (_parent, args, { prisma }) => {
      return prisma.usersOnCalendarEvents.findMany(args);
    },
    Auth_findManyUsersOnCalendarEventsCount: (_parent, args, { prisma }) => {
      return prisma.usersOnCalendarEvents.count(args);
    },
    Auth_aggregateUsersOnCalendarEvents: (_parent, args, { prisma }) => {
      return prisma.usersOnCalendarEvents.aggregate(args);
    },
    Auth_groupByUsersOnCalendarEvents: async (_parent, args, { prisma }) => {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        let result = await prisma.usersOnCalendarEvents.groupBy(args);
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
    Auth_createOneUsersOnCalendarEvents: (_parent, args, { prisma }) => {
      return prisma.usersOnCalendarEvents.create(args);
    },
    Auth_updateOneUsersOnCalendarEvents: (_parent, args, { prisma }) => {
      return prisma.usersOnCalendarEvents.update(args);
    },
    Auth_deleteOneUsersOnCalendarEvents: async (_parent, args, { prisma }) => {
      return prisma.usersOnCalendarEvents.delete(args);
    },
    Auth_upsertOneUsersOnCalendarEvents: async (_parent, args, { prisma }) => {
      return prisma.usersOnCalendarEvents.upsert(args);
    },
    Auth_deleteManyUsersOnCalendarEvents: async (_parent, args, { prisma }) => {
      return prisma.usersOnCalendarEvents.deleteMany(args);
    },
    //updateMany for this model cannot exist as this model contains only unique fields or relations.
  },
  UsersOnCalendarEvents: {
    __resolveReference(reference, { prisma }) {
      const [field, value] = Object.entries(reference).find(e => e[0] !== '__typename');
      return prisma.usersoncalendarevents.findUnique({
        where: { [field]: value },
      });
    },
  },
};
export default resolvers;
