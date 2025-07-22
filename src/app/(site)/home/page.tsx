import { Metadata } from 'next';
import AnimationTypedTitles from '@/components/Animation/AnimationTypedTitles';
import AnimationTypedArticle from '@/components/Animation/AnimationTypedArticle';
import Menu from '@/components/Navigation/Menu';
import Terminal from '@/components/Terminal/Terminal';
import { METADATA } from '@/data/content';
import { queryHome } from '@/sanity/queries';
import { fetchData } from '@/sanity/services';
import type { SanityDocument } from 'next-sanity';

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
 * @date 22/07/2025
 * @export
 * @returns {*}  {Promise<React.ReactNode>}
 */
export default async function Home(): Promise<React.ReactNode> {
  const page = await fetchData(queryHome);
  const { metadata, articles } = (page as SanityDocument[])[0];

  return (
    // Home Start
    <section className="home bg-primary flex-1">
      <h6 className="home__title hidden">{metadata.title}</h6>
      <AnimationTypedTitles />
      <AnimationTypedArticle content={articles[0].contents} html={true} />
      <Menu delay={3800} />
      <AnimationTypedArticle
        content={articles[1].contents}
        html={true}
        delay={articles[1].animationDelay}
      />
      <Terminal delay={9000} />
    </section>
    // Home End
  );
}
