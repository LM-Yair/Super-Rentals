import React from 'react';
import LinkBtn from '../Components/LinkBtn';
import Banner from '../Components/Banner';

const Nosotros = () => {
  return(
    <Banner
    bannerTitle='Sobre Super Alquileres.'
    bannerText={ 
      `El sitio web de Super Alquileres es un proyecto encantador creado en
      React. Al construir un sitio de alquiler de propiedades, 
      podemos imaginar simultáneamente viajar y construir aplicaciones React.` 
    }>
    <nav className='nav'>
      <LinkBtn to='/' text='Inicio'/>
      <LinkBtn to='/contacto' text='Contáctame'/>
    </nav>
    </Banner>

  );
}

export default Nosotros;
