import { AUTH_TOKEN } from './components/constant';

export const DEFAULT_CURRENCY = 'usd';
export const CURRENCIES = ['usd', 'euro', 'pound'];

export const getFilterString = (updatedCheckedState, filters) => {
  const selectedFilters = updatedCheckedState
    .map((item, index) => {
      if (item === true) {
        return filters[index];
      }
    })
    .filter(Boolean);

  return selectedFilters.length ? selectedFilters.join(',') : '';
};

export const debounce = (func, delay) => {
  let timerId;
  return (...args) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export const PRODUCT_FILTERS = {
  ['color']: ['black', 'cyan', 'green', 'grey', 'pink', 'white', 'blue'],
  ['material']: ['cotton', 'leather', 'denim', 'linen', 'acrylic', 'wool'],
  ['type']: ['new arrivals', 'most viewed', 'best sellers', 'specials']
};

export const getToken = () => {
  return localStorage.getItem(AUTH_TOKEN);
};

export const setToken = (token) => {
  if (token) {
    localStorage.setItem(AUTH_TOKEN, token);
  }
};

export const removeToken = () => {
  localStorage.removeItem(AUTH_TOKEN);
};
