'use client';

import { useState } from 'react';
import Picture from './Picture';
import { TCarousel } from '@/types/components/Carousel';
import Action from './Action';

/**
 * @description Carousel component
 * @author Luca Cattide
 * @date 07/07/2025
 * @param {TCarousel} { alt, images }
 * @returns {*}  {React.ReactNode}
 */
const Carousel = ({ alt, images }: TCarousel): React.ReactNode => {
  // Hooks
  const [current, setCurrent] = useState<number>(0);

  // Handlers
  /**
   * @description Carousel action handler
   * Manages the carousel navigation
   * @author Luca Cattide
   * @date 07/07/2025
   * @param {number} action
   */
  const handleAction = (action: number): void => {
    const selectedAction = {
      1: setCurrent((state) => (state > 0 ? state - 1 : state)),
      2: setCurrent((state) => (state < images.length - 1 ? state + 1 : state)),
    };

    selectedAction[action as keyof typeof selectedAction];
  };

  return (
    // Slideshow Start
    <div className="study__slideshow flex flex-col items-center justify-center">
      {images.map((image, i) => (
        // Container Start
        <div
          key={crypto.randomUUID() + i}
          className="slideshow__container relative w-full"
        >
          <Picture
            className={`container__image ${i !== current && 'hidden'}`}
            srcLight={image}
            srcDark={image}
            alt={`${alt}-${i}`}
            width={300}
            height={300}
          />
        </div>
        // Container End
      ))}
      {/* Actions Start */}
      <div className="slideshow__actions">
        {/* <span
          className="actions__action select-none"
          onClick={() => handleAction(1)}
        >
          Previous
        </span>
        <span
          className="actions__action select-none"
          onClick={() => handleAction(2)}
        >
          Next
        </span> */}
        <Action action={{label: 'Previous', callback: handleAction(1)}} />
      </div>
      {/* Actions End */}
    </div>
    // Slideshow End
  );
};

export default Carousel;
