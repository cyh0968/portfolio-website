/* Utilities */
import PropTypes from 'prop-types';

/* Styles */
import styles from './iframe.module.scss';

function IFrame({ src, title, width = 800, children }) {
  return (
    <div className={styles.iFrame}>
      <h4 className={styles.title}>{title}</h4>
      <iframe
        src={src}
        title={title}
        width={width}
        height={(width / 16) * 9}
        frameBorder='0'
        allow='accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        loading='lazy'></iframe>
      {children}
    </div>
  );
}

IFrame.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.number,
};

export default IFrame;
