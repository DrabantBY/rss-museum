import './style.scss';

const BtnBurgerOpen: React.FC<{
  handleState: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ handleState }): JSX.Element => {
  return (
    <button
      type="button"
      className="burger burger-open navbar__burger header__burger"
      onClick={() => {
        handleState(false);
      }}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default BtnBurgerOpen;
