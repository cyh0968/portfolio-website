import styles from './homepage.module.scss';
import { Layout } from '../../components/layout';
import { LinkedInIcon, GithubIcon, TwitterIcon, MailIcon, ResumeIcon } from '../../components/ui-components';

function Homepage() {
    return (
        <Layout>
            <section className="section" id="about">
                <div className="section__content">
                    <h1>About</h1>
                    <div className="text-container">
                        <p>Hello, I'm Yohan. Thank you for visiting my website!</p>
                        <p className="long-copy">
                            I believe that our fingertips can make a better world. As a software developer, I wish my
                            code is working in the real world and contributing to our society and community.
                        </p>
                        <p className="long-copy">
                            To create a better program, I do not hesitate to refactor my code. Attitude to find the best
                            solution for a problem is my asset. The intense passion for programming made me start to
                            join an open-source. Self-learning with a passion for programming is a nutrient to be a
                            better programmer.
                        </p>
                    </div>
                </div>
                <div className="section__content">
                    <h2>Skills</h2>
                    <div className="text-container">
                        <h3>Programming Languages</h3>
                        <span className="subheading">
                            JavaScript, Typescript, Java, C, C++, C#, Python, Bash, Powershell
                        </span>
                    </div>
                    <div className="text-container">
                        <h3>Database</h3>
                        <span className="subheading">
                            IBM DB2, Oracle Database, PostgreSQL, MySQL, SQLite, MongoDB, Redis
                        </span>
                    </div>
                    <div className="text-container">
                        <h3>Frameworks / Libraries</h3>
                        <span className="subheading">
                            Node.js/express, React.js, Redux, SASS, Babel, Webpack, Jest, jQuery, Socket.io, Sequelize,
                            Mongoose, ASP.net,Java EE, JDBC
                        </span>
                    </div>
                    <div className="text-container">
                        <h3>OS / Environments</h3>
                        <span className="subheading">
                            Ubuntu, Windows 7, Windows 10, Windows Server 2012, Digital Ocean Droplet, AWS EC2, AWS EBS,
                            AWS Lambda
                        </span>
                    </div>

                    <div className="text-container">
                        <h3>Tools</h3>
                        <span className="subheading">
                            Nginx, Visual Studio, VSCode, IntelliJ, Eclipse, Figma, Postman, Visio, Trello
                        </span>
                    </div>
                </div>
                <div className="section__content">
                    <h2>Experience</h2>
                    <div className="text-container">
                        <h3>Software Developer</h3>
                        <span className="subheading">Emerson DEC 2019 - SEP 2020</span>
                        <span className="details">details</span>
                        <div className="paragraph">
                            <ul>
                                <li className="long-copy">
                                    Developed features for intranet user assistance application using React.js,
                                    Electron, SASS
                                </li>
                                <li className="long-copy">
                                    Developed Node.js automating test tools for database migration application
                                </li>
                                <li className="long-copy">
                                    Developed DB2/Oracle Database Migration Application using JDBC
                                </li>
                                <li className="long-copy">
                                    Contributed to development and maintenance of Warehouse Managemenet System using
                                    Java EE
                                </li>
                                <li className="long-copy">
                                    Developed a Powershell automation script to update user applications, which it
                                    increased software update rate by 20%
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-container">
                        <h3>ITS Technologist</h3>
                        <span className="subheading">Seneca College Apr 2019 - Aug 2019</span>
                        <span className="details">details</span>
                        <div className="paragraph">
                            <ul>
                                <li className="long-copy">Updated and reported issues on the helpdesk website</li>
                                <li className="long-copy">
                                    Assisted field service through client support, assigned task and research
                                </li>
                                <li className="long-copy">Provided user support service to resolve technical issues</li>
                                <li className="long-copy">
                                    Installed and maintained equipment of E-classNameroom and computer labs
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="section__content">
                    <h2>Education</h2>
                    <div className="text-container">
                        <h3>Computer Programming and Analysis</h3>
                        <span className="subheading">Seneca College JAN 2018 - DEC 2020</span>
                    </div>
                </div>
            </section>
            <section className="section" id="project">
                <div className="section__content">
                    <h1>Project</h1>
                    <h2>Fleamarket</h2>
                    <div className="text-container">
                        <span className="details">Description</span>
                        <div className="paragraph">
                            Fleamarket is a real-time trading application to help users to exchange their property in a
                            fast and easy way The project is a web application which is developed in modern JavaScript
                            technologies such as node.js/express.js and react.js by using Nginx reverse proxy to serve
                            the API server and the client-side react application
                        </div>
                        <p>
                            <span className="subheading">Github:</span>&nbsp;
                            <a href="https://github.com/yohan-choi-dev/fleamarket-backend" target="_blank">
                                backend
                            </a>
                            &nbsp;
                            <a href="https://github.com/yohan-choi-dev/fleamarket-frontend" target="_blank">
                                frontend
                            </a>
                        </p>
                    </div>
                    <h2>Employee Management System</h2>
                    <div className="text-container">
                        <span className="details">Description</span>
                        <div className="paragraph">
                            The EMS application helps a user to manage employees on the web The project is developed in
                            server-side JavaScript technologies such as node.js/express.js, MongoDB, and PostgreSQL
                        </div>
                        <p>
                            <span className="subheading">Github:</span>&nbsp;
                            <a href="https://github.com/yohan-choi-dev/employee-management-system" target="_blank">
                                repository
                            </a>
                        </p>
                    </div>
                </div>
            </section>
            <section className="section" id="contact">
                <div className="section__content">
                    <h1>Contact</h1>
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
