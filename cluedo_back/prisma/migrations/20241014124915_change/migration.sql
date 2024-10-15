/*
  Warnings:

  - You are about to drop the column `caseId` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the `Case` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `investigationId` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Character" DROP CONSTRAINT "Character_caseId_fkey";

-- AlterTable
ALTER TABLE "Character" DROP COLUMN "caseId",
ADD COLUMN     "investigationId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Case";

-- CreateTable
CREATE TABLE "Investigation" (
    "id" SERIAL NOT NULL,
    "setting" TEXT NOT NULL DEFAULT '1920',
    "victimName" TEXT NOT NULL DEFAULT 'Didier Cedé',
    "victimFace" TEXT NOT NULL DEFAULT 'default.jpg',
    "victimBody" TEXT NOT NULL DEFAULT 'default.jpg',
    "autopsy" TEXT NOT NULL DEFAULT 'La victime a été retrouvée par un passant dans une ruelle. Elle avait une barre à mine plantée dans le torse.',

    CONSTRAINT "Investigation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Investigation_id_key" ON "Investigation"("id");

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_investigationId_fkey" FOREIGN KEY ("investigationId") REFERENCES "Investigation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
