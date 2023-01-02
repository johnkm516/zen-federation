/*
import { PrismaClient, Calendar } from '.prisma/Auth-client';

export async function seedCalendars(client: PrismaClient): Promise<Calendar[]> {
    let calendars: Calendar[] = [];

    calendars.push(await client.calendar.createOne({
        data: {
            calendarType: 'Personal'
        }
    }));
    await client.calendar.createMany({
        data: calendars
    })
    
    return calendars;
}
*/
