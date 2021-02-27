import styles from './header.module.scss';

function Header({ children }) {
    return (
        <div>
            <header className={styles.header}>{children}</header>
        </div>
    );
}

export default Header;
