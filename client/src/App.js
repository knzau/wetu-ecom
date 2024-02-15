import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { useStoreRehydrated } from 'easy-peasy';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { appRoutes } from './api/api';
import './app.scss';

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: appRoutes
  }
]);

const App = () => {
  const isRehydrated = useStoreRehydrated();

  return isRehydrated ? (
    <>
      <RouterProvider router={router} />
    </>
  ) : (
    <div>Loading ...</div>
  );
};

export default App;
