import React, { useState, useCallback, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import StarRating from '../../components/StarRating/StarRating';
// import { currenciesIcons } from '../../mockData';
import './ProductPage.scss';
import CurrencyContext from '../../hooks/CurrencyContext';

const ProductPage = () => {
  const location = useLocation();
  const currentCurrency = useContext(CurrencyContext);
  console.log({ currentCurrency });
  const [imageIndex, setImageIndex] = useState(0);
  const { product, categoryTitle } = location.state || {};
  // const { images, material, price, reviews, title, sku, color, availability, size } = product?.data;
  const { images, title, id, label, price, reviews, sku, availability, color, size } =
    product || null;
  const getSelectedImageClass = (index, imageIndex) => {
    return parseInt(imageIndex) === parseInt(index) ? ' selected-product' : 'unselected-product';
  };

  const handleSelectImage = useCallback((direction) => {
    const lastImage = images.length - 1;
    const firstImage = 0;
    if (direction === 'up') {
      setImageIndex((prevImageIndex) =>
        prevImageIndex > firstImage ? prevImageIndex - 1 : lastImage
      );
    } else {
      setImageIndex((prevImageIndex) =>
        prevImageIndex < lastImage ? prevImageIndex + 1 : firstImage
      );
    }
  }, []);

  const getRating = (reviews) =>
    reviews.reduce((acc, currentValue) => acc + currentValue.stars || 0, 0);

  return (
    <div className="product-page">
      <div className="page-banner">
        <BreadCrumb pageTitle={title} categoryTitle={categoryTitle} productId={id} />
        <span className="page-banner__title">{title}</span>
        <div className="page-banner__bottom">
          {reviews && <StarRating rating={getRating(reviews)} reviewsNum={reviews.length} />}
          <div className="page-banner__availability">
            {sku && (
              <p>
                SKU: <span>{sku}</span>
              </p>
            )}
            {availability && (
              <p>
                availability: <span>{availability}</span>
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="product-page__product">
        <div className="product__images-wrapper">
          <div className="product__small-imgs">
            <div className="small-images__nav">
              <KeyboardArrowUpIcon onClick={() => handleSelectImage('up')} />
              <KeyboardArrowDownIcon onClick={() => handleSelectImage('down')} />
            </div>
            {images.map((image, index) => (
              <div
                className="product__small-img"
                key={id + label + index}
                onClick={() => setImageIndex(index)}>
                <img
                  className={getSelectedImageClass(index, imageIndex)}
                  src={image}
                  alt={`image - ${index}`}
                />
              </div>
            ))}
          </div>
          <div className="product__main-img">
            <img src={images[imageIndex]} alt={`image - ${imageIndex}`} />
          </div>
        </div>
        <div className="product__details">
          <div className="product__colors">
            <span>color: {color[0]}</span>
          </div>
          <div className="product__sizes">
            <span>size: {size}</span>
            <span>size guide</span>
          </div>

          <div className="product__price">
            <hr />
            <div>
              <h2>
                <span>{}</span> {price}
              </h2>
              <button>Add to card</button>
              <span>favourite </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
