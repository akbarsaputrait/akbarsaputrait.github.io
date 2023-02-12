import { NavLink } from 'react-router-dom';
import './header.component.scss';

const Header: React.FC = () => {
  const routes = [
    {
      path: '/',
      title: 'Home',
    },
    {
      path: '/journey',
      title: 'Journey',
    },
    {
      path: '/blog',
      title: 'Blog',
    },
  ];

  return (
    <div className='header'>
      <div className='logo'></div>

      <nav className='nav'>
        {routes.map((route, index) => (
          <NavLink
            to={route.path}
            className={({ isActive }) => (isActive ? 'active' : '')}
            key={index}
          >
            {route.title}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Header;
