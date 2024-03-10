import React from 'react';
import { ABOUT_US, ABOUT_US_API } from '../../utils/constants';
import useFetch from '../../hooks/useFetch';
import './About.scss';
import LoaderCircle from '../../components/common/LoaderCircle/LoaderCircle';

const About = () => {
  const { data, isLoading } = useFetch(ABOUT_US_API, [ABOUT_US], {
    staleTime: 10 * (60 * 1000)
  });

  const { description2, header1, image } = data?.attributes || {};
  const imgSrc = image?.data?.attributes?.url || '';

  return isLoading ? (
    <LoaderCircle />
  ) : (
    data && (
      <div className="about-us__container">
        <div className="about-us__main-left">
          <h2>{header1}</h2>
          <p>{description2}</p>
        </div>
        <div className="about-us__main-right">
          <img src={imgSrc} alt="about-image" />
        </div>
      </div>
    )
  );
};

export default About;
