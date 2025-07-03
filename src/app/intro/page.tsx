import { Metadata } from 'next';
import Picture from '@/components/Layout/Picture';
import AnimationTypedArticle from '@/components/Animation/AnimationTypedArticle';
import List from '@/components/Layout/List';
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
        <mark>
          <strong>Software Engineer</strong>
        </mark>{' '}
        on different platforms and enthusiast researcher
      </h1>
      {/* Summary Start */}
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
          '<mark><strong>Software Engineer</strong></mark> on different platforms and enthusiast researcher',
          `<a href="${ROUTE.ABOUT.PATH}" title="Reveal my origins and experience in the field" tabindex="10"><strong>Discover my own story <)</strong></a>`,
        ]}
        html={true}
      />
      <AnimationTypedArticle
        content={[
          'Software Engineer and new horizons explorer on the Web and beyond',
          `An interest throughout a lifetime, in constant evolution.<br />For over 25 years, I've been overwhelmed in the Computer Science world, so much to make this love my job. <mark><strong>Software Engineer</strong></mark> by vocation, I space on all the possibilities that the field has to offer, on the <mark><strong>Web</strong></mark> and more.<br />I love venturing on the latest <mark><strong>Full-Stack</strong></mark> technologies and accepting the challenges that arise during their use.<br />My only limit? Never stop improving myself, not just as a Software Engineer, by aiming to achieve goals increasingly advanced targets.<br />Everything thanks to a good dose of creativity and enthusiasm - essential components to feed my projects and conquer future goals.`,
        ]}
        html={true}
        speed={10}
        delay={4700}
      />
      {/* Summary End */}
      {/* Portfolio Start */}
      <AnimationTypedArticle
        content={[
          'My reality as a Software Engineer from the Matrix to the Source',
          `<a href="${ROUTE.PORTFOLIO.PATH}" title="Projects <) Web and Mobile selection <) Luca Cattide" tabindex="11"><strong>Follow my own path <)</strong></a>`,
        ]}
        html={true}
        delay={18800}
      />
      {/* Portfolio End */}
      {/* Indicators Start */}
      <List
        list={[
          '9 Years in the craft of Software Engineering',
          '40 Languages and Full-Stack known tools',
          '32 Goals obtained',
          '7 Certificates and certifications acquired',
          '2 Spoken languages',
          '5 Honors and awards earned',
        ]}
        delay={22900}
      />
      {/* Indicators End */}
      {/* Portfolio Start */}
      <AnimationTypedArticle
        content={[
          'Testimonials',
          `"I am glad I had a chance to work with Luca for about two years. During our collaboration, I found out that he is a real professional with deep knowledge of TypeScript. He was able to solve even complicated tasks with a focus on the whole project."<br />- Jirí Suska, Team Leader @ Avast/Gen Digital<br /><br />"I had the privilege of working with Luca during my time at Avast, later Gen Digital, where I served as a Product Manager responsible for helping build products that protect users' privacy and identity. He stood out as a highly skilled developer with an exceptional ability to translate complex user requirements into intuitive and visually engaging interfaces. Their collaboration skills were particularly noteworthy, whether it was brainstorming with UX and design teams, troubleshooting with QA, or addressing engineering challenges, showed teamwork and open communication. I wholeheartedly recommend Luca for any role that demands technical expertise, collaborative spirit, and a commitment to delivering results."<br />- Monica Teodorescu, Product Manager @ Avast/Gen Digital<br /><br />"I had the pleasure to work with Luca for more than two years in Avast/Norton. Luca is a highly skilled and experienced senior front-end developer whose expertise and professionalism consistently impressed me. One of Luca’s greatest strengths lies in his expertise of React but not only: an exceptional ability to design and implement robust and efficient front-end solutions, always adapting easily to meet the project's needs and technical requirements. Luca possesses a broad knowledge of front-end technologies which enables him to face any type of scenario providing creative solutions for complex challenges. On a personal level, Luca is approachable, dependable and always willing to lend a helping hand."<br />- Claudiu Furcoi, Software Engineer @ Avast/NortonLifeLock/Gen Digital<br /><br />"Luca is a talented Typescript/Javascript engineer I worked alongside at Avast. He consistently delivered high-quality work, was a great team player, and showed excellent communication skills throughout our projects."<br />- Nenad Trenchevski, Software Engineer @ Avast/Gen Digital<br /><br />"I had the privilege of working alongside Luca, and I can't recommend him highly enough. His expertise in JavaScript and TypeScript is truly impressive, and his commitment to clean, tidy, and maintainable code sets him apart as a developer."<br />- Mihai Stoian, Software Engineer @ Avast/GenDigital<br /><br />"I had the pleasure of working alongside Luca at Avast/Gen Digital, where I served as a Software Tester on the same project. Luca's extensive knowledge and expertise extend beyond technical skills to include exceptional soft skills, such as communication, organization, and time management. He consistently delivers high-quality work while always making time to address ad hoc issues and queries promptly. I strongly recommend Luca without hesitation."<br />- José Barata, QA Engineer @ Avast/Gen Digital`,
        ]}
        html={true}
        speed={5}
        delay={27400}
      />
      {/* Portfolio End */}
      <Menu delay={63000} />
      <Terminal delay={66000} />
    </section>
    // Intro End
  );
}
