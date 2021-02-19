import styles from './navigation.module.scss';
import { useState } from 'react';
function Navigation() {
    const [isChecked, setCheckboxStatus] = useState(false);

    // When a user clicks the toggle button, it toggles navigation
    function handleOnChange(event) {
        setCheckboxStatus(event.target.checked);
    }

    // When a user clicks navigation, it closes navigation
    function handleOnClick() {
        setCheckboxStatus(false);
    }

    return (
        <>
            <input
                type="checkbox"
                className={styles.checkbox}
                onChange={handleOnChange}
                checked={isChecked}
                id="toggle"
            />
            <label htmlFor="toggle" className={styles.toggleButton}>
                <span className={styles.icon}>&nbsp;</span>
                &nbsp;
            </label>
            {isChecked ? (
                <nav className={styles.navigation} onClick={handleOnClick}>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <a href="#home" className={styles.link}>
                                Home
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a href="#about" className={styles.link}>
                                About
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a href="#blog" className={styles.link}>
                                Blog
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a href="#project" className={styles.link}>
                                Project
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a href="#contact" className={styles.link}>
                                Contact
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a href="https://tinyurl.com/y4yncva7" className={styles.link}>
                                Resume
                            </a>
                        </li>
                    </ul>
                </nav>
            ) : (
                ''
            )}
        </>
    );
}

export default Navigation;
