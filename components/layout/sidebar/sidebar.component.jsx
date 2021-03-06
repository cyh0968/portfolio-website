import { useState, useEffect, useRef } from 'react';
import { useEventListener } from '../../hooks';

import styles from './sidebar.module.scss';
import utilStyles from '../../../styles/utils.module.scss';

function Sidebar() {
  const rootElementRef = useRef(null);
  const [clientHeight, setClientHeight] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  useEventListener('scroll', handleScroll);

  // Get the reference of the root element when a layout is mounted
  useEffect(() => {
    if (!rootElementRef.current) {
      rootElementRef.current = globalThis?.document?.documentElement;
    }
    return () => {
      rootElementRef.current = null;
    };
  }, [rootElementRef.current]);

  // Whenever clientHeight or scrollHeight are changed, it call setter for them
  useEffect(() => {
    setClientHeight(rootElementRef.current.clientHeight);
    setScrollHeight(rootElementRef.current.scrollHeight);
    setScrollTop(rootElementRef.current.scrollTop);
  }, [rootElementRef.current?.clientHeight, rootElementRef.current?.scrollHeight]);

  function handleScroll() {
    const newScrollTop = rootElementRef.current.scrollTop;
    // To prevent frequent Change, it only updates when the difference is bigger than 10
    if (newScrollTop > scrollTop + 20 || newScrollTop < scrollTop - 20) {
      setScrollTop(newScrollTop);
    }
  }

  function getGageStyle() {
    const height =
      scrollHeight === clientHeight
        ? 100
        : Math.ceil((scrollTop / (scrollHeight - clientHeight)) * 100);
    const style = { height: +height + '%' };
    return style;
  }

  return (
    <div className={styles.siderbar}>
      <div className={styles.line}>
        <div className={styles.gage} style={getGageStyle()}></div>
      </div>
      <div className={styles.circle}>
        <a className={utilStyles.link} href='#'></a>
      </div>
      <div className={styles.circle}>
        <a className={utilStyles.link} href='#'></a>
      </div>
      <div className={styles.circle}></div>
    </div>
  );
}

export default Sidebar;
