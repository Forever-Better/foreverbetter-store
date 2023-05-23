import type { Metadata, ResolvingMetadata } from 'next';

import ProductScreen from '@/components/screens/ProductScreen/ProductScreen';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props, parent?: ResolvingMetadata): Promise<Metadata> {
  const data = await fetch(`${process.env.CLIENT_URL}/api/products/${params.id}`, { next: { revalidate: 60 } }).then(
    (res) => res.json()
  );

  return {
    title: `${data.name} - FOREVERBETTER Official Site`
  };
}

export default async function ProductPage({ params }: Props) {
  const data = await fetch(`${process.env.CLIENT_URL}/api/products/${params.id}`, { next: { revalidate: 60 } }).then(
    (res) => res.json()
  );

  return <ProductScreen data={data} />;
}
