/* React */
import { useState } from 'react';

/* Next */
import Link from 'next/link';

/* Utility */
import { mergeStrings } from '../utils';

/* Style */
import styles from './index.module.scss';
import utilStyles from '../styles/utils.module.scss';

/* Component */
import { Layout } from '../components/layout';
import { Cube } from '../components/ui-components';

/* Helper Functions */
function getCubeDirectionForMenu(name) {
  const options = {
    about: 'front',
    blog: 'right',
    project: 'back',
    contact: 'left',
  };

  return options[name];
}

/* Global Variables */
const introContainerStyle = mergeStrings(styles.container, styles.introMarginBottom);
const introStyle = mergeStrings(styles.intro, utilStyles.vertical);
const introLeftStyle = mergeStrings(utilStyles.left, styles.moveInLeft);
const introRightStyle = mergeStrings(utilStyles.right, styles.moveInRight);
const menuHeadingStyle = mergeStrings(styles.menuHeading, utilStyles.stroke);

function Homepage() {
  const [cubeDirection, setCubeDirection] = useState('front');

  function handleOnMouseOver({ target }) {
    const name = target.getAttribute('name');
    const direction = getCubeDirectionForMenu(name);

    if (direction) {
      setCubeDirection(direction);
    }
  }

  return (
    <Layout defaultLayout>
      <div className={introContainerStyle} id='home'>
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
            <Link href='/about'>
              <a className={utilStyles.link}>
                <h1 name='about' className={menuHeadingStyle} onMouseOver={handleOnMouseOver}>
                  About
                </h1>
              </a>
            </Link>
          </div>
          <div className={styles.content}>
            <Link href='/blog'>
              <a className={utilStyles.link}>
                <h1 name='blog' className={menuHeadingStyle} onMouseOver={handleOnMouseOver}>
                  Blog
                </h1>
              </a>
            </Link>
          </div>
          <div className={styles.content}>
            <Link href='/project'>
              <a className={utilStyles.link}>
                <h1 name='project' className={menuHeadingStyle} onMouseOver={handleOnMouseOver}>
                  Project
                </h1>
              </a>
            </Link>
          </div>
          <div className={styles.content}>
            <Link href='/contact'>
              <a className={utilStyles.link}>
                <h1 name='contact' className={menuHeadingStyle} onMouseOver={handleOnMouseOver}>
                  Contact
                </h1>
              </a>
            </Link>
          </div>

          <div className={styles.scene}>
            <Cube size='large' direction={cubeDirection}>
              <div className={styles.cubeFaceHeading}>About</div>
              <div className={styles.cubeFaceHeading}>Blog</div>
              <div className={styles.cubeFaceHeading}>Project</div>
              <div className={styles.cubeFaceHeading}>Contact</div>
            </Cube>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Homepage;
