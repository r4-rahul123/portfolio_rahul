import styles from './Skills.module.css';
import SectionHeader from '../SectionHeader/SectionHeader';

const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    skills: ['Python', 'C++', 'C', 'Java', 'JavaScript', 'TypeScript', 'PHP', 'SQL']
  },
  {
    title: 'Frontend & Backend',
    skills: ['HTML', 'CSS', 'React', 'Redux', 'Tailwind CSS', 'Node.js', 'Express.js', 'Django', 'Next.js']
  },
  {
    title: 'AI / Data Science',
    skills: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'TensorFlow', 'Jupyter']
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL']
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'GitHub Actions', 'CI/CD']
  },
  {
    title: 'Tools',
    skills: ['Git']
  },
  {
    title: 'Soft Skills',
    skills: ['Leadership', 'Event Management', 'Writing', 'Public Speaking', 'Time Management']
  }
];

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
          {SKILL_CATEGORIES.map((category) => (
            <div className={styles.skillBox} key={category.title}>
              <h3 className={styles.skillTitle}>{category.title}</h3>
              <div className={styles.skillList}>
                {category.skills.map((skill) => (
                  <span key={skill} className={styles.skillItem}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
