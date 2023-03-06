import { useState } from 'react';
import type { VarCSS } from '@/types';
import { ReactComponent as PlayIcon } from '@assets/svg/play.svg';
import { ReactComponent as PauseIcon } from '@assets/svg/pause.svg';
import { ReactComponent as UnmuteIcon } from '@assets/svg/unmute.svg';
import { ReactComponent as MuteIcon } from '@assets/svg/mute.svg';
import { ReactComponent as FullScreenIcon } from '@assets/svg/fullscreen-enter.svg';
import './style.scss';

const VideoPlayer: React.FC<{ index: number }> = ({ index }): JSX.Element => {
  const [progressValue, setProgressValue] = useState(50);
  const [volumeValue, setVolumeValue] = useState(50);
  const progressVar: VarCSS = { '--value': `${progressValue}%` };
  const volumeVar: VarCSS = { '--value': `${volumeValue}%` };

  return (
    <div className="player-body slider-video__player-body section-video__player-body">
      <video
        className="player-screen slider-video__player-screen section-video__player-screen"
        poster={`src/assets/images/posters/poster${index}.jpg`}>
        <source src={`src/assets/video/video${index}.mp4`} />
      </video>

      <div className="player-controls slider-video__player-controls section-video__player-controls">
        <button
          className="btn-play player-controls__btn-play slider-video__btn-play section-video__btn-play"
          type="button">
          <PlayIcon />
        </button>
        <input
          className="progress player-controls__progress slider-video__progress section-video__progress"
          type="range"
          min={0}
          max={100}
          step={1}
          value={progressValue}
          onChange={(e) => {
            setProgressValue(Number(e.target.value));
          }}
          style={progressVar}
        />
        <button
          className="btn-sound player-controls__btn-sound slider-video__btn-sound section-video__btn-sound"
          type="button">
          <UnmuteIcon />
        </button>
        <input
          className="volume player-controls__volume slider-video__volume section-video__volume"
          type="range"
          min={0}
          max={100}
          step={1}
          value={volumeValue}
          onChange={(e) => {
            setVolumeValue(Number(e.target.value));
          }}
          style={volumeVar}
        />
        <button
          className="btn-fullscreen player-controls__btn-fullscreen slider-video__btn-fullscreen section-video__btn-fullscreen"
          type="button">
          <FullScreenIcon />
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
