import { PrismaClient, Team, User } from '.prisma/Auth-client';

export async function seedUsersOnTeams(client: PrismaClient, users: User[], teams: Team[]) {
  await client.user.update({
    where: {
      id: users[0].id,
    },
    data: {
      teams: {
        create: [
          {
            team: {
              connect: {
                teamName: teams[0].teamName,
              },
            },
          },
          {
            team: {
              connect: {
                teamName: teams[1].teamName,
              },
            },
          },
          {
            team: {
              connect: {
                teamName: teams[2].teamName,
              },
            },
          },
        ],
      },
    },
  });
  await client.user.update({
    where: {
      id: users[1].id,
    },
    data: {
      teams: {
        create: [
          {
            team: {
              connect: {
                teamName: teams[0].teamName,
              },
            },
          },
          {
            team: {
              connect: {
                teamName: teams[1].teamName,
              },
            },
          },
          {
            team: {
              connect: {
                teamName: teams[2].teamName,
              },
            },
          },
        ],
      },
    },
  });
  await client.user.update({
    where: {
      id: users[2].id,
    },
    data: {
      teams: {
        create: [
          {
            team: {
              connect: {
                teamName: teams[0].teamName,
              },
            },
          },
          {
            team: {
              connect: {
                teamName: teams[1].teamName,
              },
            },
          },
          {
            team: {
              connect: {
                teamName: teams[2].teamName,
              },
            },
          },
        ],
      },
    },
  });
}
