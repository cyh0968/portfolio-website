/* Styles */
import styles from './section.module.scss';

function Section({
  primarySectionHeading = '',
  secondarySectionHeading = '',
  pageDivider = false,
  children,
}) {
  return (
    <>
      <section className={styles.section}>
        <aside className={styles.asideLeft}>
          <h1 className={styles.primarySectionHeading}>{primarySectionHeading}</h1>
        </aside>
        <article className={styles.article}>
          <h2 className={styles.secondarySectionHeading}>{secondarySectionHeading}</h2>
          {children}
        </article>
        <aside className={styles.asideRight}></aside>
      </section>
      {pageDivider && <div className={styles.pageDivider} />}
    </>
  );
}

export default Section;
