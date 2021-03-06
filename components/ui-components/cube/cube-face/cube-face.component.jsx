/* Utility */
import PropType from 'prop-types';
import { mergeStrings } from '../../../../utils';

/* Style */
import styles from './cube-face.module.scss';

function CubeFace({ key, position, children }) {
  const cubeFaceStyles = mergeStrings(styles.cubeFace, styles[position]);
  return (
    <div key={key} className={cubeFaceStyles}>
      {children}
    </div>
  );
}

CubeFace.propTypes = {
  children: PropType.element,
};

export default CubeFace;
