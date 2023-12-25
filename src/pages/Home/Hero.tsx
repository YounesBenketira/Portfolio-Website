import styles from './Hero.module.css';

export const Hero = () => {
    return (
        <div className={styles.globalWrapper}>
            <h1 className={styles.fullName}>Younes Benketira</h1>
            <h2 className={styles.jobTitle}>Full-Stack Developer</h2>
        </div>
    );
};
