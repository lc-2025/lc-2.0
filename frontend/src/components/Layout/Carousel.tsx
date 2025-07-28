'use client';

import { useState } from 'react';
import PixelMask from './PixelMask';
import { TEST } from '@/utilities/constants';
import { TCarousel } from '@/types/components/Carousel';

/**
 * @description Carousel component
 * @author Luca Cattide
 * @date 07/07/2025
 * @param {TCarousel} { images }
 * @returns {*}  {React.ReactNode}
 */
const Carousel = ({ images }: TCarousel): React.ReactNode => {
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
    <div
      className="study__slideshow flex flex-col items-center justify-center"
      data-testid={TEST.SLIDESHOW}
    >
      {images.map((image, i) => (
        // Container Start
        <div
          key={crypto.randomUUID() + i}
          className="slideshow__container relative w-full"
        >
          <PixelMask>
            <div
              className={`container__image mr-auto mb-6 ml-auto w-full bg-contain bg-center bg-no-repeat pb-[66%] lg:w-[62%] lg:pb-[38%] ${i !== current && 'hidden'}`}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </PixelMask>
        </div>
        // Container End
      ))}
      {/* Navigation Start */}
      <div className="slideshow__navigation">
        <button
          className={`navigation__action navigation__action--previous mr-6 uppercase select-none ${current === 0 && 'opacity-50'}`}
          onClick={() => handleAction(1)}
          aria-label="Previous"
        >
          Previous
        </button>
        <button
          className={`navigation__action navigation__action--next ml-6 uppercase select-none ${current === images.length - 1 && 'opacity-50'}`}
          onClick={() => handleAction(2)}
          aria-label="Next"
          data-testid={TEST.SLIDESHOW_NAVIGATION}
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
