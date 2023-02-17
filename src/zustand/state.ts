import { create } from 'zustand';

interface SliderWelcomeStateInterface {
  currentSlideNumber: number;
  setCurrentSlideNumber: (number: number) => void;
}

const useSliderWelcomeState = create<SliderWelcomeStateInterface>((set) => ({
  currentSlideNumber: 0,
  setCurrentSlideNumber: (number) => {
    set({ currentSlideNumber: number });
  },
}));

export default useSliderWelcomeState;
