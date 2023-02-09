import React from 'react';
import Stripe from '../../assets/svg/Stripe.svg';
import AES from '../../assets/svg/AES.svg';
import Paypal from '../../assets/svg/Paypal.svg';
import Mastercard from '../../assets/svg/Mastercard.svg';
import AmericanExpress from '../../assets/svg/AmericanExpress.svg';
import Discover from '../../assets/svg/Discover.svg';
import Visa from '../../assets/svg/Visa.svg';
import './PaymentMethods.scss';

const PaymentMethods = () => {
  return (
    <div className="payment-methods">
      <img src={Stripe} alt="stripe-logo" />
      <img src={AES} alt="stripe-logo" />
      <img src={Paypal} alt="stripe-logo" />
      <img src={Visa} alt="stripe-logo" />
      <img src={Mastercard} alt="stripe-logo" />
      <img src={Discover} alt="stripe-logo" />
      <img src={AmericanExpress} alt="stripe-logo" />
    </div>
  );
};

export default PaymentMethods;
