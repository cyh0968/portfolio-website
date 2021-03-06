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

function* getFaceStyles() {
  for (let faceStyle of faceStyles) {
    yield faceStyle;
  }
}

function FaceList({ children }) {
  const faces = Array.isArray(children) ? children : [children];
  const faceStyles = getFaceStyles();

  return Array.from({ ...faces, length: 6 }).map((face) => (
    <div key={nanoid()} className={faceStyles.next().value}>
      {face}
    </div>
  ));
}

FaceList.propTypes = {
  children: PropType.arrayOf(PropType.element),
};

export default FaceList;
