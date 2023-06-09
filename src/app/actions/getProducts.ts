import prisma from '@/lib/prisma';

export default async function getProducts() {
  try {
    const products = await prisma.product.findMany();

    return products;
  } catch (error: any) {
    throw new Error(error);
  }
}
