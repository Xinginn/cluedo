/*
  Warnings:

  - You are about to drop the column `history` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `relationship` on the `Character` table. All the data in the column will be lost.
  - Added the required column `name` to the `Character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Character" DROP COLUMN "history",
DROP COLUMN "relationship",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "role" TEXT NOT NULL,
ALTER COLUMN "description" DROP DEFAULT,
ALTER COLUMN "personality" DROP DEFAULT;
