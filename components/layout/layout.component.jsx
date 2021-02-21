import styles from './layout.module.scss';
import { Header } from './header';
import { Footer } from './footer';
import { Sidebar } from './sidebar';

function Layout({ children }) {
    return (
        <div>
            <Header></Header>
            <Sidebar></Sidebar>
            <main className={styles.main}>{children}</main>
            <Footer></Footer>
        </div>
    );
}

export default Layout;
