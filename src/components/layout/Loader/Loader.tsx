'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import LoadingPanel from '@/components/LoadingPanel/LoadingPanel';

export default function Loader() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    router.events.on('routeChangeStart', () => setVisible(true));
    router.events.on('routeChangeComplete', () => setVisible(false));
  });

  return visible ? <LoadingPanel /> : null;
}
