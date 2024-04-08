import About from '../pages/About/About';
import CheckoutPage from '../pages/Checkout/CheckoutPage';
import Home from '../pages/Home/Home';
import ProductPage from '../pages/Product/ProductPage';
import ProductListByCategories from '../pages/ProductListByCategories/ProductListByCategories';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import SignInSignOutPage from '../pages/SignInSignOut/SignInSignOutPage';

//Api constants
export const AUTH_TOKEN = 'authToken';
export const BEARER = 'Bearer';
export const API = 'http://localhost:1337/api';
export const AVATAR_API = 'https://ui-avatars.com/api';

//URLs
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
export const MEN_CATEGORY = '/categories/men';
export const ACCESSORIES_CATEGORY = '/categories/accessories';

export const WOMEN_CATEGORY = '/categories/women';

//query URLs
export const ABOUT_US = 'about-us';
export const ABOUT_US_API = '/about-us?populate=*';
export const HOME_CATEGORIES = 'home-categories';
export const CATEGORIES_URL = '/categories?&';
export const PRODUCTS_URL = '/products?&';
export const CUSTOMERS_URL = '/customers?populate=*';
export const PRODUCT_ID_URL = '/products/{id}?populate=*';

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

export const mapCategoryById = {
  women: 1,
  men: 2,
  accessories: 3
};

export const menuItems = [
  {
    path: ABOUT_PATH,
    label: 'About us'
  },
  {
    path: WOMEN_CATEGORY,
    label: 'Women'
  },
  {
    path: MEN_CATEGORY,
    label: 'Men'
  },
  {
    path: ACCESSORIES_CATEGORY,
    label: 'Accessories'
  }
];

export const productTypes = [
  { id: 1, label: 'new arrivals' },
  { id: 2, label: 'specials' },
  { id: 3, label: 'best sellers' },
  { id: 4, label: 'most viewed' }
];
export const PRODUCT_FILTERS = {
  ['color']: ['black', 'cyan', 'green', 'grey', 'pink', 'white', 'blue'],
  ['material']: ['cotton', 'leather', 'denim', 'linen', 'acrylic', 'wool'],
  ['type']: ['new arrivals', 'most viewed', 'best sellers', 'specials']
};
