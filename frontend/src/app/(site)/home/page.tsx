import { Metadata } from 'next';
import AnimationTypedTitles from '@/components/Animation/AnimationTypedTitles';
import AnimationTypedArticle from '@/components/Animation/AnimationTypedArticle';
import Menu from '@/components/Navigation/Menu';
import TerminalWrapper from '@/components/Terminal/TerminalWrapper';
import { METADATA } from '@/data/content';
import { queryHome } from '@/sanity/queries';
import useFetch from '@/hooks/Fetch';
import type { SanityDocument } from '@sanity/types';
import { TPage } from '@/types/sanity';

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
  const { data, error } = await useFetch(queryHome);

  // Error check
  if (error) {
    return error;
  }

  const { metadata, articles } = data[0] as SanityDocument & TPage;

  return (
    // Home Start
    <section className="home bg-primary flex-1">
      <h6 className="home__title hidden">{metadata!.title}</h6>
      <AnimationTypedTitles />
      <AnimationTypedArticle content={articles[0].contents} html={true} />
      <Menu delay={3800} />
      <AnimationTypedArticle
        content={articles[1].contents}
        html={true}
        delay={articles[1].animationDelay}
      />
      <TerminalWrapper delay={9000} />
    </section>
    // Home End
  );
}
