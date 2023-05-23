import type { Product } from '@/types/product.interface';

import ColorBlock from './ColorBlock';

type TopBlockProps = Pick<Product, 'name' | 'price' | 'color' | 'availableColors'>;

export default function TopBlock({ availableColors, color, name, price }: TopBlockProps) {
  return (
    <div>
      {' '}
      <div className='flex justify-between items-center'>
        <h1 className='text-sm font-normal'>{name}</h1>
        <span>{price}</span>
      </div>
      <ColorBlock data={{ availableColors, color }} />
    </div>
  );
}
