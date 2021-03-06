import { useState, useEffect } from 'react';
import PropType from 'prop-types';

import styles from './typo-animation.module.scss';

function TypoAnimation({ delay = 40, children = 'hello world' }) {
  const [characters, setCharacter] = useState(' ');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCharacter((previous) =>
        previous.length <= children.length ? previous + children[previous.length - 1] : previous,
      );
    }, delay);
    return () => clearTimeout(timeoutId);
  }, [characters.length]);

  return <>{characters}</>;
}

TypoAnimation.propTypes = {
  children: PropType.string,
};

export default TypoAnimation;
