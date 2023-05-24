import type { Metadata } from 'next';

import Nav from '@/components/Nav/Nav';
import CategoryScreen from '@/components/screens/CategoryScreen/CategoryScreen';

type Props = {
  params: { slug: string[] };
};

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: `${params.slug[0]} - FOREVERBETTER Official Site`
  };
}

export default async function CategoryPage({ params }: Props) {
  const data = await fetch(`${process.env.CLIENT_URL}/api/products`, { next: { revalidate: 60 } }).then((res) =>
    res.json()
  );

  return (
    <>
      <Nav slug={params.slug} sortItems={['All', 'Cardigan', 'Pullover', 'Vest']} />

      <CategoryScreen data={data} />
    </>
  );
}
