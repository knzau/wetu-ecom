import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/common/Button/CustomButton';
import Tabs from '../../components/common/TabsComponent/Tabs';
import ProductType from '../../components/Product/ProductType/ProductType';

import { productTypes } from '../../utils/constants';
import '../../components/common/TabsComponent/Tabs.scss';

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
