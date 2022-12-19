import { Subjects } from '@casl/prisma';
import { 
  Profile,
  User,
} from '@nx-prisma/prisma-clients/Auth';

export type PrismaSubjects = Subjects<{
  Profile: Profile;
  User: User;
}>;
