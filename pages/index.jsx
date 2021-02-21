import Image from 'next/image';
import styles from './index.module.scss';
import utilStyles from '../styles/utils.module.scss';
import { Layout } from '../components/layout';
import { Section } from '../components/section';
import { Cube } from '../components/ui-components';

function Homepage() {
    return (
        <Layout>
            <div className={styles.container} id="home">
                <div className={styles.intro}>
                    <span className={styles.leftAlign}>
                        <h1 className={styles.introText}>Full-stack web</h1>
                        <h1 className={styles.introText}>developer</h1>
                    </span>
                    <span className={styles.rightAlign}>
                        <h1 className={styles.introText}>currently based in</h1>
                        <h1 className={styles.introText}>Toronto</h1>
                    </span>
                    <span className={styles.leftAlign}>
                        <h1 className={styles.introText}>Focussed on</h1>
                        <h1 className={styles.introText}>JavaScript</h1>
                        <h1 className={styles.introText}>Technologies</h1>
                    </span>
                    <span className={styles.rightAlign}>
                        <h1 className={styles.introText}>Long journey in</h1>
                        <h1 className={styles.introText}>craftmanship</h1>
                    </span>
                </div>
            </div>
            <div className={styles.primary}>
                <Section leftHeading="About" id="about">
                    <Image
                        className={utilStyles.borderCircle}
                        src="/images/profile.jpg"
                        width={250}
                        height={250}
                    ></Image>
                    <h1 className={utilStyles.heading2Xl}>Yohan</h1>
                    <div className={utilStyles.content}>
                        <p className={utilStyles.long}>
                            Thank you for visiting my website! I'm on the long journey of craftmanship. I'm a simple
                            person who has only one purpose that is making good products.
                        </p>
                        <br />
                        <p className={utilStyles.long}>
                            I believe that the projects that I will work on will impact people's everyday lives, and I
                            will be willing to take my responsibility to make the best.
                        </p>
                        <br />
                        <p className={utilStyles.long}>
                            A promise with myself is that I will remain humble and improve myself by the end of my
                            journey.
                        </p>
                    </div>
                </Section>
                <div className={utilStyles.lineBreak} />
                <Section leftHeading="Skills">
                    <Cube></Cube>
                    <h1 className={utilStyles.heading2Xl}>Mainly focused on</h1>
                    <h2 className={utilStyles.headingXl}>Node.js, Express, React, SQL</h2>
                </Section>

                <div className={utilStyles.lineBreak} />
                <Section leftHeading="project">
                    <h1 className={utilStyles.heading2Xl}>Sorting Algoritm</h1>
                    <h1 className={utilStyles.heading2Xl}>Visualizer</h1>
                    <h3 className={utilStyles.headingXl}>Motivation</h3>
                    <div className={utilStyles.content}>
                        <p className={utilStyles.long}>
                            While I was learning sorting algorithms, I was wondering how each sorting algorithm would
                            look. It was pretty interesting to see how each algorithm looks, and it gave me a better
                            understanding of sorting algorithms. For instance, if a sorting algorithm uses the divide
                            and conquers approach, you can see the pattern of self-imitation.
                        </p>
                    </div>
                    <h3 className={utilStyles.headingXl}>Technologies</h3>
                    <h3 className={utilStyles.headingXl}>Code</h3>
                    <h3 className={utilStyles.headingXl}>Demo</h3>

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
                            In Mobile, you can control the animation with wide buttons on the animation. (left:
                            backward, center: play/pause, right: forward)
                        </p>
                    </div>
                    <iframe
                        width="784"
                        width="441"
                        src="https://www.youtube.com/embed/5bxqWZ6IHgk"
                        frameborder="0"
                        allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                    <h4 className={utilStyles.headingLg}>Bubble Sort</h4>
                    <iframe
                        width="784"
                        width="441"
                        src="https://www.youtube.com/embed/VaTS6i_g6Fo"
                        frameborder="0"
                        allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                    <h4 className={utilStyles.headingLg}>Selection Sort</h4>
                    <iframe
                        width="784"
                        width="441"
                        src="https://www.youtube.com/embed/UwGUuV0lQgk"
                        frameborder="0"
                        allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                    <h4 className={utilStyles.headingLg}>Insertion Sort</h4>
                    <iframe
                        width="784"
                        width="441"
                        src="https://www.youtube.com/embed/863sLH3mAzA"
                        frameborder="0"
                        allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                    <h4 className={utilStyles.headingLg}>Merge Sort</h4>
                    <iframe
                        width="784"
                        width="441"
                        src="https://www.youtube.com/embed/CU-sk9Pwu6w"
                        frameborder="0"
                        allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                    <iframe
                        width="784"
                        height="441"
                        src="https://www.youtube.com/embed/U8eKVst2hEA"
                        frameborder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>

                    <h4 className={utilStyles.headingLg}>Quick Sort</h4>
                    <iframe
                        width="784"
                        width="441"
                        src="https://www.youtube.com/embed/qrCrlBGSVRM"
                        frameborder="0"
                        allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>

                    <h3 className={utilStyles.headingXl}>How it works?</h3>
                    <div className={utilStyles.content}>
                        <p className={utilStyles.long}>
                            It is built with React Hooks and Sass. When a user triggers the play function, the animation
                            utility will record each step of the sorting algorithm while the sorting algorithm runs and
                            sorts the actual array.
                        </p>
                        <br />
                        <p className={utilStyles.long}>
                            Once the recording is completed, the record will be played by the player function. The
                            player function calls from the generator function, and the generator only updates the frame
                            of the animation only when the player can run the animation.
                        </p>
                        <br />
                        <p className={utilStyles.long}>
                            Before it updates an element on the DOM, the application stores the element's original
                            status in the undo stack. In that way, the application can run backward and forward without
                            any problem.
                        </p>
                    </div>
                </Section>
                <div className={utilStyles.lineBreak} />
                <Section leftHeading="project" rightHeading="Flea Market">
                    <h3 className={utilStyles.headingXl}>Motivation</h3>

                    <h3 className={utilStyles.headingXl}>Technologies</h3>
                    <h3 className={utilStyles.headingXl}>Code</h3>

                    <h3 className={utilStyles.headingXl}>Live Demo</h3>
                    <h3 className={utilStyles.headingXl}>Features</h3>
                    <h4 className={utilStyles.headingLg}>Real-Time Trading</h4>
                    <h4 className={utilStyles.headingLg}>Chatting Service</h4>
                    <h3 className={utilStyles.headingXl}>How it works?</h3>
                </Section>
            </div>
        </Layout>
    );
}

export default Homepage;
