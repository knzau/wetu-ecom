import React from 'react';
import { productCategoriesData } from '../../mockData';
import Tabs from '../../components/TabsComponent/Tabs';
import TabPane from '../../components/TabsComponent/TabPane';
import Product from '../../components/Product/Product';
import CustomButton from '../../components/Button/CustomButton';

const HomeCategories = ({ defaultTab, categoryTitle }) => {
  return (
    <div className="home-categories__wrapper">
      <Tabs defaultTab={defaultTab} categoryTitle={categoryTitle}>
        {productCategoriesData.map((category) => (
          <TabPane key={category.id} title={category.title}>
            <div className="products_container">
              {category.products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </TabPane>
        ))}
      </Tabs>
      <CustomButton className="categories-btn">see all</CustomButton>
    </div>
  );
};

export default HomeCategories;
