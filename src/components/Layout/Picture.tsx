'use client';

import Image from 'next/image';
import { useStateContext } from '@/hooks/State';
import { isLightTheme } from '@/utilities/utils';
import { TPictureProps } from '@/types/components/Picture';
import PixelMask from './PixelMask';

/**
 * @description Picture component
 * @author Luca Cattide
 * @date 03/07/2025
 * @param {TPictureProps} props
 * @returns {*}  {React.ReactNode}
 */
const Picture = (props: TPictureProps): React.ReactNode => {
  // Variables
  const { srcLight, srcDark, ...rest } = props;
  const classes =
    'pointer-events-none m-auto p-6 select-none md:max-w-[62%] xl:max-w-[38%]';
  const sizes =
    '(width >= 40rem) 33vw, (width >= 48rem) 80vw, (width >= 64rem) 106vw, (width >= 80rem) 133vw, (width >= 96rem) 160vw';
  // Hooks
  const { theme } = useStateContext();

  return isLightTheme(theme) ? (
    <PixelMask>
      <Image
        {...rest}
        className={`${rest.className} picture--light ${classes}`}
        src={srcLight}
        sizes={sizes}
        priority={true}
      />
    </PixelMask>
  ) : (
    <PixelMask>
      <Image
        {...rest}
        className={`${rest.className} picture--dark ${classes}`}
        src={srcDark}
        sizes={sizes}
        priority={true}
      />
    </PixelMask>
  );
};

export default Picture;
