import React, { useState } from 'react';

import { useStoreActions, useStoreState } from 'easy-peasy';
import BurgerMenu from '../../common/BurgerMenu/BurgerMenu';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';
import Cart from '../../Cart/Cart';
import NavContent from './NavContent';
import './Navbar.scss';

const Navbar = ({ handleClickSearch }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const { toggleCartOpen } = useStoreActions((actions) => actions.cartModel);
  const { totalCartItems } = useStoreState((state) => state.cartModel);
  const showCart = useStoreState((state) => state.cartModel.showCart);

  const toggleNavigation = () => {
    setIsNavOpen(!isNavOpen);
  };
  const closeNavigation = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="navbar__container">
      <div className="top-bar">
        <div className="top-bar__right">Free worldwide shipping for orders over $100</div>
        <SocialMediaIcons className="top-bar__left" />
      </div>
      {isNavOpen && <BurgerMenu closeNavigation={closeNavigation} />}
      <NavContent
        toggleCartOpen={toggleCartOpen}
        isNavOpen={isNavOpen}
        closeNavigation={closeNavigation}
        toggleNavigation={toggleNavigation}
        totalCartItems={totalCartItems}
        handleClickSearch={handleClickSearch}
      />
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
