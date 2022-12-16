import Chance from 'chance';

import { PrismaClient as AuthPrismaClient } from '.prisma/Auth-client';

const client = new AuthPrismaClient();
var chance = new Chance();

async function seed() {
  
  ///Example seed////

  await client.user.create({
    data: {
      username: "johnkim",
      password: "$2a$12$BYV7udxRkgHx0ENumfp1S.N/KwjQm/IoxoaT6eqyreXE1p5jLgprC",
      email: "abc@abc.com",
      roles: ["Super"],
    }
  })
  ////////////////
}

seed();
