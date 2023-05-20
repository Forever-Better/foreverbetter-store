import { productListData } from '@/lib/productListData';

import Bag from './Bag/Bag';

export default function CartScreen() {
  return (
    <div className='pt-8 pb-32'>
      <div className='container'>
        <Bag data={productListData} />
      </div>
    </div>
  );
}
