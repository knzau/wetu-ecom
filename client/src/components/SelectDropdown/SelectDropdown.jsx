import React from 'react';
import './SelectDropdown.scss';

const SelectDropdown = ({ selectOptions, className = 'select', handleChange }) => {
  console.log(selectOptions);
  return (
    <select name="select" id="select-dropdown">
      {selectOptions.map((selectOption) => (
        <option
          className={className}
          key={crypto.randomUUID()}
          value={selectOption.value}
          onChange={(e) => handleChange(e)}>
          <span>{selectOption.label}</span>
        </option>
      ))}
    </select>
  );
};

export default SelectDropdown;
