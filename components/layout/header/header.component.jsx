import styles from './header.module.scss';
import utilStyles from '../../../styles/utils.module.scss';
import { Navigation } from '../navigation';

function Header() {
    return (
        <div>
            <header className={styles.header} id="home">
                <Navigation></Navigation>
            </header>
        </div>
    );
}

export default Header;
