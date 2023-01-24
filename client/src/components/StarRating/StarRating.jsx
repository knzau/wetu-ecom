import React from 'react';
import './StarRating.scss';

const StarRating = ({ rating, reviewsNum = '' }) => {
  console.log(reviewsNum);
  return (
    <div className="star-rating">
      <div className="stars">
        {[...Array(5)].map((star, index) => {
          return (
            <span key={index} className={index <= rating ? 'on' : 'off'}>
              &#9733;
            </span>
          );
        })}
      </div>

      {reviewsNum && <span className="star-rating__reviews">{reviewsNum} Reviews</span>}
    </div>
  );
};

export default StarRating;
