/* Next */
import Link from 'next/link';

/* Utilies */
import { getSortedPostsData } from '../../lib/posts';

/* Styles */
import styles from './index.module.scss';
import utilStyles from '../../styles/utils.module.scss';

/* Components */
import { Layout } from '../../components/layout';
import { Date, Section } from '../../components/ui-components';

/* Static Generation Helper Function */
export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: { allPostsData },
  };
}

function Blog({ allPostsData }) {
  return (
    <Layout>
      {allPostsData.length > 0 ? (
        <Section secondarySectionHeading='Blog'>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, title, date, time, link, categories }) => (
              <li className={utilStyles.item} key={id}>
                <h3 className={styles.title}>
                  <Link href={link}>
                    <a className={utilStyles.link}>{title}</a>
                  </Link>
                </h3>
                <small className={styles.details}>
                  <Date dateString={date}></Date>
                  {' ' + time}
                </small>
                {categories.length > 0 && (
                  <small className={styles.details}>
                    {categories.map((category, index, array) =>
                      index < array.length - 1 ? category + ', ' : category,
                    )}
                  </small>
                )}
              </li>
            ))}
          </ul>
        </Section>
      ) : (
        <div className={styles.container}>
          <h1 className={utilStyles.heading2Xl}>Comming Soon...</h1>
          <div className={styles.content}>
            <h2 className={utilStyles.goBackToHome}>
              <Link href='/'>
                <a className={utilStyles.link}>Go Back to Home</a>
              </Link>
            </h2>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Blog;
