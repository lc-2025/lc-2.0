// State Management
type TState = {
  theme: string;
};

type TStateAction = {
  type: string;
  element: any;
};

export type { TState, TStateAction };
