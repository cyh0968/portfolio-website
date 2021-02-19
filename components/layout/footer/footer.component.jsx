import styles from './footer.module.scss';
function Footer() {
    return (
        <footer>
            <div className="footer__container">
                <div className="footer__text">
                    <p>
                        <span className="small">&copy; 2020 by Yohan Choi. All rights reserved.</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
