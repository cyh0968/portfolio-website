/* React */
import { useState } from 'react';

/* Utilities */
import { delay } from '../../../utils';

/* Styles */
import styles from './card.module.scss';

function Card({ name, children }) {
  const [isClicked, setClick] = useState(false);

  const containerStyles = isClicked ? styles.animation : styles.container;

  async function handleOnClick() {
    if (!isClicked) {
      setClick(true);
      await delay(1200);
      setClick(false);
    }
  }

  return (
    <div className={containerStyles} name={name} onClick={handleOnClick}>
      <div className={styles.card}>
        <div className={styles.logo}>{children}</div>
        <div className={styles.text}>{name}</div>
      </div>
    </div>
  );
}

export default Card;
