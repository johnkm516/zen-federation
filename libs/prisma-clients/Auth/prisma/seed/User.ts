import { PrismaClient, User } from '.prisma/Auth-client';

export async function seedUsers(client: PrismaClient): Promise<User[]> {
    const users: User[] = [];
    users.push(await client.user.create({
        data: {
            username: "johnkim",
            password: "$2a$12$BYV7udxRkgHx0ENumfp1S.N/KwjQm/IoxoaT6eqyreXE1p5jLgprC",
            email: "abc@abc.com",
            roles: ["Super"],
            lastName: "Kim",
            firstName: "John"
        }
    }))

    users.push(await client.user.create({
        data: {
            username: "mishansae",
            password: "$2a$12$BYV7udxRkgHx0ENumfp1S.N/KwjQm/IoxoaT6eqyreXE1p5jLgprC",
            email: "abcd@abcd.com",
            roles: ["Super"],
            lastName: "Mis",
            firstName: "Hansae"
        }
    }))

    users.push(await client.user.create({
        data: {
            username: "bobby",
            password: "$2a$12$BYV7udxRkgHx0ENumfp1S.N/KwjQm/IoxoaT6eqyreXE1p5jLgprC",
            email: "abcde@abcde.com",
            roles: ["Super"],
            lastName: "Lee",
            firstName: "Bob"
        }
    }))
    return users;
}