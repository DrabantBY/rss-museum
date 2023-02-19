import { NavLink } from 'react-router-dom';
import useNavbarState from '@/hooks/useNavbarState';
import { ReactComponent as IconLouvre } from '@assets/svg/logo.svg';
import './style.scss';

export const Logo = (): JSX.Element => {
  const { isOpen, setIsOpen } = useNavbarState();
  return (
    <NavLink
      className="logo"
      to="/"
      onClick={() => {
        !isOpen && setIsOpen();
      }}>
      <IconLouvre />
      louvre
    </NavLink>
  );
};

export default Logo;
