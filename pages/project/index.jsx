/* Styles */
import utilStyles from '../../styles/utils.module.scss';

/* Components */
import { Layout } from '../../components/layout';
import { Button, Card, IFrame, Image, Slider, Section } from '../../components/ui-components';
import {
  Css3Logo,
  ExpressLogo,
  JavaScriptLogo,
  MySqlLogo,
  NodeJsLogo,
  ReactLogo,
  SassLogo,
} from '../../components/ui-components/logos';

/* Enums */
import { ColorsEnum } from '../../enums';

function Project() {
  return (
    <Layout>
      <Section
        primarySectionHeading='project'
        secondarySectionHeading='sorting algorithm visualier'
        pageDivider>
        <h3 className={utilStyles.headingXl}>Introduction</h3>
        <div className={utilStyles.content}>
          <p className={utilStyles.long}>
            While I was learning sorting algorithms, I was wondering how each sorting algorithm
            would look. It was pretty interesting to see how each algorithm looks, and it gave me a
            better understanding of sorting algorithms. For instance, if a sorting algorithm uses
            the divide and conquers approach, you can see the pattern of self-imitation.
          </p>
          <br />
          <div className={utilStyles.alignRight}>
            <Button name='demo' href='http://sav.yohan-choi.com/'>
              Demo
            </Button>
            <Button
              name='code'
              href='https://github.com/yohan-choi-dev/sorting-algorithm-visualizer'>
              Code
            </Button>
          </div>
        </div>

        <h3 className={utilStyles.headingXl}>Technologies</h3>
        <div className={utilStyles.horizontal}>
          <Card name='javascript'>
            <JavaScriptLogo fill={ColorsEnum.JAVASCRIPT}></JavaScriptLogo>
          </Card>
          <Card name='react'>
            <ReactLogo fill={ColorsEnum.REACT}></ReactLogo>
          </Card>
          <Card name='sass'>
            <SassLogo fill={ColorsEnum.SASS}></SassLogo>
          </Card>
        </div>
        <h3 className={utilStyles.headingXl}>Features</h3>
        <div className={utilStyles.content}>
          <p className={utilStyles.long}>
            It supports five sorting algorithms; bubble sort, selection sort, insertion sort, merge
            sort, quick sort.
          </p>
          <p className={utilStyles.long}>
            You can play, pause, forward, backward the sorting algorithm animation.
          </p>
          <br />
          <p className={utilStyles.long}>
            In a desktop environment, you can control an animation with a keyboard.
          </p>
          <p className={utilStyles.long}>
            (&#8592;: backward, space: play/pause, &#8594;: forward)
          </p>
          <br />
          <p className={utilStyles.long}>
            In a mobile, you can control the animation with wide buttons on the animation. (left:
            backward, center: play/pause, right: forward)
          </p>
        </div>
        <Slider width='45rem' height='30rem'>
          <IFrame
            src='https://www.youtube.com/embed/5bxqWZ6IHgk'
            title='Controller'
            width={600}></IFrame>
          <IFrame
            src='https://www.youtube.com/embed/VaTS6i_g6Fo'
            title='Bubble Sort'
            width={600}></IFrame>
          <IFrame
            src='https://www.youtube.com/embed/UwGUuV0lQgk'
            title='Selection Sort'
            width={600}></IFrame>
          <IFrame
            src='https://www.youtube.com/embed/863sLH3mAzA'
            title='Insertion Sort'
            width={600}></IFrame>
          <IFrame
            src='https://www.youtube.com/embed/CU-sk9Pwu6w'
            title='Merge Sort'
            width={600}></IFrame>
          <IFrame
            src='https://www.youtube.com/embed/qrCrlBGSVRM'
            title='Quick Sort'
            width={600}></IFrame>
        </Slider>

        <h3 className={utilStyles.headingXl}>How it works?</h3>
        <div className={utilStyles.content}>
          <p className={utilStyles.long}>
            It is built with React Hooks and Sass. When a user triggers the play function, the
            animation utility will record each step of the sorting algorithm while the sorting
            algorithm runs and sorts the actual array.
          </p>
          <br />
          <p className={utilStyles.long}>
            Once the recording is completed, the record will be played by the player function. The
            player function calls from the generator function, and the generator only updates the
            frame of the animation only when the player can run the animation.
          </p>
          <br />
          <p className={utilStyles.long}>
            Before it updates an element on the DOM, the application stores the element's original
            status in the undo stack. In that way, the application can run backward and forward
            without any problem.
          </p>
        </div>
      </Section>

      <Section primarySectionHeading='project' secondarySectionHeading='fleamarket'>
        <h3 className={utilStyles.headingXl}>Introduction</h3>
        <div className={utilStyles.content}>
          <p className={utilStyles.long}>
            Fleamarket was the graudation project. Whenever I used Kijiji, I felt uncomfortable for
            its limited functionality. The main movitation of the application was providing simple
            and fast trading service. Fleamarket is E-commerse platform that allows local people
            exchange thier goods easily. It is a web application that supports responsive web
            design.
          </p>
          <br />
          <div className={utilStyles.alignCenter}>
            <Button name='code' href='https://github.com/yohan-choi-dev/fleamarket'>
              Code
            </Button>
          </div>
        </div>

        <h3 className={utilStyles.headingXl}>Technologies</h3>
        <div className={utilStyles.horizontal}>
          <Card name='javascript'>
            <JavaScriptLogo fill={ColorsEnum.JAVASCRIPT}></JavaScriptLogo>
          </Card>
          <Card name='react'>
            <ReactLogo fill={ColorsEnum.REACT}></ReactLogo>
          </Card>
          <Card name='css3'>
            <Css3Logo fill={ColorsEnum.CSS3}></Css3Logo>
          </Card>
        </div>

        <div className={utilStyles.horizontal}>
          <Card name='nodejs'>
            <NodeJsLogo fill={ColorsEnum.NODEJS}></NodeJsLogo>
          </Card>
          <Card name='express'>
            <ExpressLogo fill={ColorsEnum.EXPRESS}></ExpressLogo>
          </Card>
          <Card name='mysql'>
            <MySqlLogo fill={ColorsEnum.MYSQL}></MySqlLogo>
          </Card>
        </div>
        <h3 className={utilStyles.headingXl}>Features</h3>
        <Slider width='45rem' height='60rem'>
          <Image
            src='/images/projects/fleamarket/09.png'
            title='Home'
            width={600}
            height={800}></Image>
          <Image
            src='/images/projects/fleamarket/10.png'
            title='Create an account'
            width={600}
            height={800}></Image>
          <Image
            src='/images/projects/fleamarket/11.png'
            title='Login to account'
            width={600}
            height={800}></Image>
          <Image
            src='/images/projects/fleamarket/18.png'
            title='Edit account'
            width={600}
            height={600}></Image>
          <Image
            src='/images/projects/fleamarket/15.png'
            title="User's inventory"
            width={600}
            height={600}></Image>
          <Image
            src='/images/projects/fleamarket/27.png'
            title='Upload item'
            width={600}
            height={600}></Image>
          <Image
            src='/images/projects/fleamarket/30.png'
            title='Delete item'
            width={600}
            height={600}></Image>
          <Image
            src='/images/projects/fleamarket/16.png'
            title='Visit user profile'
            width={600}
            height={600}></Image>
          <Image
            src='/images/projects/fleamarket/26.png'
            title='Item page'
            width={600}
            height={600}></Image>
          <Image
            src='/images/projects/fleamarket/01.png'
            title='Chatting'
            width={600}
            height={600}></Image>
          <Image
            src='/images/projects/fleamarket/02.png'
            title='Select item'
            width={600}
            height={600}></Image>
          <Image
            src='/images/projects/fleamarket/04.png'
            title='Pending another user'
            width={600}
            height={600}></Image>
          <Image
            src='/images/projects/fleamarket/06.png'
            title='Users confirm item'
            width={600}
            height={600}></Image>
          <Image
            src='/images/projects/fleamarket/08.png'
            title='Rating a user'
            width={600}
            height={600}></Image>
        </Slider>
      </Section>
    </Layout>
  );
}

export default Project;
