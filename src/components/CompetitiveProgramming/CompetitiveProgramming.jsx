import styles from './CompetitiveProgramming.module.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import ProjectCard from '../ProjectCard/ProjectCard';

export default function CompetitiveProgramming() {
  const platforms = [
    {
      title: 'LeetCode',
      description: '300+ Problems Solved. Max Day Streak: 50+',
      tags: ['Data Structures', 'Algorithms'],
      liveLink: '#',
      cacheLink: null,
      image: null
    },
    {
      title: 'Codeforces',
      description: '70+ Problems Solved. Max Rating: 1133 (Newbie).',
      tags: ['C++', 'Math', 'Graphs'],
      liveLink: '#',
      cacheLink: null,
      image: null
    },
    {
      title: 'CodeChef',
      description: 'Max Rating: 1453 (2 Star). Best Global Rank: 509 in Starters 223.',
      tags: ['Java', 'C++', 'Logic'],
      liveLink: '#',
      cacheLink: null,
      image: null
    }
  ];

  return (
    <section className={styles.cpSection} id="competitive">
      <SectionHeader title="competitive-programming" buttonText="View all profiles" buttonLink="#" />
      <div className={styles.grid}>
        {platforms.map((plat, index) => (
          <ProjectCard key={index} {...plat} />
        ))}
      </div>
    </section>
  );
}
