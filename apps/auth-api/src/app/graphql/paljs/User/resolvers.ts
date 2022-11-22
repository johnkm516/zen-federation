import { GraphQLError } from 'graphql/error';

import { Resolvers } from '../../resolversTypes';

const resolvers: Resolvers = {
  Query: {
    Auth_findUniqueUser: (_parent, args, { prisma }) => {
      return prisma.user.findUnique(args);
    },
    Auth_findUniqueUserOrThrow: (_parent, args, { prisma }) => {
      return prisma.user.findUniqueOrThrow(args);
    },
    Auth_findFirstUser: (_parent, args, { prisma }) => {
      return prisma.user.findFirst(args);
    },
    Auth_findFirstUserOrThrow: (_parent, args, { prisma }) => {
      return prisma.user.findFirstOrThrow(args);
    },
    Auth_findManyUser: (_parent, args, { prisma }) => {
      return prisma.user.findMany(args);
    },
    Auth_findManyUserCount: (_parent, args, { prisma }) => {
      return prisma.user.count(args);
    },
    Auth_aggregateUser: (_parent, args, { prisma }) => {
      return prisma.user.aggregate(args);
    },
    Auth_groupByUser: async (_parent, args, { prisma }) => {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        let result = await prisma.user.groupBy(args);
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
    Auth_createOneUser: (_parent, args, { prisma }) => {
      return prisma.user.create(args);
    },
    Auth_updateOneUser: (_parent, args, { prisma }) => {
      return prisma.user.update(args);
    },
    Auth_updateOneUserSaga: (_parent, args, { prisma }) => {
      return prisma.user.update(args);
    },
    Auth_deleteOneUser: async (_parent, args, { prisma }) => {
      return prisma.user.delete(args);
    },
    Auth_upsertOneUser: async (_parent, args, { prisma }) => {
      return prisma.user.upsert(args);
    },
    Auth_deleteManyUser: async (_parent, args, { prisma }) => {
      return prisma.user.deleteMany(args);
    },
    Auth_updateManyUser: (_parent, args, { prisma }) => {
      return prisma.user.updateMany(args);
    },
  },
  User: {
    __resolveReference(reference, { prisma }) {
      const [field, value] = Object.entries(reference).find(e => e[0] !== '__typename');
      return prisma.user.findUnique({ where: { [field]: value } });
    },
  },
};
export default resolvers;
