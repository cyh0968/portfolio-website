import utilStyles from '../../styles/utils.module.scss';
import { Layout } from '../../components/layout';

function Project() {
    return (
        <Layout>
            <section className={utilStyles.section}>
                <div className={utilStyles.sectionContent}>
                    <div className={utilStyles.sectionLeft}>
                        <h1 className={utilStyles.sectionTitle}>Project</h1>
                    </div>
                    <div className={utilStyles.sectionRight}>
                        <h2 className={utilStyles.heading2Xl}>Toronto Fashion</h2>
                        <h3 className={utilStyles.headingXl}>Motivation</h3>
                        <h3 className={utilStyles.headingXl}>Technologies</h3>
                        <h3 className={utilStyles.headingXl}>Code</h3>
                        <h3 className={utilStyles.headingXl}>Live Demo</h3>
                        <h3 className={utilStyles.headingXl}>Features</h3>
                        <h4 className={utilStyles.headingLg}>Real-Time Trading</h4>
                        <h4 className={utilStyles.headingLg}>Chatting Service</h4>
                        <h3 className={utilStyles.headingXl}>How it works?</h3>
                    </div>
                </div>

                <div className={utilStyles.sectionContent}>
                    <div className={utilStyles.sectionLeft}>
                        <h1 className={utilStyles.sectionTitle}>Project</h1>
                    </div>
                    <div className={utilStyles.sectionRight}>
                        <h2 className={utilStyles.heading2Xl}>Flea Market</h2>
                        <h3 className={utilStyles.headingXl}>Motivation</h3>
                        <h3 className={utilStyles.headingXl}>Technologies</h3>
                        <h3 className={utilStyles.headingXl}>Code</h3>
                        <h3 className={utilStyles.headingXl}>Live Demo</h3>
                        <h3 className={utilStyles.headingXl}>Features</h3>
                        <h4 className={utilStyles.headingLg}>Real-Time Trading</h4>
                        <h4 className={utilStyles.headingLg}>Chatting Service</h4>
                        <h3 className={utilStyles.headingXl}>How it works?</h3>
                    </div>
                </div>

                <div className={utilStyles.sectionContent}>
                    <div className={utilStyles.sectionLeft}>
                        <h1 className={utilStyles.sectionTitle}>&nbsp;Project</h1>
                    </div>
                    <div className={utilStyles.sectionRight}>
                        <h2 className={utilStyles.heading2Xl}>Sorting Algorithm Visualizer</h2>
                        <h3 className={utilStyles.headingXl}>Motivation</h3>
                        <h3 className={utilStyles.headingXl}>Technologies</h3>
                        <h3 className={utilStyles.headingXl}>Code</h3>
                        <h3 className={utilStyles.headingXl}>Live Demo</h3>
                        <h3 className={utilStyles.headingXl}>Features</h3>
                        <h4 className={utilStyles.headingLg}>Sorting Algorithm</h4>
                        <h4 className={utilStyles.headingLg}>Animation Controller</h4>
                        <h3 className={utilStyles.headingXl}>How it works?</h3>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Project;
