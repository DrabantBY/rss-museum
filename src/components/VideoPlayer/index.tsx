import { useState, useEffect, useRef } from 'react';
import ProgressInput from './ProgressInput';
import VolumeInput from './VolumeInput';
import PlayerBtn from '@UI/PlayerBtn';
import { ReactComponent as PlayIcon } from '@assets/svg/play.svg';
import { ReactComponent as PauseIcon } from '@assets/svg/pause.svg';
import { ReactComponent as UnmuteIcon } from '@assets/svg/unmute.svg';
import { ReactComponent as MuteIcon } from '@assets/svg/mute.svg';
import { ReactComponent as EnterIcon } from '@assets/svg/fullscreen-enter.svg';
import { ReactComponent as ExitIcon } from '@assets/svg/fullscreen-exit.svg';
import { ReactComponent as PosterIcon } from '@assets/svg/poster.svg';
import './style.scss';

const VideoPlayer: React.FC<{ index: number }> = ({ index }): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [pause, setPause] = useState(true);
  const [mute, setMute] = useState(true);
  const [screen, setScreen] = useState(true);

  const handleVideoEnd = (): void => {
    setPause(true);
  };

  useEffect(() => {
    videoRef.current?.addEventListener('ended', handleVideoEnd);
    return () => {
      videoRef.current?.removeEventListener('ended', handleVideoEnd);
    };
  }, []);

  const handlePause = (): void => {
    if (videoRef.current === null) return;

    if (videoRef.current.paused) {
      void videoRef.current.play();
    } else {
      videoRef.current.pause();
    }

    setPause(!pause);
  };

  const handleMute = (): void => {
    if (videoRef.current === null) return;

    videoRef.current.muted = mute;

    setMute(!mute);
  };

  const handleScreen = (): void => {
    if (videoRef.current === null) return;

    if (screen) {
      void videoRef.current.parentElement?.requestFullscreen();
    } else {
      void document.exitFullscreen();
    }

    setScreen(!screen);
  };

  const btnPlayProps = {
    className: 'play',
    flag: pause,
    handleClick: handlePause,
  };

  const btnPosterProps = {
    className: 'poster',
    flag: pause,
    handleClick: handlePause,
  };

  const btnSoundProps = {
    className: 'sound',
    flag: mute,
    handleClick: handleMute,
  };

  const btnScreenProps = {
    className: 'screen',
    flag: screen,
    handleClick: handleScreen,
  };

  return (
    <div className="player-body slider-video__player-body section-video__player-body">
      <video
        className="player-screen slider-video__player-screen section-video__player-screen"
        poster={`src/assets/images/posters/poster${index}.jpg`}
        ref={videoRef}
        onClick={handlePause}>
        <source src={`src/assets/video/video${index}.mp4`} />
      </video>

      <PlayerBtn {...btnPosterProps}>
        <PosterIcon />
      </PlayerBtn>

      <div className="player-controls slider-video__player-controls section-video__player-controls">
        <PlayerBtn {...btnPlayProps}>
          <PlayIcon />
          <PauseIcon />
        </PlayerBtn>

        <ProgressInput video={videoRef} />

        <PlayerBtn {...btnSoundProps}>
          <UnmuteIcon />
          <MuteIcon />
        </PlayerBtn>

        <VolumeInput video={videoRef} mute={mute} setMute={setMute} />

        <PlayerBtn {...btnScreenProps}>
          <EnterIcon />
          <ExitIcon />
        </PlayerBtn>
      </div>
    </div>
  );
};

export default VideoPlayer;
