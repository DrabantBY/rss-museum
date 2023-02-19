import { create } from 'zustand';

interface SlideNumber {
  slideNumber: number;
  setSlideNumber: (number: number) => void;
}

const useSlideNumber = create<SlideNumber>((set) => ({
  slideNumber: 0,
  setSlideNumber: (number) => {
    set({ slideNumber: number });
  },
}));

export default useSlideNumber;
