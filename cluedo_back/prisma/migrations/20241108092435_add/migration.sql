-- CreateTable
CREATE TABLE "Discussion" (
    "id" SERIAL NOT NULL,
    "prompt" TEXT,
    "answer" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "characterId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Discussion_id_key" ON "Discussion"("id");

-- AddForeignKey
ALTER TABLE "Discussion" ADD CONSTRAINT "Discussion_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
