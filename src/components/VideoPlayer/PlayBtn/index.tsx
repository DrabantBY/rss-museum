import { useState, useEffect } from 'react';
import { ReactComponent as PlayIcon } from '@assets/svg/play.svg';
import { ReactComponent as PauseIcon } from '@assets/svg/pause.svg';

const PlayBtn: React.FC<{
  video: React.RefObject<HTMLVideoElement>;
  paused: boolean;
  setPaused: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ video, paused, setPaused }): JSX.Element => {
  const [flag, setFlag] = useState(paused);

  const handleVideoEnd = (): void => {
    setPaused(true);
    setFlag(true);
    video.current?.classList.remove('play');
  };

  useEffect(() => {
    setFlag(paused);
  }, [paused]);

  useEffect(() => {
    video.current?.addEventListener('ended', handleVideoEnd);
    return () => {
      video.current?.removeEventListener('ended', handleVideoEnd);
    };
  }, []);

  const handleVideoPlay = (): void => {
    if (flag) {
      void video.current?.play();
    } else {
      video.current?.pause();
    }
    video.current?.classList.toggle('play');
    setFlag(!flag);
  };

  return (
    <button
      className="btn-play player-controls__btn-play slider-video__btn-play section-video__btn-play"
      type="button"
      onClick={handleVideoPlay}>
      {flag ? <PlayIcon /> : <PauseIcon />}
    </button>
  );
};

export default PlayBtn;
