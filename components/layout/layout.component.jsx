import styles from './layout.module.sass';
import { Header } from './header';
import { Footer } from './footer';

function Layout({ children }) {
    return (
        <div>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </div>
    );
}

export default Layout;
