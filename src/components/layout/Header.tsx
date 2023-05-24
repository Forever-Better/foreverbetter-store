'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Buy } from '@/components/icons/Buy';
import { Heart2 } from '@/components/icons/Heart2';
import { User } from '@/components/icons/User';
import { getPublicUrl } from '@/helpers/getPublicUrl';
import type { CartData } from '@/types/cart-data.interface';

import Brand from '../Brand/Brand';
import IconButton from '../common/IconButton/IconButton';

import Menu from './Menu/Menu';

export default function Header() {
  const router = useRouter();
  const cartData = (typeof window !== 'undefined' ? JSON.parse(localStorage?.getItem('cart') ?? '[]') : []) as CartData;
  const cartLength = cartData.reduce((sum, current) => sum + current.quantity, 0);

  return (
    <header className='h-14 sticky top-0 z-50 bg-white container flex items-center justify-between border-b border-black'>
      <Link href={getPublicUrl.main()}>
        <Brand height='28px' width='90px' />
      </Link>
      <Menu />
      <div className='flex gap-2 -mr-2.5'>
        <IconButton onClick={() => router.push(getPublicUrl.favorites())}>
          <Heart2 set='broken' />
        </IconButton>
        <IconButton className='relative' onClick={() => router.push(getPublicUrl.cart())}>
          <Buy set='broken' />
          <span className='absolute right-0.5 top-1 bg-black rounded-full w-4 h-4 text-white flex items-center justify-center text-xs font-medium'>
            {cartLength}
          </span>
        </IconButton>
        <IconButton onClick={() => router.push(getPublicUrl.login())}>
          <User set='broken' />
        </IconButton>
      </div>
    </header>
  );
}
