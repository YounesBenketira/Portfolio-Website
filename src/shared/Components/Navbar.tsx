import { useState } from 'react';
import styles from './Navbar.module.css';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const handleMenuToggle = (): void => {
        setIsMenuOpen((prev: boolean) => !prev);
    };

    return (
        <div className={styles.globalWrapper}>
            <div className={`${styles.itemsWrapper} ${isMenuOpen && styles.showItemsWrapper}`}>
                <li>Hero</li>
                <li>About</li>
                <li>Projects</li>
                <li>Skills</li>
                <li>Contact</li>
            </div>
            <div className={styles.burgerMenu} onClick={handleMenuToggle}>
                <span className={`${styles.bar} ${isMenuOpen && styles.closeIcon}`}></span>
                <span className={`${styles.bar} ${isMenuOpen && styles.closeIcon}`}></span>
                <span className={`${styles.bar} ${isMenuOpen && styles.closeIcon}`}></span>
            </div>
        </div>
    );
};
