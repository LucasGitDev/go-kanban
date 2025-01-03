'use server';

import prisma from '@/lib/prisma';
import { cookies } from 'next/headers';

export async function generateSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get('session_id');

  if (!session) {
    const newSession = await prisma.session.create({
      data: {},
    });

    cookieStore.set('session_id', newSession.id);

    return newSession.id;
  }

  return session.value;
}

export async function getCurrentSession(): Promise<string | undefined> {
  const cookieStore = await cookies();
  const session = cookieStore.get('session_id');

  return session?.value;
}
