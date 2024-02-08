import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.scss';

const Product = ({ product, categoryTitle }) => {
  const navigate = useNavigate();

  const navigateToProductPage = (productId) => {
    navigate(`/categories/${categoryTitle}/product/${productId}`);
  };

  const { price, title, image } = product?.attributes || {};
  const imgUrl = image?.data?.attributes?.url || '';

  return (
    <div
      key={product.id}
      className="product__wrapper"
      onClick={() => navigateToProductPage(product.id)}>
      <div className="product__image-wrapper">
        <img src={imgUrl} alt={''} />
      </div>

      <span className="product__label">{title}</span>
      <div className="product__price-wrapper">
        <span className="product__price">${price}</span>
      </div>
    </div>
  );
};

export default Product;
