import styles from './navigation.module.scss';
function Navigation() {
    return (
        <div className={styles.navigation}>
            <input type="checkbox" className={styles.navigation__checkbox} id="navigation-toggle" />
            <label for="navigation-toggle" className={styles.navigation__button}>
                <span className={styles.navigation__icon}>&nbsp;</span>
                &nbsp;
            </label>
            <div className={styles.navigation__background}>&nbsp;</div>
            <nav className={styles.navigation__nav} id="navigation-toggle-menu">
                <ul className={styles.navigation__list}>
                    <li className={styles.navigation__item}>
                        <a href="#home" className={styles.navigation__link}>
                            Home
                        </a>
                    </li>
                    <li className={styles.navigation__item}>
                        <a href="#about" className={styles.navigation__link}>
                            About
                        </a>
                    </li>
                    <li className={styles.navigation__item}>
                        <a href="#blog" className={styles.navigation__link}>
                            Blog
                        </a>
                    </li>
                    <li className={styles.navigation__item}>
                        <a href="#project" className={styles.navigation__link}>
                            Project
                        </a>
                    </li>

                    <li className={styles.navigation__item}>
                        <a href="#contact" className={styles.navigation__link}>
                            Contact
                        </a>
                    </li>
                    <li className={styles.navigation__item}>
                        <a href="https://tinyurl.com/y4yncva7" className={styles.navigation__link}>
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;
