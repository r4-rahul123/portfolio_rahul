import styles from './Projects.module.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import ProjectCard from '../ProjectCard/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'AI Notes Generator',
      description: 'Enterprise-grade AI study platform generating structured notes, MCQs, and Mermaid flowcharts from user prompts and PDFs.',
      tags: ['Next.js', 'BullMQ', 'Redis', 'MongoDB', 'Gemini AI', 'Tailwind CSS'],
      liveLink: 'https://ai-notes-generator-omega.vercel.app/',
      githubLink: 'https://github.com/r4-rahul123/ai-notes-generator',
      image: '/projects/ai-notes-generator.png'
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
