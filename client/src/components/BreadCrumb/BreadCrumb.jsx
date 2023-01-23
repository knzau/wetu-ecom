import React from 'react';
import { Link } from 'react-router-dom';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ShareIcon from '@mui/icons-material/Share';
import './BreadCrumb.scss';

const BreadCrumb = ({ pageTitle, categoryTitle }) => {
  return (
    <div className="bread-crumb">
      <div className="right">
        <Link className="link inactive" to="/">
          Home
        </Link>
        <ArrowRightIcon />
        {categoryTitle && <Link className="link active">{categoryTitle}</Link>}
        {pageTitle && (
          <>
            <ArrowRightIcon />
            <span>{pageTitle}</span>
          </>
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
