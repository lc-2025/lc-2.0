import { Metadata } from 'next';
import Picture from '@/components/Layout/Picture';
import AnimationTypedArticle from '@/components/Animation/AnimationTypedArticle';
import Menu from '@/components/Navigation/Menu';
import Terminal from '@/components/Terminal/Terminal';
import { METADATA } from '@/data/content';

// Variables
const { ABOUT } = METADATA.TITLE;
const { LABEL, DESCRIPTION } = ABOUT;

// Metadata
export const metadata: Metadata = {
  title: LABEL,
  description: DESCRIPTION,
};

/**
 * @description About page
 * @author Luca Cattide
 * @date 03/07/2025
 * @export
 * @returns {*}  {React.ReactNode}
 */
export default function About(): React.ReactNode {
  return (
    // About Start
    <section className="about bg-primary flex-1">
      <h1 className="about__title hidden">
        <mark>
          <strong>Software Engineer</strong>
        </mark>{' '}
        {`<)`} Tireless creative and Martial Artist
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
          `<mark><strong>Software Engineer</strong></mark> &lt;&rpar; Tireless creative and Martial Artist`,
        ]}
        html={true}
      />
      <AnimationTypedArticle
        content={[
          'Software Engineer by nature with a creative spark',
          `An ambitious navigator en route to a sea of infinite possibilities as a <mark><strong>Software Engineer</strong></mark>. This is Luca Cattide.<br />I'm a graduated Accountant programmer. Initially specialized in the management/general-purpose software development, Databases and Networks.<br />During my studies, I perfected my skills as a Software Engineer in the University of Cagliari and Milan-Bicocca.<br />At the same time, I acquired Web Design concepts and related, which I have studied in depth and refined in the private sphere.<br />Along with these, I gained further knowledge such as Digital Graphics/Audio and Hardware.<br />Always in constant update on the progress of the new <mark><strong>Full-Stack</strong></mark> technologies as a Software Engineer, since 2013 I dedicated myself to the realization of my project: the Karalis Konnection firm.<br />I consider myself a visionary creative, a determinated young person and an enterprising worker. With these three characteristics, until 2016 I spread as Software Engineer my business motto. Collect and centralize, in a single provider, the main IT services.<br />In the same year, I lent my consultancy to the Web Agency laboratorio-a in Milan.<br />From 2017 to 2019, I joined the Greylab team, a Milan communication agency, as a Software Engineer.<br />Now I feed my growth with further challenges outside my country. Like the Web itself, there are no limits, so I turn my gaze to new horizons. Different dimensions to relate myself in order to improve as a person and as a professional Software Engineer.`
        ]}
        html={true}
        speed={10}
        delay={4000}
      />
    </section>

    // About End
  );
}
