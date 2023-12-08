import { Prisma } from '@prisma/client';

import { prisma } from '@/lib/prisma';

export class PrismaUsersRepository {
  async create({ name, email, password_hash }: Prisma.UserCreateInput) {
    return prisma.user.create({
      data: {
        name,
        email,
        password_hash,
      },
    });
  }
}
