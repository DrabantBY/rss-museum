import { useState } from 'react';
import NavbarLink from '@UI/NavbarLink';
import BtnBurgerOpen from '@UI/BtnBurgerOpen';
import BtnBurgerClose from '@UI/BtnBurgerClose';

import './style.scss';

const Navbar = (): JSX.Element => {
  const LIST = [
    'visiting',
    'explore',
    'video',
    'gallery',
    'tickets',
    'contacts',
  ];

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
      {isOpen ? (
        <BtnBurgerOpen handleState={setIsOpen} />
      ) : (
        <BtnBurgerClose handleState={setIsOpen} />
      )}
    </nav>
  );
};

export default Navbar;
