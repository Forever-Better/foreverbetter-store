import Image from 'next/image';
import Link from 'next/link';

import ColorInfo from '@/components/ColorInfo/ColorInfo';
import { getPublicUrl } from '@/helpers/getPublicUrl';

import SizeBlock from './SizeBlock/SizeBlock';

export default function CartItem({ data }: { data: any }) {
  return (
    <div className='flex gap-6'>
      <figure>
        <Link href={getPublicUrl.product(data.id)}>
          <Image
            alt={data.title}
            className='h-[140px]'
            height={140}
            src={data.cover}
            style={{ objectFit: 'cover' }}
            width={140}
          />
        </Link>
      </figure>
      <div className='flex flex-col gap-3'>
        <div className=''>
          <Link href={getPublicUrl.product(data.id)}>
            <h2 className='text-sm font-medium'>{data.title}</h2>
          </Link>
          <ColorInfo data={data.colors} />
        </div>
        <SizeBlock data={data.sizes} />
      </div>
    </div>
  );
}
