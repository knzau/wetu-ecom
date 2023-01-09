import React from 'react';
import './CustomButton.scss';

const CustomButton = ({ label, type = '', className = '', styles = {} }) => {
  return (
    <button type={type} className={className} style={styles}>
      {label}
    </button>
  );
};

export default CustomButton;
