import React from 'react';
import { Link } from 'react-router-dom';
import MistoLogo from '../../../assets/icons/MistoLogo';
import { SIGN_IN_PATH } from '../../../utils/constants';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseIcon from '@mui/icons-material/Close';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import MenuIcon from '@mui/icons-material/Menu';
import { menuItems } from '../../../utils/constants';

const NavContent = ({
  isNavOpen,
  closeNavigation,
  toggleNavigation,
  toggleCartOpen,
  totalCartItems,
  handleClickSearch
}) => {
  return (
    <nav className="nav-bar__wrapper">
      <div className="left">
        {isNavOpen ? (
          <CloseIcon className="menu-icon" onClick={closeNavigation} />
        ) : (
          <MenuIcon className="menu-icon" onClick={toggleNavigation} />
        )}
        <Link className="link" to="/">
          <MistoLogo />
        </Link>
        <div className="menu-icons__left">
          <div className="item profile-nav__icon">
            <Link className="link" to={SIGN_IN_PATH}>
              <PersonOutlineOutlinedIcon />
            </Link>
          </div>
          <div className="item cart-icon phone-cart" onClick={toggleCartOpen}>
            <LocalMallOutlinedIcon />
            <span>{totalCartItems || 0}</span>
          </div>
        </div>
      </div>
      <div className="center">
        {menuItems.map((item) => (
          <li className="burger-menu__item item" key={item.path}>
            <Link className="burger-menu__link" to={item.path}>
              {isNavOpen && <ArrowRightIcon />}
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </div>
      <div className="right">
        <div className="item">
          <SearchOutlinedIcon onClick={handleClickSearch} />
        </div>

        <div className="item">
          <Link className="link" to={SIGN_IN_PATH}>
            <PersonOutlineOutlinedIcon />
          </Link>
        </div>
        <div className="item cart-icon" onClick={toggleCartOpen}>
          <LocalMallOutlinedIcon />
          <span>{totalCartItems || 0}</span>
        </div>
      </div>
    </nav>
  );
};

export default NavContent;
