import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.content}>
        <h1 className={styles.title}>
          Rahul is a <span className={styles.highlight}>web designer</span> and <br/> <span className={styles.highlight}>front-end developer</span>
        </h1>
        <p className={styles.description}>
          He crafts responsive websites where technologies meet creativity
        </p>
        <a href="#contacts" className={styles.btn}>Contact me!!</a>
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
