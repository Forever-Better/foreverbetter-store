'use client';

import type { Metadata } from 'next';
import { useRouter } from 'next/navigation';
import { getSession } from 'next-auth/react';

import LoginScreen from '@/components/screens/LoginScreen/LoginScreen';
import { getPublicUrl } from '@/helpers/getPublicUrl';

export function generateMetadata(): Metadata {
  return {
    title: 'Login - FOREVERBETTER Official Site'
  };
}

export default async function LoginPage() {
  const router = useRouter();
  const session = await getSession();

  if (session) return router.push(getPublicUrl.main());

  return <LoginScreen />;
}
