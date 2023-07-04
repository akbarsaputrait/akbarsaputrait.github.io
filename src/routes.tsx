import { Outlet, RouteObject } from 'react-router-dom';
import PublicLayout from './layouts/public/public.layout';
import Blog from './pages/blog/blog.page';
import BlogDetail from './pages/blog/detail.page';
import Home from './pages/home';
import ErrorNotFound from './pages/not-found.page';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <PublicLayout component={<Home />} />,
    errorElement: <ErrorNotFound />,
  },
  {
    path: 'blog',
    element: <Outlet />,
    children: [
      {
        index: true,
        path: '',
        element: <PublicLayout component={<Blog />} />,
      },
      {
        path: ':slug',
        element: <PublicLayout component={<BlogDetail />} />,
      },
    ],
  },
];

export default routes;
