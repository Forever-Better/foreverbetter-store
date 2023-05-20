import { Suspense } from 'react';

import Nav from '@/components/Nav/Nav';
import CategoryScreen from '@/components/screens/CategoryScreen/CategoryScreen';

import Loading from '../../loading';

type Props = {
  params: { slug: string[] };
};

export default function CategoryPage({ params }: Props) {
  return (
    <Suspense fallback={<Loading />}>
      <Nav slug={params.slug} sortItems={['All', 'Cardigan', 'Pullover', 'Vest']} />
      <CategoryScreen />
    </Suspense>
  );
}
