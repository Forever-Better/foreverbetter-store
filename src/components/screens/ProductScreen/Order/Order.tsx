'use client';

import { useState } from 'react';

import type { Product } from '@/types/product.interface';

import ActionsBlock from './Blocks/ActionsBlock';
import CareBlock from './Blocks/CareBlock';
import DetailBlock from './Blocks/DetailBlock';
import MaterialBlock from './Blocks/MaterialBlock';
import SizeInfoBlock from './Blocks/SizeInfoBlock';
import SizeSelectBlock from './Blocks/SizeSelectBlock';
import TopBlock from './Blocks/TopBlock';

export default function Order({ data }: { data: Product }) {
  const [orderData, setOrderData] = useState<{ productId: number; size: string | undefined }>({
    productId: data.id,
    size: undefined
  });
  const [isError, setIsError] = useState(false);

  const onSelectSize = (size: string) => {
    setOrderData(({ productId }) => ({ productId, size }));
  };
  const addItemToCart = () => {
    const cartDataFromLs = localStorage.getItem('cart');
    const cartData = JSON.parse(cartDataFromLs ?? '');

    localStorage.setItem('cart', JSON.stringify([...cartData, data]));
  };

  return (
    <div className='sticky w-2/4 top-0 right-0 h-screen flex items-center'>
      <div className='mx-auto'>
        <div className='w-[510px] text-sm font-light flex flex-col gap-4'>
          <TopBlock availableColors={data.availableColors} color={data.color} name={data.name} price={data.price} />
          <form
            className='flex flex-col gap-2'
            onSubmit={(e) => {
              e.preventDefault();
              if (!orderData?.size) {
                return setIsError(true);
              }
            }}
          >
            <SizeSelectBlock
              data={data.size}
              error={isError}
              selectedSize={orderData.size}
              onSelectSize={onSelectSize}
            />
            <ActionsBlock addItemToCart={addItemToCart} />
          </form>
          <MaterialBlock data={data.material} />
          <DetailBlock />
          <CareBlock />
          <SizeInfoBlock />
        </div>
      </div>
    </div>
  );
}
