import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { menuItems } from '../constant';
import ProductSearch from '../ProductSearch/ProductSearch';
import useHandleSearch from '../../hooks/useHandleSearch';
import LoaderCircle from '../LoaderCircle/LoaderCircle';
import ProductList from '../ProductList/ProductList';
import './BurgerMenu.scss';

const BurgerMenu = ({ closeNavigation }) => {
  const { searchData, onSearch, handleClearSearch, handleInputFocus, isFocused, isLoading } =
    useHandleSearch();

  useEffect(() => {
    window?.navigation.addEventListener('navigate', () => {
      closeNavigation();
    });

    return () => {
      window?.navigation.removeEventListener('navigate', closeNavigation);
    };
  }, [closeNavigation]);

  return (
    <div className="burger-menu__container">
      <ProductSearch
        onSearch={onSearch}
        handleClearSearch={handleClearSearch}
        handleInputFocus={handleInputFocus}
        isFocused={isFocused}
      />
      {isLoading ? <LoaderCircle /> : <ProductList productsData={searchData} />}
      {!isFocused && (
        <>
          <div className="burger-menu__sub-categories">
            <div className="sub-category__item">
              <span>New Arrivals</span>
              <img
                src="https://res.cloudinary.com/dwtaiai3t/image/upload/v1707948153/beanie2_77dfb69958.jpg"
                alt=""
              />
            </div>
            <div className="sub-category__item">
              <span>Best Sellers</span>
              <img
                src="https://res.cloudinary.com/dwtaiai3t/image/upload/v1707910160/winter_jacket_a8f1ef1a6d.jpg"
                alt=""
              />
            </div>
          </div>
          <ul className="burger-menu__list">
            {menuItems.map((item) => (
              <li className="burger-menu__item item" key={item.path}>
                <Link className="burger-menu__link" to={item.path}>
                  <ArrowRightIcon /> <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default BurgerMenu;
