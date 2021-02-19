import styles from './header.module.scss';
import { Navigation } from '../navigation';

function Header() {
    return (
        <div>
            <Navigation></Navigation>
            <header className="header" id="home">
                <div className="header__textbox">
                    <h1>Thank you for visiting</h1>
                </div>
            </header>
        </div>
    );
}

export default Header;
