export const getImageTranslation = (slideIndex, bannerWidth) => {
  const newTranslation = slideIndex * bannerWidth;
  return `translateX(-${newTranslation}px)`;
};

export const productTypes = [
  { id: 1, label: 'new arrivals' },
  { id: 2, label: 'specials' },
  { id: 3, label: 'best sellers' },
  { id: 4, label: 'most viewed' }
];
