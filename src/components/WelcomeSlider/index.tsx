import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import './style.scss';

const WelcomeSlider = (): JSX.Element => {
  return (
    <div className="slider section-welcome__slider">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        // onSlideChange={() => {
        //   console.log(123);
        // }}
        // onSwiper={(swiper) => {
        //   console.log(swiper.params);
        // }}
      >
        <SwiperSlide>
          {/* <figure className="figure section-welcome__figure"> */}
          <img
            className="image section-welcome__image"
            src="src/assets/images/welcome-slider/1.jpg"
            alt="slide 1"
          />
          {/* </figure> */}
        </SwiperSlide>
        <SwiperSlide>
          {/* <figure className="section-welcome__figure"> */}
          <img
            className="image section-welcome__image"
            src="src/assets/images/welcome-slider/2.jpg"
            alt="slide 2"
          />
          {/* </figure> */}
        </SwiperSlide>
        <SwiperSlide>
          {/* <figure className="section-welcome__figure"> */}
          <img
            className="image section-welcome__image"
            src="src/assets/images/welcome-slider/3.jpg"
            alt="slide 3"
          />
          {/* </figure> */}
        </SwiperSlide>
        <SwiperSlide>
          {/* <figure className="section-welcome__figure"> */}
          <img
            className="image section-welcome__image"
            src="src/assets/images/welcome-slider/4.jpg"
            alt="slide 4"
          />
          {/* </figure> */}
        </SwiperSlide>
        <SwiperSlide>
          {/* <figure className="section-welcome__figure"> */}
          <img
            className="image section-welcome__image"
            src="src/assets/images/welcome-slider/5.jpg"
            alt="slide 5"
          />
          {/* </figure> */}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default WelcomeSlider;
