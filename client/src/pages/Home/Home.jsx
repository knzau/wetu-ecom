import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import { HeroBannerContent } from '../../mockData';
import HomeTabsCategories from './HomeCategories';
import HeroContainer from './HeroContainer';
import DiscountSection from './DiscountSection';
import SubscribeSection from './SubscribeSection';
import { CATEGORIES_URL } from '../../utils';
import './Home.scss';
import { HOME_CATEGORIES, _10_mins } from '../../api/api';
import LoaderCircle from '../../components/LoaderCircle/LoaderCircle';

const Home = () => {
  const { data, isLoading } = useFetch(CATEGORIES_URL, [HOME_CATEGORIES], {
    staleTime: _10_mins
  });

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
      {isLoading ? (
        <LoaderCircle />
      ) : (
        data?.map((category) => (
          <HomeTabsCategories
            key={category?.attributes?.title}
            defaultTab={0}
            categoryData={category.attributes}
            categoryId={category.id}
          />
        ))
      )}

      <DiscountSection />
      <SubscribeSection />
    </div>
  );
};

export default Home;
