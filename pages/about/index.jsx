import Image from 'next/image';
import utilStyles from '../../styles/utils.module.scss';
import { Layout } from '../../components/layout';
import { Cube, Section } from '../../components/ui-components';
import {
  ExpressLogo,
  NodeJsLogo,
  PostgreSqlLogo,
  ReactLogo,
} from '../../components/ui-components/logos';

function About() {
  return (
    <Layout>
      <Section primarySectionHeading='About' pageDivider>
        <Image
          className={utilStyles.borderCircle}
          src='/images/profile.jpg'
          width={250}
          height={250}></Image>
        <h1 className={utilStyles.heading2Xl}>Yohan</h1>
        <div className={utilStyles.content}>
          <p className={utilStyles.long}>
            I believe that our fingertips can make a better world. As a junior full stack
            programmer, I wish my code work in the real world and contributing our society and
            community. To create a better program, I do not hesitate to refactor my code. Attitude
            to find the best solution for a problem is my asset. The intense passion for programming
            made me start to join an open source. Self-learning with passion for programming is
            nutrient to be a better programmer.
          </p>
          <br />
          <p className={utilStyles.long}></p>
          <br />
          <p className={utilStyles.long}></p>
        </div>
      </Section>
      <Section primarySectionHeading='Focus' pageDivider>
        <Cube size='medium' animation>
          <ExpressLogo fill='#000000'></ExpressLogo>
          <NodeJsLogo fill='#000000'></NodeJsLogo>
          <PostgreSqlLogo fill='#000000'></PostgreSqlLogo>
          <ReactLogo fill='#000000'></ReactLogo>
        </Cube>
        <h1 className={utilStyles.heading2Xl}>Mainly focused on</h1>
        <h2 className={utilStyles.headingXlc}>Web Technologies</h2>
      </Section>
      <Section primarySectionHeading='skills' pageDivider>
        <h1 className={utilStyles.heading2Xl}>Languages</h1>
        <ul className={utilStyles.list}>
          <li className={utilStyles.item}>Proficient in JavaScript</li>
          <li className={utilStyles.item}>
            Familiar with OOP (SOLID Principles), Java, C#, SQL, HTML5, CSS3, Bootstrap4, SASS,
            Responsive web design.
          </li>
          <li className={utilStyles.item}>
            Experience in: Assembly languages (x86_64, Aarch64), C, C++, Python, R.
          </li>
          <li className={utilStyles.item}>
            • Created database migration test tools using Node.js.
          </li>
          <li className={utilStyles.item}>
            • Built UI according to specs and implemented UI using Figma, JavaScript.
          </li>
        </ul>
      </Section>
      <Section primarySectionHeading='experience'>
        <h1 className={utilStyles.heading2Xl}>Software Devloper</h1>
        <h2 className={utilStyles.headingXlc}>Emerson</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.item}>
            • Primary responsibilities are design and development of warehouse application and
            database migration from IBM DB2 to Oracle Database.
          </li>
          <li className={utilStyles.item}>
            • Developed and evaluated new warehouse system using Java.
          </li>
          <li className={utilStyles.item}>
            • Collaborated with an Oracle migration team for database migration using Java.
          </li>
          <li className={utilStyles.item}>
            • Created database migration test tools using Node.js.
          </li>
          <li className={utilStyles.item}>
            • Built UI according to specs and implemented UI using Figma, JavaScript.
          </li>
        </ul>
        <p className={utilStyles.long}></p>
        <br />
        <h1 className={utilStyles.heading2Xl}>ITS Technologist</h1>
        <h2 className={utilStyles.headingXlc}>Seneca College</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.item}>
            • Primary responsibilities are hardware and software support for Seneca students and
            faculty members.
          </li>
          <li className={utilStyles.item}>
            • Provided user support and customer service available to client requiring technical
            assistance, including in on-call/or onsite support for Seneca students and faculty
            members.
          </li>
          <li className={utilStyles.item}>
            • Assisted with field service through client support, assigned tasks and research.
          </li>
          <li className={utilStyles.item}>
            • Installed and monitored electronic equipment of E-Classrooms and computer labs.
          </li>
        </ul>
      </Section>
    </Layout>
  );
}

export default About;
