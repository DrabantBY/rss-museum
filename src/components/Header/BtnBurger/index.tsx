import useNavbarState from '@/hooks/useNavbarState';
import './style.scss';

const BtnBurger = (): JSX.Element => {
  const { isOpen, setIsOpen } = useNavbarState();
  return (
    <button
      type="button"
      className={`burger burger-${
        isOpen ? 'open' : 'close'
      } navbar__burger header__burger`}
      onClick={() => {
        setIsOpen();
      }}>
      <span />
      {!isOpen && <span />}
      <span />
    </button>
  );
};

export default BtnBurger;
