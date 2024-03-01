import React from 'react';
import { useNavigate } from 'react-router-dom';
import Tabs from '../../components/TabsComponent/Tabs';
import CustomButton from '../../components/Button/CustomButton';
import ProductType from '../../components/ProductType/ProductType';
import { productTypes } from './HomeUtils';

const HomeTabsCategories = ({ defaultTab, categoryData, categoryId }) => {
  const navigate = useNavigate();
  const navigateToProductCategory = () => {
    navigate(`/categories/${categoryId}`);
  };

  return (
    <div className="home-categories__wrapper">
      <Tabs
        defaultTab={defaultTab}
        tabTitle={categoryData?.title || ''}
        parentClassName="category-tabs"
        tabSectionClassName="category-titles_section">
        {productTypes.map((productType) => (
          <ProductType
            productType={productType}
            label={productType.label}
            key={productType.id}
            categoryId={categoryId}
            categoryTitle={categoryData?.title}
          />
        ))}
      </Tabs>
      <CustomButton className="categories-btn" onClick={navigateToProductCategory}>
        see all
      </CustomButton>
    </div>
  );
};

export default HomeTabsCategories;
