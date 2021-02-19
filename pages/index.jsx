import utilStyles from '../styles/utils.module.scss';
import { Layout } from '../components/layout';

function Homepage() {
    return (
        <Layout>
            <div>
                <h1 className={utilStyles.heading2Xl}>Welcome to Yohan's website!</h1>
                <ul>
                    <li>About</li>
                    <li>Project</li>
                    <li>Contact</li>
                    <li>
                        Blog
                        <ul>
                            <li>Post 1</li>
                            <li>Post 2</li>
                            <li>Post 3</li>
                            <li>post 4</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </Layout>
    );
}

export default Homepage;
