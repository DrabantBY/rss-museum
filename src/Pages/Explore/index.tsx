import { useState, useEffect, useRef, useCallback } from 'react';
import './style.scss';

const Explore = (): JSX.Element => {
  const [canMove, setCanMove] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((eventPosition: number) => {
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
  }, []);

  useEffect(() => {
    if (canMove) {
      document.body.onmousemove = (e) => {
        handleMouseMove(e.clientX);
      };
      document.body.onmouseup = () => {
        setCanMove(false);
      };
    }

    return () => {
      document.body.onmousemove = null;
      document.body.onmouseup = null;
    };
  }, [handleMouseMove, setCanMove]);

  return (
    <section className="section-explore main__section-explore">
      <div className="container section-explore__container">
        <div className="slider-comparison section-explore__slider-comparison">
          <div className="slider-comparison__figure-after section-explore__figure-after">
            <img
              className="slider-comparison__image-after section-explore__image-after"
              src="src/assets/images/explore-slider/after.jpg"
              alt="after"
              draggable="false"
            />
          </div>

          <div
            className="slider-comparison__thumb section-explore__thumb"
            ref={thumbRef}
            onMouseDown={() => {
              setCanMove(true);
            }}>
            <span className="slider-comparison__thumb-ring section-explore__thumb-ring"></span>
          </div>

          <div
            className="slider-comparison__figure-before section-explore__figure-before"
            ref={imageRef}>
            <img
              className="slider-comparison__image-before section-explore__image-before"
              src="src/assets/images/explore-slider/before.jpg"
              alt="before"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
