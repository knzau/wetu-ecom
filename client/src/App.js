import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { useStoreRehydrated } from 'easy-peasy';
import Home from './pages/Home/Home';
import Product from './pages/Product/ProductPage';
import Categories from './pages/Categories/Categories';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import './app.scss';
import Cart from './components/Cart/Cart';

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
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/categories/:id',
        element: <Categories />
      },
      {
        path: '/categories/:categoryId/product/:id',
        element: <Product />
      }
    ]
  }
]);

const App = () => {
  const isRehydrated = useStoreRehydrated();

  return isRehydrated ? (
    <>
      <Cart />
      <RouterProvider router={router} />
    </>
  ) : (
    <div>Loading ...</div>
  );
};

export default App;
