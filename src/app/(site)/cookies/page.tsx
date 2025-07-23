import { Metadata } from 'next';
import Title from '@/components/Layout/Title';
import AnimationTypedArticle from '@/components/Animation/AnimationTypedArticle';
import Menu from '@/components/Navigation/Menu';
import Terminal from '@/components/Terminal/Terminal';
import { METADATA } from '@/data/content';
import useFetch from '@/hooks/Fetch';
import { queryCookies } from '@/sanity/queries';
import { formatDate } from '@/utilities/utils';
import type { SanityDocument } from '@sanity/types';
import { TPage } from '@/types/sanity';

// Variables
const { COOKIES } = METADATA.TITLE;
const { LABEL, DESCRIPTION } = COOKIES;

// Metadata
export const metadata: Metadata = {
  title: LABEL,
  description: DESCRIPTION,
};

/**
 * @description Cookies page
 * @author Luca Cattide
 * @date 10/07/2025
 * @export
 * @returns {*}  {React.ReactNode}
 */
export default async function Cookies(): Promise<React.ReactNode> {
  const { data, error } = await useFetch(queryCookies);

  // Error check
  if (error) {
    return error;
  }

  const { headline, tagline, lastUpdate, articles } = data[0] as SanityDocument & TPage;

  return (
    // Cookies Start
    <section className="cookies bg-primary flex-1">
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
      <Menu delay={34700} />
      <Terminal delay={37500} />
    </section>
    // Cookies End
  );
}
