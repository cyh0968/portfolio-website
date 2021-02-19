import utilStyles from '../styles/utils.module.scss';
import { Layout } from '../components/layout';

function Project() {
    return (
        <Layout>
            <section className="section" id="project">
                <div className="section__content">
                    <h1 className={utilStyles.heading2Xl}>Project</h1>
                    <h2 className={utilStyles.headingXl}>Fleamarket</h2>
                    <div className={utilStyles.content}>
                        <span className={utilStyles.details}>Description</span>
                        <div className={utilStyles.paragraph}>
                            Fleamarket is a real-time trading application to help users to exchange their property in a
                            fast and easy way The project is a web application which is developed in modern JavaScript
                            technologies such as node.js/express.js and react.js by using Nginx reverse proxy to serve
                            the API server and the client-side react application
                        </div>
                        <h4 className={utilStyles.headingMd}>Github:</h4>&nbsp;
                        <p>
                            <a href="https://github.com/yohan-choi-dev/fleamarket-backend" target="_blank">
                                backend
                            </a>
                            &nbsp;
                            <a href="https://github.com/yohan-choi-dev/fleamarket-frontend" target="_blank">
                                frontend
                            </a>
                        </p>
                    </div>
                    <h2 className={utilStyles.headingXl}>Employee Management System</h2>
                    <div className={utilStyles.content}>
                        <span className={utilStyles.details}>Description</span>
                        <div className={utilStyles.paragraph}>
                            The EMS application helps a user to manage employees on the web The project is developed in
                            server-side JavaScript technologies such as node.js/express.js, MongoDB, and PostgreSQL
                        </div>
                        <h4 className={utilStyles.headingMd}>Github:</h4>&nbsp;
                        <p>
                            <a href="https://github.com/yohan-choi-dev/employee-management-system" target="_blank">
                                repository
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Project;
