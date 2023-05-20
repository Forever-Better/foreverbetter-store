import styles from './LoadingPanel.module.scss';

export default function LoadingPanel() {
  return (
    <section className={styles.root}>
      <div className={styles.content}>
        <div className={styles.bar} />
      </div>
    </section>
  );
}
