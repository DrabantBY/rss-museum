import { useState, useRef } from 'react';
import PlayBtn from './PlayBtn';
import SoundBtn from './SoundBtn';
import PosterBtn from './PosterBtn';
import ScreenBtn from './ScreenBtn';
import ProgressInput from './ProgressInput';
import VolumeInput from './VolumeInput';
import './style.scss';

const VideoPlayer: React.FC<{ index: number }> = ({ index }): JSX.Element => {
  const [isPaused, setIsPaused] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = (): void => {
    if (videoRef.current === null) return;
    if (videoRef.current.paused) {
      void videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
    videoRef.current?.classList.toggle('play');
    setIsPaused(!isPaused);
  };

  return (
    <div className="player-body slider-video__player-body section-video__player-body">
      <video
        className="player-screen slider-video__player-screen section-video__player-screen"
        poster={`src/assets/images/posters/poster${index}.jpg`}
        ref={videoRef}
        onClick={handleClick}>
        <source src={`src/assets/video/video${index}.mp4`} />
      </video>
      <PosterBtn handleClick={handleClick} />
      <div className="player-controls slider-video__player-controls section-video__player-controls">
        <PlayBtn video={videoRef} paused={isPaused} setPaused={setIsPaused} />
        <ProgressInput video={videoRef} />
        <SoundBtn video={videoRef} />
        <VolumeInput video={videoRef} />
        <ScreenBtn video={videoRef} />
      </div>
    </div>
  );
};

export default VideoPlayer;
