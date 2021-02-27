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
        setCheckboxStatus((previous) => !previous);
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
            <label htmlFor="toggle" className={styles.button}>
                <span className={styles.icon}>&nbsp;</span>
            </label>
            <div className={styles.background}></div>
            <div className={styles.ripple1}></div>
            <div className={styles.ripple2}></div>
            <div className={styles.ripple3}></div>
            <nav className={styles.navigation} onClick={handleOnClick}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link href="/#home">
                            <a className={styles.link}>Home</a>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/about">
                            <a className={styles.link}>About</a>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <a href="/blog/" className={styles.link}>
                            Blog
                        </a>
                    </li>
                    <li className={styles.item}>
                        <Link href="/project">
                            <a className={styles.link}>Project</a>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="#contact">
                            <a className={styles.link}>Contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navigation;
