import styles from './Header.module.css';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          {/* Logo Icon based on reference */}
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 0.5H4C1.79086 0.5 0 2.29086 0 4.5V12.5C0 14.7091 1.79086 16.5 4 16.5H12C14.2091 16.5 16 14.7091 16 12.5V4.5C16 2.29086 14.2091 0.5 12 0.5ZM12 4.5H4V12.5H12V4.5Z" fill="var(--text-white)"/>
            <rect x="4" y="4.5" width="8" height="8" fill="var(--text-white)"/>
          </svg>
        </div>
        <span className={styles.logoText}>Rahul</span>
      </div>
      <nav className={styles.nav}>
        <a href="#home"><span className={styles.hash}>#</span>home</a>
        <a href="#works"><span className={styles.hash}>#</span>works</a>
        <a href="#about-me"><span className={styles.hash}>#</span>about-me</a>
        <a href="#contacts"><span className={styles.hash}>#</span>contacts</a>
        <a href="/resume.pdf" download target="_blank" rel="noreferrer" className={styles.resumeLink}>
          <span className={styles.hash}>#</span>resume
        </a>
        <ThemeToggle />
      </nav>
    </header>
  );
}
