// Local Storage
type TUseStorage = {
  getStorage: (item: string) => string | null;
  setStorage: (item: string, value: string) => void;
};

export type { TUseStorage };
