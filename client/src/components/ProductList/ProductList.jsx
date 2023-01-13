import React from 'react';
import './ProductList.scss';
import Product from '../Product/Product';

const ProductList = ({ productsData }) => {
  return (
    <div className="product-list__wrapper">
      {productsData.products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
