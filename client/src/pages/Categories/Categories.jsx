import React from 'react';
import { useParams } from 'react-router-dom';
import Filters from '../../components/Filters/Filters';
import ProductList from '../../components/ProductList/ProductList';
import { productCategoriesData } from '../../mockData';
import './Categories.scss';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

const Categories = () => {
  const categoryId = useParams();

  const categoryMockData = productCategoriesData.find(
    (category) => parseInt(category.id) === parseInt(categoryId.id)
  );

  return (
    <div className="category-page__container">
      <BreadCrumb categoryTitle={categoryMockData?.title} />
      <div className="category-page__banner">{categoryMockData?.title}</div>
      <Filters />
      <ProductList productsData={categoryMockData} />
    </div>
  );
};

export default Categories;
