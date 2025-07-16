import { Metadata } from 'next';
import Title from '@/components/Layout/Title';
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
      <Title
        keyword={'Software Engineer'}
        content={'<) Tireless creative and Martial Artist'}
      />
      {/* Headline Start */}
      <Picture
        className="intro__picture"
        srcLight="/img/about-lc-light.png"
        srcDark="/img/about-lc-dark.png"
        alt={DESCRIPTION}
        width={4896}
        height={3672}
      />
      <AnimationTypedArticle
        content={[
          `<mark><strong>Software Engineer</strong></mark> &lt;&rpar; Holistic enthusiast and Martial Artist`,
        ]}
        html={true}
        delay={500}
      />
      {/* Headline End */}
      {/* Summary Start */}
      <AnimationTypedArticle
        content={[
          'Software Engineer by nature with a creative spark',
          `An ambitious navigator en route to a sea of infinite possibilities as a <mark><strong>Software Engineer</strong></mark>. This is Luca Cattide.<br /><br />I'm a graduated Accountant programmer. Initially specialized in the management/general-purpose software development, Databases and Networks.<br />During my studies, I perfected my skills as a Software Engineer in the University of Cagliari and Milan-Bicocca.<br />At the same time, I acquired Web Design concepts and related, which I have studied in depth and refined in the private sphere.<br />Along with these, I gained further knowledge such as Digital Graphics/Audio and Hardware.<br /><br />Always in constant update on the progress of the new <mark><strong>Full-Stack</strong></mark> technologies as a Software Engineer, since 2013 I dedicated myself to the realization of my project: the Karalis Konnection firm.<br /><br />I consider myself a visionary creative, a determinated person and an enterprising worker. With these three characteristics, until 2016 I spread as Software Engineer my business motto. Collect and centralize, in a single provider, the main IT services.<br />In the same year, I lent my consultancy to the Web Agency laboratorio-a in Milan.<br />From 2017 to 2019, I joined the Greylab team, a Milan communication agency, as a Software Engineer.<br />Between 2021 and 2023, I was part of the international Web Research and Development Team at Avast and NortonLifeLock, which was soon merged into Gen Digital.<br /><br />Now I feed my growth with further challenges outside my country. Like the Web itself, there are no limits, so I turn my gaze to new horizons. Different dimensions to relate myself in order to improve as a person and as a professional Software Engineer.`,
        ]}
        html={true}
        speed={10}
        delay={3000}
      />
      {/* Summary End */}
      {/* Timeline Start */}
      <AnimationTypedArticle
        content={[
          'Timeline',
          `07/08/2005 &lt;&rpar; After years of study and commitment, I earn the Accountant Programmer degree. Testing my knowledge both in the economic/financial field and, mainly, in the Computer Science one as a Software Engineer. The latter is mainly oriented to the management application development;<br /><br />01/13/2013 &lt;&rpar; A lot of practice as a <mark><strong>Software Engineer</strong></mark> together with a good dose of initiative, give birth to my dream: Karalis Konnection. IT services at 360°, provided through a consultancy ranging from digital graphics, to Helpdesk and IT support. Passing of course via the <mark><string>Full-Stack</strong></mark> multi-platform development;<br /><br />07/11/2013 &lt;&rpar; I gain my first important professional training certification as a Software Engineer, on advanced programming in Joomla environment. I acquire specific CMS customization and extension Full-Stack techniques, on the Open-Source platform. By making these integral part of my consulting;<br /><br />03/12/2016 &lt;&rpar; I expand the panorama of consultancy offered by Karalis Konnection, by landing as a Software Engineer in the mobile environment with the firm's Companion App. With this work, released for Android systems, I put my talents outside the Web into play. Thanks to it, I mature a wealth of modern notions and cutting-edge Full-Stack tools;<br /><br />04/01/2016 &lt;&rpar; I begin the journey that leads me to expand my boundaries, coming to settle myself in Milan. The consulting as a Software Engineer at laboratorio-a, turns out to be an experience rich in inventiveness and team spirit. After an individual curriculum, I learn the importance of teamwork;<br /><br />02/05/2017 &lt;&rpar; By expanding my activity as a Software Engineer in the Milan area, I join the Greylab staff. My preparation ensures the right push towards a later stage. By relating to a high-level audience, I strengthen my Senior profile on new Full-Stack consulting plans;<br /><br />05/15/2021 &lt;&rpar; Starting my adventure with Avast, the doors to the international area open up. I bring my expertise to the RnD Team for the Web branch at a Full-Stack level. This experience pushes my career to a worldwide level, teaching me the importance of multi-cultural collaboration and shared values.`,
        ]}
        html={true}
        speed={5}
        delay={34000}
      />
      {/* Timeline End */}
      <AnimationTypedArticle
        content={[
          `<a href="/doc/luca-cattide-resume.pdf" title="Resume <ↄ Luca Cattide [PDF <ↄ 78.5 KB]" tabIndex="10" target="_blank"><mark><strong>Download now the resume &lt;&rpar;</strong></mark></a>`,
        ]}
        html={true}
        delay={59000}
      />
      <Menu delay={60000} />
      <Terminal delay={62000} />
    </section>
    // About End
  );
}
