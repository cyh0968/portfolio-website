import styles from './header.module.scss';
import { Navigation } from '../navigation';

function Header() {
    return (
        <div>
            <header class="header" id="home">
                <Navigation></Navigation>
                <div class="header__textbox">
                    <h1>Thank you for visiting</h1>
                </div>
            </header>
        </div>
    );
}

export default Header;
