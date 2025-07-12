'use client';

/**
 * @description Easter Egg component
 * @author Luca Cattide
 * @date 12/07/2025
 * @returns {*}  {React.ReactNode}
 */
const EasterEgg = (): React.ReactNode => {
  return (
    // Easter Egg Start
    <canvas
      id="canvas"
      className="easter-egg h-full max-h-screen min-h-screen w-full border-0 p-0"
    ></canvas>
    // Easter Egg End
  );
};

export default EasterEgg;
