import React from 'react';

import type { Product } from '@/types/product.interface';

export default function MaterialBlock({ data }: { data: Product['material'] }) {
  return (
    <div className='flex'>
      <span className='w-40'>Material</span>
      <ul className='flex flex-col gap-2'>
        {data.map(({ material, value }, i) => (
          <li key={i} className='text-xs flex gap-1'>
            <span>{material}</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
