"use client";

import { useState } from 'react';
import styles from './Contacts.module.css';

const CONTACT_EMAIL = 'rahul9199140817@gmail.com';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');

    const subject = encodeURIComponent(`Portfolio contact from ${name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`
    );

    // Opens the user's email client pre-filled.
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <label className={styles.label} htmlFor="cf-name">Name</label>
      <input
        id="cf-name"
        type="text"
        className={styles.input}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        required
      />

      <label className={styles.label} htmlFor="cf-email">Email</label>
      <input
        id="cf-email"
        type="email"
        className={styles.input}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        required
      />

      <label className={styles.label} htmlFor="cf-message">Message</label>
      <textarea
        id="cf-message"
        className={styles.textarea}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your message..."
        rows={4}
        required
      />

      {error && <p className={styles.formError} role="alert">{error}</p>}

      <button type="submit" className={styles.submitBtn}>Send Message</button>
    </form>
  );
}
