import styles from './Contacts.module.css';
import SectionHeader from '../SectionHeader/SectionHeader';

export default function Contacts() {
  return (
    <section className={styles.contactsSection} id="contacts">
      <SectionHeader title="contacts" />
      <div className={styles.content}>
        <p className={styles.text}>
          I&apos;m interested in freelance opportunities. However, if you have other request or question, don&apos;t hesitate to contact me
        </p>
        <div className={styles.messageBox}>
          <h4 className={styles.messageTitle}>Message me here</h4>
          <div className={styles.contactItem}>
            {/* LinkedIn Icon */}
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.07 9.94 13.4 10.58 13 11.23V10.15H10.13V18.5H13V13.79C13 13.3 13.2 12.51 14.1 12.51C14.93 12.51 15.11 13.16 15.11 13.88V18.5H18.5ZM7.78 18.5V10.15H5.06V18.5H7.78ZM6.42 8.79C7.3 8.79 7.9 8.2 7.9 7.42C7.9 6.64 7.3 6.04 6.42 6.04C5.54 6.04 4.93 6.64 4.93 7.42C4.93 8.2 5.53 8.79 6.42 8.79Z" fill="var(--text-gray)"/>
            </svg>
            <span>/in/rahul-kumar-20r123</span>
          </div>
          <div className={styles.contactItem}>
            {/* Email Icon */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M3 8C3 6.89543 3.89543 6 5 6H27C28.1046 6 29 6.89543 29 8V24C29 25.1046 28.1046 26 27 26H5C3.89543 26 3 25.1046 3 24V8ZM6.09641 9L15.4217 15.2287C15.7725 15.4627 16.2275 15.4627 16.5783 15.2287L25.9036 9H6.09641ZM5 11.2386L14.3073 17.443C15.3596 18.1446 16.6404 18.1446 17.6927 17.443L27 11.2386V24H5V11.2386Z" fill="var(--text-gray)"/>
            </svg>
            <span>rahul9199140817@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}
