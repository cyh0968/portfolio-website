import utilStyles from '../../styles/utils.module.scss';
import { Layout } from '../../components/layout';
import { Date, Section } from '../../components/ui-components';
import { getAllPostsIds, getPostdata } from '../../lib/posts';
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
            <article>
                <Section>
                    <h1 className={utilStyles.headingXLc}>{postData.title}</h1>
                    <div className={utilStyles.details}>
                        <Date dateString={postData.date}></Date>
                    </div>

                    <br />
                </Section>
                <div className={utilStyles.content} dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
            </article>
        </Layout>
    );
}

export default Post;
