import Image from 'next/image';
import Link from 'next/link';

import { getPublicUrl } from '@/helpers/getPublicUrl';
import type { AvailableColor, Product as IProduct } from '@/types/product.interface';

export default function Product({ data }: { data: IProduct }) {
  return (
    <div className='relative'>
      <Image
        alt={data.name}
        height={0}
        priority={data.id <= 4}
        quality={100}
        sizes='50vw'
        src={data.mainImage}
        style={{ width: '100%', height: '100%' }}
        width={0}
      />
      <div className='absolute bottom-0 text-sm px-3 py-2 flex flex-col justify-center w-full'>
        <div className='font-medium'>{data.name}</div>
        <div className='font-light flex justify-between'>
          <div className='flex items-center gap-2'>
            <span>{data.color.color}</span>
            <span className='flex gap-1 items-center'>
              <span className='w-[10px] h-[10px]' style={{ backgroundColor: data.color.value }} />
              {data.availableColors.map(({ productId, value }: AvailableColor) => (
                <Link className='inline-block' href={getPublicUrl.product(productId)}>
                  <span className='inline-block w-[10px] h-[10px]' style={{ backgroundColor: value }} />
                </Link>
              ))}
            </span>
          </div>
          <span className='text-sm'>{data.price}</span>
        </div>
      </div>
    </div>
  );
}
