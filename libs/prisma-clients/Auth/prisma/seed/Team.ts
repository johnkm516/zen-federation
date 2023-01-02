import { PrismaClient, User, Team } from '.prisma/Auth-client';

export async function seedTeams(client: PrismaClient): Promise<Team[]> {
  
    const teams = [
        { teamName: '경영정보부', teamType: '개발자', teamIcon: '/images/icons/project-icons/react-label.png' },
        { teamName: 'IT 운영팀', teamType: '개발자', teamIcon: '/images/icons/project-icons/react-label.png'  },
        { teamName: '개발자', teamType: '개발자', teamIcon: '/images/icons/project-icons/react-label.png'  },
    ]

    await client.team.createMany({
        data: teams
    })
    
    return teams;
}