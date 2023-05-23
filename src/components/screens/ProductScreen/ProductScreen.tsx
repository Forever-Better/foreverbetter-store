import type { Product } from '@/types/product.interface';

import Gallery from './Gallery/Gallery';
import Order from './Order/Order';

export default function ProductScreen({ data }: { data: Product }) {
  return (
    <div className='relative flex'>
      <Gallery data={data.images} />
      <Order data={data} />
    </div>
  );
}
