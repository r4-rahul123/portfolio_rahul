import styles from './Quote.module.css';

export default function Quote() {
  return (
    <section className={styles.quoteSection}>
      <div className={styles.quoteBox}>
        <div className={styles.quoteMarkTop}>&quot;</div>
        <p className={styles.quoteText}>With great power comes great electricity bill</p>
        <div className={styles.quoteMarkBottom}>&quot;</div>
      </div>
      <div className={styles.authorBox}>
        <p className={styles.authorText}>- Dr. Who</p>
      </div>
    </section>
  );
}
