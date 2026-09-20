"use client";

import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

const WORDS = ['full stack developer', 'competitive programmer'];

export default function Typewriter() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = WORDS[wordIndex];

    // Decide the next step and schedule it via a timer so we never call
    // setState synchronously in the effect body.
    const delay =
      !deleting && text === current
        ? 1500 // pause at full word
        : deleting && text === ''
          ? 400 // pause before typing next word
          : deleting
            ? 50
            : 100;

    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === '') {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % WORDS.length);
      } else {
        setText(
          deleting
            ? current.slice(0, text.length - 1)
            : current.slice(0, text.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex]);

  return (
    <span className={styles.highlight} suppressHydrationWarning>
      {text}
      <span className={styles.cursor} aria-hidden="true">|</span>
    </span>
  );
}
