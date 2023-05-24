import type { CartData } from '@/types/cart-data.interface';

import Bag from './Bag/Bag';
import Summary from './Summary/Summary';

export default function CartScreen({ data }: { data: CartData }) {
  return (
    <div className='pt-8 pb-32'>
      <div className='container max-w-6xl'>
        <div className='w-full flex gap-20'>
          <Bag data={data} />
          <Summary />
        </div>
      </div>
    </div>
  );
}
