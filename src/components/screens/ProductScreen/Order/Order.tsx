'use client';

import { useState } from 'react';

import ActionsBlock from './Blocks/ActionsBlock';
import CareBlock from './Blocks/CareBlock';
import DetailBlock from './Blocks/DetailBlock';
import MaterialBlock from './Blocks/MaterialBlock';
import SizeInfoBlock from './Blocks/SizeInfoBlock';
import SizeSelectBlock from './Blocks/SizeSelectBlock';
import TopBlock from './Blocks/TopBlock';

export default function Order({ data }: { data: any }) {
  const [orderData, setOrderData] = useState<{ productId: number; size: string | undefined }>({
    productId: data.id,
    size: undefined
  });

  const onSelectSize = (size: string) => {
    setOrderData(({ productId }) => ({ productId, size }));
  };

  return (
    <div className='sticky w-2/4 top-0 right-0 h-screen flex items-center'>
      <div className='mx-auto'>
        <div className='w-[510px] text-sm font-light flex flex-col gap-4'>
          <TopBlock colors={data.colors} price={data.price} title={data.title} />
          <SizeSelectBlock data={data.sizes} selectedSize={orderData.size} onSelectSize={onSelectSize} />
          <ActionsBlock />
          <MaterialBlock data={data.materials} />
          <DetailBlock />
          <CareBlock />
          <SizeInfoBlock />
        </div>
      </div>
    </div>
  );
}
