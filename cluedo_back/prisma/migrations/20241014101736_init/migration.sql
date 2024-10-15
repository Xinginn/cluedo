-- CreateTable
CREATE TABLE "Case" (
    "id" SERIAL NOT NULL,
    "setting" TEXT NOT NULL DEFAULT '1920',
    "victimName" TEXT NOT NULL DEFAULT 'Didier Cedé',
    "victimFace" TEXT NOT NULL DEFAULT 'default.jpg',
    "victimBody" TEXT NOT NULL DEFAULT 'default.jpg',
    "autopsy" TEXT NOT NULL DEFAULT 'La victime a été retrouvée par un passant dans une ruelle. Elle avait une barre à mine plantée dans le torse.',

    CONSTRAINT "Case_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Character" (
    "id" SERIAL NOT NULL,
    "body" TEXT NOT NULL DEFAULT 'default.jpg',
    "face" TEXT NOT NULL DEFAULT 'default.jpg',
    "description" TEXT NOT NULL DEFAULT 'Pas de description',
    "personality" TEXT NOT NULL DEFAULT 'Discret et manipulateur',
    "relationship" TEXT NOT NULL,
    "history" TEXT NOT NULL,
    "isKiller" BOOLEAN NOT NULL DEFAULT false,
    "caseId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Case_id_key" ON "Case"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Character_id_key" ON "Character"("id");

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "Case"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
