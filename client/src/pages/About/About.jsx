import React from 'react';
import useFetch from '../../hooks/useFetch';
import './About.scss';

const About = () => {
  const { data, loading } = useFetch('/about-us?populate=*');

  const { description2, header1, image } = data?.attributes || {};

  const imgSrc = image?.data?.attributes?.url || '';

  return loading ? (
    <p>loading...</p>
  ) : (
    data && (
      <div className="about-us__container">
        <div className="about-us__content">
          <div className="about-us__item about-us__main-content">
            <div className="about-us__main-left">
              <h2>{header1}</h2>
              <p>{description2}</p>
              <div className="about-us__img-box">
                <img src={imgSrc} alt="about-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default About;
