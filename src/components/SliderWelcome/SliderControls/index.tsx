import SliderCounter from '../SliderCounter';
import SliderPagination from '../SliderPagination';
import SliderNavigation from '../SliderNavigation';
import './style.scss';

const SliderControls = (): JSX.Element => {
  return (
    <div className="slider-controls section-welcome__slider-controls">
      <SliderCounter />
      <SliderPagination />
      <SliderNavigation />
    </div>
  );
};
export default SliderControls;
