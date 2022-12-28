import { Subjects } from '@casl/prisma';
import { 
  Profile,
  Team,
  User,
  UsersOnTeams,
} from '@nx-prisma/prisma-clients/Auth';

export type PrismaSubjects = Subjects<{
  Profile: Profile;
  Team: Team;
  User: User;
  UsersOnTeams: UsersOnTeams;
}>;
