import { Resolvers } from '../../resolversTypes';

const resolvers: Resolvers = {
  Query: {
    Auth_findUniqueUser: (_parent, args, { prisma }) => {
      return prisma.user.findUnique(args);
    },
    Auth_findFirstUser: (_parent, args, { prisma }) => {
      return prisma.user.findFirst(args);
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
  },
  Mutation: {
    Auth_createOneUser: (_parent, args, { prisma }) => {
      return prisma.user.create(args);
    },
    Auth_updateOneUser: (_parent, args, { prisma }) => {
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
