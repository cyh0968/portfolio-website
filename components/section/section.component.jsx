import styles from './section.module.scss';

function Section({ leftHeading = null, rightHeading = null, children }) {
    return (
        <div className={styles.container}>
            <section className={styles.section}>
                {leftHeading && (
                    <div className={styles.sectionLeft}>
                        <h1 className={styles.leftHeading}>{leftHeading}</h1>
                    </div>
                )}
                <div className={styles.sectionRight}>
                    {rightHeading && <h2 className={styles.rightHeading}>{rightHeading}</h2>}
                    {children}
                </div>
            </section>
        </div>
    );
}

export default Section;
