import { useState } from 'react';

const useHandleProductActions = (productImages) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectSizeError, setSelectSizeError] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const handleSelectProductSize = (size = '') => {
    setSelectSizeError(false);
    if (size === selectedSize) {
      setSelectedSize('');
    } else {
      setSelectedSize(size);
    }
  };

  const handleSelectImage = (direction) => {
    const lastImage = productImages.length - 1;
    const firstImage = 0;
    if (direction === 'up') {
      setImageIndex((prevImageIndex) =>
        prevImageIndex > firstImage ? prevImageIndex - 1 : lastImage
      );
    } else {
      setImageIndex((prevImageIndex) =>
        prevImageIndex < lastImage ? prevImageIndex + 1 : firstImage
      );
    }
  };

  const getSelectedThumbnailClass = (index, imageIndex) => {
    return parseInt(imageIndex) === parseInt(index) ? ' selected-product' : 'unselected-product';
  };

  return {
    selectedSize,
    handleSelectProductSize,
    selectSizeError,
    setSelectSizeError,
    handleSelectImage,
    getSelectedThumbnailClass,
    imageIndex,
    setImageIndex
  };
};

export default useHandleProductActions;
