import React from 'react';
import Banner from '../Components/Banner';
import Rentals from '../Components/Rentals';
import LinkBtn from '../Components/LinkBtn';

const Inicio = () =>{
  return(
    <main>
      <Banner
      bannerTitle='¡Bienvenido a Super Alquileres!'
      bannerText='Esperamos que encuentres exactamente lo que estas buscando en un lugar para quedarse.'
      >
        <nav className='nav'>
	  <LinkBtn to='/nosotros' text='Nosotros' />
	  <LinkBtn to='/contacto' text='Contáctame' />
	</nav>
      </Banner>
      <Rentals />
    </main>
  );
}

export default Inicio;
