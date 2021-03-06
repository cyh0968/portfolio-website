/* Styles */
import styles from './footer.module.scss';
import utilStyles from '../../../styles/utils.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <p className={utilStyles.small}>&copy; 2020 by Yohan Choi. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
