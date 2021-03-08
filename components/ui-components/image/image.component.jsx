/* Next */
import NextImage from 'next/image';

/* Utiles */
import PropTypes from 'prop-types';

/* Styles */
import styles from './image.module.scss';
import utilStyles from '../../../styles/utils.module.scss';

function Image({ src, title, width, height }) {
  return (
    <div className={styles.image}>
      <h4 className={styles.title}>{title}</h4>
      <NextImage
        className={utilStyles.borderRound}
        src={src}
        alt={title}
        width={width}
        height={height}></NextImage>
    </div>
  );
}

Image.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Image;
