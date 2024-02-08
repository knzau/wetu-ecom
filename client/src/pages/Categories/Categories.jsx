import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import Filters from '../../components/Filters/Filters';
import ProductList from '../../components/ProductList/ProductList';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import useFetch from '../../hooks/useFetch';
import qs from 'qs';
import { PRODUCTS_URL, brandFilters, getFilterString, sizeFilters } from '../../utils';
import './Categories.scss';

const Categories = () => {
  const categoryId = useParams();
  console.log({ categoryId });
  const [priceRangeFilter, setPriceRangeFilter] = useState('7-1200');
  const [checkedSizeFilter, setCheckedSizeFilter] = useState(
    new Array(sizeFilters.length).fill(false)
  );
  const [checkedBrandFilter, setBrandCheckedFilter] = useState(
    new Array(brandFilters.length).fill(false)
  );
  const [filter, setFilter] = useState({});

  const [startPrice, endPrice] = useMemo(() => {
    return priceRangeFilter === '1200+' ? ['1200', '15000'] : priceRangeFilter.split('-');
  }, [priceRangeFilter]);

  const query = useMemo(
    () =>
      qs.stringify(
        {
          populate: '*',
          filters: {
            categories: categoryId,
            price: {
              $gte: startPrice,
              $lte: endPrice
            },
            ...filter
          }
        },
        {
          encodeValuesOnly: true // prettify URL
        }
      ),
    [startPrice, endPrice, categoryId, filter]
  );

  const handlePriceRangeSelect = (e) => {
    setPriceRangeFilter(e.target.value);
  };

  const { data, loading } = useFetch(PRODUCTS_URL + query, [categoryId.id, query]);
  console.log({ data });

  const title = data ? data[0]?.attributes?.categories?.data[0]?.attributes?.title : '';

  const handleClickFilters = (filter, filterId, position) => {
    const updatedCheckedState = checkedSizeFilter.map((item, index) =>
      index === position ? !item : item
    );
    if (filterId === 'color') {
      setFilter({ [filterId]: filter });
    }
    if (filterId === 'size') {
      setCheckedSizeFilter(updatedCheckedState);

      setFilter({ [filterId]: { $contains: getFilterString(updatedCheckedState, sizeFilters) } });
    }
    if (filterId === 'brand') {
      setFilter({ [filterId]: { $contains: getFilterString(updatedCheckedState, brandFilters) } });
      setBrandCheckedFilter(updatedCheckedState);
    }
  };

  return (
    <div className="category-page__container">
      <div className="page-banner">
        <BreadCrumb categoryTitle={title} />
        <span className="page-banner__title">{title}</span>
      </div>
      <div className="page__content">
        <Filters
          handlePriceRangeSelect={handlePriceRangeSelect}
          handleClickFilters={handleClickFilters}
          checkedSizeFilter={checkedSizeFilter}
          checkedBrandFilter={checkedBrandFilter}
        />
        {loading ? 'loading' : data && <ProductList productsData={data} />}
      </div>
    </div>
  );
};

export default Categories;
