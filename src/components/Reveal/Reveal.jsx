"use client";

import { useEffect, useRef, useState } from 'react';
import styles from './Reveal.module.css';

// Lightweight, CSS-based scroll reveal. Fades/slides content in once when it
// enters the viewport. Intentionally subtle.
export default function Reveal({ children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${styles.reveal} ${visible ? styles.visible : ''}`}>
      {children}
    </div>
  );
}
