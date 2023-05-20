import { clsx } from 'clsx';

export default function IconButton({
  children,
  className,
  ...restProps
}: React.PropsWithChildren & React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={clsx('px-2.5 py-2.5 flex items-center justify-center', className)} {...restProps}>
      {children}
    </button>
  );
}
