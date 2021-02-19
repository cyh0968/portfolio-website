import utilStyles from '../../styles/utils.module.scss';
import { Layout } from '../../components/layout';
import { Section } from '../../components/section';
const title = 'Project';

function Project() {
    return (
        <Layout>
            <Section leftHeading={title} rightHeading="Toronto Fashion">
                <h3 className={utilStyles.headingXl}>Motivation</h3>
                <h3 className={utilStyles.headingXl}>Technologies</h3>
                <h3 className={utilStyles.headingXl}>Code</h3>
                <h3 className={utilStyles.headingXl}>Live Demo</h3>
                <h3 className={utilStyles.headingXl}>Features</h3>
                <h4 className={utilStyles.headingLg}>Real-Time Trading</h4>
                <h4 className={utilStyles.headingLg}>Chatting Service</h4>
                <h3 className={utilStyles.headingXl}>How it works?</h3>
            </Section>
            <Section leftHeading={title} rightHeading="Sorting Algoritm Visualizer">
                <h3 className={utilStyles.headingXl}>Motivation</h3>
                <h3 className={utilStyles.headingXl}>Technologies</h3>
                <h3 className={utilStyles.headingXl}>Code</h3>
                <h3 className={utilStyles.headingXl}>Live Demo</h3>
                <h3 className={utilStyles.headingXl}>Features</h3>
                <h4 className={utilStyles.headingLg}>Sorting Algorithm</h4>
                <h4 className={utilStyles.headingLg}>Animation Controller</h4>
                <h3 className={utilStyles.headingXl}>How it works?</h3>
            </Section>
            <Section leftHeading={title} rightHeading="Flea Market">
                <h3 className={utilStyles.headingXl}>Motivation</h3>
                <h3 className={utilStyles.headingXl}>Technologies</h3>
                <h3 className={utilStyles.headingXl}>Code</h3>
                <h3 className={utilStyles.headingXl}>Live Demo</h3>
                <h3 className={utilStyles.headingXl}>Features</h3>
                <h4 className={utilStyles.headingLg}>Real-Time Trading</h4>
                <h4 className={utilStyles.headingLg}>Chatting Service</h4>
                <h3 className={utilStyles.headingXl}>How it works?</h3>
            </Section>
        </Layout>
    );
}

export default Project;
