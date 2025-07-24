import { ImageProps } from 'next/image';

// Picture
type TPictureProps = Omit<ImageProps, 'src' | 'priority' | 'loading'> & {
  srcLight: string;
  srcDark: string;
};

export type { TPictureProps };
