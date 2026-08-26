import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.info}>
            <div className={styles.logoRow}>
              <div className={styles.logo}>
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 0.5H4C1.79086 0.5 0 2.29086 0 4.5V12.5C0 14.7091 1.79086 16.5 4 16.5H12C14.2091 16.5 16 14.7091 16 12.5V4.5C16 2.29086 14.2091 0.5 12 0.5ZM12 4.5H4V12.5H12V4.5Z" fill="var(--text-white)"/>
                  <rect x="4" y="4.5" width="8" height="8" fill="var(--text-white)"/>
                </svg>
                <span className={styles.logoText}>Rahul Kumar</span>
              </div>
              <span className={styles.email}>rahul9199140817@gmail.com</span>
            </div>
            <p className={styles.desc}>Web designer and front-end developer</p>
          </div>
          <div className={styles.media}>
            <h4 className={styles.mediaTitle}>Media</h4>
            <div className={styles.mediaIcons}>
              {/* Github */}
              <a href="https://github.com/r4-rahul123" target="_blank" rel="noreferrer"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.839 21.49C9.339 21.582 9.52 21.272 9.52 21.011C9.52 20.781 9.511 20.155 9.506 19.322C6.726 19.926 6.138 17.982 6.138 17.982C5.683 16.828 5.027 16.52 5.027 16.52C4.12 15.901 5.096 15.913 5.096 15.913C6.098 15.984 6.626 16.944 6.626 16.944C7.516 18.47 8.956 18.03 9.54 17.771C9.63 17.106 9.897 16.668 10.194 16.417C7.974 16.165 5.642 15.306 5.642 11.472C5.642 10.38 6.032 9.482 6.666 8.77C6.564 8.518 6.222 7.502 6.764 6.126C6.764 6.126 7.599 5.859 9.506 7.15C10.301 6.929 11.155 6.819 12 6.815C12.845 6.819 13.699 6.929 14.495 7.15C16.401 5.859 17.235 6.126 17.235 6.126C17.778 7.502 17.436 8.518 17.334 8.77C17.97 9.482 18.358 10.38 18.358 11.472C18.358 15.313 16.022 16.162 13.794 16.408C14.167 16.731 14.501 17.369 14.501 18.353C14.501 19.761 14.489 20.898 14.489 21.011C14.489 21.275 14.669 21.587 15.172 21.488C19.143 20.163 22 16.416 22 12C22 6.477 17.523 2 12 2Z" fill="var(--text-gray)"/></svg></a>
              {/* LinkedIn */}
              <a href="https://linkedin.com/in/rahul-kumar-20r123" target="_blank" rel="noreferrer"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.07 9.94 13.4 10.58 13 11.23V10.15H10.13V18.5H13V13.79C13 13.3 13.2 12.51 14.1 12.51C14.93 12.51 15.11 13.16 15.11 13.88V18.5H18.5ZM7.78 18.5V10.15H5.06V18.5H7.78ZM6.42 8.79C7.3 8.79 7.9 8.2 7.9 7.42C7.9 6.64 7.3 6.04 6.42 6.04C5.54 6.04 4.93 6.64 4.93 7.42C4.93 8.2 5.53 8.79 6.42 8.79Z" fill="var(--text-gray)"/></svg></a>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© Copyright {new Date().getFullYear()}. Made by Rahul Kumar</p>
        </div>
      </div>
    </footer>
  );
}
