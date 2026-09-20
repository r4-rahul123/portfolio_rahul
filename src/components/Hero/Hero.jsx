import styles from './Hero.module.css';
import Typewriter from './Typewriter';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.content}>
        <h1 className={styles.title}>
          Rahul is a <Typewriter />
        </h1>
        <p className={styles.description}>
          He crafts responsive websites where technologies meet creativity
        </p>
        <div className={styles.actions}>
          <a href="#contacts" className={styles.btn}>Contact me!!</a>
          <a
            href="/resume.pdf"
            download
            target="_blank"
            rel="noreferrer"
            className={styles.btnSecondary}
          >
            Download CV
          </a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        {/* Placeholder image representation */}
        <div className={styles.imageWrapper}>
          <img src="/hero.jpg" alt="Rahul" className={styles.image} />
          <div className={styles.geometricLogo}></div>
          <div className={styles.dots}>
            {/* simple CSS dots pattern */}
          </div>
        </div>
        <div className={styles.status}>
          <div className={styles.statusDot}></div>
          <span>Currently working on <span className={styles.statusHighlight}>Portfolio</span></span>
        </div>
      </div>
    </section>
  );
}
