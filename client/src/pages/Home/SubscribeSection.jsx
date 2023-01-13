import React from 'react';
import CustomButton from '../../components/Button/CustomButton';

const SubscribeSection = () => {
  return (
    <div className="subscribe-section">
      <div className="subscribe-section__img img-left">
        <img src={require('../../assets/images/subscribe1.png')} alt="img-misto23" />
      </div>
      <form className="subscribe-section__form">
        <div className="subscribe-section__text">
          <p>special offer</p>
          <h3>
            subscribe <br />
            <span>
              and <span className="red-text">get 10% off</span>
            </span>
          </h3>
        </div>
        <input id="subscribe__email" type="email" placeholder="enter your email" />
        <CustomButton type="submit" className="primary-btn subscribe-btn">
          subscribe
        </CustomButton>
      </form>
      <div className="subscribe-section__img img-right">
        <img src={require('../../assets/images/subscribe2.png')} alt="img-misto23" />
      </div>
    </div>
  );
};

export default SubscribeSection;
