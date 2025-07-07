import { Metadata } from 'next';
import Title from '@/components/Layout/Title';
import Project from '@/components/Layout/Project';
import Menu from '@/components/Navigation/Menu';
import Terminal from '@/components/Terminal/Terminal';
import { METADATA } from '@/data/content';

// Variables
const { PORTFOLIO } = METADATA.TITLE;
const { LABEL, DESCRIPTION } = PORTFOLIO;

// Metadata
export const metadata: Metadata = {
  title: LABEL,
  description: DESCRIPTION,
};

/**
 * @description Portfolio page
 * @author Luca Cattide
 * @date 07/07/2025
 * @export
 * @returns {*}  {React.ReactNode}
 */
export default function Portfolio(): React.ReactNode {
  const demo = [
    {
      name: 'Project 1',
      cover: {
        light: '/img/about-lc-light.png',
        dark: '/img/about-lc-dark.png',
      },
      images: ['/img/about-lc-light.png', '/img/about-lc-dark.png'],
      caseStudy: {
        title: 'Project 1 website',
        description: 'Lorem ipsum dolor sit amet',
      },
      technologies: ['react', 'css'],
    },
  ];

  return (
    // Portfolio Start
    <section className="portfolio bg-primary flex-1">
      <Title
        keyword="Software Engineering"
        content="The stages of the chosen path"
      />
      {/* Portfolio Start */}
      <div className="portfolio__container flex flex-wrap">
        {demo.map((project, i) => (
          <Project key={crypto.randomUUID() + i} project={project} />
        ))}
      </div>
      {/* Portfolio End */}
      <Menu />
      <Terminal delay={2000} />
    </section>
    // Portfolio End
  );
}
