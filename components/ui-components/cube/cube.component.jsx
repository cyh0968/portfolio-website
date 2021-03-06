/* Utility */
import PropType from 'prop-types';
import { mergeStrings } from '../../../utils';
/* Style */
import styles from './cube.module.scss';
/* Component */
import { FaceList } from '../face-list';

const defaultConfig = { size: 'large', show: 'front', animation: false };
const cubeDirections = ['front', 'back', 'left', 'right', 'top', 'bottom'];

function getCubeShowStyles(show) {
  return cubeDirections.includes(show) && styles[show];
}

function Cube({
  size = defaultConfig.size,
  show = defaultConfig.show,
  animation = defaultConfig.animation,
  children,
}) {
  const animationStyle = animation && styles.animation;
  const cubeContainerStyle = mergeStrings(styles.container, styles[size]);
  const cubeShowStyle = getCubeShowStyles(show);
  const cubeStyles = mergeStrings(styles.cube, cubeShowStyle, animationStyle);

  return (
    <div className={cubeContainerStyle}>
      <div name='cube' className={cubeStyles}>
        <FaceList>{children}</FaceList>
      </div>
    </div>
  );
}

Cube.propTypes = {
  size: PropType.string,
  show: PropType.string,
  animation: PropType.bool,
  children: PropType.arrayOf(PropType.element),
};

export default Cube;
