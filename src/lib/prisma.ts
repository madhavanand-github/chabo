import { PrismaClient } from "@prisma/client";

declare global { // to introduce new global variables or properties into the global namespace
  var prisma: PrismaClient | undefined;
}

export const client = globalThis.prisma || new PrismaClient(); // globalThis : global scope of the entire application

if(process.env.NODE_ENV !== 'production') globalThis.prisma = client; // to avoid multiple instance of  prisma
