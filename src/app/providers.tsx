'use client';

import { CssBaseline } from '@nextui-org/react';
import { useServerInsertedHTML } from 'next/navigation';

export default function Providers({ children }: React.PropsWithChildren) {
  useServerInsertedHTML(() => <>{CssBaseline.flush()}</>);

  return children;
}
