import styles from './SectionHeader.module.css';

export default function SectionHeader({ title, buttonText, buttonLink }) {
  return (
    <div className={styles.header}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>
          <span className={styles.hash}>#</span>{title}
        </h2>
        <div className={styles.line}></div>
      </div>
      {buttonText && (
        <a href={buttonLink} className={styles.button}>
          {buttonText} <span>~~&gt;</span>
        </a>
      )}
    </div>
  );
}
