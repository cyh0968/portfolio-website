// Styles
import styles from './cube.module.scss';
import utilStyles from '../../../styles/utils.module.scss';
// Logos
import ReactLogo from '../../../assets/logos/react.svg';
import NodeJSLogo from '../../../assets/logos/node-dot-js.svg';
import ExpressLogo from '../../../assets/logos/express.svg';
import PostgreSQL from '../../../assets/logos/postgresql.svg';

function Cube({ fill = 'rgba(238,238,238,1)' }) {
    return (
        <div className={styles.container}>
            <div className={styles.cube}>
                <div className={styles.front}>
                    <ReactLogo fill={fill}></ReactLogo>
                    <h4 className={utilStyles.headingLg}>react</h4>
                </div>
                <div className={styles.back}>
                    <NodeJSLogo fill={fill}></NodeJSLogo>
                    <h4 className={utilStyles.headingLg}>nodejs</h4>
                </div>
                <div className={styles.left}>
                    <ExpressLogo fill={fill}></ExpressLogo>
                    <h4 className={utilStyles.headingLg}>express</h4>
                </div>
                <div className={styles.right}>
                    <PostgreSQL fill={fill}></PostgreSQL>
                    <h4 className={utilStyles.headingLg}>SQL</h4>
                </div>

                <div className={styles.top}></div>
                <div className={styles.bottom}></div>
            </div>
        </div>
    );
}

export default Cube;
