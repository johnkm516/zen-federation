import Chance from 'chance';

import { PrismaClient as AuthPrismaClient } from '.prisma/Auth-client';
import { seedUsers } from './seed/User';
import { seedProfiles } from './seed/Profile';
import { seedTeams } from './seed/Team';
import { seedUsersOnTeams } from './seed/UsersOnTeams';
import { seedUsersContacts } from './seed/UserContacts';
import { seedCalendarsOnUsers } from './seed/CalendarsOnUsers';

const client = new AuthPrismaClient();
var chance = new Chance();

async function seed() {
  const users = await seedUsers(client);
  const profiles = await seedProfiles(client, users);
  const teams = await seedTeams(client);
  await seedUsersOnTeams(client, users, teams);
  await seedUsersContacts(client, users);
  const calendars = await seedCalendarsOnUsers(client, users);
  
}

seed();
