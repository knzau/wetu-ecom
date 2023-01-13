import React from 'react';
import './CustomButton.scss';

const CustomButton = ({ children, type = '', className = '', styles = {} }) => {
  return (
    <button type={type} className={className} style={styles}>
      {children}
    </button>
  );
};

export default CustomButton;
