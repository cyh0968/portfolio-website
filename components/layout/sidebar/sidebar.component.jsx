import styles from './sidebar.module.scss';
import utilStyles from '../../../styles/utils.module.scss';
import { useState, useEffect, useRef } from 'react';
import { useEventListner } from './hooks';

function Sidebar() {
    const rootElementRef = useRef(null);
    const [clientHeight, setClientHeight] = useState(0);
    const [scrollHeight, setScrollHeight] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);
    const gageStyle = { height: Math.ceil((scrollTop / (scrollHeight - clientHeight)) * 100) + '%' };

    useEventListner('scroll', handleScroll);
    // Get a reference for the root element
    useEffect(() => {
        if (!rootElementRef.current) {
            rootElementRef.current = globalThis?.document?.documentElement;
        }
    }, [rootElementRef.current]);

    // Whenever clientHeight or scrollHeight are changed, it call setter for them
    useEffect(() => {
        setClientHeight(rootElementRef.current.clientHeight);
        setScrollHeight(rootElementRef.current.scrollHeight);
        setScrollTop(rootElementRef.current.scrollTop);
    }, [rootElementRef.current?.clientHeight, rootElementRef.current?.scrollHeight]);

    async function handleScroll() {
        const newScrollTop = rootElementRef.current.scrollTop;
        // To prevent frequent Change, it only updates when the difference is bigger than 10
        if (newScrollTop > scrollTop + 20 || newScrollTop < scrollTop - 20) {
            setScrollTop(newScrollTop);
        }
    }

    return (
        <div className={styles.siderbar}>
            <div className={styles.line}>
                <div className={styles.gage} style={gageStyle}></div>
            </div>
            <div className={styles.circle}>
                <a className={utilStyles.link} href="#"></a>
            </div>
            <div className={styles.circle}>
                <a className={utilStyles.link} href="#"></a>
            </div>
            <div className={styles.circle}></div>
        </div>
    );
}

export default Sidebar;
