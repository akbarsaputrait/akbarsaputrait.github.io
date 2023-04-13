import { NavLink } from 'react-router-dom';
import './header.component.scss';

const Header: React.FC = () => {
  const routes = [
    {
      path: '/',
      title: 'Home',
    },
    {
      path: '',
      title: 'Journey',
    },
    {
      path: '',
      title: 'Blog',
    },
  ];

  return (
    <div className="header">
      <div className="logo"></div>

      <nav className="nav">
        {routes.map((route, index) =>
          route.path !== '' ? (
            <NavLink
              to={route.path}
              className={({ isActive }) => (isActive ? 'active' : '')}
              key={index}
            >
              {route.title}
            </NavLink>
          ) : (
            <a key={route.title} className="link-disabled">
              {route.title}
            </a>
          ),
        )}
      </nav>
    </div>
  );
};

export default Header;
