import Head from 'next/head';
import styles from './layout.module.scss';
import { Header } from './header';
import { Footer } from './footer';
import { Navigation } from './navigation';
import { Sidebar } from './sidebar';

function Layout({ defaultLayout = false, siteTitle = "Yohan's website", children }) {
    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Yohan's portfolio website" />
                <meta name="og:title" content={siteTitle} />
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
