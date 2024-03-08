import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const CartProduct = ({
  cartProduct,
  removeItem,
  handleDecrement,
  increment,
  isProfileOrder = false
}) => {
  const { qty, price, title, color, selectedSize, id } = cartProduct;
  const totalPrice = parseFloat(qty) * parseFloat(price);

  return (
    <div className="cart-product" key={id}>
      <div className="cart-product__img-wrapper">
        <img src={cartProduct.image.data.attributes.url} alt="product-img" />
      </div>
      <div className="cart-product__info">
        {!isProfileOrder && (
          <div className="cart-product__info-top">
            <div className="cart-product__info-top-right">
              <h2>{title}</h2>
              <p className="cart-product__price">
                <span>{qty} x </span>${price}
              </p>
            </div>

            <DeleteIcon onClick={() => removeItem(cartProduct)} className="cart__delete-btn" />
          </div>
        )}
        {isProfileOrder && (
          <p className="my-order__price">
            <span>Price per item: </span>${price}
          </p>
        )}

        <div className="cart-product__info-bottom">
          <div className="cart-product__info-attributes">
            <p>
              Color: <span>{color}</span>
            </p>
            <p>
              Size: <span className="uppercase">{selectedSize}</span>{' '}
            </p>
          </div>
          {!isProfileOrder && (
            <div className="cart-product__info-btns">
              <span
                className="cart-product__qty-change"
                onClick={() => handleDecrement(cartProduct)}>
                &#8722;
              </span>
              <span>{qty}</span>
              <span className="cart-product__qty-change" onClick={() => increment(cartProduct)}>
                &#43;
              </span>
            </div>
          )}
          {isProfileOrder && (
            <span className="cart-product__total-qty">
              Total: <p>{qty}</p>
            </span>
          )}
        </div>
      </div>
      {isProfileOrder && <h3 className="profile-order__total-const">${totalPrice}</h3>}
    </div>
  );
};

export default CartProduct;
