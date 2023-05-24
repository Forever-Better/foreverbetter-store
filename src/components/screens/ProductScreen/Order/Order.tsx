'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { CartItem } from '@/types/cart-data.interface';
import type { Product } from '@/types/product.interface';

import ActionsBlock from './Blocks/ActionsBlock';
import CareBlock from './Blocks/CareBlock';
import DetailBlock from './Blocks/DetailBlock';
import MaterialBlock from './Blocks/MaterialBlock';
import SizeInfoBlock from './Blocks/SizeInfoBlock';
import SizeSelectBlock from './Blocks/SizeSelectBlock';
import TopBlock from './Blocks/TopBlock';

export default function Order({ data }: { data: Product }) {
  const router = useRouter();
  const [size, setSize] = useState<string | undefined>(undefined);
  const [order, setOrder] = useLocalStorage<CartItem[]>('cart', []);
  const [isError, setIsError] = useState(false);

  const onSelectSize = (size: string) => {
    setSize(size);
  };

  const addItemToCart = () => {
    if (!size) return null;

    const findItem = order.find(({ id, selectedSize }) => id === data.id && size === selectedSize);

    if (findItem) {
      setOrder([
        ...order.filter(({ id }) => id !== findItem.id),
        { ...findItem, quantity: findItem.quantity + 1, selectedSize: size }
      ]);
    } else {
      setOrder([...order, { ...data, selectedSize: size, quantity: 1 }]);
    }
    router.refresh();
    toast('Товар добавлен в корзину');
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
              if (!size) {
                return setIsError(true);
              }
            }}
          >
            <SizeSelectBlock data={data.size} error={isError} selectedSize={size} onSelectSize={onSelectSize} />
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
