import { Metadata } from 'next';
import Title from '@/components/Layout/Title';
import Picture from '@/components/Layout/Picture';
import AnimationTypedArticle from '@/components/Animation/AnimationTypedArticle';
import Menu from '@/components/Navigation/Menu';
import Terminal from '@/components/Terminal/Terminal';
import { METADATA } from '@/data/content';
import useFetch from '@/hooks/Fetch';
import { queryAbout } from '@/sanity/queries';
import { getImageUrl } from '@/sanity/client';
import type { SanityDocument } from 'next-sanity';

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
 * @date 23/07/2025
 * @export
 * @returns {*}  {Promise<React.ReactNode>}
 */
export default async function About(): Promise<React.ReactNode> {
  const { data, error } = await useFetch(queryAbout);

  // Error check
  if (error) {
    return error;
  }

  const { headline, tagline, pictures, articles } = data[0];
  const { imageLight, imageDark, alt } = pictures;

  return (
    // About Start
    <section className="about bg-primary flex-1">
      {/* Headline Start */}
      <Title keyword={headline} content={tagline} />
      <Picture
        className="intro__picture"
        srcLight={String(getImageUrl(imageLight)!.width(4896).height(3672))}
        srcDark={String(getImageUrl(imageDark)!.width(4896).height(3672))}
        alt={alt}
        width={4896}
        height={3672}
      />
      {/* Headline End */}
      {(articles as SanityDocument[]).map(
        ({ _id, contents, animationSpeed, animationDelay }, i) => (
          <AnimationTypedArticle
            key={crypto.randomUUID() + i + _id}
            content={contents}
            html={true}
            speed={animationSpeed}
            delay={animationDelay}
          />
        ),
      )}
      <Menu delay={60000} />
      <Terminal delay={62000} />
    </section>
    // About End
  );
}
