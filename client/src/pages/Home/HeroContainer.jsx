import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
// import { BASE_URL } from '../../utils';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import PlaylistAddCheckCircleOutlinedIcon from '@mui/icons-material/PlaylistAddCheckCircleOutlined';
import { HeroSlides } from './HeroSlides';
import CustomButton from '../../components/Button/CustomButton';
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
          src={`http://localhost:1337${category?.attributes.image?.data?.attributes?.url}`}
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
      <div className="our-features">
        <div className="feature-item">
          <LocalShippingOutlinedIcon />
          <span>
            <h4>Free shipping</h4>
            <p>On all UA order or order above $100</p>
          </span>
        </div>
        <div className="feature-item">
          <CachedOutlinedIcon />
          <span>
            <h4>30 DAYS RETURN</h4>
            <p>Simply return it within 30 days for an exchange</p>
          </span>
        </div>
        <div className="feature-item">
          <PlaylistAddCheckCircleOutlinedIcon />
          <span>
            <h4>SUPPORT 24/7</h4>
            <p>Contact us 24 hours a day, 7 days a week</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default HeroContainer;
