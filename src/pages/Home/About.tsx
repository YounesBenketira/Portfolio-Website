import { COMPONENT_IDS } from '../../App';
import styles from './About.module.css';

export const About = () => {
    return (
        <div className={styles.globalWrapper} id={COMPONENT_IDS.ABOUT}>
            <h1 className={styles.backgroundText}>About</h1>
            <p className={styles.aboutText}>
                <strong>Business-minded engineer</strong> that loves to learn not only about scaleable software design but also about business and
                marketing. Will always be up to date with latest technologies with confident self-teaching skills.
            </p>
        </div>
    );
};
