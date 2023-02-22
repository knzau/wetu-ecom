import React from 'react';
import useFetch from '../../hooks/useFetch';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import { BASE_URL } from '../../utils';
import './About.scss';

const About = () => {
  const { data, loading, error } = useFetch('/about-us?populate=*');

  const { description1, description2, header1, header2, image } = data?.attributes || {};

  const imgSrc = image?.data?.attributes?.url || '';

  console.log({ data, loading, error });
  return loading ? (
    <p>loading...</p>
  ) : (
    data && (
      <div className="about-us__container">
        <div className="page-banner">
          <BreadCrumb categoryTitle="about us" />
          <span className="page-banner__title">about us</span>
        </div>
        <div className="about-us__content">
          <div className="about-us__item about-us__top-content">
            <h2>{header1}</h2>
            <p>{description1}</p>
          </div>
          <div className="about-us__item about-us__main-content">
            <div className="about-us__main-left">
              <h2>{header2}</h2>
              <p>{description2}</p>
            </div>
            <div className="about-us__img-box">
              <img src={BASE_URL + imgSrc} alt="about-image" />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default About;
