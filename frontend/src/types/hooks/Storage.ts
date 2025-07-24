// Local Storage
type TUseStorage = {
  getStorage: (item: string) => string | null;
  setStorage: (item: string, value: string) => void;
  deleteStorages: (items: Array<string>) => void;
};

export type { TUseStorage };
