import { Calendar, PrismaClient, User } from '.prisma/Auth-client';

export async function seedCalendarsOnUsers(
  client: PrismaClient,
  users: User[]
): Promise<Calendar[]> {
  let calendars: Calendar[] = [];

  for (const user of users) {
    calendars.push(
      await client.calendar.create({
        data: {
          calendarType: 'Personal',
          users: {
            create: [
              {
                calendarAttributedTo: {
                  connect: {
                    id: user.id,
                  },
                },
              },
            ],
          },
          calendarOwner: {
            connect: {
              id: user.id,
            },
          },
        },
      })
    );

    calendars.push(
      await client.calendar.create({
        data: {
          calendarType: 'Business',
          users: {
            create: [
              {
                calendarAttributedTo: {
                  connect: {
                    id: user.id,
                  },
                },
              },
            ],
          },
          calendarOwner: {
            connect: {
              id: user.id,
            },
          },
        },
      })
    );

    calendars.push(
      await client.calendar.create({
        data: {
          calendarType: 'Family',
          users: {
            create: [
              {
                calendarAttributedTo: {
                  connect: {
                    id: user.id,
                  },
                },
              },
            ],
          },
          calendarOwner: {
            connect: {
              id: user.id,
            },
          },
        },
      })
    );

    calendars.push(
      await client.calendar.create({
        data: {
          calendarType: 'Holiday',
          users: {
            create: [
              {
                calendarAttributedTo: {
                  connect: {
                    id: user.id,
                  },
                },
              },
            ],
          },
          calendarOwner: {
            connect: {
              id: user.id,
            },
          },
        },
      })
    );

    calendars.push(
      await client.calendar.create({
        data: {
          calendarType: 'ETC',
          users: {
            create: [
              {
                calendarAttributedTo: {
                  connect: {
                    id: user.id,
                  },
                },
              },
            ],
          },
          calendarOwner: {
            connect: {
              id: user.id,
            },
          },
        },
      })
    );
  }

  return calendars;
}
