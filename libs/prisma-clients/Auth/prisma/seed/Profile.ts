import { PrismaClient, User, Profile } from '.prisma/Auth-client';

export async function seedProfiles(client: PrismaClient, users: User[]): Promise<Profile[]> {
    const profiles: Profile[] = [];
    profiles.push(await client.profile.create({
        data: {
            userId: users[0].id,
            location: 'Seoul, South Korea',
            designation: 'Engineer',
            profileImg: '/images/avatars/1.png',
            designationIcon: 'mdi:invert-colors',
            coverImg: '/images/pages/profile-banner.png',
        }
    }));
    profiles.push(await client.profile.create({
        data: {
            userId: users[1].id,
            location: 'Seoul, South Korea',
            designation: 'Engineer',
            profileImg: '/images/avatars/1.png',
            designationIcon: 'mdi:invert-colors',
            coverImg: '/images/pages/profile-banner.png',
        }
    }));
    profiles.push(await client.profile.create({
        data: {
            userId: users[2].id,
            location: 'Seoul, South Korea',
            designation: 'Engineer',
            profileImg: '/images/avatars/1.png',
            designationIcon: 'mdi:invert-colors',
            coverImg: '/images/pages/profile-banner.png',
        }
    }));
    return profiles;
}