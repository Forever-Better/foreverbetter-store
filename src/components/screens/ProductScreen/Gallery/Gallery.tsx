import Image from 'next/image';

import type { Product } from '@/types/product.interface';

export default function Gallery({ data }: { data: Product['images'] }) {
  return (
    <div className='w-2/4'>
      {data.map((item, i) => (
        <Image
          key={i}
          alt='Product'
          height={0}
          priority={i < 1}
          quality={100}
          sizes='100vw'
          src={item}
          style={{ width: '100%', height: 'auto' }}
          width={0}
        />
      ))}
    </div>
  );
}
