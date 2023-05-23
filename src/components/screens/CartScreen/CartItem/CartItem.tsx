import Image from 'next/image';
import Link from 'next/link';

import ColorInfo from '@/components/ColorInfo/ColorInfo';
import { getPublicUrl } from '@/helpers/getPublicUrl';

import QuantityBlock from './QuantityBlock/QuantityBlock';
import SizeBlock from './SizeBlock/SizeBlock';
import ToolsBlock from './ToolsBlock/ToolsBlock';

export default function CartItem({ data }: { data: any }) {
  return (
    <div className='flex gap-6'>
      <Link href={getPublicUrl.product(data.id)}>
        <Image
          alt={data.title}
          className='h-[160px] max-w-none'
          height={160}
          src={`http://127.0.0.1:1337${data.attributes.cover.data.attributes.url}`}
          style={{ objectFit: 'cover' }}
          width={160}
        />
      </Link>
      <div className='flex flex-col justify-between w-full'>
        <div className='flex flex-col gap-2'>
          <div>
            <div className='flex justify-between'>
              <Link href={getPublicUrl.product(data.id)}>
                <h2 className='text-sm font-medium'>{data.title}</h2>
              </Link>
              <span>{data.price}</span>
            </div>
            <ColorInfo data={data.attributes.colors} />
          </div>
          <div className='flex gap-3'>
            <SizeBlock data={data.attributes.sizes} selectedSize='m' />
            <QuantityBlock maxQuantity={10} quantity={3} />
          </div>
        </div>
        <ToolsBlock />
      </div>
    </div>
  );
}
