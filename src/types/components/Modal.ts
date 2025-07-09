// Modal
type TModal = {
  open: boolean;
  title: string;
  callback: () => void;
  children: React.ReactNode;
};

type TModalOpen = {
  links: boolean;
  cookies: boolean;
};

export type { TModal, TModalOpen };
