import styles from './ProjectCard.module.css';

export default function ProjectCard({ image, tags, title, description, liveLink, cacheLink }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {image ? (
          <img src={image} alt={title} className={styles.image} />
        ) : (
          <div className={styles.placeholderImage}></div>
        )}
      </div>
      <div className={styles.tags}>
        {tags.join(' ')}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.buttons}>
          {liveLink && (
            <a href={liveLink} className={styles.btnPrimary}>
              Live &lt;~&gt;
            </a>
          )}
          {cacheLink && (
            <a href={cacheLink} className={styles.btnSecondary}>
              Cached &gt;=
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
