'use client';

import type { Metadata } from 'next';
import { useRouter } from 'next/navigation';
import { getSession } from 'next-auth/react';

import RegisterScreen from '@/components/screens/RegisterScreen/RegisterScreen';
import { getPublicUrl } from '@/helpers/getPublicUrl';

export function generateMetadata(): Metadata {
  return {
    title: 'Register - FOREVERBETTER Official Site'
  };
}

export default async function RegisterPage() {
  const router = useRouter();
  const session = await getSession();

  if (session) return router.push(getPublicUrl.main());

  return <RegisterScreen />;
}
