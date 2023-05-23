import Link from 'next/link';

import { getPublicUrl } from '@/helpers/getPublicUrl';
import type { Product } from '@/types/product.interface';

export default function ColorInfo({ data }: { data: Pick<Product, 'color' | 'availableColors'> }) {
  return (
    <div className='flex items-center gap-2'>
      <span className='font-light'>{data.color.color}</span>
      <span className='flex gap-1 items-center'>
        <span className='w-[10px] h-[10px]' style={{ backgroundColor: data.color.value }} />
        {data.availableColors.map(({ productId, value }) => (
          <Link href={getPublicUrl.product(productId)}>
            {' '}
            <span className='inline-block w-[10px] h-[10px]' style={{ backgroundColor: value }} />
          </Link>
        ))}
      </span>
    </div>
  );
}
