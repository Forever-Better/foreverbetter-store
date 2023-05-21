import { productListData } from '@/lib/productListData';

import Bag from './Bag/Bag';
import Summary from './Summary/Summary';

export default function CartScreen() {
  return (
    <div className='pt-8 pb-32'>
      <div className='container max-w-6xl'>
        <h1 className='text-base font-medium mb-4'>SHOPPING BAG</h1>
        <div className='w-full flex gap-20'>
          <Bag data={[]} />
          <Summary />
        </div>
      </div>
    </div>
  );
}
