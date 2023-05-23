'use client';

import Bag from './Bag/Bag';
import Summary from './Summary/Summary';

export default function CartScreen() {
  if (!localStorage) return null;
  const data = localStorage?.getItem('cart');

  return (
    <div className='pt-8 pb-32'>
      <div className='container max-w-6xl'>
        <h1 className='text-base font-medium mb-4'>SHOPPING BAG</h1>
        <div className='w-full flex gap-20'>
          <Bag data={JSON.parse(data)} />
          <Summary />
        </div>
      </div>
    </div>
  );
}
