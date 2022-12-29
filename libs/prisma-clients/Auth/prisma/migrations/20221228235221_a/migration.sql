-- CreateTable
CREATE TABLE "_UserContact" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserContact_AB_unique" ON "_UserContact"("A", "B");

-- CreateIndex
CREATE INDEX "_UserContact_B_index" ON "_UserContact"("B");

-- AddForeignKey
ALTER TABLE "_UserContact" ADD CONSTRAINT "_UserContact_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserContact" ADD CONSTRAINT "_UserContact_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
