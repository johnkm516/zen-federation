import { Calendar, CalendarEvent, PrismaClient, User } from '.prisma/Auth-client';

function randomDate(start: Date, end: Date, startHour: number, endHour: number): Date {
  var date = new Date(+start + Math.random() * (end.getTime() - start.getTime()));
  var hour = (startHour + Math.random() * (endHour - startHour)) | 0;
  date.setHours(hour);
  return date;
}

export async function seedCalendarEventsOnCalendar(client: PrismaClient, calendars: Calendar[]) {
  const calendarEvents: CalendarEvent[] = [];

  for (const calendar of calendars) {
    let startDate = randomDate(
      new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000),
      new Date(),
      0,
      24
    );
    let endDate = new Date(startDate.getTime() + 60 * 60 * 1000); //one hour later
    switch (calendar.calendarType) {
      case 'Personal': {
        calendarEvents.push(
          await client.calendarEvent.create({
            data: {
              allDay: false,
              end: endDate,
              start: startDate,
              title: 'Doctor Appointment',
              url: null,
              calendar: {
                create: [
                  {
                    calendar: {
                      connect: {
                        id: calendar.id,
                      },
                    },
                  },
                ],
              },
            },
          })
        );
        break;
      }
      case 'Business': {
        calendarEvents.push(
          await client.calendarEvent.create({
            data: {
              allDay: false,
              end: endDate,
              start: startDate,
              title: 'Design Review',
              url: null,
              calendar: {
                create: [
                  {
                    calendar: {
                      connect: {
                        id: calendar.id,
                      },
                    },
                  },
                ],
              },
            },
          })
        );
        break;
      }
      case 'Family': {
        calendarEvents.push(
          await client.calendarEvent.create({
            data: {
              allDay: false,
              end: endDate,
              start: startDate,
              title: 'Family Trip',
              url: null,
              calendar: {
                create: [
                  {
                    calendar: {
                      connect: {
                        id: calendar.id,
                      },
                    },
                  },
                ],
              },
            },
          })
        );
        break;
      }
      case 'Holiday': {
        calendarEvents.push(
          await client.calendarEvent.create({
            data: {
              allDay: false,
              end: endDate,
              start: startDate,
              title: 'YEET Day',
              url: null,
              calendar: {
                create: [
                  {
                    calendar: {
                      connect: {
                        id: calendar.id,
                      },
                    },
                  },
                ],
              },
            },
          })
        );
        break;
      }
      case 'Misc': {
        calendarEvents.push(
          await client.calendarEvent.create({
            data: {
              allDay: false,
              end: endDate,
              start: startDate,
              title: 'Do Laundry',
              url: null,
              calendar: {
                create: [
                  {
                    calendar: {
                      connect: {
                        id: calendar.id,
                      },
                    },
                  },
                ],
              },
            },
          })
        );
        break;
      }
    }
  }
}
