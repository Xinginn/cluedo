-- DropForeignKey
ALTER TABLE "Investigation" DROP CONSTRAINT "Investigation_userId_fkey";

-- AlterTable
ALTER TABLE "Character" ALTER COLUMN "body" SET DEFAULT 'default.webp',
ALTER COLUMN "face" SET DEFAULT 'default.webp';

-- AlterTable
ALTER TABLE "Investigation" ALTER COLUMN "victimFace" SET DEFAULT 'default.webp',
ALTER COLUMN "victimBody" SET DEFAULT 'default.webp',
ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Investigation" ADD CONSTRAINT "Investigation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
