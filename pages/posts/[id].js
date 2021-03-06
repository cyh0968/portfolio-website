/* Next */
import Link from 'next/link';

/* Styles */
import styles from './[id].module.scss';
import utilStyles from '../../styles/utils.module.scss';

/* Components */
import { Layout } from '../../components/layout';
import { Date, Section } from '../../components/ui-components';
import { getAllPostsIds, getPostdata } from '../../lib/posts';

/* Functions */
export async function getStaticPaths() {
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostdata(params.id);
  return {
    props: {
      postData,
    },
  };
}

function Post({ postData }) {
  return (
    <Layout siteTitle={postData.title}>
      <article className={styles.article}>
        <Section></Section>
        <h1 className={styles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.details}>
          <Date dateString={postData.date}></Date>
        </div>

        <br />
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </article>
      <div className={styles.backToList}>
        <Link href='/blog'>
          <a className={styles.backToList}>← Back to list</a>
        </Link>
      </div>
    </Layout>
  );
}

export default Post;
