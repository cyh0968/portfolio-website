import Link from 'next/link';
import styles from './index.module.scss';
import utilStyles from '../styles/utils.module.scss';
import { Layout } from '../components/layout';

function Homepage() {
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.intro}>
                    <span className={styles.leftAlign}>
                        <h1 className={styles.introText}>Full-stack web</h1>
                        <h1 className={styles.introText}>developer</h1>
                    </span>
                    <span className={styles.rightAlign}>
                        <h1 className={styles.introText}>currently based in</h1>
                        <h1 className={styles.introText}>Toronto.</h1>
                    </span>
                    <span className={styles.leftAlign}>
                        <h1 className={styles.introText}>Focussed on</h1>
                        <h1 className={styles.introText}>JavaScript</h1>
                        <h1 className={styles.introText}>Technologies</h1>
                    </span>
                    <span className={styles.rightAlign}>
                        <h1 className={styles.introText}>Long journey in</h1>
                        <h1 className={styles.introText}>craftmanship</h1>
                    </span>
                </div>
            </div>
        </Layout>
    );
}

export default Homepage;
