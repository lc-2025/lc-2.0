import { Metadata } from 'next';
import Title from '@/components/Layout/Title';
import Picture from '@/components/Layout/Picture';
import AnimationTypedArticle from '@/components/Animation/AnimationTypedArticle';
import Menu from '@/components/Navigation/Menu';
import Terminal from '@/components/Terminal/Terminal';
import { METADATA } from '@/data/content';

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
 * @date 04/07/2025
 * @export
 * @returns {*}  {React.ReactNode}
 */
export default function Contacts(): React.ReactNode {
  return (
    // Contacts Start
    <section className="about bg-primary flex-1">
      <Title
        keyword={'Software Engineer'}
        content={'<) Talks and professional appointments'}
      />
      {/* Headline Start */}
      <Picture
        className="intro__picture"
        srcLight="/img/contacts-lc-light.png"
        srcDark="/img/contacts-lc-dark.png"
        alt={DESCRIPTION}
        width={4896}
        height={3672}
      />
      <AnimationTypedArticle
        content={[
          `<mark><strong>Software Engineer</strong></mark> &lt;&rpar; Talks and professional appointments`,
        ]}
        html={true}
        delay={500}
      />
      {/* Headline End */}
      {/* Summary Start */}
      <AnimationTypedArticle
        content={['Please reach me out at lucacattide[at]pm[dot]me']}
        html={true}
        delay={3000}
      />
      {/* Summary End */}
      <Menu delay={4900} />
      <Terminal delay={6900} />
    </section>
    // Contacts End
  );
}
