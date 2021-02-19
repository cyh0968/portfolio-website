import Image from 'next/image';

import utilStyles from '../../styles/utils.module.scss';
import { Layout } from '../../components/layout';

const name = 'Yohan Choi';

function About() {
    return (
        <Layout>
            <section className={utilStyles.section}>
                <Image
                    priority
                    src="/images/profile.jpg"
                    className={utilStyles.borderCircle}
                    height={144}
                    width={144}
                    alt={name}
                ></Image>
                <h2 className={utilStyles.headingMd}>{name}</h2>
                <div className={utilStyles.sectionContent}>
                    <h1 className={utilStyles.heading2Xl}>About</h1>
                    <div className={utilStyles.content}>
                        <p>Hello, I'm Yohan. Thank you for visiting my website!</p>
                        <p className={utilStyles.long}>
                            I believe that our fingertips can make a better world. As a software developer, I wish my
                            code is working in the real world and contributing to our society and community.
                        </p>
                        <p className={utilStyles.long}>
                            To create a better program, I do not hesitate to refactor my code. Attitude to find the best
                            solution for a problem is my asset. The intense passion for programming made me start to
                            join an open-source. Self-learning with a passion for programming is a nutrient to be a
                            better programmer.
                        </p>
                    </div>
                </div>
                <div className={utilStyles.sectionContent}>
                    <h2 className={utilStyles.headingXl}>Skills</h2>
                    <div className={utilStyles.content}>
                        <h3 className={utilStyles.headingLg}>Programming Languages</h3>
                        <h4 className={utilStyles.headingMd}>
                            JavaScript, Typescript, Java, C, C++, C#, Python, Bash, Powershell
                        </h4>
                    </div>
                    <div className={utilStyles.content}>
                        <h3 className={utilStyles.headingLg}>Database</h3>
                        <h4 className={utilStyles.headingMd}>
                            IBM DB2, Oracle Database, PostgreSQL, MySQL, SQLite, MongoDB, Redis
                        </h4>
                    </div>
                    <div className={utilStyles.content}>
                        <h3 className={utilStyles.headingLg}>Frameworks / Libraries</h3>
                        <h4 className={utilStyles.headingMd}>
                            Node.js/express, React.js, Redux, SASS, Babel, Webpack, Jest, jQuery, Socket.io, Sequelize,
                            Mongoose, ASP.net,Java EE, JDBC
                        </h4>
                    </div>
                    <div className={utilStyles.content}>
                        <h3 className={utilStyles.headingLg}>OS / Environments</h3>
                        <h4 className={utilStyles.headingMd}>
                            Ubuntu, Windows 7, Windows 10, Windows Server 2012, Digital Ocean Droplet, AWS EC2, AWS EBS,
                            AWS Lambda
                        </h4>
                    </div>

                    <div className={utilStyles.content}>
                        <h3 className={utilStyles.headingLg}>Tools</h3>
                        <h4 className={utilStyles.headingMd}>
                            Nginx, Visual Studio, VSCode, IntelliJ, Eclipse, Figma, Postman, Visio, Trello
                        </h4>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default About;
