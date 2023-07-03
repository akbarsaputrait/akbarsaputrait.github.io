import { RouteObject } from 'react-router-dom';
import PublicLayout from './layouts/public/public.layout';
import Blog from './pages/blog/blog.page';
import Home from './pages/home';
import ErrorNotFound from './pages/not-found.page';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <PublicLayout component={<Home />} />,
    errorElement: <ErrorNotFound />,
  },
  {
    path: '/blog',
    element: <PublicLayout component={<Blog />} />,
  },
];

export default routes;
