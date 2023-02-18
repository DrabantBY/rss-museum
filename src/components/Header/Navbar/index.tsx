import { useState } from 'react';
import NavbarLink from '@components/Header/NavbarLink';
import BtnBurger from '@components/Header/BtnBurger';
import { LIST } from '@/constants';

import './style.scss';

const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav className="navbar header__navbar">
      <ul className="menu navbar__menu header__menu">
        {LIST.map((item) => (
          <NavbarLink
            key={item}
            link={item}
            handleState={setIsOpen}></NavbarLink>
        ))}
      </ul>
      <BtnBurger state={isOpen} handleState={setIsOpen} />
    </nav>
  );
};

export default Navbar;
