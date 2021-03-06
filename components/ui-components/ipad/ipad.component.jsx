import styles from './ipad.module.scss';
import IpadSvg from '../../../assets/devices/ipad.svg';
import { TypoAnimation } from '../typo-animation';

function Ipad({ children }) {
  return (
    <div className={styles.container}>
      <IpadSvg className={styles.ipad}></IpadSvg>
      <div className={styles.screen}>
        <code>
          <TypoAnimation>{children}</TypoAnimation>
        </code>
      </div>
    </div>
  );
}

export default Ipad;
