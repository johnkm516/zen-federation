import { PrismaClient, User, Team } from '.prisma/Auth-client';

export async function seedTeams(client: PrismaClient, users: User[]): Promise<Team[]> {
  
    const teams = [
        { teamName: '경영정보부' },
        { teamName: 'IT 운영팀' },
        { teamName: '개발자' },
    ]
    await client.team.createMany({
        data: teams
    })
    
    return teams;
}