import { useCallback, useState } from 'react';

const useHandleProductActions = (productImages) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectSizeError, setSelectSizeError] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const handleSelectProductSize = useCallback(
    (size = '') => {
      setSelectSizeError(false);
      if (size === selectedSize) {
        setSelectedSize('');
      } else {
        setSelectedSize(size);
      }
    },
    [selectedSize]
  );

  const handleSelectImage = useCallback(
    (direction) => {
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
    },
    [imageIndex]
  );

  const getSelectedThumbnailClass = (index, imageIndex) => {
    return parseInt(imageIndex) === parseInt(index) ? ' selected-product' : 'unselected-product';
  };

  return {
    selectedSize,
    handleSelectProductSize,
    selectSizeError,
    setSelectSizeError,
    handleSelectImage,
    getSelectedThumbnailClass
  };
};

export default useHandleProductActions;
