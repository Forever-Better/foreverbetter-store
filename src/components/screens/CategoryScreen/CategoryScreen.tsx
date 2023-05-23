import Link from 'next/link';

import Product from '@/components/Product/Product';
import IconButton from '@/components/common/IconButton/IconButton';
import { Heart2 } from '@/components/icons/Heart2';
import { getPublicUrl } from '@/helpers/getPublicUrl';
import type { Product as IProduct } from '@/types/product.interface';

import styles from './CategoryScreen.module.scss';

export default function CategoryScreen({ data }: { data: IProduct[] }) {
  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {data?.map((item) => (
          <li key={item.id} className='relative'>
            <Link href={getPublicUrl.product(item.id)}>
              {' '}
              <Product data={item} />
            </Link>
            <div className='absolute top-2 right-2 z-0'>
              <IconButton>
                <Heart2 />
              </IconButton>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
