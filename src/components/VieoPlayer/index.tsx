import { useRef } from 'react';
import PlayBtn from './PlayBtn';
import SoundBtn from './SoundBtn';
import ProgressInput from './ProgressInput';
import VolumeInput from './VolumeInput';
import ScreenBtn from './ScreenBtn';
import './style.scss';

const VideoPlayer: React.FC<{ index: number }> = ({ index }): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="player-body slider-video__player-body section-video__player-body">
      <video
        className="player-screen slider-video__player-screen section-video__player-screen"
        poster={`src/assets/images/posters/poster${index}.jpg`}
        ref={videoRef}>
        <source src={`src/assets/video/video${index}.mp4`} />
      </video>
      <div className="player-controls slider-video__player-controls section-video__player-controls">
        <PlayBtn video={videoRef} />
        <ProgressInput video={videoRef} />
        <SoundBtn video={videoRef} />
        <VolumeInput video={videoRef} />
        <ScreenBtn video={videoRef} />
      </div>
    </div>
  );
};

export default VideoPlayer;
