import { useSwiper } from 'swiper/react';
import useSlideNumber from '@/hooks/useSlideNumber';
import handleSlideNumbers from '@/utils/handleSlideNumber';
import './style.scss';

const SliderCounter = (): JSX.Element => {
  const swiper = useSwiper();
  const slideNumber = useSlideNumber((state) => state.slideNumber);
  return (
    <div className="slider-counter section-welcome__slider-counter">
      <span>{handleSlideNumbers(slideNumber + 1)}</span>
      <span>|</span>
      <span>{handleSlideNumbers(swiper.slides.length)}</span>
    </div>
  );
};

export default SliderCounter;
