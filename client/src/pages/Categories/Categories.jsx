import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Filters from '../../components/Filters/Filters';
import ProductList from '../../components/ProductList/ProductList';
import { productCategoriesData } from '../../mockData';
import './Categories.scss';

const Categories = () => {
  const categoryId = useParams();

  const categoryMockData = productCategoriesData.find((category) => {
    return parseInt(category.id) === parseInt(categoryId.id);
  });

  return (
    <div className="category-page__container">
      <div className="category-nav">
        <Link className="link inactive" to="/">
          Home
        </Link>
        <ArrowRightIcon />
        <Link className="active">{categoryMockData?.title}</Link>
      </div>
      <div className="category-page__banner">{categoryMockData?.title}</div>
      <Filters />
      <ProductList productsData={categoryMockData} />
    </div>
  );
};

export default Categories;
