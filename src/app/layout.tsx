import { Toaster } from 'react-hot-toast';

import Layout from '@/components/layout/Layout';
import '@/styles/tailwind.css';
import '@/styles/styles.scss';

// const inter = Nunito({ subsets: ['latin'], weight: ['200', '300', '400', '500', '700'] });

export const metadata = {
  title: 'FOREVERBETTER Official Site',
  description:
    'Shop the FOREVERBETTER Official Website. Experience the world of ADERERROR through the latest fashion-based collections, contents, and objets.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Toaster position='bottom-center' />
        <Layout>
          <section>{children}</section>
        </Layout>
      </body>
    </html>
  );
}
