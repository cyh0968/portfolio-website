import styles from './logo-container.module.scss';

function LogoContainer({ name, children }) {
    return (
        <div className={styles.container} name={name}>
            <div className={styles.card}>
                <div className={styles.logo}>{children}</div>
                <div className={styles.text}>{name}</div>
            </div>
        </div>
    );
}

export default LogoContainer;
