import styles from './CompetitiveProgramming.module.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import ProjectCard from '../ProjectCard/ProjectCard';

export default function CompetitiveProgramming() {
  const platforms = [
    {
      title: 'LeetCode',
      description: '300+ Problems Solved. Max Day Streak: 50+. Specializes in C++ STL, mathematical optimizations, and greedy/graph algorithms.',
      tags: ['DSA'],
      liveLink: 'https://leetcode.com/u/r4rahul1_23/',
      cacheLink: null,
      image: '/logos/leetcode.svg'
    },
    {
      title: 'Codeforces',
      description: '70+ Problems Solved. Max Rating: 1133 (Newbie). Focused on C++ implementation speed, mathematical formulas, and combinatorial logic.',
      tags: ['C++', 'Math', 'Logic'],
      liveLink: 'https://codeforces.com/profile/r4_rahul123',
      cacheLink: null,
      image: '/logos/codeforces.svg'
    },
    {
      title: 'CodeChef',
      description: 'Max Rating: 1453 (2 Star). Best Global Rank: 509 in Starters 223. Strong in C++ logic building, math puzzles, and contest strategy.',
      tags: ['C++', 'Math', 'Logic'],
      liveLink: 'https://www.codechef.com/users/r4rahul1_23',
      cacheLink: null,
      image: '/logos/codechef.svg'
    }
  ];

  return (
    <section className={styles.cpSection} id="competitive">
      <SectionHeader title="competitive-programming" buttonText="View all profiles" buttonLink="#" />
      <div className={styles.grid}>
        {platforms.map((plat, index) => (
          <ProjectCard key={index} {...plat} isLogo />
        ))}
      </div>
    </section>
  );
}
