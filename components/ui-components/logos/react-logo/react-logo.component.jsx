import ReactSVG from '../../../../public/images/logos/react.svg';
import styles from './react-logo.module.scss';

function ReactLogo({ fill = '#eeeeee', stroke = '', children }) {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <ReactSVG fill={fill} stroke={stroke} />
            </div>

            <div className={styles.children}>{children}</div>
        </div>
    );
}

export default ReactLogo;
