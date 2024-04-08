import { useState, useEffect } from 'react';

const useSlideShow = (totalSlides, intervalTime) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSetSlide = (direction) => {
    const lastSlide = totalSlides.length - 1;
    const firstSlide = 0;

    if (direction === 'left') {
      setSlideIndex((prevIndex) => (prevIndex > firstSlide ? prevIndex - 1 : lastSlide));
    } else {
      setSlideIndex((prevIndex) => (prevIndex < lastSlide ? prevIndex + 1 : firstSlide));
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [totalSlides, intervalTime, handleSetSlide]);

  return { slideIndex, handleSetSlide };
};

export default useSlideShow;
