import React from 'react';
import { Link } from 'react-router-dom';
import { useStoreActions, useStoreState } from 'easy-peasy';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import MistoLogo from '../../assets/icons/MistoLogo';
import { SocialMediaIcons } from '../utils';
import Cart from '../Cart/Cart';
import './Navbar.scss';
import LoaderLine from '../LoaderLine/LoaderLine';
import { SIGN_IN_PATH } from '../../api/api';

const Navbar = () => {
  const { toggleCartOpen } = useStoreActions((actions) => actions.cartModel);
  const { totalCartItems } = useStoreState((state) => state.cartModel);
  const showCart = useStoreState((state) => state.cartModel.showCart);
  const { isLoading } = useStoreState((state) => state.loadingModel);

  return (
    <div className="navbar__container">
      <div className="top-bar">
        <div className="top-bar__right">
          <div className="top-bar__item">
            <PhoneIcon />
            <span>+55 (111) 12 34 567890</span>
          </div>
          <div className="top-bar__item">
            <LocationOnIcon />
            <span>Florianopolis, Santa Catarina, Brazil</span>
          </div>
          <div className="top-bar__item">
            <WatchLaterIcon />
            <span>All week 24/7</span>
          </div>
        </div>
        <SocialMediaIcons className="top-bar__left" />
      </div>
      <nav className="nav-bar__wrapper">
        <div className="left">
          <Link className="link" to="/">
            <MistoLogo />
          </Link>
        </div>
        <div className="center">
          <div className="item">
            <Link className="link" to="/about-us">
              About us
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/categories/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/categories/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/categories/accessories">
              Accessories
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="item">
            <SearchOutlinedIcon />
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
      {isLoading ? <LoaderLine /> : null}
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
