import { prisma } from "./prisma.js";

export async function createDiscussion(data) {
  const result = await prisma.discussion.create({
    data,
  });

  return result;
}