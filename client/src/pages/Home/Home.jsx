import React, { useState } from 'react';
import { HeroBannerContent } from '../../mockData';
import HomeCategories from './HomeCategories';
import HeroContainer from './HeroContainer';
import DiscountSection from './DiscountSection';
import SubscribeSection from './SubscribeSection';
import './Home.scss';

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSetSlide = (direction) => {
    const lastSlide = HeroBannerContent.length - 1;
    const firstSlide = 0;

    if (direction === 'left') {
      setSlideIndex(slideIndex > firstSlide ? slideIndex - 1 : lastSlide);
    } else {
      setSlideIndex(slideIndex < lastSlide ? slideIndex + 1 : firstSlide);
    }
  };

  return (
    <div className="home">
      <HeroContainer handleSetSlide={handleSetSlide} slideIndex={slideIndex} />
      <HomeCategories defaultTab={0} categoryTitle="Women's" />
      <HomeCategories defaultTab={0} categoryTitle="Men's" />
      <DiscountSection />
      <SubscribeSection />
    </div>
  );
};

export default Home;
