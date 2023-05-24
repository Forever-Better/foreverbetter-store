import Image from 'next/image';
import Link from 'next/link';

import ColorInfo from '@/components/ColorInfo/ColorInfo';
import { getPublicUrl } from '@/helpers/getPublicUrl';
import type { CartItem as ICartItem } from '@/types/cart-data.interface';

import QuantityBlock from './QuantityBlock/QuantityBlock';
import SizeBlock from './SizeBlock/SizeBlock';
import ToolsBlock from './ToolsBlock/ToolsBlock';

export default function CartItem({ data }: { data: ICartItem }) {
  return (
    <div className='flex gap-6'>
      <Link href={getPublicUrl.product(data.id)}>
        <Image
          alt={data.name}
          className='h-[160px] max-w-none'
          height={160}
          src={data.mainImage}
          style={{ objectFit: 'cover' }}
          width={160}
        />
      </Link>
      <div className='flex flex-col justify-between w-full'>
        <div className='flex flex-col gap-2'>
          <div>
            <div className='flex justify-between'>
              <Link href={getPublicUrl.product(data.id)}>
                <h2 className='text-sm font-medium'>{data.name}</h2>
              </Link>
              <span>{data.price}</span>
            </div>
            <ColorInfo data={{ color: data.color, availableColors: data.availableColors }} />
          </div>
          <div className='flex gap-3'>
            <SizeBlock data={data.size} selectedSize={data.selectedSize} />
            <QuantityBlock maxQuantity={10} quantity={data.quantity} />
          </div>
        </div>
        <ToolsBlock />
      </div>
    </div>
  );
}
