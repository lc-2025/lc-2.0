import { Metadata } from 'next';
import Title from '@/components/Layout/Title';
import Picture from '@/components/Layout/Picture';
import AnimationTypedArticle from '@/components/Animation/AnimationTypedArticle';
import Menu from '@/components/Navigation/Menu';
import Terminal from '@/components/Terminal/Terminal';
import { METADATA } from '@/data/content';
import useFetch from '@/hooks/Fetch';
import { queryContacts } from '@/sanity/queries';
import { getImageUrl } from '@/sanity/client';
import type { SanityDocument } from 'next-sanity';

// Variables
const { CONTACTS } = METADATA.TITLE;
const { LABEL, DESCRIPTION } = CONTACTS;

// Metadata
export const metadata: Metadata = {
  title: LABEL,
  description: DESCRIPTION,
};

/**
 * @description Contacts page
 * @author Luca Cattide
 * @date 23/07/2025
 * @export
 * @returns {*}  {Promise<React.ReactNode>}
 */
export default async function Contacts(): Promise<React.ReactNode> {
  const { data, error } = await useFetch(queryContacts);

  // Error check
  if (error) {
    return error;
  }

  const { headline, tagline, pictures, articles } = data[0];
  const { imageLight, imageDark, alt } = pictures;

  return (
    // Contacts Start
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
      {/* Summary End */}
      <Menu delay={4900} />
      <Terminal delay={6900} />
    </section>
    // Contacts End
  );
}
