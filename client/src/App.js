import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Categories from './pages/Categories/Categories';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
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
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products/:id',
        element: <Categories />
      },
      {
        path: '/product/:id',
        element: <Product />
      }
    ]
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
