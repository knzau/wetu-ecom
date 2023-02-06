import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Filters from '../../components/Filters/Filters';
import ProductList from '../../components/ProductList/ProductList';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import useFetch from '../../hooks/useFetch';
import './Categories.scss';

const Categories = () => {
  const categoryId = useParams();

  const { data, loading } = useFetch(
    `/products?populate=*&[filters][categories][id]=${categoryId.id}`,
    [categoryId.id]
  );

  const getCategoryTitle = useCallback(
    (data = []) => {
      const title = data ? data[0]?.attributes?.categories?.data[0]?.attributes?.title : '';
      return title;
    },
    [data]
  );

  return (
    <div className="category-page__container">
      <div className="page-banner">
        <BreadCrumb categoryTitle={getCategoryTitle(data)} />
        <span className="page-banner__title">{getCategoryTitle(data)}</span>
      </div>
      <div className="page__content">
        <Filters />
        {loading ? 'loading' : data && <ProductList productsData={data} />}
      </div>
    </div>
  );
};

export default Categories;
