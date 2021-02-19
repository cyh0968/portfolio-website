import styles from './section.module.scss';

function Section({ leftHeading, rightHeading, children }) {
    return (
        <section className={styles.section}>
            <div className={styles.sectionLeft}>
                <h1 className={styles.leftHeading}>{leftHeading}</h1>
            </div>
            <div className={styles.sectionRight}>
                <h2 className={styles.rightHeading}>{rightHeading}</h2>
                {children}
            </div>
        </section>
    );
}

export default Section;
