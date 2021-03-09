/* React */
import { useState, useEffect } from 'react';

/* Utility */
import PropType from 'prop-types';
import { mergeStrings } from '../../../utils';

/* Styles */
import styles from './slider.module.scss';

const slideStatusStyles = {
  current: mergeStrings(styles.slide, styles.current),
  previous: mergeStrings(styles.slide, styles.previous),
  next: mergeStrings(styles.slide, styles.next),
  ready: mergeStrings(styles.slide, styles.ready),
  waiting: mergeStrings(styles.slide, styles.waiting),
};

function Slider({
  width = '40rem',
  height = '20rem',
  autoPlayMode = false,
  playSpeed = 2000,
  children,
}) {
  const [indexOfCurrentSlide, setIndexOfCurrentSlide] = useState(0);
  const slides = Array.isArray(children) ? children : [children];
  const slideSize = { width: width, height: height };

  function showPreviousSlide() {
    // Decrease the index of current slide by -1.
    // If the current one is 0, the index will be the last index
    indexOfCurrentSlide !== 0
      ? setIndexOfCurrentSlide((previous) => previous - 1)
      : setIndexOfCurrentSlide(slides.length - 1);
  }

  function showNextSlide() {
    // Increase the index of current slide by 1.
    // If the current one is the last index, the index will be zero
    indexOfCurrentSlide < slides.length - 1
      ? setIndexOfCurrentSlide((previous) => previous + 1)
      : setIndexOfCurrentSlide(0);
  }

  function showSelectedSlide({ currentTarget: { id } }) {
    setIndexOfCurrentSlide(parseInt(id));
  }

  function getSlideStatusStyles(index, length) {
    /* 
        Slide Style Priority
        Current > left, right > ready > waiting
        */
    const difference = Math.abs(index - indexOfCurrentSlide);
    // If the difference is zero, it is the current slide
    if (difference === 0) {
      return slideStatusStyles.current;
    }

    // If the difference is one, it is adjacent to the current slide
    // If index < indexOfCurrent, it is the current's left, else right
    if (difference === 1) {
      return index < indexOfCurrentSlide ? slideStatusStyles.previous : slideStatusStyles.next;
    }

    //  If the difference is length - 1, the current slide locates on the first and the index is on the last
    // Otherwise, the current one is the last and the index is the first one
    // In those case, the slide of the index will be located to left of right of the current
    if (difference === length - 1) {
      return index > indexOfCurrentSlide ? slideStatusStyles.previous : slideStatusStyles.next;
    }

    // If the difference is two or length -2, it will be located on the ready position
    if (difference === 2 || difference === length - 2) {
      return slideStatusStyles.ready;
    }

    return slideStatusStyles.waiting;
  }

  useEffect(() => {
    if (autoPlayMode) {
      const interval = setInterval(
        () =>
          setIndexOfCurrentSlide((previous) => (previous < slides.length - 1 ? previous + 1 : 0)),
        playSpeed,
      );
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div style={slideSize} className={styles.container}>
      {!autoPlayMode && (
        <>
          <a className={styles.previousButton} onClick={showPreviousSlide}>
            &#10094;
          </a>
          <a className={styles.nextButton} onClick={showNextSlide}>
            &#10095;
          </a>
        </>
      )}
      <div className={styles.slider}>
        {slides.map((slide, index, array) => (
          <div
            key={index}
            id={index}
            style={slideSize}
            className={getSlideStatusStyles(index, array.length)}
            onClick={showSelectedSlide}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
}

Slider.propTypes = {
  children: PropType.arrayOf(PropType.element),
};

export default Slider;
