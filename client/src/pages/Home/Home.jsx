import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryTabs from '../../components/TabsComponent/Tabs';
import { HeroSlides } from './HeroSlides';
import TabPane from '../../components/TabsComponent/TabPane';
import Product from '../../components/Product/Product';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { HeroBannerContent, productCategoriesData } from '../../mockData';
import './Home.scss';

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const bannerSizeRef = useRef();

  const handleSetSlide = (direction) => {
    const lastSlide = HeroBannerContent.length - 1;
    const firstSlide = 0;

    if (direction === 'left') {
      setSlideIndex(slideIndex > firstSlide ? slideIndex - 1 : lastSlide);
    } else {
      setSlideIndex(slideIndex < lastSlide ? slideIndex + 1 : firstSlide);
    }
  };

  const bannerEl = document.getElementById('home-banner');
  if (bannerEl) {
    bannerSizeRef.current = bannerEl.offsetWidth;
  }

  return (
    <div className="home">
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
            <div className="col hero-banner">
              <Link className="link" to="/products/1">
                <button className="hero-btn">Women</button>
              </Link>
              <img
                className="side-image"
                src="https://images.pexels.com/photos/11344675/pexels-photo-11344675.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="misto-img1"
              />
            </div>
            <div className="col hero-banner">
              <Link className="link" to="/products/1">
                <button className="hero-btn">Men</button>
              </Link>
              <img
                className="side-image"
                src="https://images.pexels.com/photos/3178875/pexels-photo-3178875.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="misto-img1"
              />
            </div>
          </div>
          <div className="row hero-banner">
            <Link className="link" to="/products/1">
              <button className="hero-btn">Accessories</button>
            </Link>
            <img
              className="side-image"
              src="https://images.pexels.com/photos/1306262/pexels-photo-1306262.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="misto-img1"
            />
          </div>
        </div>
      </div>
      <CategoryTabs defaultTab={0} categoryTitle="Women's">
        {productCategoriesData.map((category) => (
          <TabPane key={category.id} title={category.title}>
            <div className="products_container">
              {category.products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </TabPane>
        ))}
      </CategoryTabs>
    </div>
  );
};

export default Home;
