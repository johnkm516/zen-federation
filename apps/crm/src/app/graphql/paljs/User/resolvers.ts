import { GraphQLError } from 'graphql/error';

import { Resolvers } from '../../resolversTypes';

const resolvers: Resolvers = {
  Query: {
    crm_findUniqueUser: (_parent, args, { prisma }) => {
      return prisma.user.findUnique(args);
    },
    crm_findUniqueUserOrThrow: (_parent, args, { prisma }) => {
      return prisma.user.findUniqueOrThrow(args);
    },
    crm_findFirstUser: (_parent, args, { prisma }) => {
      return prisma.user.findFirst(args);
    },
    crm_findFirstUserOrThrow: (_parent, args, { prisma }) => {
      return prisma.user.findFirstOrThrow(args);
    },
    crm_findManyUser: (_parent, args, { prisma }) => {
      return prisma.user.findMany(args);
    },
    crm_findManyUserCount: (_parent, args, { prisma }) => {
      return prisma.user.count(args);
    },
    crm_aggregateUser: (_parent, args, { prisma }) => {
      return prisma.user.aggregate(args);
    },
    crm_groupByUser: async (_parent, args, { prisma }) => {
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
    crm_createOneUser: (_parent, args, { prisma }) => {
      return prisma.user.create(args);
    },
    crm_updateOneUser: (_parent, args, { prisma }) => {
      return prisma.user.update(args);
    },
    crm_deleteOneUser: async (_parent, args, { prisma }) => {
      return prisma.user.delete(args);
    },
    crm_upsertOneUser: async (_parent, args, { prisma }) => {
      return prisma.user.upsert(args);
    },
    crm_deleteManyUser: async (_parent, args, { prisma }) => {
      return prisma.user.deleteMany(args);
    },
    crm_updateManyUser: (_parent, args, { prisma }) => {
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
