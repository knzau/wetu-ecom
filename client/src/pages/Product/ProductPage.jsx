import React, { useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import './ProductPage.scss';

const ProductPage = () => {
  const location = useLocation();
  const [imageIndex, setImageIndex] = useState(0);
  const { product, categoryTitle } = location.state || {};
  // const { images, material, price, reviews, title, sku, color, availability, size } = product?.data;
  const { images, title, id, label, price } = product;
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

  return (
    <div className="product-page">
      <div className="page-banner">
        <BreadCrumb pageTitle={title} categoryTitle={categoryTitle} />
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
            <span>color</span>
          </div>
          <div className="product__sizes">
            <span>size</span>
            <span>size guide</span>
          </div>

          <div className="product__price">
            <hr />
            <div>
              <h2> {price}</h2>
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
