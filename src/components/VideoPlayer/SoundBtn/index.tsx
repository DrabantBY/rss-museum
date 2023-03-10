import { useState, useEffect } from 'react';
import { ReactComponent as UnmuteIcon } from '@assets/svg/unmute.svg';
import { ReactComponent as MuteIcon } from '@assets/svg/mute.svg';

const SoundBtn: React.FC<{
  video: React.RefObject<HTMLVideoElement>;
}> = ({ video }): JSX.Element => {
  const [flag, setFlag] = useState(true);

  const handleVideoEnd = (): void => {
    setFlag(true);
  };

  const handleVideoMute: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (video.current === null) return;
    video.current.muted = flag;
    setFlag(!flag);
  };

  useEffect(() => {
    video.current?.addEventListener('ended', handleVideoEnd);
    return () => {
      video.current?.removeEventListener('ended', handleVideoEnd);
    };
  }, []);

  return (
    <button
      className="btn-sound player-controls__btn-sound slider-video__btn-sound section-video__btn-sound"
      type="button"
      onClick={handleVideoMute}>
      {flag ? <UnmuteIcon /> : <MuteIcon />}
    </button>
  );
};

export default SoundBtn;
