// myBlog/src/main.ts

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... your Prisma Client queries will go here
  const result = await prisma.user.findMany()
  console.log(result)
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect())
