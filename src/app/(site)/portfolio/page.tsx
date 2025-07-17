import { Metadata } from 'next';
import Title from '@/components/Layout/Title';
import Project from '@/components/Layout/Project';
import Menu from '@/components/Navigation/Menu';
import Terminal from '@/components/Terminal/Terminal';
import { METADATA, PORTFOLIO as WORKS } from '@/data/content';

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
  return (
    // Portfolio Start
    <section className="portfolio bg-primary flex-1">
      <Title
        keyword="Software Engineering"
        content="The stages of the chosen path"
      />
      {/* Portfolio Start */}
      <div className="portfolio__container flex flex-col md:flex-row md:flex-wrap">
        {WORKS.map((project, i) => (
          <Project key={crypto.randomUUID() + i} project={project} />
        ))}
      </div>
      {/* Portfolio End */}
      <Menu />
      <Terminal delay={2500} />
    </section>
    // Portfolio End
  );
}
