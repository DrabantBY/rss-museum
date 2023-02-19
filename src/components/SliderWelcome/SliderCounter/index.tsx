import { useSwiper } from 'swiper/react';
import useSliderWelcomeState from '@/zustand/state';
import handleSlideNumbers from '@/utils/handleSlideNumber';
import './style.scss';

const SliderCounter = (): JSX.Element => {
  const swiper = useSwiper();
  const currentSlideNumber = useSliderWelcomeState(
    (state) => state.currentSlideNumber
  );
  return (
    <div className="slider-counter section-welcome__slider-counter">
      <span>{handleSlideNumbers(currentSlideNumber + 1)}</span>
      <span>|</span>
      <span>{handleSlideNumbers(swiper.slides.length)}</span>
    </div>
  );
};

export default SliderCounter;
