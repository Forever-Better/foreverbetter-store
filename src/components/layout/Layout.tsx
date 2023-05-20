import Footer from './Footer/Footer';
import Header from './Header';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      <main className='flex-grow min-h-full'>{children}</main>
      <Footer />
    </>
  );
}
