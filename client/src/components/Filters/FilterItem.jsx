import React from 'react';
import Checkbox from '../Checkbox/Checkbox';

const FilterItem = ({
  index,
  filterId,
  filter,
  handleClickFilters,
  filterItemClass,
  checkedFilter
}) => {
  return (
    <Checkbox
      name={filterId}
      id={filter}
      value={filter}
      isChecked={checkedFilter[index]}
      label={filter}
      onChange={() => handleClickFilters(filter, filterId, index)}
      className={filterItemClass(filterId)}
    />
  );
};

export default FilterItem;
