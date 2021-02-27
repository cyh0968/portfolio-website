import utilStyles from '../../styles/utils.module.scss';
import { Layout } from '../../components/layout';
import { Section } from '../../components/section';

function Blog() {
    return (
        <Layout>
            <Section leftHeading="Blog">
                <div className={utilStyles.content}>
                    <p className={utilStyles.long}>
                        Thank you for visiting my website! I'm on the long journey of craftmanship. I'm a simple person
                        who has only one purpose that is making good products.
                    </p>
                    <br />
                    <p className={utilStyles.long}>
                        I believe that the projects that I will work on will impact people's everyday lives, and I will
                        be willing to take my responsibility to make the best.
                    </p>
                    <br />
                    <p className={utilStyles.long}>
                        A promise with myself is that I will remain humble and improve myself by the end of my journey.
                    </p>
                </div>
            </Section>
        </Layout>
    );
}

export default Blog;
