import type { BtnProps } from '@/types';

const getProps = (
  className: string,
  flag: boolean,
  setFlag: (flag: boolean) => void,
  element: HTMLVideoElement | null
): BtnProps => {
  let handleClick: () => void;

  switch (className) {
    case 'screen':
      handleClick = () => {
        if (element === null) return;
        if (flag) {
          void element.parentElement?.requestFullscreen();
        } else {
          void document.exitFullscreen();
        }

        setFlag(!flag);
      };
      break;

    case 'sound':
      handleClick = () => {
        if (element === null) return;
        element.muted = flag;
        setFlag(!flag);
      };
      break;

    default:
      handleClick = () => {
        if (element === null) return;
        if (element.paused) {
          void element.play();
        } else {
          element.pause();
        }
        setFlag(!flag);
      };
  }
  return { className, flag, handleClick };
};

export default getProps;
