export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1 className='text-center font-normal mt-4 mb-20'>Login</h1>
      {children}
    </>
  );
}
