import { Logo } from '../Logo/Logo';
import { Menu } from '../Menu/Menu';
import { Burger } from './Burger';
import { MENU } from '../../constants/menu';

export const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <Logo tag="header" />
        <nav className="navbar header__navbar">
          <Menu menu={MENU} tag="header" />
          <Burger />
        </nav>
      </div>
    </header>
  );
};
