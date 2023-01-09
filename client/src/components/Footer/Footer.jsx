import React from 'react';
import { SocialMediaIcons } from '../utils';
import { Link } from 'react-router-dom';
import './Footer.scss';
import CustomButton from '../Button/CustomButton';

const Footer = () => {
  const btnStyles = {
    width: '108px',
    height: '32px',
    letterSpacing: '0.06'
  };
  return (
    <footer>
      <div className="footer__cta-form">
        <span>Be in touch with us</span>
        <div className="footer_cta-inputs">
          <input type="email" name="cta_email" id="cta_email" placeholder="Enter your email" />
          <CustomButton
            className="secondary-btn"
            type="submit"
            styles={btnStyles}
            label="Join us"
          />
        </div>
        <SocialMediaIcons className="footer_social-icons" />
      </div>

      <div className="footer__menu">
        <div className="footer__submenu">
          <h4>Categories</h4>
          <Link className="link item" to="/products/1">
            Women
          </Link>
          <Link className="link item" to="/products/1">
            Men
          </Link>
          <Link className="link item" to="/products/1">
            Accessories
          </Link>
        </div>
        <div className="footer__submenu">
          <h4>information</h4>
          <Link className="link item" to="/about-us">
            About Us
          </Link>
          <Link className="link item" to="/contact">
            Contact Us
          </Link>
          <Link className="link item" to="/Blog">
            Blog
          </Link>
        </div>
        <div className="footer__submenu">
          <h4>useful links</h4>
          <span className="item">Terms & Conditions</span>
          <span className="item">Returns & Exchanges</span>
          <span className="item">Shopping & Delivery</span>
          <span className="item">Privacy & Policy</span>
        </div>
        <div className="footer__submenu">
          <h4>Contact us</h4>
          <span className="item"> Florianopolis, Brazil</span>
          <span className="item">+55002900029009</span>
          <span className="item">All week 24/7</span>
          <span className="item">misto@mistomail.com</span>
        </div>
      </div>
      <div className="footer__bottom-section">
        <span className="footer_copyright">Copyright © 2023 all rights reserved</span>
        <div className="footer_payment"></div>
        <span className="developer-title">
          Developed by <span>Ken Nzau</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
