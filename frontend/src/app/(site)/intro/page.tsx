import { Metadata } from 'next';
import Title from '@/components/Layout/Title';
import Picture from '@/components/Layout/Picture';
import AnimationTypedArticle from '@/components/Animation/AnimationTypedArticle';
import List from '@/components/Layout/List';
import Menu from '@/components/Navigation/Menu';
import TerminalWrapper from '@/components/Terminal/TerminalWrapper';
import useFetch from '@/hooks/Fetch';
import { queryIntro } from '@/sanity/queries';
import { TEST } from '@/utilities/constants';
import { METADATA } from '@/data/content';
import { getImageUrl } from '@/sanity/client';
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
 * @description Intro page
 * Home subpage
 * @author Luca Cattide
 * @date 22/07/2025
 * @export
 * @returns {*}  {Promise<React.ReactNode>}
 */
export default async function Intro(): Promise<React.ReactNode> {
  const { data, error } = await useFetch(queryIntro);

  // Error check
  if (error) {
    return error;
  }

  const { headline, tagline, pictures, articles, lists } =
    data[0] as SanityDocument & TPage;
  const { imageLight, imageDark, alt } = pictures;

  return (
    // Intro Start
    <section className="intro bg-primary flex-1" data-testid={TEST.INTRO}>
      {/* Headline Start */}
      <Title keyword={headline} content={tagline} />
      <Picture
        className="intro__picture"
        srcLight={String(getImageUrl(imageLight)!.width(1920).height(1080))}
        srcDark={String(getImageUrl(imageDark)!.width(1920).height(1080))}
        alt={alt}
        width={1920}
        height={1080}
      />
      {/* Headline End */}
      {articles
        .slice(0, 2)
        .map(({ _id, contents, animationSpeed, animationDelay }, i) => (
          <AnimationTypedArticle
            key={crypto.randomUUID() + i + _id}
            content={contents}
            html={true}
            speed={animationSpeed}
            delay={animationDelay}
          />
        ))}
      {/* Indicators Start */}
      <List list={lists![0].contents} delay={lists![0].animationDelay} />
      {/* Indicators End */}
      {/* Portfolio Start */}
      <AnimationTypedArticle
        content={articles[3].contents}
        html={true}
        speed={articles[3].animationSpeed}
        delay={articles[3].animationDelay}
      />
      {/* Portfolio End */}
      <Menu delay={63500} />
      <TerminalWrapper delay={66500} />
    </section>
    // Intro End
  );
}
