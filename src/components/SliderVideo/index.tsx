import VideoPlayer from '@components/VieoPlayer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { ReactComponent as DoubleArrowPrevIcon } from '@assets/svg/double-arrow-prev.svg';
import { ReactComponent as DoubleArrowNextIcon } from '@assets/svg/double-arrow-next.svg';
import { VIDEO } from '@/constants';

import 'swiper/scss';
import './style.scss';

const SliderVideo = (): JSX.Element => {
  const pagination = {
    el: '.slider-video__pagination',
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<button class="${className}"></button>`;
    },
  };

  const navigation = {
    prevEl: '.slider-video__btn-prev',
    nextEl: '.slider-video__btn-next',
  };

  return (
    <div className="slider-video">
      <Swiper
        className="slider-video__player"
        loop={true}
        slidesPerView={1}
        spaceBetween={10}
        navigation={navigation}
        pagination={pagination}
        modules={[Navigation, Pagination]}>
        {VIDEO.map((_, index) => (
          <SwiperSlide key={index}>
            <VideoPlayer index={index} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        className="slider-video__list"
        loop={true}
        slidesPerView={2}
        spaceBetween={20}
        navigation={navigation}
        pagination={pagination}
        modules={[Navigation, Pagination]}
        breakpoints={{
          770: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}>
        {VIDEO.map((video, index) => (
          <SwiperSlide key={index}>
            <div className="slider-video__item">
              <iframe src={video} allowFullScreen loading="lazy"></iframe>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="slider-video__controls">
        <button className="btn-prev slider-video__btn-prev" type="button">
          <DoubleArrowPrevIcon />
        </button>
        <div className="slider-video__pagination"></div>
        <button className="btn-next slider-video__btn-next" type="button">
          <DoubleArrowNextIcon />
        </button>
      </div>
    </div>
  );
};

export default SliderVideo;
