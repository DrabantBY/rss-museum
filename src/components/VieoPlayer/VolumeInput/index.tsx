import { useState, useEffect } from 'react';
import type { VarCSS } from '@/types';
import './style.scss';

const SoundInput: React.FC<{
  video: React.RefObject<HTMLVideoElement>;
}> = ({ video }): JSX.Element => {
  console.dir(video.current);
  const [value, setValue] = useState(0.1);
  const stateVar: VarCSS = { '--value': `${value * 100}%` };

  const handleVideoEnd = (): void => {
    if (video.current === null) return;
    video.current.volume = 0.1;
    setValue(0.1);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (video.current === null) return;
    const value = Number(e.target.value);
    video.current.volume = value;
    setValue(value);
  };

  useEffect(() => {
    if (video.current !== null) {
      video.current.volume = value;
    }

    video.current?.addEventListener('ended', handleVideoEnd);
    return () => {
      video.current?.removeEventListener('ended', handleVideoEnd);
    };
  }, [video.current]);

  return (
    <input
      className={`volume player-controls__volume slider-video__volume section-video__volume`}
      type="range"
      min={0}
      max={1}
      step={0.1}
      value={value}
      onChange={handleChange}
      style={stateVar}
    />
  );
};

export default SoundInput;
