import styles from './ipad.module.scss';
import IpadSvg from '../../../assets/devices/ipad.svg';
import utilStyles from '../../../styles/utils.module.scss';

import { TypoAnimation } from '../typo-animation';

const text = `
Thank you for visiting my website! I'm on the long journey of craftmanship. I'm a simple person
who has only one purpose that is making good products.

I believe that the projects that I will work on will impact people's everyday lives, and I will
be willing to take my responsibility to make the best.

A promise with myself is that I will remain humble and improve myself by the end of my journey.
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
