import { useState, useEffect, useRef } from 'react';
import './style.scss';

const SliderExplore = (): JSX.Element => {
  const [canMove, setCanMove] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (eventPosition: number): void => {
    if (thumbRef.current === null || imageRef.current === null) return;

    const { left, width } = imageRef.current.getBoundingClientRect();
    const thumbWidth = thumbRef.current.offsetWidth;

    if (
      eventPosition >= left - thumbWidth / 2 &&
      eventPosition <= left + width - thumbWidth / 2
    ) {
      thumbRef.current.style.left = `${
        ((eventPosition - left) * 100) / width
      }%`;
      imageRef.current.style.clipPath = `inset(0 ${
        100 - ((eventPosition - left + thumbWidth / 2) / width) * 100
      }% 0 0)`;
    }
  };

  useEffect(() => {
    if (canMove) {
      document.body.onmousemove = (e) => {
        handleMouseMove(e.clientX);
      };

      document.body.onmouseup = () => {
        setCanMove(false);
        document.body.onmousemove = null;
        document.body.onmouseup = null;
      };
    }

    return () => {
      document.body.onmousemove = null;
      document.body.onmouseup = null;
    };
  }, [handleMouseMove, setCanMove]);

  return (
    <div className="slider-explore section-explore__slider-explore">
      <div
        className="slider-explore__figure-before section-explore__figure-before"
        ref={imageRef}>
        <img
          className="slider-explore__image-before section-explore__image-before"
          src="src/assets/images/explore-slider/before.jpg"
          alt="before"
        />
      </div>

      <div
        className="slider-explore__thumb section-explore__thumb"
        ref={thumbRef}
        onMouseDown={() => {
          setCanMove(true);
        }}>
        <span className="slider-explore__thumb-ring section-explore__thumb-ring"></span>
      </div>

      <div className="slider-explore__figure-after section-explore__figure-after">
        <img
          className="slider-explore__image-after section-explore__image-after"
          src="src/assets/images/explore-slider/after.jpg"
          alt="after"
        />
      </div>
    </div>
  );
};

export default SliderExplore;
