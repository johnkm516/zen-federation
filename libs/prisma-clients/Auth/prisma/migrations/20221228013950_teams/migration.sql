-- CreateTable
CREATE TABLE "UsersOnTeams" (
    "teamName" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UsersOnTeams_pkey" PRIMARY KEY ("teamName","userId")
);

-- CreateTable
CREATE TABLE "Team" (
    "teamName" TEXT NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("teamName")
);

-- CreateIndex
CREATE UNIQUE INDEX "Team_teamName_key" ON "Team"("teamName");

-- AddForeignKey
ALTER TABLE "UsersOnTeams" ADD CONSTRAINT "UsersOnTeams_teamName_fkey" FOREIGN KEY ("teamName") REFERENCES "Team"("teamName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOnTeams" ADD CONSTRAINT "UsersOnTeams_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
