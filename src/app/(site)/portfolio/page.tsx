import { Metadata } from 'next';
import Title from '@/components/Layout/Title';
import Project from '@/components/Layout/Project';
import Menu from '@/components/Navigation/Menu';
import Terminal from '@/components/Terminal/Terminal';
import { METADATA } from '@/data/content';
import useFetch from '@/hooks/Fetch';
import { getImageUrl } from '@/sanity/client';
import { queryPortfolio } from '@/sanity/queries';
import type { SanityDocument } from '@sanity/types';
import { TPage } from '@/types/sanity';

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
 * @date 23/07/2025
 * @export
 * @returns {*}  {Promise<React.ReactNode>}
 */
export default async function Portfolio(): Promise<React.ReactNode> {
  const { data, error } = await useFetch(queryPortfolio);

  // Error check
  if (error) {
    return error;
  }

  const { headline, tagline, projects } = data[0] as SanityDocument & TPage;

  return (
    // Portfolio Start
    <section className="portfolio bg-primary flex-1">
      <Title keyword={headline} content={tagline} />
      {/* Portfolio Start */}
      <div className="portfolio__container flex flex-col md:flex-row md:flex-wrap">
        {projects!.map(({ _id, cover, images, technologies, ...rest }, i) => (
          <Project
            key={crypto.randomUUID() + i + _id}
            project={{
              ...rest,
              cover: String(getImageUrl(cover)),
              images: images.map((image) => String(getImageUrl(image))),
              technologies: technologies.map((technology) => technology.name),
            }}
          />
        ))}
      </div>
      {/* Portfolio End */}
      <Menu />
      <Terminal delay={2500} />
    </section>
    // Portfolio End
  );
}
