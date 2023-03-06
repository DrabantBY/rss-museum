import SliderVideo from '@components/SliderVideo';
import './style.scss';

const Video = (): JSX.Element => {
  return (
    <section className="section-video main__section-video">
      <div className="container section-video__container">
        <h2 className="title section-video__title">
          video journey
          <span className="section-video__text">
            Enter and visit one of the most famous museums in the world and
            enjoy masterpieces such as Mona Lisa or Hammurabi&apos;s Code
          </span>
        </h2>
        {/* <VideoPlayer /> */}
        <SliderVideo />
      </div>
    </section>
  );
};

export default Video;
