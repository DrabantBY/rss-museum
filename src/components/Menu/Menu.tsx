import { NavLink } from 'react-router-dom';

export const Menu: React.FC<{ menu: string[]; tag: string }> = ({
  menu,
  tag,
}) => {
  const isHeader = tag === 'header';

  return (
    <ul className={`menu ${tag}__menu`}>
      {menu.map((item) => (
        <li className={`menu-item ${tag}__menu-item`} key={item}>
          <NavLink
            className={`menu-link ${tag}__menu-link${
              isHeader ? ' icon-arrow-link' : ''
            }`}
            to={item}>
            {item}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
