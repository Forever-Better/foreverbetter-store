'use client';

import CartScreen from '@/components/screens/CartScreen/CartScreen';

export default function Cart() {
  if (typeof window === 'undefined') return null;

  const data = localStorage?.getItem('cart') ?? '[]';

  return <CartScreen data={JSON.parse(data)} />;
}
