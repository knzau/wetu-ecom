import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

import { useStoreActions, useStoreState } from 'easy-peasy';
import { BASE_URL } from '../../utils';
import CustomButton from '../Button/CustomButton';
import './Cart.scss';
// import axios from 'axios';
import { makeRequest } from '../../makeRequests';

const Cart = () => {
  const { cartProducts, totalPrice, showCart, resetCart } = useStoreState(
    (state) => state.cartModel
  );

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

  const stripePromise = loadStripe(
    'pk_test_51HHEgxJHFnGkoT5WILq5CAvF1htqpuuxPo60gqII1kVy3oUx6JmJUBBIuMPCSYMxvYQS8ZOLMcxTcTEFSNvHtfQH0063s8qD1m'
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;

      const res = await makeRequest.post('/orders', { products: cartProducts });
      resetCart();
      !!showCart && handleShowHideCart();

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id
      });
    } catch (error) {
      console.error(error);
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
              <p className="cart-product__price">
                <span>{cartProduct.qty} x </span>${cartProduct.price}
              </p>
            </div>

            <div className="cart-product__info-bottom">
              <div className="cart-product__info-attributes">
                <p>
                  Color: <span>{cartProduct.color}</span>
                </p>
                <p>
                  Size: <span className="uppercase">{cartProduct.selectedSize}</span>{' '}
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
      <div className="cart-checkout">
        <div className="cart-total">
          <span>subtotal</span>
          <span>$ {totalPrice}</span>
        </div>
        <CustomButton className="primary-btn  checkout-btn" onClick={handlePayment}>
          Checkout
        </CustomButton>
      </div>
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
