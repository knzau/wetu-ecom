import { createBrowserRouter, RouterProvider, Outlet, useNavigate } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import { useStoreRehydrated } from 'easy-peasy';

import Footer from './components/common/Footer/Footer';
import Navbar from './components/common/Navbar/Navbar';
import { appRoutes } from './utils/constants';
import './scss/main.scss';
import ProductSearch from './components/Product/ProductSearch/ProductSearch';
import useHandleSearch from './hooks/useHandleSearch';
import LoaderCircle from './components/common/LoaderCircle/LoaderCircle';
import ProductList from './components/Product/ProductList/ProductList';
import { useEffect } from 'react';

const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

const Layout = () => {
  const navigate = useNavigate();
  const { searchData, onSearch, handleClearSearch, handleInputFocus, isFocused, isLoading } =
    useHandleSearch();
  const handleClickSearch = () => {
    handleInputFocus();
  };

  useEffect(() => {
    window?.navigation.addEventListener('navigate', () => {
      handleClearSearch();
    });

    return () => {
      window?.navigation.removeEventListener('navigate', handleClearSearch);
    };
  }, [handleClearSearch]);

  return (
    <ClerkProvider navigate={navigate} publishableKey={PUBLISHABLE_KEY}>
      <div className="app">
        <Navbar handleClickSearch={handleClickSearch} />
        {isFocused && (
          <>
            <ProductSearch
              onSearch={onSearch}
              handleClearSearch={handleClearSearch}
              handleInputFocus={handleInputFocus}
              isFocused={isFocused}
            />
            <div className="search-results__container">
              {isLoading ? <LoaderCircle /> : <ProductList productsData={searchData} />}
            </div>
          </>
        )}
        {!isFocused && <Outlet />}
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
