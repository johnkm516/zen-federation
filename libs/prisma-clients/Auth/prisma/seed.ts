import Chance from 'chance';

import { PrismaClient as AuthPrismaClient } from '.prisma/Auth-client';
import { seedUsers } from './seed/User';
import { seedProfiles } from './seed/Profile';
import { seedTeams } from './seed/Team';
import { seedUsersOnTeams } from './seed/UsersOnTeams';

const client = new AuthPrismaClient();
var chance = new Chance();

async function seed() {
  const users = await seedUsers(client);
  const profiles = await seedProfiles(client, users);
  const teams = await seedTeams(client, users);
  await seedUsersOnTeams(client, users, teams);
}

seed();
