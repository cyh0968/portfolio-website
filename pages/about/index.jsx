import utilStyles from '../../styles/utils.module.scss';
import { Layout } from '../../components/layout';

function About() {
    return (
        <Layout>
            <section className="section" id="about">
                <div className="section__content">
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
                <div className="section__content">
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
                <div className="section__content">
                    <h2 className={utilStyles.headingXl}>Experience</h2>
                    <div className={utilStyles.content}>
                        <h3 className={utilStyles.headingLg}>Software Developer</h3>
                        <h4 className={utilStyles.headingMd}>Emerson DEC 2019 - SEP 2020</h4>
                        <span className={utilStyles.details}>details</span>
                        <div className={utilStyles.paragraph}>
                            <ul>
                                <li className={utilStyles.long}>
                                    Developed features for intranet user assistance application using React.js,
                                    Electron, SASS
                                </li>
                                <li className={utilStyles.long}>
                                    Developed Node.js automating test tools for database migration application
                                </li>
                                <li className={utilStyles.long}>
                                    Developed DB2/Oracle Database Migration Application using JDBC
                                </li>
                                <li className={utilStyles.long}>
                                    Contributed to development and maintenance of Warehouse Managemenet System using
                                    Java EE
                                </li>
                                <li className={utilStyles.long}>
                                    Developed a Powershell automation script to update user applications, which it
                                    increased software update rate by 20%
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={utilStyles.content}>
                        <h3 className={utilStyles.headingLg}>ITS Technologist</h3>
                        <h4 className={utilStyles.headingMd}>Seneca College Apr 2019 - Aug 2019</h4>
                        <span className={utilStyles.details}>details</span>
                        <div className={utilStyles.paragraph}>
                            <ul>
                                <li className={utilStyles.long}>Updated and reported issues on the helpdesk website</li>
                                <li className={utilStyles.long}>
                                    Assisted field service through client support, assigned task and research
                                </li>
                                <li className={utilStyles.long}>
                                    Provided user support service to resolve technical issues
                                </li>
                                <li className={utilStyles.long}>
                                    Installed and maintained equipment of E-classNameroom and computer labs
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="section__content">
                    <h2 className={utilStyles.headingXl}>Education</h2>
                    <div className={utilStyles.content}>
                        <h3 className={utilStyles.headingLg}>Computer Programming and Analysis</h3>
                        <h4 className={utilStyles.headingMd}>Seneca College JAN 2018 - DEC 2020</h4>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default About;
