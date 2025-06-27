import AnimationTypedArticle from '../components/AnimationTypedArticle';
import Menu from '../components/Menu';
import Terminal from '../components/Terminal';

export default function Home(): React.ReactNode {
  return (
    // Home Start
    <section className="home">
      <h6 className="home__title hidden">Home</h6>
      <AnimationTypedArticle content={['Lorem ipsum dolor sit amet.']} />
      {/* TODO: Decide if these two comps will be part of page or layout (use global state or not) */}
      <Menu />
      <Terminal />
    </section>
    // Home End
  );
}
