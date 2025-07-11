import { MouseEvent } from 'react';

// Animation
type TUseAnimationNavigate = (
  path: string,
  e?: MouseEvent<HTMLAnchorElement, Event>,
) => void;

type TUseAnimation = {
  navigate: TUseAnimationNavigate;
};

export type { TUseAnimationNavigate, TUseAnimation };
