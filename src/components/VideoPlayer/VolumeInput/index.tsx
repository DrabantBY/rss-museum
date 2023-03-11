import { useState, useEffect } from 'react';
import type { VarCSS } from '@/types';
import { INIT_VOLUME } from '@/constants';
import './style.scss';

const SoundInput: React.FC<{
  video: React.RefObject<HTMLVideoElement>;
  mute: boolean;
  setMute: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ video, mute, setMute }): JSX.Element => {
  const [value, setValue] = useState(INIT_VOLUME);
  const stateVar: VarCSS = { '--value': `${value * 100}%` };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (video.current === null) return;
    const value = Number(e.target.value);
    setValue(value);
  };

  useEffect(() => {
    if (video.current !== null) {
      video.current.volume = value;

      if (value === 0) {
        setMute(false);
        video.current.muted = mute;
      } else if (!mute) {
        console.log('12111111');
        setMute(true);
        video.current.muted = mute;
      }
    }
  }, [value]);

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
