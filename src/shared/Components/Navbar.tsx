import { useState } from 'react';
import styles from './Navbar.module.css';
import { COMPONENT_IDS } from '../../App';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const handleMenuToggle = (): void => {
        setIsMenuOpen((prev: boolean) => !prev);
    };

    const onItemClicked = (targetId: string): void => {
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className={styles.globalWrapper}>
            <div className={`${styles.itemsWrapper} ${isMenuOpen && styles.showItemsWrapper}`}>
                <li onClick={() => onItemClicked(COMPONENT_IDS.ABOUT)}>About</li>
                <li onClick={() => onItemClicked(COMPONENT_IDS.PROJECTS)}>Projects</li>
                <li onClick={() => onItemClicked(COMPONENT_IDS.SKILLS)}>Skills</li>
                <li onClick={() => onItemClicked(COMPONENT_IDS.CONTACT)}>Contact</li>
            </div>
            <div className={styles.burgerMenu} onClick={handleMenuToggle}>
                <span className={`${styles.bar} ${isMenuOpen && styles.closeIcon}`}></span>
                <span className={`${styles.bar} ${isMenuOpen && styles.closeIcon}`}></span>
                <span className={`${styles.bar} ${isMenuOpen && styles.closeIcon}`}></span>
            </div>
        </div>
    );
};
