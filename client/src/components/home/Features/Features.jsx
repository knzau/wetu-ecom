import React from 'react';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import PlaylistAddCheckCircleOutlinedIcon from '@mui/icons-material/PlaylistAddCheckCircleOutlined';
import './Features.scss';

const Features = ({ isHomeFeatures = false }) => {
  return (
    <div className="our-features">
      <div className="feature-item">
        <LocalShippingOutlinedIcon />
        <span>
          <h4>Free shipping</h4>
          {isHomeFeatures && <p>On all UA order or order above $100</p>}
        </span>
      </div>
      <div className="feature-item">
        <CachedOutlinedIcon />
        <span>
          <h4>30 DAYS RETURN</h4>
          {isHomeFeatures && <p>Simply return it within 30 days for an exchange</p>}
        </span>
      </div>
      <div className="feature-item">
        <PlaylistAddCheckCircleOutlinedIcon />
        <span>
          <h4>SUPPORT 24/7</h4>
          {isHomeFeatures && <p>Contact us 24 hours a day, 7 days a week</p>}
        </span>
      </div>
    </div>
  );
};

export default Features;
