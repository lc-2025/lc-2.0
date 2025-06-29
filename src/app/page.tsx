import AnimationTypedTitles from '@/components/AnimationTypedTitles';
import AnimationTypedArticle from '../components/AnimationTypedArticle';
import Menu from '../components/Menu';
import Terminal from '../components/Terminal';
import { TITLES } from '@/data/content';

export default function Home(): React.ReactNode {
  const { HEADLINE, TAGLINE } = TITLES.HOME;

  return (
    // Home Start
    <section className="home bg-primary flex-1">
      <h6 className="home__title hidden">Home</h6>
      <AnimationTypedTitles content={[HEADLINE, TAGLINE,]} />
      <AnimationTypedArticle content={['Lorem ipsum dolor sit amet.']} />
      {/* TODO: Decide if these two comps will be part of page or layout (use global state or not) */}
      <Menu />
      <Terminal />
    </section>
    // Home End
  );
}
