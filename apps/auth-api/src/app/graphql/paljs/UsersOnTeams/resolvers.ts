import { GraphQLError } from 'graphql/error';

import { Resolvers } from '../../resolversTypes';

const resolvers: Resolvers = {
  Query: {
    Auth_findUniqueUsersOnTeams: (_parent, args, { prisma }) => {
      return prisma.usersOnTeams.findUnique(args);
    },
    Auth_findUniqueUsersOnTeamsOrThrow: (_parent, args, { prisma }) => {
      return prisma.usersOnTeams.findUniqueOrThrow(args);
    },
    Auth_findFirstUsersOnTeams: (_parent, args, { prisma }) => {
      return prisma.usersOnTeams.findFirst(args);
    },
    Auth_findFirstUsersOnTeamsOrThrow: (_parent, args, { prisma }) => {
      return prisma.usersOnTeams.findFirstOrThrow(args);
    },
    Auth_findManyUsersOnTeams: (_parent, args, { prisma }) => {
      return prisma.usersOnTeams.findMany(args);
    },
    Auth_findManyUsersOnTeamsCount: (_parent, args, { prisma }) => {
      return prisma.usersOnTeams.count(args);
    },
    Auth_aggregateUsersOnTeams: (_parent, args, { prisma }) => {
      return prisma.usersOnTeams.aggregate(args);
    },
    Auth_groupByUsersOnTeams: async (_parent, args, { prisma }) => {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        let result = await prisma.usersOnTeams.groupBy(args);
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
    Auth_createOneUsersOnTeams: (_parent, args, { prisma }) => {
      return prisma.usersOnTeams.create(args);
    },
    Auth_updateOneUsersOnTeams: (_parent, args, { prisma }) => {
      return prisma.usersOnTeams.update(args);
    },
    Auth_deleteOneUsersOnTeams: async (_parent, args, { prisma }) => {
      return prisma.usersOnTeams.delete(args);
    },
    Auth_upsertOneUsersOnTeams: async (_parent, args, { prisma }) => {
      return prisma.usersOnTeams.upsert(args);
    },
    Auth_deleteManyUsersOnTeams: async (_parent, args, { prisma }) => {
      return prisma.usersOnTeams.deleteMany(args);
    },
    Auth_updateManyUsersOnTeams: (_parent, args, { prisma }) => {
      return prisma.usersOnTeams.updateMany(args);
    },
  },
  UsersOnTeams: {
    __resolveReference(reference, { prisma }) {
      const [field, value] = Object.entries(reference).find(e => e[0] !== '__typename');
      return prisma.usersonteams.findUnique({ where: { [field]: value } });
    },
  },
};
export default resolvers;
