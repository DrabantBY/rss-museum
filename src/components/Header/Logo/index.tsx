import { NavLink } from 'react-router-dom';
import { ReactComponent as IconLouvre } from '@assets/svg/logo.svg';

import './style.scss';

export const Logo = (): JSX.Element => (
  <NavLink className="logo" to="/">
    <IconLouvre />
    louvre
  </NavLink>
);

export default Logo;
