import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import Filters from '../../components/Filters/Filters';
import ProductList from '../../components/ProductList/ProductList';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import useFetch from '../../hooks/useFetch';
import qs from 'qs';
import './Categories.scss';

const Categories = () => {
  const categoryId = useParams();
  const [priceRangeFilter, setPriceRangeFilter] = useState('7-1200');

  const [startPrice, endPrice] = useMemo(() => {
    return priceRangeFilter === '1200+' ? ['1200', '15000'] : priceRangeFilter.split('-');
  }, [priceRangeFilter]);

  const query = useMemo(
    () =>
      qs.stringify(
        {
          filters: {
            categories: categoryId,
            price: {
              $gte: startPrice,
              $lte: endPrice
            }
          }
        },
        {
          encodeValuesOnly: true // prettify URL
        }
      ),
    [startPrice, endPrice, categoryId]
  );

  const handlePriceRangeSelect = (e) => {
    setPriceRangeFilter(e.target.value);
  };

  const { data, loading } = useFetch(`/products?populate=*&${query}`, [categoryId.id, query]);

  const title = data ? data[0]?.attributes?.categories?.data[0]?.attributes?.title : '';

  return (
    <div className="category-page__container">
      <div className="page-banner">
        <BreadCrumb categoryTitle={title} />
        <span className="page-banner__title">{title}</span>
      </div>
      <div className="page__content">
        <Filters handlePriceRangeSelect={handlePriceRangeSelect} />
        {loading ? 'loading' : data && <ProductList productsData={data} />}
      </div>
    </div>
  );
};

export default Categories;
