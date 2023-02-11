import React from 'react';
import { NavLink } from 'react-router-dom';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ShareIcon from '@mui/icons-material/Share';
import './BreadCrumb.scss';

const BreadCrumb = ({ pageTitle = '', categoryId = '', categoryTitle = '' }) => {
  return (
    <div className="bread-crumb">
      <div className="right">
        <NavLink className={({ isActive }) => (isActive ? 'link active' : 'link inactive')} to="/">
          Home
        </NavLink>
        <ArrowRightIcon />
        {categoryTitle && (
          <NavLink
            className={({ isActive }) => (isActive ? 'link active' : 'link inactive')}
            to={`/categories/${categoryId}`}>
            {categoryTitle}
          </NavLink>
        )}
        {pageTitle && (
          <div className="bread-crumb__page-title">
            <ArrowRightIcon />
            <NavLink
              className={({ isActive }) => (isActive ? 'link active' : 'link inactive')}
              reloadDocument>
              {pageTitle}
            </NavLink>
          </div>
        )}
      </div>
      <div className="left">
        <ShareIcon />
        <span>share</span>
      </div>
    </div>
  );
};

export default BreadCrumb;
