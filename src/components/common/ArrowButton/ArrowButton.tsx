import styles from './ArrowButton.module.scss';

export default function ArrowButton({ children }: React.PropsWithChildren) {
  return <button className={styles.root}>{children}</button>;
}
