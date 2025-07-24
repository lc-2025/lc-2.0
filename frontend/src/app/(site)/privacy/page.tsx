import { Metadata } from 'next';
import Title from '@/components/Layout/Title';
import AnimationTypedArticle from '@/components/Animation/AnimationTypedArticle';
import Menu from '@/components/Navigation/Menu';
import TerminalWrapper from '@/components/Terminal/TerminalWrapper';
import { METADATA } from '@/data/content';
import useFetch from '@/hooks/Fetch';
import { queryPrivacy } from '@/sanity/queries';
import { formatDate } from '@/utilities/utils';
import type { SanityDocument } from '@sanity/types';
import { TPage } from '@/types/sanity';

// Variables
const { PRIVACY } = METADATA.TITLE;
const { LABEL, DESCRIPTION } = PRIVACY;

// Metadata
export const metadata: Metadata = {
  title: LABEL,
  description: DESCRIPTION,
};

/**
 * @description Privacy page
 * @author Luca Cattide
 * @date 23/07/2025
 * @export
 * @returns {*}  {Promise<React.ReactNode>}
 */
export default async function Privacy(): Promise<React.ReactNode> {
  const { data, error } = await useFetch(queryPrivacy);

  // Error check
  if (error) {
    return error;
  }

  const { headline, tagline, lastUpdate, articles } =
    data[0] as SanityDocument & TPage;

  return (
    // Privacy Start
    <section className="privacy bg-primary flex-1">
      <Title
        keyword={headline}
        content={`${tagline} ${formatDate(lastUpdate!)}`}
      />
      {articles.map(
        ({ _id, contents, animationSpeed, animationDelay }, i) => (
          <AnimationTypedArticle
            key={crypto.randomUUID() + i + _id}
            content={contents.map((content, j) =>
              i === 0 && j === 1
                ? `${content} ${formatDate(lastUpdate!)}`
                : content,
            )}
            html={true}
            speed={animationSpeed}
            delay={animationDelay}
          />
        ),
      )}
      <Menu delay={108000} />
      <TerminalWrapper delay={111000} />
    </section>
    // Privacy End
  );
}
