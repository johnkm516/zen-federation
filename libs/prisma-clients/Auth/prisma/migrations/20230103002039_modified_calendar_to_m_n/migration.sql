/*
  Warnings:

  - You are about to drop the column `calendarId` on the `CalendarEvent` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "CalendarEvent" DROP CONSTRAINT "CalendarEvent_calendarId_fkey";

-- AlterTable
ALTER TABLE "CalendarEvent" DROP COLUMN "calendarId";

-- CreateTable
CREATE TABLE "CalendarEventsOnCalendars" (
    "calendarId" INTEGER NOT NULL,
    "calendarEventId" INTEGER NOT NULL,

    CONSTRAINT "CalendarEventsOnCalendars_pkey" PRIMARY KEY ("calendarId","calendarEventId")
);

-- AddForeignKey
ALTER TABLE "CalendarEventsOnCalendars" ADD CONSTRAINT "CalendarEventsOnCalendars_calendarId_fkey" FOREIGN KEY ("calendarId") REFERENCES "Calendar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CalendarEventsOnCalendars" ADD CONSTRAINT "CalendarEventsOnCalendars_calendarEventId_fkey" FOREIGN KEY ("calendarEventId") REFERENCES "CalendarEvent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
