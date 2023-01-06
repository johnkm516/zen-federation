/*
  Warnings:

  - A unique constraint covering the columns `[calendarType,calendarAttributedToId]` on the table `CalendarsOnUsers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CalendarsOnUsers_calendarType_calendarAttributedToId_key" ON "CalendarsOnUsers"("calendarType", "calendarAttributedToId");
