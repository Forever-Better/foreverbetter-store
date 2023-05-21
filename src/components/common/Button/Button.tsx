import clsx from 'clsx';
import React from 'react';

import { Spinner } from '../Spinner/Spinner';

interface ButtonProps extends ReactTagProps<'button'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  stretched?: boolean;
  loading?: boolean;
}

export default function Button({
  children,
  className,
  disabled,
  loading = false,
  stretched = true,
  variant = 'primary',
  ...restProps
}: ButtonProps) {
  return (
    <button
      disabled={loading || disabled}
      className={clsx(
        'h-8 border-black border border-solid text-xs disabled:bg-opacity-40',
        stretched && 'w-full',
        variant === 'primary' && 'primary-button',
        variant === 'secondary' && 'secondary-button',
        variant === 'accent' && 'accent-button',
        className
      )}
      {...restProps}
    >
      {loading ? <Spinner color='red' size='sm' /> : children}
    </button>
  );
}
