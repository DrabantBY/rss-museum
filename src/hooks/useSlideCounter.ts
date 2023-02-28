import { create } from 'zustand';

interface SlideCounter {
  counter: { current: number; total: number };
  setCounter: (current: number, total: number) => void;
}

const useSlideCounter = create<SlideCounter>((set) => ({
  counter: { current: 0, total: 0 },
  setCounter: (current, total) => {
    set((state) => ({ counter: { current, total } }));
  },
}));

export default useSlideCounter;
