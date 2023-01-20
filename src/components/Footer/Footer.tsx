import { Logo } from '../Logo/Logo';
import { Menu } from '../Menu/Menu';
import { Social } from './Social';
import { Student } from './Student';
import { MENU } from '../../constants/menu';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__body">
          <Logo tag="footer" />
          {/* <nav className="navbar footer__navbar">
            <Menu menu={MENU} tag="footer" />
          </nav> */}
          <Social />
        </div>
        <Student
          date={2021}
          school="the rolling scopes school"
          name="username"
        />
      </div>
    </footer>
  );
};
