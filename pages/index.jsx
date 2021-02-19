import utilStyles from '../styles/utils.module.scss';
import { Layout } from '../components/layout';
import { LinkedInIcon, GithubIcon, TwitterIcon, MailIcon, ResumeIcon } from '../components/ui-components';

function Homepage() {
    return (
        <Layout>
            <h1 className={utilStyles.heading2Xl}>Welcome to Yohan's website!</h1>

            <section className="section" id="contact">
                <div className="section__content">
                    <h1 className={utilStyles.heading2Xl}>Contact</h1>
                    <div className="icon__container">
                        <ul>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/yohan-choi-dev/"
                                    target="_blank"
                                    className="contact-link"
                                >
                                    <LinkedInIcon name="logo-linkedin" className="contact-icon"></LinkedInIcon>Linkedin
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/yohan-choi-dev" target="_blank" className="contact-link">
                                    <GithubIcon name="logo-github" className="contact-icon"></GithubIcon>GITHUB
                                </a>
                            </li>

                            <li>
                                <a href="https://twitter.com/remember2019" target="_blank" className="contact-link">
                                    <TwitterIcon name="logo-twitter" className="contact-icon"></TwitterIcon>TWITTER
                                </a>
                            </li>
                            <li>
                                <a href="malito:yohan.choi.dev@gmail.com" target="_blank" className="contact-link">
                                    <MailIcon name="mail-outline" className="contact-icon"></MailIcon>EMAIL
                                </a>
                            </li>

                            <li>
                                <a href="https://tinyurl.com/y4yncva7" target="_blank" className="contact-link">
                                    <ResumeIcon name="document-outline" className="contact-icon"></ResumeIcon>RESUME
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Homepage;
