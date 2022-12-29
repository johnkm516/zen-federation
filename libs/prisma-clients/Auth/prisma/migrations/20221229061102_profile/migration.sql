-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "username" TEXT,
    "password" TEXT,
    "email" TEXT NOT NULL,
    "roles" TEXT[],
    "googleId" TEXT,
    "googleProfile" JSONB,
    "lastName" TEXT,
    "firstName" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "userId" INTEGER NOT NULL,
    "location" TEXT,
    "joiningDate" TIMESTAMP(3),
    "businessPhone" TEXT,
    "mobilePhone" TEXT,
    "kakaoTalkId" TEXT,
    "designation" TEXT,
    "profileImg" TEXT,
    "designationIcon" TEXT,
    "coverImg" TEXT,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("userId")
);

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
    "teamType" TEXT,
    "teamIcon" TEXT,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("teamName")
);

-- CreateTable
CREATE TABLE "_UserContact" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_googleId_key" ON "User"("googleId");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_businessPhone_key" ON "Profile"("businessPhone");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_mobilePhone_key" ON "Profile"("mobilePhone");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_kakaoTalkId_key" ON "Profile"("kakaoTalkId");

-- CreateIndex
CREATE UNIQUE INDEX "Team_teamName_key" ON "Team"("teamName");

-- CreateIndex
CREATE UNIQUE INDEX "_UserContact_AB_unique" ON "_UserContact"("A", "B");

-- CreateIndex
CREATE INDEX "_UserContact_B_index" ON "_UserContact"("B");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOnTeams" ADD CONSTRAINT "UsersOnTeams_teamName_fkey" FOREIGN KEY ("teamName") REFERENCES "Team"("teamName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOnTeams" ADD CONSTRAINT "UsersOnTeams_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserContact" ADD CONSTRAINT "_UserContact_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserContact" ADD CONSTRAINT "_UserContact_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
