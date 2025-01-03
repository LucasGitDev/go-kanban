'use server';

import { getCurrentSession } from '@/app/_actions/session';
import prisma from '@/lib/prisma';
import { createServerAction } from 'zsa';
import { createTaskSchema } from '../_schemas';

export const createTask = createServerAction()
  .input(createTaskSchema)
  .handler(async ({ input }) => {
    const { title } = input;

    const sessionId = await getCurrentSession();

    if (!sessionId) {
      throw new Error('Usuário não autenticado');
    }

    await prisma.task.create({
      data: {
        title,
        sessionId,
      },
    });
  });

export async function listTasks() {
  const sessionId = await getCurrentSession();

  if (!sessionId) {
    throw new Error('Usuário não autenticado');
  }

  return prisma.task.findMany({
    where: {
      sessionId,
    },
  });
}
