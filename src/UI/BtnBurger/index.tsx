import './style.scss';

const BtnBurger: React.FC<{
  state: boolean;
  handleState: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ state, handleState }): JSX.Element => {
  return (
    <button
      type="button"
      className={`burger burger-${
        state ? 'open' : 'close'
      } navbar__burger header__burger`}
      onClick={() => {
        handleState(!state);
      }}>
      <span />
      {state && <span />}
      <span />
    </button>
  );
};

export default BtnBurger;
