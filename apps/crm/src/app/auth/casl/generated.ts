import { Subjects } from '@casl/prisma';
import { 
  User,
} from '@nx-prisma/prisma-clients/crm';

export type PrismaSubjects = Subjects<{
  User: User;
}>;
