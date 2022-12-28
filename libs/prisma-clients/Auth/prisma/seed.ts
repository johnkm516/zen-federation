import Chance from 'chance';

import { PrismaClient as AuthPrismaClient } from '.prisma/Auth-client';

const client = new AuthPrismaClient();
var chance = new Chance();

async function seed() {
  
  ///Example seed////

  const user = await client.user.create({
    data: {
      username: "johnkim",
      password: "$2a$12$BYV7udxRkgHx0ENumfp1S.N/KwjQm/IoxoaT6eqyreXE1p5jLgprC",
      email: "abc@abc.com",
      roles: ["Super"],
      lastName: "Kim",
      firstName: "John"
    }
  })

  await client.profile.create({
    data: {
      userId: user.id,
      location: 'Seoul, South Korea',
      designation: 'Engineer',
      profileImg: '/images/avatars/1.png',
      designationIcon: 'mdi:invert-colors',
      coverImg: '/images/pages/profile-banner.png',
    }
  })
  
  const teams = [
    { teamName: '경영정보부' },
    { teamName: 'IT 운영팀' },
    { teamName: '개발자' },
  ]
  await client.team.createMany({
    data: teams
  })

  const assignTeams = await client.user.update({
    where: { id: user.id },
    data: {
      teams: {
        create: [
          {
            team: {
              connect: {
                teamName: teams[0].teamName
              }
            }
          },
          {
            team: {
              connect: {
                teamName: teams[1].teamName
              }
            }
          },
          {
            team: {
              connect: {
                teamName: teams[2].teamName
              }
            }
          }
        ]
      }
    }
  })
  ////////////////

  /*
  id            Int      @id @default(autoincrement())
  createdAt     DateTime @default(now())
  username      String?  @unique
  password      String?
  email         String   @unique
  roles         String[]
  googleId      String?  @unique
  googleProfile Json?
  lastName      String
  firstName     String
  profile       Profile?


  userId            Int  @unique  @id
  user              User @relation(fields: [userId], references: [id])
  location          String?
  joiningDate       DateTime?
  designation       String?
  profileImg        String?
  designationIcon   String?
  coverImg          String?

  */
}

seed();
