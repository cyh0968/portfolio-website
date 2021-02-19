import styles from './footer.module.scss';
import utilStyles from '../../../styles/utils.module.scss';
function Footer() {
    return (
        <footer>
            <div className={styles.footerContainer}>
                <div className={styles.footerText}>
                    <p className={utilStyles.small}>&copy; 2020 by Yohan Choi. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
