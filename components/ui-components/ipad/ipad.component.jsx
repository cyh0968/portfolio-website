import styles from './ipad.module.scss';
import IpadSvg from '../../../assets/devices/ipad.svg';
import utilStyles from '../../../styles/utils.module.scss';

import { TypoAnimation } from '../typo-animation';

const text = `
import styles from './ipad.module.scss';
import IpadSvg from '../../../assets/devices/ipad.svg';
import utilStyles from '../../../styles/utils.module.scss';

import { TypoAnimation } from '../typo-animation';

function Ipad() {
  return (
    <div className={styles.container}>
        <IpadSvg className={styles.ipad}></IpadSvg>
        <div className={styles.screen}>
                <TypoAnimation>
                    Hi!, I'm Yohan. Hello, World!
                </TypoAnimation>
            </div>
        </div>
    );
}

export default Ipad;
`;

function Ipad() {
    return (
        <div className={styles.container}>
            <IpadSvg className={styles.ipad}></IpadSvg>
            <div className={styles.screen}>
                <code>
                    <TypoAnimation>{text}</TypoAnimation>
                </code>
            </div>
        </div>
    );
}

export default Ipad;
