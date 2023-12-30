import styles from './Contact.module.css';

export const Contact = () => {
    return (
        <div className={styles.globalWrapper}>
            <div className={styles.contactInfo}>
                <div>
                    <img src='./src/assets/icons/email.svg' alt='Github' />
                    <p>me@younesbenketira.com</p>
                </div>
                <div>
                    <img src='./src/assets/icons/phone.svg' alt='Github' />
                    <p>+1 438 927 9454</p>
                </div>
            </div>
            <div className={styles.socialLinks}>
                <a href='https://github.com/YounesBenketira' target='_blank' rel='noopener noreferrer'>
                    <img src='./src/assets/icons/github.svg' alt='Github' />
                </a>
                <a href='https://www.linkedin.com/in/younesbenketira/' target='_blank' rel='noopener noreferrer'>
                    <img src='./src/assets/icons/linkedin.svg' alt='LinkedIn' />
                </a>
                <a href='https://www.instagram.com/younesbenketira/' target='_blank' rel='noopener noreferrer'>
                    <img src='./src/assets/icons/instagram.svg' alt='Instagram' />
                </a>
            </div>
        </div>
    );
};
