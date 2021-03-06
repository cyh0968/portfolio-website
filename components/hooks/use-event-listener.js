import { useRef, useEffect } from 'react';

function useEventListener(eventName, handler, target = globalThis) {
  const handlerRef = useRef();

  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    try {
      const isValidTarget = target && target?.addEventListener;
      if (!isValidTarget) {
        throw new Error('The target is invalid!');
      }
      const eventListner = (event) => handlerRef.current(event);
      target.addEventListener(eventName, eventListner);

      return () => {
        target.removeEventListener(eventName, eventListner);
      };
    } catch (error) {
      console.log(error);
    }
  }, [eventName, target]);
}

export default useEventListener;
