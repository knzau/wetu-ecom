import React from 'react';
import './Cart.scss';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { BASE_URL } from '../../utils';

const Cart = () => {
  const cartProducts = useStoreState((state) => state.cartModel.cartProducts);

  const { increment, decrement, removeItem, handleShowHideCart } = useStoreActions(
    (actions) => actions.cartModel
  );

  const handleDecrement = (cartProduct = {}) => {
    if (cartProduct.qty > 1) {
      decrement(cartProduct);
    } else {
      removeItem(cartProduct);
    }
  };

  return cartProducts.length ? (
    <div className="cart">
      <span className="closeBtn" onClick={handleShowHideCart}>
        &#x2715;
      </span>
      <span className="cart-title">Shopping Cart</span>
      {cartProducts.map((cartProduct) => (
        <div className="cart-product" key={cartProduct.id}>
          <div className="cart-product__img-wrapper">
            <img src={BASE_URL + cartProduct.image.data.attributes.url} alt="product-img" />
          </div>
          <div className="cart-product__info">
            <div className="cart-product__info-top">
              <h2>{cartProduct.title}</h2>
              <p>${cartProduct.price}</p>
            </div>

            <div className="cart-product__info-bottom">
              <div className="cart-product__info-attributes">
                <p>
                  Color: <span>{cartProduct.color}</span>
                </p>
                <p>
                  Size: <span className="uppercase">{cartProduct.selectedSizes}</span>{' '}
                </p>
              </div>
              <div className="cart-product__info-btns">
                <span
                  className="cart-product__qty-change"
                  onClick={() => handleDecrement(cartProduct)}>
                  &#8722;
                </span>
                <span>{cartProduct.qty}</span>
                <span className="cart-product__qty-change" onClick={() => increment(cartProduct)}>
                  &#43;
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="center-items cart">
      <span className="closeBtn" onClick={handleShowHideCart}>
        &#x2715;
      </span>
      <h2>Shopping Cart is Empty</h2>
    </div>
  );
};

export default Cart;
