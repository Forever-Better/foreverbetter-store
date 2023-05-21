'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import type { ProductOrderFields } from '@/types/product-order-fields.interface';

import ActionsBlock from './Blocks/ActionsBlock';
import CareBlock from './Blocks/CareBlock';
import DetailBlock from './Blocks/DetailBlock';
import MaterialBlock from './Blocks/MaterialBlock';
import SizeInfoBlock from './Blocks/SizeInfoBlock';
import SizeSelectBlock from './Blocks/SizeSelectBlock';
import TopBlock from './Blocks/TopBlock';

export default function Order({ data }: { data: any }) {
  // const {} = useForm<ProductOrderFields>({ defaultValues: {} });
  const [orderData, setOrderData] = useState<{ productId: number; size: string | undefined }>({
    productId: data.id,
    size: undefined
  });
  const [isError, setIsError] = useState(false);

  const onSelectSize = (size: string) => {
    setOrderData(({ productId }) => ({ productId, size }));
  };

  return (
    <div className='sticky w-2/4 top-0 right-0 h-screen flex items-center'>
      <div className='mx-auto'>
        <div className='w-[510px] text-sm font-light flex flex-col gap-4'>
          <TopBlock colors={data.colors} price={data.price} title={data.title} />
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
              data={data.sizes}
              error={isError}
              selectedSize={orderData.size}
              onSelectSize={onSelectSize}
            />
            <ActionsBlock />
          </form>
          <MaterialBlock data={data.materials} />
          <DetailBlock />
          <CareBlock />
          <SizeInfoBlock />
        </div>
      </div>
    </div>
  );
}
