import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mapProductData } from '../../utils/helpers';
import './Product.scss';

const Product = ({ product, productId }) => {
  const productInfo = mapProductData(product);
  const navigate = useNavigate();
  const { title, imageUrl1, price, categoryTitle } = productInfo;

  const navigateToProductPage = (productId) => {
    navigate(`/categories/${categoryTitle}/product/${productId}`);
  };

  return (
    <div
      key={productId}
      className="product__wrapper"
      onClick={() => navigateToProductPage(productId)}>
      <div className="product__image-wrapper">
        <img src={imageUrl1} alt={''} />
      </div>

      <span className="product__label">{title}</span>
      <div className="product__price-wrapper">
        <span className="product__price">${price}</span>
      </div>
    </div>
  );
};

export default Product;
