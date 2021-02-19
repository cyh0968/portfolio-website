import styles from './layout.module.scss';
import { Header } from './header';
import { Footer } from './footer';

function Layout({ children }) {
    return (
        <div>
            <Header></Header>
            <main className={styles.main}>{children}</main>
            <Footer></Footer>
        </div>
    );
}

export default Layout;
