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
            mobilePhone: '010 6793 1567',
            businessPhone: '02 3782 1155',
            kakaoTalkId: 'abcdefg4156'
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
            mobilePhone: '010 6792 9992',
            businessPhone: '02 3783 1155',
            kakaoTalkId: 'abcdefg41565'
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
            mobilePhone: '010 6791 2672',
            businessPhone: '02 3789 1155',
            kakaoTalkId: 'abcdefg4154'
        }
    }));
    return profiles;
}