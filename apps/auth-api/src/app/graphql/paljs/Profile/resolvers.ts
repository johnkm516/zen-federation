import { GraphQLError } from 'graphql/error';

import { Resolvers } from '../../resolversTypes';

const resolvers: Resolvers = {
  Query: {
    Auth_findUniqueProfile: (_parent, args, { prisma }) => {
      return prisma.profile.findUnique(args);
    },
    Auth_findUniqueProfileOrThrow: (_parent, args, { prisma }) => {
      return prisma.profile.findUniqueOrThrow(args);
    },
    Auth_findFirstProfile: (_parent, args, { prisma }) => {
      return prisma.profile.findFirst(args);
    },
    Auth_findFirstProfileOrThrow: (_parent, args, { prisma }) => {
      return prisma.profile.findFirstOrThrow(args);
    },
    Auth_findManyProfile: (_parent, args, { prisma }) => {
      return prisma.profile.findMany(args);
    },
    Auth_findManyProfileCount: (_parent, args, { prisma }) => {
      return prisma.profile.count(args);
    },
    Auth_aggregateProfile: (_parent, args, { prisma }) => {
      return prisma.profile.aggregate(args);
    },
    Auth_groupByProfile: async (_parent, args, { prisma }) => {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        let result = await prisma.profile.groupBy(args);
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
    Auth_createOneProfile: (_parent, args, { prisma }) => {
      return prisma.profile.create(args);
    },
    Auth_updateOneProfile: (_parent, args, { prisma }) => {
      return prisma.profile.update(args);
    },
    Auth_deleteOneProfile: async (_parent, args, { prisma }) => {
      return prisma.profile.delete(args);
    },
    Auth_upsertOneProfile: async (_parent, args, { prisma }) => {
      return prisma.profile.upsert(args);
    },
    Auth_deleteManyProfile: async (_parent, args, { prisma }) => {
      return prisma.profile.deleteMany(args);
    },
    Auth_updateManyProfile: (_parent, args, { prisma }) => {
      return prisma.profile.updateMany(args);
    },
  },
  Profile: {
    __resolveReference(reference, { prisma }) {
      const [field, value] = Object.entries(reference).find(e => e[0] !== '__typename');
      return prisma.profile.findUnique({ where: { [field]: value } });
    },
  },
};
export default resolvers;
