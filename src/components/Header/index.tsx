import Logo from '@components/Header/Logo';
import Navbar from '@components/Header/Navbar';

import './style.scss';

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className="container header__container">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
