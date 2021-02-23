import styles from './footer.module.scss';
import utilStyles from '../../../styles/utils.module.scss';
import { LinkedInIcon, GithubIcon, TwitterIcon, MailIcon } from '../../ui-components';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.contact} id="contact">
                <span className={styles.item}>
                    <a
                        href="https://www.linkedin.com/in/yohan-choi-dev/"
                        target="_blank"
                        className={utilStyles.link}
                        title="LinkedIn"
                    >
                        <LinkedInIcon name="logo-linkedin" className={utilStyles.iconMd}></LinkedInIcon>
                    </a>
                </span>
                <span className={styles.item}>
                    <a
                        href="https://github.com/yohan-choi-dev"
                        target="_blank"
                        className={utilStyles.link}
                        title="GitHub"
                    >
                        <GithubIcon name="logo-github" className={utilStyles.iconMd}></GithubIcon>
                    </a>
                </span>
                <span className={styles.item}>
                    <a
                        href="https://twitter.com/remember2019"
                        target="_blank"
                        className={utilStyles.link}
                        title="Twitter"
                    >
                        <TwitterIcon name="logo-twitter" className={utilStyles.iconMd}></TwitterIcon>
                    </a>
                </span>
                <span className={styles.item}>
                    <a href="malito:yohan.choi.dev@gmail.com" target="_blank" className={utilStyles.link}>
                        <MailIcon name="mail-outline" className={utilStyles.iconMd} title="Mail"></MailIcon>
                    </a>
                </span>
            </div>
            <div className={styles.copyright}>
                <p className={utilStyles.small}>&copy; 2020 by Yohan Choi. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
