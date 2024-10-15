/*
  Warnings:

  - Added the required column `events` to the `Investigation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Investigation" ADD COLUMN     "events" TEXT NOT NULL;
