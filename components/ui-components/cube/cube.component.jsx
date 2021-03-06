/* Utility */
import PropType from 'prop-types';
import { mergeStrings } from '../../../utils';

/* Style */
import styles from './cube.module.scss';

/* Component */
import { CubeFace } from './cube-face';

/* Helper Functions */
function* positions() {
  yield 'front';
  yield 'right';
  yield 'back';
  yield 'left';
  yield 'top';
  yield 'bottom';
}

function Cube({ direction = 'front', animation = false, children }) {
  const elements = Array.isArray(children) ? children : [children];
  const animationStyle = animation && styles.animation;
  const cubeShowStyle = styles[direction];
  const cubeStyles = mergeStrings(styles.cube, cubeShowStyle, animationStyle);
  const cubeFacePositions = positions();

  const listCubeFaces = Array.from({ ...elements, length: 6 }).map((cubeFace, index) => (
    <CubeFace key={index} position={cubeFacePositions.next().value}>
      {cubeFace}
    </CubeFace>
  ));

  return (
    <div className={styles.container}>
      <div name='cube' className={cubeStyles}>
        {listCubeFaces}
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
