import React from 'react';
import Banner from '../Components/Banner';
import LinkBtn from '../Components/LinkBtn';

const Contacto = () => {
  return(
    <Banner
    bannerTitle='Contáctame.'
    bannerText='Me encantaría ayudarte a elegir un destino o responder cualquier pregunta que puedas tener.'
    >
      <section>
	<p>
	  <span>Creador: </span>
	  Yair Lázaro.
	</p>
	<p>
	  <span>Correo: </span>
	  <a className='Link__a' href="mailto:ylm508910@gmail.com" rel='noreferrer'>Saludame aquí 👋🏼.</a>
	</p>
	<p>
	  <span>Mi portafolio: </span>
	  <a className='Link__a' href="http://yair-portafolio.herokuapp.com/" rel='noreferrer' target='_blank'>Visitalo 😎...</a>
	</p>
        <nav className='nav'>
	  <LinkBtn to='/' text='Inicio' />
	  <LinkBtn to='/nosotros' text='Nosotros' />
	</nav>
      </section>
    </Banner>
  );
}

export default Contacto;
