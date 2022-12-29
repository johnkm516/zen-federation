import { PrismaClient, User } from '.prisma/Auth-client';

export async function seedUsersContacts(client: PrismaClient, users: User[]) {
  for (let i = 0; i < users.length; i++) {
    for (let y = 0; y < users.length; y++) {
      if (i == y) {
        continue;
      }
      
      await client.user.update({
        where: {
          id: users[i].id,
        },
        data: {
          contacted: {
            connect: [
              {
                id: users[y].id,
              },
            ],
          },
        },
      });
    }
  }
}
