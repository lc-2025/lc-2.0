'use client';

import { useState } from 'react';
import Carousel from './Carousel';
import AnimationTypedArticle from '../Animation/AnimationTypedArticle';
import List from './List';
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
  const { name, images, caseStudy, technologies } = project;
  const { title, description } = caseStudy;
  // Hooks
  const [open, setOpen] = useState<boolean>(false);

  // Handlers
  const handleOpen = (): void => {
    setOpen(!open);
  };

  return (
    // Element Start
    <div className={`container__project flex-1/3 ${open && 'basis-full'}`}>
      {/* Cover Start */}
      <div
        style={{ backgroundImage: `url(${images[0]})` }}
        className="project__preview cursor-pointer bg-cover pb-[66.66%]"
        onClick={handleOpen}
      ></div>
      {/* Cover End */}
      {/* Project Start */}
      {open && (
        <aside className="project__study p-6">
          <Carousel alt={name} images={images} />
          {/* Titles Start */}
          <hgroup className="study__titles hidden">
            <h2 className="titles__title">{name}</h2>
            <h3 className="titles__subtitle">{caseStudy.title}</h3>
          </hgroup>
          <AnimationTypedArticle content={[name]} speed={10} />
          <AnimationTypedArticle content={[title]} speed={10} delay={1500} />
          {/* Titles End */}
          <p className="study__description hidden">{description}</p>
          <AnimationTypedArticle
            content={[description]}
            speed={5}
            delay={3000}
          />
          {/* Technologies Start */}
          <h4 className="study__technologies hidden">Technologies</h4>
          <AnimationTypedArticle
            content={['Technologies']}
            speed={10}
            delay={5000}
          />
          <List list={technologies} speed={5} delay={4000} />
          {/* Technologies End */}
        </aside>
      )}
    </div>
    // Element End
  );
};

export default Project;
