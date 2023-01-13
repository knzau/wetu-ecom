import React from 'react';
import CustomButton from '../../components/Button/CustomButton';

const DiscountSection = () => {
  return (
    <div className="discount-section">
      <div className="discount-item">
        <CustomButton className="hero-btn">
          <span className="hero-btn_text">New Season</span>
          <span className="hero-btn__main-text">lookbook collection</span>
        </CustomButton>
        <div className="discount_image-wrapper">
          <img src={require('../../assets/images/floral-print.jpg')} alt="img" />
        </div>
      </div>
      <div className="discount-item">
        <CustomButton className="hero-btn">
          <span className="hero-btn_text">Sale</span>
          <span className="hero-btn__main-text">Get UP to 50% off</span>
        </CustomButton>
        <div className="discount_image-wrapper">
          <img src={require('../../assets/images/european-winter-coat.jpg')} alt="img2" />
        </div>
      </div>
    </div>
  );
};

export default DiscountSection;
