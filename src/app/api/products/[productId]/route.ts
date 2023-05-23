import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

interface Params {
  productId?: string;
}

export async function GET(request: Request, { params }: { params: Params }) {
  if (!params.productId) return null;

  const post = await prisma.product.findUnique({ where: { id: +params.productId } });

  return NextResponse.json(post);
}
