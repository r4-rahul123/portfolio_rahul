import styles from './About.module.css';
import SectionHeader from '../SectionHeader/SectionHeader';

export default function About() {
  return (
    <section className={styles.aboutSection} id="about-me">
      <SectionHeader title="about-me" />
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <p className={styles.text}>
            Hello, I&apos;m Rahul Kumar!
          </p>
          <p className={styles.text}>
            I&apos;m a B.Tech Computer Science and Engineering student at IIITDM Jabalpur, India. I am a passionate developer with a strong foundation in problem-solving and software development.
          </p>
          <p className={styles.text}>
            I love building scalable web applications and exploring fields like AI/ML. When I&apos;m not studying, I actively participate in competitive programming and contribute to tech events like Hackbyte 3.0.
          </p>
          <a href="#" className={styles.btn}>Read more -&gt;</a>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img src="/hero.jpg" alt="Rahul" className={styles.image} />
            <div className={styles.dots1}></div>
            <div className={styles.dots2}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
