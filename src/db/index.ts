import { PrismaClient } from "@prisma/client";

declare global {
  var catchedPrisma: PrismaClient;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.catchedPrisma) {
    global.catchedPrisma = new PrismaClient();
  }

  prisma = global.catchedPrisma;
}

export const db = prisma;
