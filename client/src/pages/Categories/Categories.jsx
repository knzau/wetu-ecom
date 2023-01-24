import React from 'react';
import { useParams } from 'react-router-dom';
import Filters from '../../components/Filters/Filters';
import ProductList from '../../components/ProductList/ProductList';
import { categoriesData } from '../../mockData';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import './Categories.scss';

const Categories = () => {
  const categoryId = useParams();
  const categoryMockData = categoriesData.find(
    (category) => category.id.toString() === categoryId.id.toString()
  );

  return (
    <div className="category-page__container">
      <div className="page-banner">
        <BreadCrumb categoryTitle={categoryMockData?.title} />
        <span className="page-banner__title">{categoryMockData?.title}</span>
      </div>
      <div className="page__content">
        <Filters />
        <ProductList productsData={categoryMockData} />
      </div>
    </div>
  );
};

export default Categories;
