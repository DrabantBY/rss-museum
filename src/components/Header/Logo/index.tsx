import { NavLink } from 'react-router-dom';
import { shallow } from 'zustand/shallow';
import useNavbarState from '@/hooks/useNavbarState';
import { ReactComponent as IconLouvre } from '@assets/svg/logo.svg';
import './style.scss';

export const Logo = (): JSX.Element => {
  const [isOpen, setIsOpen] = useNavbarState(
    (state) => [state.isOpen, state.setIsOpen],
    shallow
  );
  return (
    <NavLink
      className="logo"
      to="/"
      onClick={() => {
        isOpen && setIsOpen();
      }}>
      <IconLouvre />
      louvre
    </NavLink>
  );
};

export default Logo;
