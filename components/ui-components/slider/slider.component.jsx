/* React */
import { useState } from 'react';

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

function Slider({ children }) {
    const [indexOfCurrentSlide, setIndexOfCurrentSlide] = useState(0);
    const slides = Array.isArray(children) ? children : [children];
    const listSlides = slides.map((slide, index, array) => {
        return (
            <div key={index} className={getSlideStatusStyles(index, array.length)}>
                {slide}
            </div>
        );
    });

    function getSlideStatusStyles(index, length) {
        if (index === indexOfCurrentSlide) {
            return slideStatusStyles.current;
        }

        if (index === indexOfCurrentSlide - 1) {
            return slideStatusStyles.previous;
        }

        if (index === indexOfCurrentSlide + 1) {
            return slideStatusStyles.next;
        }

        if (index === length - 1 && indexOfCurrentSlide === 0) {
            return slideStatusStyles.previous;
        }

        if (index === 0 && indexOfCurrentSlide === length - 1) {
            return slideStatusStyles.next;
        }
        const difference = Math.abs(index - indexOfCurrentSlide);

        if (difference === 2 || difference === length - 2) {
            return slideStatusStyles.ready;
        }

        return slideStatusStyles.waiting;
    }

    function showNextSlide() {
        indexOfCurrentSlide < slides.length - 1
            ? setIndexOfCurrentSlide((previous) => previous + 1)
            : setIndexOfCurrentSlide(0);
    }

    function showPreviousSlide() {
        indexOfCurrentSlide !== 0
            ? setIndexOfCurrentSlide((previous) => previous - 1)
            : setIndexOfCurrentSlide(slides.length - 1);
    }

    return (
        <div className={styles.container}>
            <div className={styles.controller}>
                <a className={styles.previousButton} onClick={showPreviousSlide}>
                    &#10094;
                </a>
                <a className={styles.nextButton} onClick={showNextSlide}>
                    &#10095;
                </a>
            </div>
            <div className={styles.slider}>{listSlides}</div>
        </div>
    );
}

Slider.propTypes = {
    children: PropType.arrayOf(PropType.element),
};

export default Slider;
