/* Next */
import Link from 'next/link';

/* Utilies */
import { getSortedPostsData } from '../../lib/posts';

/* Styles */
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
      <Section secondarySectionHeading='Blog'>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, title, date, time, link, categories }) => (
            <li className={utilStyles.item} key={id}>
              <h3>
                <Link href={link}>
                  <a className={utilStyles.link}>{title}</a>
                </Link>
              </h3>
              <small className={utilStyles.details}>
                <Date dateString={date}></Date>
                {' ' + time}
              </small>
              {categories.length > 0 && (
                <small className={utilStyles.details}>
                  {categories.map((category, index, array) =>
                    index < array.length - 1 ? category + ', ' : category,
                  )}
                </small>
              )}
            </li>
          ))}
        </ul>
      </Section>
    </Layout>
  );
}

export default Blog;
