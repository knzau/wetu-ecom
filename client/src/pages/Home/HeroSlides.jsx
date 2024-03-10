import { Link } from 'react-router-dom';
import { HeroBannerContent } from '../../mockData';
import CustomButton from '../../components/common/Button/CustomButton';
import { getImageTranslation } from '../../utils/helpers';

export const HeroSlides = ({ slideIndex, bannerWidth }) => {
  return HeroBannerContent.map((content) => (
    <div
      className="slide"
      key={content.id}
      style={{ transform: getImageTranslation(slideIndex, bannerWidth) }}>
      <Link className="link" to="/products/1">
        <CustomButton className="hero-btn">
          <span className="hero-btn_text">{content.bannerSubLabel}</span>
          <span className="hero-btn__main-text">{content.bannerMainLabel}</span>
        </CustomButton>
      </Link>
      <div className="slide__img-container">
        <img src={content.imgURL} alt="misto-img" />
      </div>
    </div>
  ));
};
