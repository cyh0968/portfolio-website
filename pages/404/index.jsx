/* Next */
import Link from 'next/link';

/* Styles */
import styles from './index.module.scss';
import utilStyles from '../../styles/utils.module.scss';

/* Components */
import { Layout } from '../../components/layout';

function PageNotFound() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={utilStyles.heading2Xl}>404 Error - Page Not Found</h1>
        <div className={styles.content}>
          <h2 className={utilStyles.goBackToHome}>
            <Link href='/'>
              <a className={utilStyles.link}>Go Back to Home</a>
            </Link>
          </h2>
        </div>
      </div>
    </Layout>
  );
}

export default PageNotFound;
