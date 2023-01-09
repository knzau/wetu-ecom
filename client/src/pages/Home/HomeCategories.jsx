import React from 'react';
import { productCategoriesData } from '../../mockData';
import Tabs from '../../components/TabsComponent/Tabs';
import TabPane from '../../components/TabsComponent/TabPane';
import Product from '../../components/Product/Product';

const HomeCategories = () => {
  return (
    <>
      <Tabs defaultTab={0} categoryTitle="Women's">
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
    </>
  );
};

export default HomeCategories;
