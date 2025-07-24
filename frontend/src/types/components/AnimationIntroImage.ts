// Animation Intro
enum AnimationIntroType {
  Logo = 'logo',
  Tagline = 'tagline',
}

type TAnimationIntroImage = {
  type: AnimationIntroType;
  children: React.ReactNode;
};

export { AnimationIntroType };
export type { TAnimationIntroImage };
