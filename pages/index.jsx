/* Utility */
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { mergeStrings } from '../utils';

/* Style */
import styles from './index.module.scss';
import utilStyles from '../styles/utils.module.scss';

/* Component */
import { Layout } from '../components/layout';
import { Cube, Ipad } from '../components/ui-components';

const introContainerStyle = mergeStrings(styles.container, styles.introMarginBottom);
const introStyle = mergeStrings(styles.intro, utilStyles.vertical);
const introLeftStyle = mergeStrings(utilStyles.left, styles.moveInLeft);
const introRightStyle = mergeStrings(utilStyles.right, styles.moveInRight);
const menuHeadingStyle = mergeStrings(styles.menuHeading, utilStyles.stroke);

const menuList = ['about', 'blog', 'project', 'contact'];
const menuMap = new Map();
menuMap.set('about', 'front');
menuMap.set('blog', 'right');
menuMap.set('project', 'back');
menuMap.set('contact', 'left');

function Homepage() {
    const [visuableContent, setVisuableContent] = useState('about');
    const sceneRef = useRef(null);

    useEffect(() => {}, []);

    function setCubeDirection() {
        return menuMap.get(visuableContent);
    }

    function handleOnMouseOver({ target }) {
        const name = target.getAttribute('name');

        if (menuList.includes(name)) {
            setVisuableContent(name);
            sceneRef.current.style.zIndex = '200';
        }
    }

    return (
        <Layout defaultLayout>
            <div className={introContainerStyle} id="home">
                <div className={introStyle}>
                    <div className={introLeftStyle}>
                        <h1 className={styles.introHeading}>Full-stack web</h1>
                        <h1 className={styles.introHeading}>developer</h1>
                    </div>
                    <div className={introRightStyle}>
                        <h1 className={styles.introHeading}>currently based in</h1>
                        <h1 className={styles.introHeading}>Toronto</h1>
                    </div>
                    <div className={introLeftStyle}>
                        <h1 className={styles.introHeading}>Focussed on</h1>
                        <h1 className={styles.introHeading}>JavaScript</h1>
                        <h1 className={styles.introHeading}>Technologies</h1>
                    </div>
                    <div className={introRightStyle}>
                        <h1 className={styles.introHeading}>Long journey in</h1>
                        <h1 className={styles.introHeading}>craftmanship</h1>
                    </div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.menu}>
                    <div className={styles.content}>
                        <Link href="/about">
                            <a className={utilStyles.link}>
                                <h1 name="about" className={menuHeadingStyle} onMouseOver={handleOnMouseOver}>
                                    About
                                </h1>
                            </a>
                        </Link>
                    </div>
                    <div className={styles.content}>
                        <Link href="/blog">
                            <a className={utilStyles.link}>
                                <h1 name="blog" className={menuHeadingStyle} onMouseOver={handleOnMouseOver}>
                                    Blog
                                </h1>
                            </a>
                        </Link>
                    </div>
                    <div className={styles.content}>
                        <Link href="/project">
                            <a className={utilStyles.link}>
                                <h1 name="project" className={menuHeadingStyle} onMouseOver={handleOnMouseOver}>
                                    Project
                                </h1>
                            </a>
                        </Link>
                    </div>
                    <div className={styles.content}>
                        <Link href="/contact">
                            <a className={utilStyles.link}>
                                <h1 name="contact" className={menuHeadingStyle} onMouseOver={handleOnMouseOver}>
                                    Contact
                                </h1>
                            </a>
                        </Link>
                    </div>

                    <div ref={sceneRef} className={styles.scene}>
                        <Cube size="large" show={setCubeDirection()}>
                            <h3>About</h3>
                            <h3>Blog</h3>
                            <h3>Project</h3>
                            <h3>Contact</h3>
                        </Cube>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Homepage;
