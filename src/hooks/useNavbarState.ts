import { create } from 'zustand';

interface NavbarState {
  isOpen: boolean;
  setIsOpen: () => void;
}

const useNavbarState = create<NavbarState>((set, get) => ({
  isOpen: false,
  setIsOpen: () => {
    set({ isOpen: !get().isOpen });
  },
}));

export default useNavbarState;
