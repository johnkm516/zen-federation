import { PrismaClient, User } from '.prisma/Auth-client';

export async function seedUsersContacts(client: PrismaClient, users : User[]) {
    for (let i = 0; i < users.length; i++) {
        for (let y = 0; y < users.length; y++) {
            if (i == y) {
                continue;
            }
            client.user.update({
                data: {
                    contacted: {
                        connect: [
                            {
                                id: users[i].id
                            }
                        ]
                    }
                },
                where: {
                    id: users[y].id
                }
            })
        }
    }
}