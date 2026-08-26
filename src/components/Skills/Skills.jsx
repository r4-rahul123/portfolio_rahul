import styles from './Skills.module.css';
import SectionHeader from '../SectionHeader/SectionHeader';

export default function Skills() {
  return (
    <section className={styles.skillsSection} id="skills">
      <SectionHeader title="skills" />
      <div className={styles.content}>
        <div className={styles.graphics}>
          {/* Decorative geometric shapes */}
          <div className={styles.dots1}></div>
          <div className={styles.dots2}></div>
          <div className={styles.square1}></div>
          <div className={styles.square2}></div>
          <div className={styles.square3}></div>
        </div>
        <div className={styles.skillsGrid}>
          <div className={styles.skillBox}>
            <h3 className={styles.skillTitle}>Languages</h3>
            <p className={styles.skillList}>Python PHP C++ C JavaScript SQL JAVA HTML CSS TypeScript</p>
          </div>
          <div className={styles.skillBox}>
            <h3 className={styles.skillTitle}>Frameworks</h3>
            <p className={styles.skillList}>React Redux TailwindCSS Scikit TensorFlow Django Node.js Express.js Next.js</p>
          </div>
          <div className={styles.skillBox}>
            <h3 className={styles.skillTitle}>Tools</h3>
            <p className={styles.skillList}>Pandas NumPy Matplotlib GIT PostgreSQL MySQL Jupyter</p>
          </div>
          <div className={styles.skillBox}>
            <h3 className={styles.skillTitle}>Databases</h3>
            <p className={styles.skillList}>MongoDB MySQL</p>
          </div>
          <div className={styles.skillBox}>
            <h3 className={styles.skillTitle}>Soft Skills</h3>
            <p className={styles.skillList}>Leadership Event Management Writing Public Speaking Time Management</p>
          </div>
        </div>
      </div>
    </section>
  );
}
