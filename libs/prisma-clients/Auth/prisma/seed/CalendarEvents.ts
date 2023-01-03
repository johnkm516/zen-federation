import { Calendar, PrismaClient, User, CalendarEvent } from '.prisma/Auth-client';

export async function seedCalendarsOnUsers(
  client: PrismaClient,
  calendars: Calendar[]
)  {

    for (const calendar of calendars) {
        switch(calendar.calendarType) {
            case 'Personal': {
                
                break;
            }
            case 'Business': {
                
                break;
            }
            case 'Family': {
                
                break;
            }
            case 'Holiday': {
                
                break;
            }
            case 'Misc': {
                
                break;
            }
        } 
    }
}
