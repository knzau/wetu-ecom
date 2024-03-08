import { createBrowserRouter, RouterProvider, Outlet, useNavigate } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import { useStoreRehydrated } from 'easy-peasy';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { appRoutes } from './api/api';
import './scss/main.scss';

const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

const Layout = () => {
  const navigate = useNavigate();

  return (
    <ClerkProvider navigate={navigate} publishableKey={PUBLISHABLE_KEY}>
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </ClerkProvider>
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
