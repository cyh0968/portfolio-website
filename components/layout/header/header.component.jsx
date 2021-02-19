import styles from './header.module.scss';
import utilStyles from '../../../styles/utils.module.scss';
import { Navigation } from '../navigation';

function Header() {
    return (
        <div>
            <header className={styles.header} id="home">
                <Navigation></Navigation>
                <h1 className={utilStyles.heading2Xl}>Thank you for visiting</h1>
            </header>
        </div>
    );
}

export default Header;
