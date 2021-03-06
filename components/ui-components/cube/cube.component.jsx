/* Utility */
import PropType from 'prop-types';
import { mergeStrings } from '../../../utils';

/* Style */
import styles from './cube.module.scss';

/* Component */
import { FaceList } from '../face-list';

function Cube({ direction = 'front', animation = false, children }) {
  const animationStyle = animation && styles.animation;
  const cubeShowStyle = styles[direction];
  const cubeStyles = mergeStrings(styles.cube, cubeShowStyle, animationStyle);

  return (
    <div className={styles.container}>
      <div name='cube' className={cubeStyles}>
        <FaceList>{children}</FaceList>
      </div>
    </div>
  );
}

Cube.propTypes = {
  direction: PropType.oneOf(['front', 'left', 'right', 'back', 'top', 'bottom']),
  animation: PropType.bool,
  children: PropType.arrayOf(PropType.element),
};

export default Cube;
