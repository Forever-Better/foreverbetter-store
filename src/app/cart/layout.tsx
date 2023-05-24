'use client';

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1 className='text-center font-normal mt-4 mb-20'>SHOPPING BAG</h1>
      {children}
    </>
  );
}
