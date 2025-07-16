'use client';

import { useState } from 'react';
import Picture from './Picture';
import { TCarousel } from '@/types/components/Carousel';

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
    setCurrent((state) =>
      action === 1 && state > 0
        ? state - 1
        : action === 2 && state < images.length - 1
          ? state + 1
          : state,
    );
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
            width={2560}
            height={1361}
          />
        </div>
        // Container End
      ))}
      {/* Navigation Start */}
      <div className="slideshow__navigation">
        <button
          className="navigation__action navigation__action--previous mr-6 uppercase select-none"
          onClick={() => handleAction(1)}
        >
          Previous
        </button>
        <button
          className="navigation__action navigation__action--next ml-6 uppercase select-none"
          onClick={() => handleAction(2)}
        >
          Next
        </button>
      </div>
      {/* Navigation End */}
    </div>
    // Slideshow End
  );
};

export default Carousel;
