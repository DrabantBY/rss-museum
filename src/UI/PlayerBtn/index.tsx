import { Children, type ReactNode } from 'react';

const PlayerBtn: React.FC<{
  children: ReactNode;
  className: string;
  flag: boolean;
  handleClick: () => void;
}> = ({ children, className, flag, handleClick }) => {
  const [firstIcon, secondIcon] = Children.toArray(children);
  return (
    <button
      className={`btn-${className} player-controls__btn-${className} slider-video__btn-${className} section-video__btn-${className}`}
      type="button"
      onClick={handleClick}>
      {flag ? firstIcon : secondIcon}
    </button>
  );
};

export default PlayerBtn;
