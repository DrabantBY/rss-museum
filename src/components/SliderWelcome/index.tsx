import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import useSliderWelcomeState from '@/zustand/state';
import SliderControls from '@components/SliderWelcome/SliderControls';
import 'swiper/scss';
import './style.scss';

const SliderWelcome = (): JSX.Element => {
  const setCurrentSlideNumber = useSliderWelcomeState(
    (state) => state.setCurrentSlideNumber
  );
  return (
    <div className="slider section-welcome__slider">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        onSlideChange={(swiper) => {
          setCurrentSlideNumber(swiper.realIndex);
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}>
        <SwiperSlide>
          <img
            className="image section-welcome__image"
            src="src/assets/images/welcome-slider/1.jpg"
            alt="slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="image section-welcome__image"
            src="src/assets/images/welcome-slider/2.jpg"
            alt="slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="image section-welcome__image"
            src="src/assets/images/welcome-slider/3.jpg"
            alt="slide 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="image section-welcome__image"
            src="src/assets/images/welcome-slider/4.jpg"
            alt="slide 4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="image section-welcome__image"
            src="src/assets/images/welcome-slider/5.jpg"
            alt="slide 5"
          />
        </SwiperSlide>
        <SliderControls />
      </Swiper>
    </div>
  );
};

export default SliderWelcome;
