import { NavLink } from 'react-router-dom';
import { ReactComponent as Louvre } from '../../assets/svg/logo.svg';

export const Logo: React.FC<{ tag: string }> = ({ tag }) => (
  <NavLink className={`logo ${tag}__logo`} to="/">
    <Louvre />
    louvre
  </NavLink>
);
