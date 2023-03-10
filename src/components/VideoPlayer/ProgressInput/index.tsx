import { useState, useEffect } from 'react';
import type { VarCSS } from '@/types';
import './style.scss';

const ProgressInput: React.FC<{
  video: React.RefObject<HTMLVideoElement>;
}> = ({ video }): JSX.Element => {
  const [value, setValue] = useState(video.current?.currentTime ?? 0);
  const stateVar: VarCSS = { '--value': `${value}%` };

  const handleTimeUpdate = (): void => {
    if (video.current === null) return;
    const { currentTime, duration } = video.current;
    setValue(Math.round((currentTime / duration) * 100));
  };

  const handleVideoEnd = (): void => {
    setValue(0);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (video.current === null) return;
    const value = Number(e.target.value);
    video.current.currentTime = (video.current.duration * value) / 100;
    setValue(value);
  };

  useEffect(() => {
    video.current?.addEventListener('timeupdate', handleTimeUpdate);
    video.current?.addEventListener('ended', handleVideoEnd);
    return () => {
      video.current?.removeEventListener('timeupdate', handleTimeUpdate);
      video.current?.removeEventListener('ended', handleVideoEnd);
    };
  }, []);

  return (
    <input
      className={`progress player-controls__progress slider-video__progress section-video__progress`}
      type="range"
      min={0}
      max={100}
      step={1}
      value={value}
      onChange={handleChange}
      style={stateVar}
    />
  );
};

export default ProgressInput;
