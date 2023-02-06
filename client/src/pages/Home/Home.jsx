import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { HeroBannerContent } from '../../mockData';
import HomeCategories from './HomeCategories';
import HeroContainer from './HeroContainer';
import DiscountSection from './DiscountSection';
import SubscribeSection from './SubscribeSection';
import { CATEGORIES_URL } from '../../utils';
import './Home.scss';

const Home = () => {
  const { data, loading } = useFetch(`${CATEGORIES_URL}`);
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
      <HeroContainer handleSetSlide={handleSetSlide} slideIndex={slideIndex} categoryData={data} />
      {loading
        ? 'loading'
        : data?.map((category) => (
            <HomeCategories
              key={category?.attributes?.title}
              defaultTab={0}
              categoryData={category.attributes}
              categoryId={category.id}
            />
          ))}

      <DiscountSection />
      <SubscribeSection />
    </div>
  );
};

export default Home;
