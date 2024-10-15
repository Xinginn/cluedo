import { prisma } from "./prisma.js";

export async function findManyCharacters() {
  const result = await prisma.character.findMany();

  return result;
}

export async function findCharacterById(id) {
  const result = await prisma.character.findUnique({
    where: { id },
  });

  return result;
}


export async function createCharacter(data) {
  const result = await prisma.character.create({
    data,
  });

  return result;
}