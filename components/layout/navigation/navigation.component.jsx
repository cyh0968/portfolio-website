import styles from './navigation.module.scss';
function Navigation() {
    return (
        <div className={styles.container}>
            <input type="checkbox" className={styles.checkbox} id="navigation-toggle" />
            <label for="navigation-toggle" className={styles.button}>
                <span className={styles.icon}>&nbsp;</span>
                &nbsp;
            </label>
            <div className={styles.navigationBackground}>&nbsp;</div>
            <nav className={styles.navigation} id="navigation-toggle-menu">
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
        </div>
    );
}

export default Navigation;
