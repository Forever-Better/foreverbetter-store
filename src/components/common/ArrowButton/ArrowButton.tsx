import styles from './ArrowButton.module.scss';

export default function ArrowButton({ children, ...restProps }: React.PropsWithChildren & ReactTagProps<'button'>) {
  return (
    <button className={styles.root} {...restProps}>
      {children}
    </button>
  );
}
