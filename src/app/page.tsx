import AnimationTypedTitles from '@/components/Animation/AnimationTypedTitles';
import AnimationTypedArticle from '../components/Animation/AnimationTypedArticle';
import Menu from '@/components/Navigation/Menu';
import Terminal from '@/components/Terminal/Terminal';
import { Metadata } from 'next';
import { METADATA } from '@/data/content';

const { HOME } = METADATA.TITLE;
const { LABEL, DESCRIPTION } = HOME;

export const metadata: Metadata = {
  title: LABEL,
  description: DESCRIPTION,
};

/**
 * @description Home page
 * @author Luca Cattide
 * @date 02/07/2025
 * @export
 * @returns {*}  {React.ReactNode}
 */
export default function Home(): React.ReactNode {
  return (
    // Home Start
    <section className="home bg-primary flex-1">
      <h6 className="home__title hidden">Home</h6>
      <AnimationTypedTitles />
      <AnimationTypedArticle
        content={[
          'Welcome to the latest LC version.<br />Please choose your destination:',
        ]}
        html={true}
      />
      {/* <AnimationTypedArticle content={['Software Engineer on different platforms and enthusiast researcher', 'Discover my own story']} />
      <AnimationTypedArticle content={['Software Engineer and new horizons explorer on the Web and beyond', `An interest throughout a lifetime, in constant evolution.<br />For over 25 years, I've been overwhelmed in the Computer Science world, so much to make this love my job. Software Engineer by vocation, I space on all the possibilities that the field has to offer, on the Web and more.<br />I love venturing on the latest Full-Stack technologies and accepting the challenges that arise during their use.<br />My only limit? Never stop improving myself, not just as a Software Engineer, by aiming to achieve goals increasingly advanced targets.<br />Everything thanks to a good dose of creativity and enthusiasm - essential components to feed my projects and conquer future goals.`]} speed={10} html={true} /> */}
      {/* TODO: Decide if these two comps will be part of page or layout (use global state or not) */}
      <Menu delay={3200} />
      <AnimationTypedArticle
        content={['Trouble? Enter "help" for the command list.']}
        html={true}
        delay={5200}
      />
      <Terminal delay={6900} />
    </section>
    // Home End
  );
}
