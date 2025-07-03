import AnimationTypedTitles from '@/components/Animation/AnimationTypedTitles';
import AnimationTypedArticle from '../components/Animation/AnimationTypedArticle';
import Menu from '@/components/Navigation/Menu';
import Terminal from '@/components/Terminal/Terminal';
import { Metadata } from 'next';
import { METADATA } from '@/data/content';

// Variables
const { HOME } = METADATA.TITLE;
const { LABEL, DESCRIPTION } = HOME;

// Metadata
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
      <h6 className="home__title hidden">{LABEL}</h6>
      <AnimationTypedTitles />
      <AnimationTypedArticle
        content={[
          'Welcome to the latest LC version.<br />Please choose your destination (enter or click):',
        ]}
        html={true}
      />
      <Menu delay={3800} />
      <AnimationTypedArticle
        content={['Or type "intro" for a brief summary.<br />Trouble? Enter "help" for the command list.']}
        html={true}
        delay={6000}
      />
      <Terminal delay={9000} />
    </section>
    // Home End
  );
}
