import { useSwiper } from 'swiper/react';
import useSliderWelcomeState from '@/zustand/state';
import handleNumbers from '@/utils/handleNumbers';
import './style.scss';

const SliderCounter = (): JSX.Element => {
  const swiper = useSwiper();
  const currentSlideNumber = useSliderWelcomeState(
    (state) => state.currentSlideNumber
  );
  return (
    <div className="slider-counter section-welcome__slider-counter">
      <span>{handleNumbers(currentSlideNumber + 1)}</span>
      <span>|</span>
      <span>{handleNumbers(swiper.slides.length)}</span>
    </div>
  );
};

export default SliderCounter;
