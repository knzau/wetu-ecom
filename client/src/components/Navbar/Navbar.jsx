import React from 'react';
import { Link } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import MistoLogo from '../../assets/icons/MistoLogo';
import { SocialMediaIcons } from '../utils';
import './Navbar.scss';

const Navbar = () => {
  return (
    <>
      <div className="top-bar">
        <div className="top-bar__right">
          <div className="top-bar__item">
            <PhoneIcon />
            <span>+38 (050) 12 34 567</span>
          </div>
          <div className="top-bar__item">
            <LocationOnIcon />
            <span>Ukraine, Kyiv,Khreshchatyk 1</span>
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
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Accessories
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="item">
            <SearchOutlinedIcon />
          </div>
          <div className="item">
            <FavoriteBorderOutlinedIcon />
          </div>
          <div className="item">
            <PersonOutlineOutlinedIcon />
          </div>
          <div className="item cart-icon">
            <LocalMallOutlinedIcon />
            <span>0</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
