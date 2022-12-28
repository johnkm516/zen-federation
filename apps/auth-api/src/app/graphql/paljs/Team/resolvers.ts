import { GraphQLError } from 'graphql/error';

import { Resolvers } from '../../resolversTypes';

const resolvers: Resolvers = {
  Query: {
    Auth_findUniqueTeam: (_parent, args, { prisma }) => {
      return prisma.team.findUnique(args);
    },
    Auth_findUniqueTeamOrThrow: (_parent, args, { prisma }) => {
      return prisma.team.findUniqueOrThrow(args);
    },
    Auth_findFirstTeam: (_parent, args, { prisma }) => {
      return prisma.team.findFirst(args);
    },
    Auth_findFirstTeamOrThrow: (_parent, args, { prisma }) => {
      return prisma.team.findFirstOrThrow(args);
    },
    Auth_findManyTeam: (_parent, args, { prisma }) => {
      return prisma.team.findMany(args);
    },
    Auth_findManyTeamCount: (_parent, args, { prisma }) => {
      return prisma.team.count(args);
    },
    Auth_aggregateTeam: (_parent, args, { prisma }) => {
      return prisma.team.aggregate(args);
    },
    Auth_groupByTeam: async (_parent, args, { prisma }) => {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        let result = await prisma.team.groupBy(args);
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
    Auth_createOneTeam: (_parent, args, { prisma }) => {
      return prisma.team.create(args);
    },
    Auth_updateOneTeam: (_parent, args, { prisma }) => {
      return prisma.team.update(args);
    },
    Auth_deleteOneTeam: async (_parent, args, { prisma }) => {
      return prisma.team.delete(args);
    },
    Auth_upsertOneTeam: async (_parent, args, { prisma }) => {
      return prisma.team.upsert(args);
    },
    Auth_deleteManyTeam: async (_parent, args, { prisma }) => {
      return prisma.team.deleteMany(args);
    },
    //updateMany for this model cannot exist as this model contains only unique fields or relations.
  },
  Team: {
    __resolveReference(reference, { prisma }) {
      const [field, value] = Object.entries(reference).find(e => e[0] !== '__typename');
      return prisma.team.findUnique({ where: { [field]: value } });
    },
  },
};
export default resolvers;
