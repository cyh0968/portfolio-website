/* Styles */
import styles from './ipad.module.scss';

/* Components */
import { TypoAnimation } from '../typo-animation';
import IpadSvg from '../../../assets/devices/ipad.svg';

function Ipad({ children }) {
  return (
    <div className={styles.container}>
      <IpadSvg className={styles.ipad}></IpadSvg>
      <div className={styles.screen}>
        <TypoAnimation>{children}</TypoAnimation>
      </div>
    </div>
  );
}

export default Ipad;
