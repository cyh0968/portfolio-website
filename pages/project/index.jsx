import Link from 'next/link';
import utilStyles from '../../styles/utils.module.scss';
import { Layout } from '../../components/layout';
import { Section } from '../../components/section';
import { Button, Slider } from '../../components/ui-components';
import {
    Css3Logo,
    ExpressLogo,
    JavaScriptLogo,
    MySqlLogo,
    NodeJsLogo,
    ReactLogo,
    SassLogo,
} from '../../components/ui-components/logos';

function Project() {
    return (
        <Layout>
            <div className={utilStyles.lineBreak} />
            <Section leftHeading="project">
                <h1 className={utilStyles.heading2Xl}>Sorting Algoritm</h1>
                <h1 className={utilStyles.heading2Xl}>Visualizer</h1>

                <h3 className={utilStyles.headingXl}>Introduction</h3>
                <div className={utilStyles.content}>
                    <p className={utilStyles.long}>
                        While I was learning sorting algorithms, I was wondering how each sorting algorithm would look.
                        It was pretty interesting to see how each algorithm looks, and it gave me a better understanding
                        of sorting algorithms. For instance, if a sorting algorithm uses the divide and conquers
                        approach, you can see the pattern of self-imitation.
                    </p>
                    <br />
                    <div className={utilStyles.alignRight}>
                        <Button name="demo" href="http://sav.yohan-choi.com/">
                            Demo
                        </Button>
                        <Button name="code" href="https://github.com/yohan-choi-dev/sorting-algorithm-visualizer">
                            Code
                        </Button>
                    </div>
                </div>

                <h3 className={utilStyles.headingXl}>Technologies</h3>
                <div className={utilStyles.horizontal}>
                    <JavaScriptLogo></JavaScriptLogo>
                    <ReactLogo></ReactLogo>
                    <SassLogo></SassLogo>
                </div>

                <h3 className={utilStyles.headingXl}>Features</h3>
                <h4 className={utilStyles.headingLg}>Controller</h4>
                <div className={utilStyles.content}>
                    <p className={utilStyles.long}>
                        By default, you can play, pause, forward, backward the sorting algorithm animation.
                    </p>
                    <br />
                    <p className={utilStyles.long}>
                        In a desktop environment, you can control the image with a keyboard.
                    </p>
                    <p className={utilStyles.long}>(&#8592;: backward, space: play/pause, &#8594;: forward)</p>
                    <br />
                    <p className={utilStyles.long}>
                        In Mobile, you can control the animation with wide buttons on the animation. (left: backward,
                        center: play/pause, right: forward)
                    </p>
                </div>
                <Slider>
                    <div>
                        <iframe
                            width="784"
                            height="441"
                            src="https://www.youtube.com/embed/5bxqWZ6IHgk"
                            frameBorder="0"
                            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div>
                        <h4 className={utilStyles.headingLg}>Bubble Sort</h4>
                        <iframe
                            width="784"
                            height="441"
                            src="https://www.youtube.com/embed/VaTS6i_g6Fo"
                            frameBorder="0"
                            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div>
                        <h4 className={utilStyles.headingLg}>Selection Sort</h4>
                        <iframe
                            width="784"
                            height="441"
                            src="https://www.youtube.com/embed/UwGUuV0lQgk"
                            frameBorder="0"
                            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div>
                        <h4 className={utilStyles.headingLg}>Insertion Sort</h4>
                        <iframe
                            width="784"
                            height="441"
                            src="https://www.youtube.com/embed/863sLH3mAzA"
                            frameBorder="0"
                            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div>
                        <h4 className={utilStyles.headingLg}>Merge Sort</h4>
                        <iframe
                            width="784"
                            height="441"
                            src="https://www.youtube.com/embed/CU-sk9Pwu6w"
                            frameBorder="0"
                            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div>
                        <h4 className={utilStyles.headingLg}>Quick Sort</h4>
                        <iframe
                            width="784"
                            height="441"
                            src="https://www.youtube.com/embed/qrCrlBGSVRM"
                            frameBorder="0"
                            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </Slider>

                <h3 className={utilStyles.headingXl}>How it works?</h3>
                <div className={utilStyles.content}>
                    <p className={utilStyles.long}>
                        It is built with React Hooks and Sass. When a user triggers the play function, the animation
                        utility will record each step of the sorting algorithm while the sorting algorithm runs and
                        sorts the actual array.
                    </p>
                    <br />
                    <p className={utilStyles.long}>
                        Once the recording is completed, the record will be played by the player function. The player
                        function calls from the generator function, and the generator only updates the frame of the
                        animation only when the player can run the animation.
                    </p>
                    <br />
                    <p className={utilStyles.long}>
                        Before it updates an element on the DOM, the application stores the element's original status in
                        the undo stack. In that way, the application can run backward and forward without any problem.
                    </p>
                </div>
            </Section>
            <div className={utilStyles.lineBreak} />
            <Section leftHeading="project" rightHeading="Flea Market">
                <h3 className={utilStyles.headingXl}>Introduction</h3>
                <div className={utilStyles.content}>
                    <p className={utilStyles.long}>
                        While I was learning sorting algorithms, I was wondering how each sorting algorithm would look.
                        It was pretty interesting to see how each algorithm looks, and it gave me a better understanding
                        of sorting algorithms. For instance, if a sorting algorithm uses the divide and conquers
                        approach, you can see the pattern of self-imitation.
                    </p>
                    <br />
                    <div className={utilStyles.alignCenter}>
                        <Button name="code" href="https://github.com/yohan-choi-dev/fleamarket">
                            Code
                        </Button>
                    </div>
                </div>

                <h3 className={utilStyles.headingXl}>Technologies</h3>
                <div className={utilStyles.horizontal}>
                    <JavaScriptLogo></JavaScriptLogo>
                    <ReactLogo></ReactLogo>
                    <Css3Logo></Css3Logo>
                </div>

                <div className={utilStyles.horizontal}>
                    <NodeJsLogo></NodeJsLogo>
                    <ExpressLogo></ExpressLogo>
                    <MySqlLogo></MySqlLogo>
                </div>

                <h3 className={utilStyles.headingXl}>Features</h3>
                <h4 className={utilStyles.headingLg}>Real-Time Trading</h4>
                <h4 className={utilStyles.headingLg}>Chatting Service</h4>
                <h3 className={utilStyles.headingXl}>How it works?</h3>
            </Section>
        </Layout>
    );
}

export default Project;
