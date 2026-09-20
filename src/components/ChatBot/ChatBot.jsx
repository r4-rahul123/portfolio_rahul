"use client";

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './ChatBot.module.css';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! Ask me anything about Rahul.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.content })
      });
      
      const data = await res.json();
      if (data.reply) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
      }
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.chatbotContainer}>
      {isOpen ? (
        <div className={styles.chatWindow} role="dialog" aria-label="AI Assistant chat window">
          <div className={styles.chatHeader}>
            <span>AI Assistant</span>
            <button
              className={styles.closeBtn}
              onClick={toggleChat}
              aria-label="Close chat"
              title="Close chat"
            >
              X
            </button>
          </div>
          <div className={styles.chatHistory} role="log" aria-live="polite" aria-label="Chat messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={msg.role === 'user' ? styles.userMessage : styles.botMessage}>
                {msg.role === 'assistant' ? (
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                ) : (
                  msg.content
                )}
              </div>
            ))}
            {isLoading && <div className={styles.botMessage}>Thinking...</div>}
          </div>
          <form className={styles.chatForm} onSubmit={sendMessage}>
            <input 
              type="text" 
              className={styles.chatInput}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me something..."
              aria-label="Type your message"
              maxLength={1000}
              disabled={isLoading}
            />
            <button type="submit" className={styles.sendBtn} disabled={isLoading} aria-label="Send message">Send</button>
          </form>
        </div>
      ) : (
        <button className={styles.chatFab} onClick={toggleChat} aria-label="Open AI chat assistant" title="Ask me about Rahul">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" suppressHydrationWarning>
            <path d="M21 11.5C21 16.1944 16.9706 20 12 20C10.6695 20 9.40578 19.7346 8.27137 19.261C8.01947 19.1559 7.74052 19.1417 7.48118 19.2215L4.5492 20.1246C4.19532 20.2336 3.82914 19.921 3.90563 19.5621L4.52627 16.649C4.59599 16.3218 4.54589 15.9818 4.38531 15.6888C3.51864 14.107 3 12.8553 3 11.5C3 6.80558 7.02944 3 12 3C16.9706 3 21 6.80558 21 11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" suppressHydrationWarning/>
          </svg>
        </button>
      )}
    </div>
  );
}
