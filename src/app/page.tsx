import AnimationTypedTitles from '@/components/Animation/AnimationTypedTitles';
import AnimationTypedArticle from '../components/Animation/AnimationTypedArticle';
import Menu from '@/components/Navigation/Menu';
import Terminal from '@/components/Terminal/Terminal';

export default function Home(): React.ReactNode {

  return (
    // Home Start
    <section className="home bg-primary flex-1">
      <h6 className="home__title hidden">Home</h6>
      <AnimationTypedTitles />
      <AnimationTypedArticle content={['Lorem ipsum dolor sit amet.']} />
      {/* TODO: Decide if these two comps will be part of page or layout (use global state or not) */}
      <Menu />
      <Terminal />
    </section>
    // Home End
  );
}
