import Product from '../components/Product/Product';
import About from '../pages/About/About';
import Categories from '../pages/Categories/Categories';
import CheckoutPage from '../pages/Checkout/CheckoutPage';
import Home from '../pages/Home/Home';

//paths URLs
export const HOME_PATH = '/';
export const CATEGORIES_PATH = '/categories/:id';
export const PRODUCT_PATH = '/categories/:categoryId/product/:id';
export const CHECKOUT_PATH = '/checkout';
export const ABOUT_PATH = '/about-us';
export const SIGN_UP_PATH = '/sign-up';
export const SIGN_IN_PATH = '/sign-in';
export const PROFILE_PATH = '/profile';
export const WISHLIST_PATH = '/wishlist';
export const CART_PATH = '/cart';
export const ORDER_PATH = '/order';
export const ORDER_SUCCESS_PATH = '/order-success';

export const appRoutes = [
  {
    path: HOME_PATH,
    element: <Home />
  },
  {
    path: CATEGORIES_PATH,
    element: <Categories />
  },
  {
    path: PRODUCT_PATH,
    element: <Product />
  },
  {
    path: CHECKOUT_PATH,
    element: <CheckoutPage />
  },
  {
    path: ABOUT_PATH,
    element: <About />
  }
];
