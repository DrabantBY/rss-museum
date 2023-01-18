import { Logo } from './Logo';

export const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <Logo />
        {/* <Navbar /> */}
      </div>
    </header>
  );
};
