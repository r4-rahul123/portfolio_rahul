"use client";

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import styles from './Header.module.css';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch: only render the correct icon after mount.
  // Intentional one-time mount flag (safe, runs once).
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const isDark = theme !== 'light';
  const toggle = () => setTheme(isDark ? 'light' : 'dark');

  return (
    <button
      type="button"
      className={styles.themeToggle}
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      suppressHydrationWarning
    >
      {mounted && !isDark ? (
        // Moon icon (currently light -> offer dark)
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" suppressHydrationWarning>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" suppressHydrationWarning/>
        </svg>
      ) : (
        // Sun icon (currently dark -> offer light)
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" suppressHydrationWarning>
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" suppressHydrationWarning/>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round" suppressHydrationWarning/>
        </svg>
      )}
    </button>
  );
}
