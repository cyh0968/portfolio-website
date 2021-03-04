/* Next */
import Link from 'next/link';
/* Utilies */
import { getSortedPostsData } from '../../lib/posts';

/* Styles */
import utilStyles from '../../styles/utils.module.scss';
/* Component */
import { Layout } from '../../components/layout';
import { Date, Ipad, Section } from '../../components/ui-components';

export async function getStaticProps() {
    const allPostsData = await getSortedPostsData();
    return {
        props: { allPostsData },
    };
}
function Blog({ allPostsData }) {
    return (
        <Layout>
            <Section leftHeading="Blog" rightHeading="Blog">
                <div className={utilStyles.content}>
                    <ul className={utilStyles.list}>
                        {allPostsData.map(({ id, date, title }) => (
                            <li className={utilStyles.item} key={id}>
                                <Link href={`/posts/${id}`}>
                                    <a className={utilStyles.link}>{title}</a>
                                </Link>
                                <br />
                                <small className={utilStyles.details}>
                                    <Date dateString={date}></Date>
                                </small>
                            </li>
                        ))}
                    </ul>
                </div>
            </Section>
        </Layout>
    );
}

export default Blog;
