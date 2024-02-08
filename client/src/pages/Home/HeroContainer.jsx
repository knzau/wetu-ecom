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

  const CategoryHeroEl = () => {
    return categoryData?.map((category) => (
      <div className="col hero-banner" key={category.id}>
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
        <div className="col-lg ">
          <div className="row">
            <CategoryHeroEl />
          </div>
          <div className="row hero-banner">
            <Link className="link" to="/products/1">
              <CustomButton className="hero-btn">accesories</CustomButton>
            </Link>
            <img
              className="side-image"
              src="https://images.pexels.com/photos/1306262/pexels-photo-1306262.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="misto-img1"
            />
          </div>
        </div>
      </div>
      <Features isHomeFeatures={true} />
    </>
  );
};

export default HeroContainer;
