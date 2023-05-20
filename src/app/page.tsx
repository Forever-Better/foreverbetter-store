import { Suspense } from 'react';

import HomeScreen from '@/components/screens/HomeScreen/HomeScreen';

import Loading from './loading';

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <HomeScreen />
    </Suspense>
  );
}
