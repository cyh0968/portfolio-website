import styles from './navigation.module.scss';
function Navigation() {
    return (
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navigation-toggle" />
            <label for="navigation-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
                &nbsp;
            </label>
            <div className="navigation__background">&nbsp;</div>
            <nav className="navigation__nav" id="navigation-toggle-menu">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <a href="#home" className="navigation__link">
                            Home
                        </a>
                    </li>
                    <li className="navigation__item">
                        <a href="#about" className="navigation__link">
                            About
                        </a>
                    </li>
                    <li className="navigation__item">
                        <a href="#project" className="navigation__link">
                            Project
                        </a>
                    </li>
                    <li className="navigation__item">
                        <a href="#contact" className="navigation__link">
                            Contact
                        </a>
                    </li>
                    <li className="navigation__item">
                        <a href="https://tinyurl.com/y4yncva7" className="navigation__link">
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;
