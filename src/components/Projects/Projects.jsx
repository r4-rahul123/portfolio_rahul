import styles from './Projects.module.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import ProjectCard from '../ProjectCard/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'AI Notes Generator',
      description: 'Enterprise-grade AI study platform generating structured notes, MCQs, and Mermaid flowcharts from user prompts and PDFs.',
      tags: ['Next.js', 'BullMQ', 'Redis', 'MongoDB', 'Gemini AI', 'Tailwind CSS'],
      liveLink: '#',
      cacheLink: null,
      image: null
    },
    {
      title: 'Unified CP Tracker',
      description: 'Orchestrated API integration from Codeforces, CodeChef, and LeetCode into a singular dashboard with performance visualization.',
      tags: ['PHP', 'MySQL'],
      liveLink: '#',
      cacheLink: null,
      image: null
    },
    {
      title: 'Hackbyte 3.0 Sponsor Platform',
      description: 'Event platform for IIIT Jabalpur securing sponsors and managing the event (3x bigger than previous year).',
      tags: ['React', 'Node.js', 'Event Management'],
      liveLink: '#',
      cacheLink: null,
      image: null
    }
  ];

  return (
    <section className={styles.projectsSection} id="works">
      <SectionHeader title="projects" buttonText="View all" buttonLink="#" />
      <div className={styles.grid}>
        {projects.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </section>
  );
}
