'use client';

import { useRef, useState } from 'react';
import Carousel from './Carousel';
import AnimationTypedArticle from '../Animation/AnimationTypedArticle';
import List from './List';
import { useStateContext } from '@/hooks/State';
import { isLightTheme } from '@/utilities/utils';
import { TPorfolio } from '@/types/components/Project';

/**
 * @description Project component
 * @author Luca Cattide
 * @date 07/07/2025
 * @param {TPorfolio} { project }
 * @returns {*}  {React.ReactNode}
 */
const Project = ({ project }: TPorfolio): React.ReactNode => {
  // Props
  const { name, cover, images, caseStudy, technologies } = project;
  const { light, dark } = cover;
  const { title, description } = caseStudy;
  // Hooks
  const carousel = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const { theme } = useStateContext();

  // Handlers
  /**
   * @description Project displaying handler
   * @author Luca Cattide
   * @date 17/07/2025
   */
  const handleOpen = (): void => {
    const wrapper = document.getElementsByClassName(
      'main-container__wrapper',
    )[0];
    const projects = document.getElementsByClassName('container__project');
    const carousels = document.getElementsByClassName('project__study');

    for (let project of projects) {
      project.classList.remove('basis-full');
      project.classList.add(
        '[&:nth-child(odd)>div>div]:bg-accent',
        '[&:nth-child(even)>div>div]:bg-primary',
      );
    }
    for (let carousel of carousels) {
      carousel.classList.add('hidden');
    }

    setOpen(!open);

    carousel.current!.parentElement!.classList.add('basis-full');
    carousel.current!.parentElement!.classList.remove(
      '[&:nth-child(odd)>div>div]:bg-accent',
      '[&:nth-child(even)>div>div]:bg-primary',
    );
    wrapper.scrollTo({
      top: carousel.current!.offsetTop + carousel.current!.offsetHeight,
      behavior: 'smooth',
    });
  };

  return (
    // Element Start
    <div className="container__project flex-1/3">
      {/* Cover Start */}
      <div
        ref={carousel}
        style={{
          backgroundImage: `url(${isLightTheme(theme) ? light : dark})`,
        }}
        className={`project__preview relative bg-cover bg-center object-cover pb-[66.66%]`}
      >
        <div
          className="preview__overlay absolute top-0 left-0 z-10 h-full w-full cursor-pointer opacity-50 hover:opacity-0"
          onClick={handleOpen}
        ></div>
      </div>
      {/* Cover End */}
      {/* Project Start */}
      <aside className={`project__study p-6 ${!open && 'hidden'}`}>
        <Carousel images={images} />
        {/* Titles Start */}
        <hgroup className="study__titles hidden">
          <h2 className="titles__title">{name}</h2>
          <h3 className="titles__subtitle">{caseStudy.title}</h3>
        </hgroup>
        <AnimationTypedArticle content={[name]} speed={10} />
        <AnimationTypedArticle content={[title]} speed={10} />
        {/* Titles End */}
        <p className="study__description hidden">{description}</p>
        <AnimationTypedArticle content={[description]} speed={5} html={true} />
        {/* Technologies Start */}
        <h4 className="study__technologies hidden">Technologies</h4>
        <AnimationTypedArticle content={['Technologies']} speed={10} />
        <List list={technologies} speed={5} />
        {/* Technologies End */}
      </aside>
    </div>
    // Element End
  );
};

export default Project;
