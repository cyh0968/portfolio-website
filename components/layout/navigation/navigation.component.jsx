import styles from './navigation.module.scss';
import Link from 'next/link';
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
                            <Link href="/">
                                <a className={styles.link}>Home</a>
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="/about">
                                <a className={styles.link}>About</a>
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <a href="#blog" className={styles.link}>
                                Blog
                            </a>
                        </li>
                        <li className={styles.item}>
                            <Link href="/projects">
                                <a className={styles.link}>Project</a>
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="/#contact">
                                <a className={styles.link}>Contact</a>
                            </Link>
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
