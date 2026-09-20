import styles from './ProjectCard.module.css';

// Treats "#" and empty values as non-links so we don't render dead anchors.
const isRealLink = (href) => Boolean(href) && href !== '#';

// Opens genuine external URLs in a new, safe tab; keeps in-page anchors normal.
const externalProps = (href) =>
  /^https?:\/\//i.test(href)
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

export default function ProjectCard({ image, tags, title, description, liveLink, cacheLink, githubLink }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {image ? (
          <img src={image} alt={`${title} project preview`} className={styles.image} loading="lazy" />
        ) : (
          <div className={styles.placeholderImage} aria-hidden="true"></div>
        )}
      </div>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.buttons}>
          {isRealLink(liveLink) && (
            <a
              href={liveLink}
              className={styles.btnPrimary}
              aria-label={`View ${title} link`}
               {...externalProps(liveLink)}
             >
               Link &lt;~&gt;
            </a>
          )}
          {isRealLink(cacheLink) && (
            <a
              href={cacheLink}
              className={styles.btnSecondary}
              aria-label={`View cached version of ${title}`}
              {...externalProps(cacheLink)}
            >
              Cached &gt;=
            </a>
          )}
          {isRealLink(githubLink) && (
            <a
              href={githubLink}
              className={styles.btnSecondary}
              aria-label={`View ${title} source code on GitHub`}
              {...externalProps(githubLink)}
            >
              GitHub &gt;=
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
