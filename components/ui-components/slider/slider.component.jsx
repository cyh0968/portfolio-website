import { useState } from 'react';
import { nanoid } from 'nanoid';
import { mergeStrings } from '../../../utils';

import styles from './slider.module.scss';

function Slider({ children }) {
    const [slideIndex, setSliderIndex] = useState(0);
    const slides = Array.isArray(children) ? children : [children];
    function previousSlid() {
        const length = slides.length;
        slideIndex === 0 ? setSliderIndex(length - 1) : setSliderIndex((previous) => previous - 1);
    }

    function nextSlide() {
        const length = slides.length;
        slideIndex === length - 1 ? setSliderIndex(0) : setSliderIndex((previous) => previous + 1);
    }

    function setSlideVisibility(index) {
        return slideIndex === index
            ? mergeStrings(styles.slide, styles.visible)
            : mergeStrings(styles.slide, styles.invisible);
    }
    const listSlides = slides.map((item, index) => (
        <div key={nanoid()} className={setSlideVisibility(index)}>
            {item}
        </div>
    ));

    return (
        <div className={styles.slider}>
            <a className={styles.previous} onClick={previousSlid}>
                &#10094;
            </a>
            <a className={styles.next} onClick={nextSlide}>
                &#10095;
            </a>
            {listSlides}
        </div>
    );
}

export default Slider;
