import { hash } from 'argon2';
import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const exists = await prisma.user.findUnique({
    where: {
      email
    }
  });
  if (exists) {
    return NextResponse.json({ error: 'User already exists' }, { status: 400 });
  }
  const user = await prisma.user.create({
    data: {
      email,
      password: await hash(password)
    }
  });
  return NextResponse.json(user);
}
