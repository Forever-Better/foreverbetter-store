import clsx from 'clsx';
import * as React from 'react';

import styles from './Spinner.module.scss';

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  color?: string;
}

export const Spinner = React.memo(
  ({ 'aria-label': ariaLabel = 'Загружается...', className, color, size = 'md', ...restProps }: SpinnerProps) => (
    <div
      aria-label={ariaLabel}
      className={clsx(styles.root, styles[size], className, `bg-[${color}]`)}
      role='status'
      {...restProps}
    >
      <div className={styles.track} />
      <div className={styles.fills}>
        <div className={styles.fillmaskOne}>
          <div className={styles.fillSubMaskOne}>
            <div className={clsx(styles.fill)} />
          </div>
        </div>
        <div className={styles.fillmaskTwo}>
          <div className={styles.fillSubMaskTwo}>
            <div className={clsx(styles.fill)} />
          </div>
        </div>
      </div>
    </div>
  )
);

Spinner.displayName = 'Spinner';
