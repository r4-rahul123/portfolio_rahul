import styles from './ProjectCard.module.css';
import Image from 'next/image';

// Treats "#" and empty values as non-links so we don't render dead anchors.
const isRealLink = (href) => Boolean(href) && href !== '#';

// Opens genuine external URLs in a new, safe tab; keeps in-page anchors normal.
const externalProps = (href) =>
  /^https?:\/\//i.test(href)
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

export default function ProjectCard({ image, tags, title, description, liveLink, cacheLink, githubLink, isLogo }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {image ? (
          isLogo ? (
            <img src={image} alt={`${title} logo`} className={styles.logoImage} loading="lazy" />
          ) : (
            <Image
              src={image}
              alt={`${title} project preview`}
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
              suppressHydrationWarning
            />
          )
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
