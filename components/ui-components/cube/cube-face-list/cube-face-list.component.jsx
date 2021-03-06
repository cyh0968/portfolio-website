/* Utility */
import PropType from 'prop-types';
import { nanoid } from 'nanoid';
import { mergeStrings } from '../../../utils';
/* Style */
import styles from './face-list.module.scss';

const faceStyles = [
  mergeStrings(styles.face, styles.front),
  mergeStrings(styles.face, styles.right),
  mergeStrings(styles.face, styles.back),
  mergeStrings(styles.face, styles.left),
  mergeStrings(styles.face, styles.top),
  mergeStrings(styles.face, styles.bottom),
];

function* getCubeFaceStyles() {
  for (let faceStyle of faceStyles) {
    yield faceStyle;
  }
}

function CubeFaceList({ children }) {
  const cubeFaces = Array.isArray(children) ? children : [children];
  const cubeFaceStyles = getCubeFaceStyles();

  return Array.from({ ...cubeFaces, length: 6 }).map((cubeFace, index) => (
    <div key={index} className={cubeFaceStyles.next().value}>
      {cubeFace}
    </div>
  ));
}

CubeFaceList.propTypes = {
  children: PropType.arrayOf(PropType.element),
};

export default CubeFaceList;
