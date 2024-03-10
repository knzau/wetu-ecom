import { ABOUT_PATH } from '../api/api';

export const CATEGORIES_URL = '/categories?&';
export const PRODUCTS_URL = '/products?&';
export const CUSTOMERS_URL = '/customers?populate=*';
export const PRODUCT_ID_URL = '/products/{id}?populate=*';
export const AVATAR_API = 'https://ui-avatars.com/api';
export const API = 'http://localhost:1337/api';
export const AUTH_TOKEN = 'authToken';
export const BEARER = 'Bearer';
export const WOMEN_CATEGORY = '/categories/women';
export const MEN_CATEGORY = '/categories/men';
export const ACCESSORIES_CATEGORY = '/categories/accessories';

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
