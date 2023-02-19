import { useSwiper } from 'swiper/react';
import useSlideNumber from '@/hooks/useSlideNumber';
import './style.scss';

const SliderPagination = (): JSX.Element => {
  const swiper = useSwiper();
  const slideNumber = useSlideNumber((state) => state.slideNumber);

  return (
    <div className="slider-pagination section-welcome__slider-pagination">
      {Array.from({ length: swiper.slides.length }).map((_, index) => (
        <button
          className={`slider-pagination-btn section-welcome__slider-pagination-btn ${
            index === slideNumber ? 'active' : ''
          }`}
          type="button"
          key={index}
          onClick={() => {
            swiper.slideTo(index);
          }}></button>
      ))}
    </div>
  );
};

export default SliderPagination;
