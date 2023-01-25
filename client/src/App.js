import { useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/Home/Home';
import Product from './pages/Product/ProductPage';
import Categories from './pages/Categories/Categories';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { DEFAULT_CURRENCY } from './mockData';
import './app.scss';
import CurrencyContext from './hooks/CurrencyContext';

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
  const [currentCurrency, setCurrentCurrency] = useState(DEFAULT_CURRENCY);
  return (
    <>
      <CurrencyContext.Provider value={{ currentCurrency, setCurrentCurrency }}>
        <RouterProvider router={router} />
      </CurrencyContext.Provider>
    </>
  );
};

export default App;
