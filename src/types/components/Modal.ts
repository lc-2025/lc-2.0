// Modal
type TModal = {
  open: boolean;
  title: string;
  callback: () => void;
  children: React.ReactNode;
};

export type { TModal };
