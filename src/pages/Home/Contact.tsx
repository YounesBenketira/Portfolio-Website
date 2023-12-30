import { COMPONENT_IDS } from '../../App';
import styles from './Contact.module.css';
import { github, linkedin, instagram, email, phone } from '../../assets';

export const Contact = () => {
    return (
        <div className={styles.globalWrapper} id={COMPONENT_IDS.CONTACT}>
            <div className={styles.contactInfo}>
                <div>
                    <img src={email} alt='Github' />
                    <p>me@younesbenketira.com</p>
                </div>
                <div>
                    <img src={phone} alt='Github' />
                    <p>+1 438 927 9454</p>
                </div>
            </div>
            <div className={styles.socialLinks}>
                <a href='https://github.com/YounesBenketira' target='_blank' rel='noopener noreferrer'>
                    <img src={github} alt='Github' />
                </a>
                <a href='https://www.linkedin.com/in/younesbenketira/' target='_blank' rel='noopener noreferrer'>
                    <img src={linkedin} alt='LinkedIn' />
                </a>
                <a href='https://www.instagram.com/younesbenketira/' target='_blank' rel='noopener noreferrer'>
                    <img src={instagram} alt='Instagram' />
                </a>
            </div>
        </div>
    );
};
