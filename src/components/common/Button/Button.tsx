import clsx from 'clsx';
import React from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  stretched?: boolean;
}

export default function Button({ children, className, stretched = true, ...restProps }: ButtonProps) {
  return (
    <button
      className={clsx('h-8 border-black border border-solid text-xs primary-button', stretched && 'w-full', className)}
      {...restProps}
    >
      {children}
    </button>
  );
}
