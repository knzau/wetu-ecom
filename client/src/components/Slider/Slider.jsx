import React, { useState } from 'react';
import { debounce } from '../../utils';

const Slider = ({ showLabel, label, min, max, step, onValueChange, ...props }) => {
  const [value, setValue] = useState(min);

  const handleValueChange = debounce((newValue) => {
    setValue(newValue);
    onValueChange(newValue);
  }, 50);

  return (
    <div>
      {
        <label htmlFor={`slider-${label}`}>
          {showLabel && label} ${value}
        </label>
      }
      <input
        type="range"
        id={`slider-${label}`}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => handleValueChange(parseInt(event.target.value, 10))}
        {...props}
      />
    </div>
  );
};

export default Slider;
