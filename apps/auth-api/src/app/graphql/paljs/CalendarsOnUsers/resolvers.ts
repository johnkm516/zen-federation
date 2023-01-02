import { GraphQLError } from 'graphql/error';

import { Resolvers } from '../../resolversTypes';

const resolvers: Resolvers = {
  Query: {
    Auth_findUniqueCalendarsOnUsers: (_parent, args, { prisma }) => {
      return prisma.calendarsOnUsers.findUnique(args);
    },
    Auth_findUniqueCalendarsOnUsersOrThrow: (_parent, args, { prisma }) => {
      return prisma.calendarsOnUsers.findUniqueOrThrow(args);
    },
    Auth_findFirstCalendarsOnUsers: (_parent, args, { prisma }) => {
      return prisma.calendarsOnUsers.findFirst(args);
    },
    Auth_findFirstCalendarsOnUsersOrThrow: (_parent, args, { prisma }) => {
      return prisma.calendarsOnUsers.findFirstOrThrow(args);
    },
    Auth_findManyCalendarsOnUsers: (_parent, args, { prisma }) => {
      return prisma.calendarsOnUsers.findMany(args);
    },
    Auth_findManyCalendarsOnUsersCount: (_parent, args, { prisma }) => {
      return prisma.calendarsOnUsers.count(args);
    },
    Auth_aggregateCalendarsOnUsers: (_parent, args, { prisma }) => {
      return prisma.calendarsOnUsers.aggregate(args);
    },
    Auth_groupByCalendarsOnUsers: async (_parent, args, { prisma }) => {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        let result = await prisma.calendarsOnUsers.groupBy(args);
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
    Auth_createOneCalendarsOnUsers: (_parent, args, { prisma }) => {
      return prisma.calendarsOnUsers.create(args);
    },
    Auth_updateOneCalendarsOnUsers: (_parent, args, { prisma }) => {
      return prisma.calendarsOnUsers.update(args);
    },
    Auth_deleteOneCalendarsOnUsers: async (_parent, args, { prisma }) => {
      return prisma.calendarsOnUsers.delete(args);
    },
    Auth_upsertOneCalendarsOnUsers: async (_parent, args, { prisma }) => {
      return prisma.calendarsOnUsers.upsert(args);
    },
    Auth_deleteManyCalendarsOnUsers: async (_parent, args, { prisma }) => {
      return prisma.calendarsOnUsers.deleteMany(args);
    },
    //updateMany for this model cannot exist as this model contains only unique fields or relations.
  },
  CalendarsOnUsers: {
    __resolveReference(reference, { prisma }) {
      const [field, value] = Object.entries(reference).find(e => e[0] !== '__typename');
      return prisma.calendarsonusers.findUnique({ where: { [field]: value } });
    },
  },
};
export default resolvers;
