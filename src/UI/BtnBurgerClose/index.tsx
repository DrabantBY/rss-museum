import './style.scss';

const BtnBurgerClose: React.FC<{
  handleState: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ handleState }): JSX.Element => {
  return (
    <button
      type="button"
      className="burger burger-close navbar__burger header__burger"
      onClick={() => {
        handleState(true);
      }}>
      <span></span>
      <span></span>
    </button>
  );
};

export default BtnBurgerClose;
