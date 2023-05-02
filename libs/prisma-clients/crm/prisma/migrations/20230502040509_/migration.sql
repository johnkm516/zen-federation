-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL,
    "order" TEXT,
    "test" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
