import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import useSlideCounter from '@/hooks/useSlideCounter';
import SliderControls from '@components/SliderWelcome/SliderControls';
import 'swiper/scss';
import './style.scss';

const SliderWelcome = (): JSX.Element => {
  const setCounter = useSlideCounter((state) => state.setCounter);

  const pagination = {
    el: '.slider-welcome__pagination',
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<button class="${className}"></button>`;
    },
  };

  const navigation = {
    prevEl: '.slider-welcome__btn-prev',
    nextEl: '.slider-welcome__btn-next',
  };

  return (
    <div className="slider-welcome">
      <Swiper
        className="slider-welcome__body"
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        navigation={navigation}
        pagination={pagination}
        onSlideChange={(swiper) => {
          setCounter(swiper.realIndex + 1, swiper.slides.length);
        }}
        onAfterInit={(swiper) => {
          setCounter(swiper.realIndex + 1, swiper.slides.length);
        }}>
        <SwiperSlide>
          <img
            className="slider-welcome__image"
            src="src/assets/images/welcome-slider/1.jpg"
            alt="slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slider-welcome__image"
            src="src/assets/images/welcome-slider/2.jpg"
            alt="slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slider-welcome__image"
            src="src/assets/images/welcome-slider/3.jpg"
            alt="slide 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slider-welcome__image"
            src="src/assets/images/welcome-slider/4.jpg"
            alt="slide 4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slider-welcome__image"
            src="src/assets/images/welcome-slider/5.jpg"
            alt="slide 5"
          />
        </SwiperSlide>
      </Swiper>

      <SliderControls />
    </div>
  );
};

export default SliderWelcome;
