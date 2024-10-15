import { prisma } from "./prisma.js";

export async function findManyInvestigations() {
  const result = await prisma.investigation.findMany();

  return result;
}

export async function findInvestigationById(id) {
  const result = await prisma.investigation.findUnique({
    where: { id },
    include: {
      characters: true,
    }
  });

  return result;
}

export async function createInvestigation(data) {
  const { characters, ...investigationData } = data;

  const result = await prisma.investigation.create({
    data: {
      ...investigationData,
      characters: {
        create: characters,
      }
    },
    include: {
      characters: true,
    }
  });

  return result;
}


export async function deleteInvestigation(id) {
  const result = await prisma.investigation.delete({
    where: id,
  });

  return result;
}