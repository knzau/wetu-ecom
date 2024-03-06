import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { HeroSlides } from './HeroSlides';
import CustomButton from '../../components/Button/CustomButton';
import Features from '../../components/Features/Features';
import './Home.scss';

const HeroContainer = ({ handleSetSlide, slideIndex, categoryData }) => {
  const bannerSizeRef = useRef();
  const bannerEl = document.getElementById('home-banner');
  if (bannerEl) {
    bannerSizeRef.current = bannerEl.offsetWidth;
  }

  const topCategories = categoryData?.filter((category) => category.id <= 2);
  const bottomCategories = categoryData?.filter((category) => category.id > 2);

  const TopCategoryHeroEl = () => {
    return topCategories?.map((category) => (
      <div className="row" key={category.id}>
        <Link className="link" to={`/categories/${category.id}`}>
          <CustomButton className="hero-btn">{category.attributes.title}</CustomButton>
        </Link>
        <img
          className="side-image"
          src={category?.attributes.image?.data?.attributes?.url}
          alt="misto-img1"
        />
      </div>
    ));
  };

  const BottomCategoryHeroEl = () => {
    return bottomCategories?.map((category) => {
      const imageURl = category?.attributes?.image?.data?.attributes?.url || '';
      return (
        <div
          className="row hero-category__bottom"
          key={category.id}
          style={{ backgroundImage: `url(${imageURl})` }}>
          <Link className="link" to={`/categories/${category.id}`}>
            <CustomButton className="hero-btn">accesories</CustomButton>
          </Link>
        </div>
      );
    });
  };

  return (
    <>
      <div className="hero-container">
        <div className="col-lg">
          <div id="home-banner" className="row hero-banner">
            <div className="arrow left">
              <ArrowBackIosIcon onClick={() => handleSetSlide('left')} />
            </div>
            <div className="slide-wrapper">
              <HeroSlides slideIndex={slideIndex} bannerWidth={bannerSizeRef.current || 0} />
            </div>
            <div className="arrow right">
              <ArrowForwardIosIcon onClick={() => handleSetSlide('right')} />
            </div>
          </div>
        </div>
        <div className="col-lg category-el__wrapper">
          <div className="hero-category__top">
            <TopCategoryHeroEl />
          </div>
          <BottomCategoryHeroEl />
        </div>
      </div>
      <Features isHomeFeatures={true} />
    </>
  );
};

export default HeroContainer;
