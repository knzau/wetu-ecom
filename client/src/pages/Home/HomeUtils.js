export const getImageTranslation = (slideIndex, bannerWidth) => {
  const newTranslation = slideIndex * bannerWidth;
  return `translateX(-${newTranslation}px)`;
};
