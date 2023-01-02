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
                user: {
                  connect: {
                    id: user.id,
                  },
                },
              },
            ],
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
                user: {
                  connect: {
                    id: user.id,
                  },
                },
              },
            ],
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
                user: {
                  connect: {
                    id: user.id,
                  },
                },
              },
            ],
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
                user: {
                  connect: {
                    id: user.id,
                  },
                },
              },
            ],
          },
        },
      })
    );

    calendars.push(
      await client.calendar.create({
        data: {
          calendarType: 'Misc',
          users: {
            create: [
              {
                user: {
                  connect: {
                    id: user.id,
                  },
                },
              },
            ],
          },
        },
      })
    );
  };

  return calendars;
}
