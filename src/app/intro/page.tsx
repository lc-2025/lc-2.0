import { Metadata } from 'next';
import Picture from '@/components/Layout/Picture';
import AnimationTypedArticle from '@/components/Animation/AnimationTypedArticle';
import Menu from '@/components/Navigation/Menu';
import Terminal from '@/components/Terminal/Terminal';
import { METADATA } from '@/data/content';
import { ROUTE } from '@/utilities/constants';

// Variables
const { HOME } = METADATA.TITLE;
const { LABEL, DESCRIPTION } = HOME;

// Metadata
export const metadata: Metadata = {
  title: LABEL,
  description: DESCRIPTION,
};

/**
 * @description Intro page
 * Home subpage
 * @author Luca Cattide
 * @date 03/07/2025
 * @export
 * @returns {*}  {React.ReactNode}
 */
export default function Intro(): React.ReactNode {
  return (
    // Intro Start
    <section className="intro bg-primary flex-1">
      <h1 className="intro__title hidden">
        Software Engineer on different platforms and enthusiast researcher
      </h1>
      <Picture
        className="intro__picture"
        srcLight="/img/intro-summary-lc-light.png"
        srcDark="/img/intro-summary-lc-dark.png"
        alt={DESCRIPTION}
        width={1920}
        height={1080}
      />
      <AnimationTypedArticle
        content={[
          'Software Engineer on different platforms and enthusiast researcher',
          `<a href="${ROUTE.ABOUT.PATH}" title="Reveal my origins and
experience in the field" tabindex="10">Discover my own story <)</a>`,
        ]}
        html={true}
      />
      <AnimationTypedArticle
        content={[
          'Software Engineer and new horizons explorer on the Web and beyond',
          `An interest throughout a lifetime, in constant evolution.<br />For over 25 years, I've been overwhelmed in the Computer Science world, so much to make this love my job. Software Engineer by vocation, I space on all the possibilities that the field has to offer, on the Web and more.<br />I love venturing on the latest Full-Stack technologies and accepting the challenges that arise during their use.<br />My only limit? Never stop improving myself, not just as a Software Engineer, by aiming to achieve goals increasingly advanced targets.<br />Everything thanks to a good dose of creativity and enthusiasm - essential components to feed my projects and conquer future goals.`,
        ]}
        html={true}
        speed={10}
        delay={4600}
      />
      <Menu delay={18000} />
      <Terminal delay={21000} />
    </section>
    // Intro End
  );
}
