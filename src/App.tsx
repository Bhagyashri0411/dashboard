import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './components';
import {
  HomePage,
  BlogsPage,
  ServicesPage,
  ContactPage,
} from './pages';

import { ROUTES } from './constants';

export const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Navigate to={ROUTES.home} />} />
      <Route path={ROUTES.home} element={<HomePage />} />
      <Route path={ROUTES.services} element={<ServicesPage />} />
      <Route path={ROUTES.blog} element={<BlogsPage />} />
      <Route path={ROUTES.contact} element={<ContactPage />} />
    </Routes>
  </Layout>
);
