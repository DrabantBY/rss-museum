import { ReactComponent as BtnPosterIcon } from '@assets/svg/poster.svg';
import './style.scss';

const PosterBtn: React.FC<{ handleClick: () => void }> = ({
  handleClick,
}): JSX.Element => {
  return (
    <button
      className="btn-poster slider-video__btn-poster section-video__btn-poster"
      type="button"
      onClick={handleClick}>
      <BtnPosterIcon />
    </button>
  );
};

export default PosterBtn;
