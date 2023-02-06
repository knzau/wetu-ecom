import React from 'react';
import './CustomButton.scss';

const CustomButton = ({ children, type = '', className = '', styles = {}, ...rest }) => {
  return (
    <button type={type} className={className} style={styles} {...rest}>
      {children}
    </button>
  );
};

export default CustomButton;
