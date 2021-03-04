import { mergeStrings } from '../../utils';

import styles from './index.module.scss';
import utilStyles from '../../styles/utils.module.scss';

import { Layout } from '../../components/layout';
import { Section } from '../../components/section';
import {
    LinkedInIcon,
    GithubIcon,
    TwitterIcon,
    MediumIcon,
    MailIcon,
    DocumentIcon,
} from '../../components/ui-components';

const listStyle = mergeStrings(styles.heading, utilStyles.link);

function Contact() {
    return (
        <Layout>
            <Section>
                <div className={styles.contact}>
                    <h1 className={utilStyles.headingXlc}>Contact</h1>
                    <ul className={utilStyles.list}>
                        <li className={utilStyles.item}>
                            <a
                                href="https://www.linkedin.com/in/yohan-choi-dev/"
                                target="_blank"
                                className={listStyle}
                                title="LinkedIn"
                            >
                                <LinkedInIcon name="logo-linkedin" className={utilStyles.iconLg}></LinkedInIcon>LinkedIn
                            </a>
                        </li>
                        <li className={utilStyles.item}>
                            <a
                                href="https://github.com/yohan-choi-dev"
                                target="_blank"
                                className={listStyle}
                                title="GitHub"
                            >
                                <GithubIcon name="logo-github" className={utilStyles.iconLg}></GithubIcon>Github
                            </a>
                        </li>
                        <li className={utilStyles.item}>
                            <a
                                href="https://twitter.com/remember2019"
                                target="_blank"
                                className={listStyle}
                                title="Twitter"
                            >
                                <TwitterIcon name="logo-twitter" className={utilStyles.iconLg}></TwitterIcon>Twitter
                            </a>
                        </li>
                        <li className={utilStyles.item}>
                            <a
                                href="https://twitter.com/remember2019"
                                target="_blank"
                                className={listStyle}
                                title="Twitter"
                            >
                                <MediumIcon name="logo-twitter" className={utilStyles.iconLg}></MediumIcon>Medium
                            </a>
                        </li>
                        <li className={utilStyles.item}>
                            <a href="malito:yohan.choi.dev@gmail.com" target="_blank" className={listStyle}>
                                <MailIcon name="mail-outline" className={utilStyles.iconLg} title="Mail"></MailIcon>Mail
                            </a>
                        </li>
                        <li className={utilStyles.item}>
                            <a
                                href="https://twitter.com/remember2019"
                                target="_blank"
                                className={listStyle}
                                title="Twitter"
                            >
                                <DocumentIcon name="logo-twitter" className={utilStyles.iconLg}></DocumentIcon>Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </Section>
        </Layout>
    );
}

export default Contact;
