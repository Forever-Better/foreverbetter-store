import { Noto_Sans, Poppins, Roboto } from 'next/font/google';

import Layout from '@/components/layout/Layout';
import '@/styles/tailwind.css';
import '@/styles/styles.scss';

import Providers from './providers';

const inter = Poppins({ subsets: ['latin'], weight: ['200', '300', '400', '500', '700'] });

export const metadata = {
  title: 'FOREVERBETTER Official Site',
  description:
    'Shop the FOREVERBETTER Official Website. Experience the world of ADERERROR through the latest fashion-based collections, contents, and objets.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <Layout>
            <section>{children}</section>
          </Layout>
        </Providers>
      </body>
    </html>
  );
}