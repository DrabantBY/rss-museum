import { useState } from 'react';

import { ReactComponent as FullScreenEnterIcon } from '@assets/svg/fullscreen-enter.svg';
import { ReactComponent as FullScreenExitIcon } from '@assets/svg/fullscreen-exit.svg';

const ScreenBtn: React.FC<{
  video: React.RefObject<HTMLVideoElement>;
}> = ({ video }): JSX.Element => {
  const [flag, setFlag] = useState(true);

  const handleVideoScreen: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (video.current === null) return;
    if (flag) {
      void video.current.parentElement?.requestFullscreen();
    } else {
      void document.exitFullscreen();
    }

    setFlag(!flag);
  };

  return (
    <button
      className="btn-screen player-controls__btn-screen slider-video__btn-screen section-video__btn-screen"
      type="button"
      onClick={handleVideoScreen}>
      {flag ? <FullScreenEnterIcon /> : <FullScreenExitIcon />}
    </button>
  );
};

export default ScreenBtn;
