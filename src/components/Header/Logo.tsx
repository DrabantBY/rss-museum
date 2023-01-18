import { Link } from 'react-router-dom';
import { ReactComponent as Louvre } from '../../assets/svg/logo.svg';

export const Logo = () => {
  return (
    <Link className="logo header__logo" to="/">
      <Louvre />
      LOUVRE
    </Link>
  );
};
