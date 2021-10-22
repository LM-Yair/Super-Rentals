import React from 'react';
import ImgOwl from './ImgOwl';

const Banner = ({ children, bannerTitle, bannerText }) => {
  return(
    <section className='banner'>
      <ImgOwl imgClass='banner__img' />
      <section className='banner__content'>
	<h2 className='banner__title'>{ bannerTitle || '' }</h2>
	<p className='banner__text'>{ bannerText || '' }</p>
	{ children && children }
      </section>
    </section>
  );
}

export default Banner;
