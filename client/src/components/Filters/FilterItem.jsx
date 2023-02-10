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
    <div className="filter-item__wrapper">
      <div className="filter-item">
        <Checkbox
          name={filterId}
          id={filter}
          value={filter}
          isChecked={checkedFilter[index]}
          label={filter}
          onChange={(e) => handleClickFilters(e, filter, filterId, index)}
          className={filterItemClass(filterId)}
        />
      </div>
    </div>
  );
};

export default FilterItem;
