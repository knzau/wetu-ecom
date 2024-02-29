import React from 'react';
import Slider from '../Slider/Slider';

const PriceRangeSlider = ({ handlePriceChange }) => {
  return (
    <div>
      <Slider
        showLabel={false}
        label="Price"
        min={0}
        max={2000}
        step={50}
        onValueChange={handlePriceChange}
      />
    </div>
  );
};

export default PriceRangeSlider;
