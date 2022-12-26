export function NestResolversABACTemplate_TransactionalBatchMutation(federation?: string) {
    return `import { UseGuards } from '@nestjs/common';
    import { Args, Context, Info, Mutation, Resolver } from '@nestjs/graphql';
    import { GraphQLResolveInfo } from 'graphql';
    
    import { CaslSubject, GqlCaslGuard } from '../../auth';
    import { PrismaSelectArgs } from '../../prisma';
    import { IContext } from '../models';
    import resolvers from '../paljs/extended-resolvers';
    import type { ${federation ? federation + '_' : ''}TransactionalBatchMutationArgs } from '../resolversTypes';
    
    export const typeDefs = null;
    
    @Resolver()
    @CaslSubject('TransactionalBatchMutation')
    export class TransactionalBatchMutationResolver {
        @Mutation()
        @UseGuards(GqlCaslGuard('update', 'delete', 'create'))
        async ${federation ? federation + '_' : ''}transactionalBatchMutation(
        @Args() args: ${federation ? federation + '_' : ''}TransactionalBatchMutationArgs,
        @Info() info: GraphQLResolveInfo,
        @Context() ctx: IContext
        ) {
        return resolvers.Mutation.${federation ? federation + '_' : ''}transactionalBatchMutation(
            undefined,
            PrismaSelectArgs(info, args),
            ctx,
            info
        );
        }
    }
`
} 