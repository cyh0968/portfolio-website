import Image from 'next/image';
import utilStyles from '../../styles/utils.module.scss';
import { Layout } from '../../components/layout';
import { Section } from '../../components/section';
import { Cube, TypoAnimation } from '../../components/ui-components';
import ReactSvg from '../../assets/logos/react.svg';
import NodeJsSvg from '../../assets/logos/node-dot-js.svg';
import ExpressSvg from '../../assets/logos/express.svg';
import PostgresSvg from '../../assets/logos/postgresql.svg';

function About() {
    return (
        <Layout>
            <Section leftHeading="About" id="about">
                <Image className={utilStyles.borderCircle} src="/images/profile.jpg" width={250} height={250}></Image>
                <h1 className={utilStyles.heading2Xl}>Yohan</h1>
                <div className={utilStyles.content}>
                    <p className={utilStyles.long}>
                        <TypoAnimation>
                            Thank you for visiting my website! I'm on the long journey of craftmanship. I'm a simple
                            person who has only one purpose that is making good products. I believe that the projects
                            that I will work on will impact people's everyday lives, and I will be willing to take my
                            responsibility to make the best. A promise with myself is that I will remain humble and
                            improve myself by the end of my journey.
                        </TypoAnimation>
                    </p>
                    <br />
                    <p className={utilStyles.long}></p>
                    <br />
                    <p className={utilStyles.long}></p>
                </div>
            </Section>
            <div className={utilStyles.lineBreak} />
            <Section leftHeading="Skills">
                <Cube size="medium" animation>
                    <ReactSvg fill="#61DAFB"></ReactSvg>
                    <NodeJsSvg fill="#339933"></NodeJsSvg>
                    <ExpressSvg fill="#000000"></ExpressSvg>
                    <PostgresSvg fill="#336791"></PostgresSvg>
                </Cube>
                <h1 className={utilStyles.heading2Xl}>Mainly focused on</h1>
                <h2 className={utilStyles.headingXlc}>Node.js, Express, React, SQL</h2>
            </Section>
            <div className={utilStyles.lineBreak} />
            <Section leftHeading="Skills">
                <h1 className={utilStyles.heading2Xl}>Other Skills</h1>
                <h2 className={utilStyles.headingXlc}>Node.js, Express, React, SQL</h2>
            </Section>
            <Section leftHeading="Experience">
                <h1 className={utilStyles.heading2Xl}>Software Devloper</h1>
                <h2 className={utilStyles.headingXlc}>Emerson</h2>
                <br />
                <h1 className={utilStyles.heading2Xl}>ITS Technologist</h1>
                <h2 className={utilStyles.headingXlc}>Seneca College</h2>
            </Section>
            <div className={utilStyles.lineBreak} />
        </Layout>
    );
}

export default About;
