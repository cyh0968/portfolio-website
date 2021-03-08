/* React */
import { useState, useEffect } from 'react';

/* Utilities */
import PropType from 'prop-types';

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
  delay: PropType.number,
  children: PropType.string,
};

export default TypoAnimation;
