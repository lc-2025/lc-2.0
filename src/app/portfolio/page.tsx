import { Metadata } from 'next';
import Title from '@/components/Layout/Title';
import Picture from '@/components/Layout/Picture';
import AnimationTypedArticle from '@/components/Animation/AnimationTypedArticle';
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
      name: 'foo',
      images: ['/img/about-lc-light.png', '/img/about-lc-dark.png'],
      caseStudy: {
        title: 'bar',
        description: 'zoo',
      },
      technologies: ['react', 'css'],
    },
    {
      name: 'foo',
      images: ['/img/about-lc-light.png', '/img/about-lc-dark.png'],
      caseStudy: {
        title: 'bar',
        description: 'zoo',
      },
      technologies: ['react', 'css'],
    },
    {
      name: 'foo',
      images: ['/img/about-lc-light.png', '/img/about-lc-dark.png'],
      caseStudy: {
        title: 'bar',
        description: 'zoo',
      },
      technologies: ['react', 'css'],
    },
    {
      name: 'foo',
      images: ['/img/about-lc-light.png', '/img/about-lc-dark.png'],
      caseStudy: {
        title: 'bar',
        description: 'zoo',
      },
      technologies: ['react', 'css'],
    },
    {
      name: 'foo',
      images: ['/img/about-lc-light.png', '/img/about-lc-dark.png'],
      caseStudy: {
        title: 'bar',
        description: 'zoo',
      },
      technologies: ['react', 'css'],
    },
    {
      name: 'foo',
      images: ['/img/about-lc-light.png', '/img/about-lc-dark.png'],
      caseStudy: {
        title: 'bar',
        description: 'zoo',
      },
      technologies: ['react', 'css'],
    },
    {
      name: 'foo',
      images: ['/img/about-lc-light.png', '/img/about-lc-dark.png'],
      caseStudy: {
        title: 'bar',
        description: 'zoo',
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
      <div className="portfolio__grid flex flex-wrap">
        {demo.map(({ name, images, caseStudy, technologies }, i) => (
          // Element Start
          <div key={crypto.randomUUID() + i} className="grid__element flex-1/3">
            <div
              style={{ backgroundImage: `url(${images[0]})` }}
              className={`element__preview bg-cover pb-[66.66%]`}
            ></div>
            <aside className="element__study">
              <hgroup className="study__titles">
                <h2 className="titles__title">{name}</h2>
                <h3>{caseStudy.title}</h3>
              </hgroup>
              <p className="study__description">{caseStudy.description}</p>
              <h4 className="study__technologies">Technologies</h4>
              <ul className="study__list">
                {technologies.map((technology, i) => (
                  <li className="list__entry" key={crypto.randomUUID() + i}>
                    {technology}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
          // Element End
        ))}
      </div>
      {/* Portfolio End */}
      <Menu />
      <Terminal delay={2000} />
    </section>
    // Portfolio End
  );
}
