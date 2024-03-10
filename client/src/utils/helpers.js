import { AUTH_TOKEN } from './constants';

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

export const mapProductData = (productData) => {
  const {
    title,
    description,
    price,
    color,
    material,
    size,
    isNew,
    type,
    image,
    image2,
    categories,
    reviews
  } = productData?.attributes || {};
  const imageUrl1 = image?.data?.attributes?.url || '';
  const imageUrl2 = image2?.data?.attributes?.url || '';

  return {
    title,
    description,
    price,
    color,
    material,
    size,
    isNew,
    type,
    imageUrl1,
    imageUrl2,
    reviews,
    categoryTitle: categories?.data?.map((category) => category.attributes.title)[0]
  };
};

export const formatSelectedFilters = (selectedFilters) => {
  return selectedFilters.reduce((acc, filter) => {
    const filterType = Object.keys(filter)[0];
    return { ...acc, [filterType]: { $in: filter[filterType] } };
  }, {});
};

export const getProductSize = (size) => {
  if (typeof size === 'string' && size.includes(',') && size.length > 1) {
    return size.split(',').join(', ');
  }
  return '';
};
export const getImageTranslation = (slideIndex, bannerWidth) => {
  const newTranslation = slideIndex * bannerWidth;
  return `translateX(-${newTranslation}px)`;
};
