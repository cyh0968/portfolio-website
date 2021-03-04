import { useState, useEffect, useRef } from 'react';
import { useEventListener } from './index';

function useScrollPosition(target = null) {
    const rootElementRef = useRef(null);
    const [isOnScreen, setIsOnScreen] = useState(false);
    const [boundingClientRect, setBoundingClientRect] = useState(null);

    useEventListener('scroll', handleScroll);

    useEffect(() => {
        if (!rootElementRef.current) {
            rootElementRef.current = globalThis?.document?.documentElement;
        }
        return () => {
            rootElementRef.current = null;
        };
    }, [rootElementRef.current]);

    useEffect(() => {
        if (rootElementRef.current.scrollHeight && rootElementRef.current.clientHeight) {
            setBoundingClientRect(target?.getBoundingClientRect());
        }
    }, [rootElementRef.current?.scrollHeight, rootElementRef.current?.clientHeight]);

    function handleScroll() {
        if (boundingClientRect && !isOnScreen) {
            const { top, height } = boundingClientRect;
            const targtStart = top;
            const targetEnd = top + height;

            const clientStart = rootElementRef.current?.scrollTop;
            const clientEnd = rootElementRef.current?.scrollTop + rootElementRef.current?.clientHeight;

            if (targtStart >= clientStart && targetEnd <= clientEnd) {
                setIsOnScreen(true);
            }
        }
    }

    return isOnScreen;
}

export default useScrollPosition;
