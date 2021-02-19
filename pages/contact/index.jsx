import styles from './index.module.scss';
import utilStyles from '../../styles/utils.module.scss';
import { Layout } from '../../components/layout';
import { LinkedInIcon, GithubIcon, TwitterIcon, MailIcon, ResumeIcon } from '../../components/ui-components';

function Contact() {
    return (
        <Layout>
            <section className={utilStyles.section}>
                <div className={utilStyles.sectionContent}>
                    <h1 className={utilStyles.heading2Xl}>Contact</h1>
                    <div className={utilStyles.iconContainer}>
                        <ul>
                            <li className={styles.list}>
                                <a
                                    href="https://www.linkedin.com/in/yohan-choi-dev/"
                                    target="_blank"
                                    className={styles.link}
                                >
                                    <LinkedInIcon name="logo-linkedin" className={utilStyles.iconMd}></LinkedInIcon>
                                    Linkedin
                                </a>
                            </li>
                            <li className={styles.list}>
                                <a href="https://github.com/yohan-choi-dev" target="_blank" className={styles.link}>
                                    <GithubIcon name="logo-github" className={utilStyles.iconMd}></GithubIcon>GITHUB
                                </a>
                            </li>

                            <li className={styles.list}>
                                <a href="https://twitter.com/remember2019" target="_blank" className={styles.link}>
                                    <TwitterIcon name="logo-twitter" className={utilStyles.iconMd}></TwitterIcon>TWITTER
                                </a>
                            </li>
                            <li className={styles.list}>
                                <a href="malito:yohan.choi.dev@gmail.com" target="_blank" className={styles.link}>
                                    <MailIcon name="mail-outline" className={utilStyles.iconMd}></MailIcon>EMAIL
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Contact;
