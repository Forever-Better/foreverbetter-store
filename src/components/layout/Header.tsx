'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Buy } from '@/components/icons/Buy';
import { Heart2 } from '@/components/icons/Heart2';
import { User } from '@/components/icons/User';
import { getPublicUrl } from '@/helpers/getPublicUrl';

import Brand from '../Brand/Brand';
import IconButton from '../common/IconButton/IconButton';

import Menu from './Menu/Menu';

export default function Header() {
  const router = useRouter();

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
        <IconButton onClick={() => router.push(getPublicUrl.cart())}>
          <Buy set='broken' />
        </IconButton>
        <IconButton onClick={() => router.push(getPublicUrl.signup())}>
          <User set='broken' />
        </IconButton>
      </div>
    </header>
  );
}
