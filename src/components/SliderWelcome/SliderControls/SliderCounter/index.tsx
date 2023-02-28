import useSlideCounter from '@/hooks/useSlideCounter';
import handleCounter from '@/utils/handleCounter';

const SliderCounter = (): JSX.Element => {
  const { counter } = useSlideCounter();
  return (
    <div className="slider-welcome__counter section-welcome__counter">
      <span>{handleCounter(counter.current)}</span>
      <span>|</span>
      <span>{handleCounter(counter.total)}</span>
    </div>
  );
};

export default SliderCounter;
