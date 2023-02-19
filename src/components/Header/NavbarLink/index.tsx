import { NavLink } from 'react-router-dom';
import useNavbarState from '@/hooks/useNavbarState';
import { ReactComponent as IconArrowLink } from '@assets/svg/arrow-link.svg';

import './style.scss';

const NavbarLink: React.FC<{ link: string }> = ({ link }): JSX.Element => {
  const { isOpen, setIsOpen } = useNavbarState();
  return (
    <li className="menu-item navbar__menu-item header__menu-item">
      <NavLink
        className="menu-link navbar__menu-link header__menu-link"
        to={`/${link}`}
        onClick={() => {
          !isOpen && setIsOpen();
        }}>
        {link}
        <IconArrowLink />
      </NavLink>
    </li>
  );
};

export default NavbarLink;
