/* Next */
import Head from 'next/head';

/* Styles */
import styles from './layout.module.scss';

/* Component */
import { Header } from './header';
import { Footer } from './footer';
import { Navigation } from './navigation';
import { Sidebar } from './sidebar';

function Layout({ defaultLayout = false, siteTitle = "Yohan's website", children }) {
  return (
    <div>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{siteTitle}</title>
      </Head>
      {defaultLayout ? (
        <>
          <Header>
            <Navigation></Navigation>
          </Header>
          <main className={styles.main}>{children}</main>
        </>
      ) : (
        <>
          <Header>
            <Navigation></Navigation>
          </Header>
          <Sidebar></Sidebar>
          <main className={styles.main}>{children}</main>
          <Footer></Footer>
        </>
      )}
    </div>
  );
}

export default Layout;
