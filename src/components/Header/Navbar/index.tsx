import NavbarLink from '@components/Header/NavbarLink';
import BtnBurger from '@components/Header/BtnBurger';
import { LIST } from '@/constants';

import './style.scss';

const Navbar = (): JSX.Element => {
  return (
    <nav className="navbar header__navbar">
      <ul className="menu navbar__menu header__menu">
        {LIST.map((item) => (
          <NavbarLink key={item} link={item}></NavbarLink>
        ))}
      </ul>
      <BtnBurger />
    </nav>
  );
};

export default Navbar;
