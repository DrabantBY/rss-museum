import SliderCounter from './SliderCounter';
import { ReactComponent as IconArrowLeft } from '@assets/svg/arrow-left.svg';
import { ReactComponent as IconArrowRight } from '@assets/svg/arrow-right.svg';
import './style.scss';

const SliderControls = (): JSX.Element => {
  return (
    <div className="slider-welcome__controls section-welcome__controls">
      <SliderCounter />
      <div className="slider-welcome__pagination section-welcome__pagination"></div>
      <div className="slider-welcome__navigation section-welcome__navigation">
        <button
          className="slider-welcome__btn-prev section-welcome__btn-prev"
          type="button">
          <IconArrowLeft />
        </button>
        <button
          className="slider-welcome__btn-next section-welcome__btn-next"
          type="button">
          <IconArrowRight />
        </button>
      </div>
    </div>
  );
};
export default SliderControls;
