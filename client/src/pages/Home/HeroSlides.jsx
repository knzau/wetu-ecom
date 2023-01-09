import { Link } from 'react-router-dom';
import { getImageTranslation } from './HomeUtils';
import { HeroBannerContent } from '../../mockData';

export const HeroSlides = ({ slideIndex, bannerWidth }) => {
  return HeroBannerContent.map((content) => (
    <div
      className="slide"
      key={content.id}
      style={{ transform: getImageTranslation(slideIndex, bannerWidth) }}>
      <Link className="link" to="/products/1">
        <button className="hero-btn">
          <span className="hero-btn_text">{content.bannerSubLabel}</span>
          <span className="hero-btn__main-text">{content.bannerMainLabel}</span>
        </button>
      </Link>
      <div className="slide__img-container">
        <img src={content.imgURL} alt="misto-img" />
      </div>
    </div>
  ));
};
