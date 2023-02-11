import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../utils';
import './Product.scss';

const Product = ({ product, categoryId, categoryTitle }) => {
  const navigate = useNavigate();
  console.log({ product });
  const navigateToProductPage = (productId) => {
    navigate(`/categories/${categoryTitle}/product/${productId}`, {
      state: { product: product, categoryTitle: categoryTitle, categoryId: categoryId }
    });
  };

  const { price, title, image } = product?.attributes || {};
  const imgUrl = image?.data?.attributes?.url || '';
  console.log(BASE_URL + imgUrl);
  return (
    <div
      key={product.id}
      className="product__wrapper"
      onClick={() => navigateToProductPage(product.id)}>
      <div className="product__image-wrapper">
        <img src={BASE_URL + imgUrl} alt={''} />
      </div>

      <span className="product__label">{title}</span>
      <div className="product__price-wrapper">
        <span className="product__price">${price}</span>
      </div>
    </div>
  );
};

export default Product;
