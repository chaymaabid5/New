import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/app'));
export const NewPage = lazy(() => import('src/pages/landingPage/Home'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const SignupPage = lazy(() => import('src/pages/signup'));
export const ForgotpwdPage = lazy(() => import('src/pages/forgotpwd'));
export const About = lazy(() => import('src/pages/landingPage/About'));
export const Contact = lazy(() => import('src/pages/landingPage/Contact'));
export const Services = lazy(() => import('src/pages/landingPage/Services'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { path: 'dashboard', element: <IndexPage />  },
        { path: 'user', element: <UserPage /> },
        { path: 'ideas', element: <ProductsPage /> },
        { path: 'forum', element: <BlogPage /> },
        { path: 'signup', element: <SignupPage />}
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'signup',
      element: <SignupPage />,
    },
    {
      path: 'forgotpwd',
      element: <ForgotpwdPage />,
    },
    {
      path: 'about',
      element: <About />,
    },
    {
      path: 'contact',
      element: <Contact />,
    },
    {
      path: 'services',
      element: <Services />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '/',
      element: <NewPage />,
      index: true,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
