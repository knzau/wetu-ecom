import About from '../pages/About/About';
import CheckoutPage from '../pages/Checkout/CheckoutPage';
import Home from '../pages/Home/Home';
import ProductPage from '../pages/Product/ProductPage';
import ProductListByCategories from '../pages/ProductListByCategories/ProductListByCategories';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import SignInSignOutPage from '../pages/SignInSignOut/SignInSignOutPage';

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

//query keys
export const ABOUT_US = 'about-us';
export const ABOUT_US_API = '/about-us?populate=*';
export const HOME_CATEGORIES = 'home-categories';

export const _10_mins = 10 * (60 * 1000);

export const appRoutes = [
  {
    path: HOME_PATH,
    element: <Home />
  },
  {
    path: CATEGORIES_PATH,
    element: <ProductListByCategories />
  },
  {
    path: PRODUCT_PATH,
    element: <ProductPage />
  },
  {
    path: CHECKOUT_PATH,
    element: <CheckoutPage />
  },
  {
    path: ABOUT_PATH,
    element: <About />
  },
  {
    path: SIGN_IN_PATH,
    element: <SignInSignOutPage />
  },
  {
    path: PROFILE_PATH,
    element: <ProfilePage />
  }
];
