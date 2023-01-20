import React from 'react';
import { getColorFilterStyles } from './filterUtils';

const FilterItem = ({ filterId, filterDetails }) => {
  const filterItemClass =
    filterId === 'size' ? 'filter-item__size filter-item__text' : 'filter-item__text';

  return (
    <div className="filter-item__wrapper">
      {filterId === 'color' ? (
        <div className="filter-item">
          <h2>{filterId}</h2>
          {filterDetails.map((filter) => (
            <div key={crypto.randomUUID()} className={filterItemClass}>
              <span style={getColorFilterStyles(filter)} />
              <p>{filter}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="filter-item">
          <h2>{filterId}</h2>
          {filterDetails.map((filter) => {
            return (
              <div key={crypto.randomUUID()} className={filterItemClass}>
                <input type="checkbox" name={filter} id={filter} />
                <label htmlFor={filter}>{filter}</label>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FilterItem;
