/* React */
import { useRef } from 'react';

import { useScrollPosition } from '../../hooks';

import { mergeStrings } from '../../../utils';

import styles from './scroll-animation.module.scss';

const animationStyles = {
    moveInLeft: mergeStrings(styles.container, styles.moveInLeft),
};

function ScrollAnimation({ animation = 'moveInLeft', children }) {
    const elementRef = useRef(null);
    const isOnScreen = useScrollPosition(elementRef.current);

    return isOnScreen ? (
        <div ref={elementRef} className={animationStyles[animation]}>
            {children}
        </div>
    ) : (
        <div ref={elementRef} className={styles.container}>
            {children}
        </div>
    );
}

export default ScrollAnimation;
