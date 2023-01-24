import React from 'react';
import Product from '../Product/Product';
import './ProductList.scss';

const ProductList = ({ productsData }) => {
  return (
    <div className="product-list__wrapper">
      {productsData.products.map((product) => (
        <Product product={product} key={product.id} categoryTitle={productsData.title} />
      ))}
    </div>
  );
};

export default ProductList;
