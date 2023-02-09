import Chance from 'chance';

import { PrismaClient as CrmPrismaClient } from '.prisma/crm-client';

const client = new CrmPrismaClient();
var chance = new Chance();

async function seed() {
  /*
  ///Example seed////
  for (let i = 0; i < 1; i++) {
    await client.user.create({
      data: {
        id: i,
        createdAt: chance.date(),
        username: chance.name(),
        password: chance.word(),
        email: chance.email(),
        roles: ["Super"],
      }
    })
  }
  ////////////////
  */
}

seed();
