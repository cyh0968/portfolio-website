import { useState } from 'react';
import { mergeStrings, delay } from '../../../../utils';

import styles from './logo-container.module.scss';
import utilStyles from '../../../../styles/utils.module.scss';

const cardStyle = mergeStrings(styles.card, utilStyles.borderRound);

function LogoContainer({ fill = '#eeeeee', name, children }) {
    const [isClicked, setClick] = useState(false);
    const containerStyles = isClicked ? mergeStrings(styles.container, styles.animation) : styles.container;
    async function handleOnClick() {
        if (!isClicked) {
            setClick(true);
            await delay(1000);
            setClick(false);
        }
    }

    return (
        <div className={containerStyles} name={name} onClick={handleOnClick}>
            <div className={cardStyle}>
                <div className={styles.logo}>{children}</div>
                <div style={{ color: fill }} className={styles.text}>
                    {name}
                </div>
            </div>
        </div>
    );
}

export default LogoContainer;
