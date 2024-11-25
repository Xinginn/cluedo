import { prisma } from "./prisma.js";

export async function findManyUsers() {
  const result = await prisma.user.findMany({
    include: {
      investigation: true,
    }
  });

  return result;
}

export async function findUserByUsername(username) {
  const result = await prisma.user.findFirst({
    where: { username },
    include: {
      investigation: true,
    }
  });

  return result;
}

export async function createUser(data) {
  const { characters, ...userData } = data;

  const result = await prisma.user.create({
    data: {
      ...userData
    },
    include: {
      investigation: true,
    }
  });

  return result;
}

export async function deleteUser(id) {
  const result = await prisma.user.delete({
    where: id,
  });

  return result;
}