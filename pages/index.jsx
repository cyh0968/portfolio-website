import Link from 'next/link';
import Image from 'next/image';
import styles from './index.module.scss';
import utilStyles from '../styles/utils.module.scss';
import { Layout } from '../components/layout';
import { Section } from '../components/section';

function Homepage() {
    return (
        <Layout>
            <div className={styles.container} id="home">
                <div className={styles.intro}>
                    <span className={styles.leftAlign}>
                        <h1 className={styles.introText}>Full-stack web</h1>
                        <h1 className={styles.introText}>developer</h1>
                    </span>
                    <span className={styles.rightAlign}>
                        <h1 className={styles.introText}>currently based in</h1>
                        <h1 className={styles.introText}>Toronto</h1>
                    </span>
                    <span className={styles.leftAlign}>
                        <h1 className={styles.introText}>Focussed on</h1>
                        <h1 className={styles.introText}>JavaScript</h1>
                        <h1 className={styles.introText}>Technologies</h1>
                    </span>
                    <span className={styles.rightAlign}>
                        <h1 className={styles.introText}>Long journey in</h1>
                        <h1 className={styles.introText}>craftmanship</h1>
                    </span>
                </div>
            </div>

            <Section leftHeading="About" rightHeading="About" id="about">
                <div className={utilStyles.content}>
                    <p className={utilStyles.long}>
                        Hello, I'm Yohan. Thank you for visiting my website! I believe that our fingertips can make a
                        better world. As a software developer, I wish my code is working in the real world and
                        contributing to our society and community.
                    </p>
                    <p className={utilStyles.long}>
                        To create a better program, I do not hesitate to refactor my code. Attitude to find the best
                        solution for a problem is my asset. The intense passion for programming made me start to join an
                        open-source. Self-learning with a passion for programming is a nutrient to be a better
                        programmer.
                    </p>
                </div>
            </Section>
            <Section leftHeading="Skills" rightHeading="Languages">
                <h4 className={utilStyles.headingMd}>
                    JavaScript, Typescript, Java, C, C++, C#, Python, Bash, Powershell
                </h4>
            </Section>
            <Section leftHeading="Skills" rightHeading="Databases">
                <h4 className={utilStyles.headingMd}>
                    IBM DB2, Oracle Database, PostgreSQL, MySQL, SQLite, MongoDB, Redis
                </h4>
            </Section>
            <Section leftHeading="Skills" rightHeading="Frameworks/Libraries">
                <h4 className={utilStyles.headingMd}>
                    Node.js/express, React.js, Redux, SASS, Babel, Webpack, Jest, jQuery, Socket.io, Sequelize,
                    Mongoose, ASP.net,Java EE, JDBC
                </h4>
            </Section>
            <Section leftHeading="Skills" rightHeading="OS/Environments">
                <h4 className={utilStyles.headingMd}>
                    Ubuntu, Windows 7, Windows 10, Windows Server 2012, Digital Ocean Droplet, AWS EC2, AWS EBS, AWS
                    Lambda
                </h4>
            </Section>
            <Section leftHeading="Skills" rightHeading="Tools">
                <h4 className={utilStyles.headingMd}>
                    Nginx, Visual Studio, VSCode, IntelliJ, Eclipse, Figma, Postman, Visio, Trello
                </h4>
            </Section>
        </Layout>
    );
}

export default Homepage;
