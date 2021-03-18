/* Utilities */
import { mergeStrings } from '../../utils';

/* Styles */
import styles from './index.module.scss';
import utilStyles from '../../styles/utils.module.scss';

/* Components */
import { Layout } from '../../components/layout';
import { Section } from '../../components/ui-components/';
import {
  GithubIcon,
  LinkedInIcon,
  MailIcon,
  MediumIcon,
  TwitterIcon,
} from '../../components/ui-components/icons';

const listStyle = mergeStrings(styles.heading, utilStyles.link);

function Contact() {
  return (
    <Layout>
      <Section secondarySectionHeading='contact'>
        <div className={styles.contact}>
          <ul className={utilStyles.list}>
            <li className={styles.item}>
              <a
                title='LinkedIn'
                className={listStyle}
                href='https://www.linkedin.com/in/yohan-choi-dev/'
                target='_blank'>
                <LinkedInIcon name='logo-linkedin' className={utilStyles.iconLg}></LinkedInIcon>
                LinkedIn
              </a>
            </li>
            <li className={styles.item}>
              <a
                title='GitHub'
                className={listStyle}
                href='https://github.com/yohan-choi-dev'
                target='_blank'>
                <GithubIcon name='logo-github' className={utilStyles.iconLg}></GithubIcon>Github
              </a>
            </li>
            <li className={styles.item}>
              <a
                title='Twitter'
                className={listStyle}
                href='https://twitter.com/remember2019'
                target='_blank'>
                <TwitterIcon name='logo-twitter' className={utilStyles.iconLg}></TwitterIcon>Twitter
              </a>
            </li>
            <li className={styles.item}>
              <a
                title='Medium'
                className={listStyle}
                href='https://medium/@yohan-choi-dev'
                target='_blank'>
                <MediumIcon name='logo-twitter' className={utilStyles.iconLg}></MediumIcon>Medium
              </a>
            </li>
            <li className={styles.item}>
              <a
                title='Mail'
                className={listStyle}
                href='malito:yohan.choi.dev@gmail.com'
                target='_blank'>
                <MailIcon name='mail-outline' className={utilStyles.iconLg}></MailIcon>
                Mail
              </a>
            </li>
          </ul>
        </div>
      </Section>
    </Layout>
  );
}

export default Contact;
