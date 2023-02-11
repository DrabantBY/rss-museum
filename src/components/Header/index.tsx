import Logo from '@UI/Logo';
import Navbar from '@components/Navbar';

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
