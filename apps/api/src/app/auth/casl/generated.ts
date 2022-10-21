import { Subjects } from '@casl/prisma';
import { 
  User,
} from '@nx-prisma/prisma-clients/Auth';

export type PrismaSubjects = Subjects<{
  User: User;
}>;
