import { useSwiper } from 'swiper/react';
import { ReactComponent as IconArrowLeft } from '@assets/svg/arrow-left.svg';
import { ReactComponent as IconArrowRight } from '@assets/svg/arrow-right.svg';
import './style.scss';

const SliderNavigation = (): JSX.Element => {
  const swiper = useSwiper();

  return (
    <div className="slider-navigation section-welcome__slider-navigation">
      <button
        className="slider-navigation-btn section-welcome__slider-navigation-btn"
        type="button"
        onClick={() => {
          swiper.slidePrev();
        }}>
        <IconArrowLeft />
      </button>
      <button
        className="slider-navigation-btn section-welcome__slider-navigation-btn"
        type="button"
        onClick={() => {
          swiper.slideNext();
        }}>
        <IconArrowRight />
      </button>
    </div>
  );
};

export default SliderNavigation;
