/*
  Warnings:

  - Made the column `userId` on table `Investigation` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Investigation" DROP CONSTRAINT "Investigation_userId_fkey";

-- AlterTable
ALTER TABLE "Investigation" ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Investigation" ADD CONSTRAINT "Investigation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
