export const BASE_URL = process.env.REACT_APP_API_URL;

export const CATEGORIES_URL = '/categories?populate[0]=image';
export const PRODUCTS_URL = '/products?&';

export const DEFAULT_CURRENCY = 'usd';
export const CURRENCIES = ['usd', 'euro', 'pound'];

export const colorFilters = ['black', 'cyan', 'green', 'grey', 'pink', 'white', 'blue'];

export const sizeFilters = ['xl', 'l', 'm', 's', 'xs'];

export const brandFilters = ['ck', 'h&m', 'kalles', 'levis', 'monki', 'nike'];

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
