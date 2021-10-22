import React from 'react';
import { useParams } from 'react-router';
import Modal from '../Components/Modal';
import { useModal } from '../Hooks/useModal';
import Banner from '../Components/Banner';
import LinkBtn from '../Components/LinkBtn';
import db from '../Helpers/helpDataBase';

const Mapa = () => {
  const [ isOpenModal, openModal, closeModal ] = useModal( false );
  const { id } = useParams();
  const Rental = db.find( el => el.id == id );
  const { img, placeName, owner, locationName, numberOfBedrooms, placeType, mapSrc } = Rental;
  return(
    <section>
      <Banner
      bannerTitle={ placeName }
      >
      <section className='mapa__place'>
	<figure>
	  <img onClick={ openModal } className='rental__img' src={ img } alt='Imagen del Alquiler' />
	</figure>
	<Modal
	isOpen={ isOpenModal }
	closeModal={ closeModal }>
	  <h4 className='modal__title'>{ placeName }</h4>
	  <img src={ img } alt='Imagen del Alquiler' />
	</Modal>
	<div className='mapa__specs'>
	  <p>
	    <span className='rental__specification'>Propietario: </span>
	    { owner }
	  </p>
	  <p>
	    <span className='rental__specification'>Ubicación: </span>
	    { locationName }
	  </p>
	  <p>
	    <span className='rental__specification'>Número de dormitorios: </span>
	    { numberOfBedrooms }
	  </p>
	  <p>
	    <span className='rental__specification'>Tipo: </span>
	    { placeType }
	  </p>
	  <nav className='nav rental__btn'>
	    <LinkBtn to='/' text='Inicio' />
	  </nav>
	</div>
      </section>
      </Banner>
      {	mapSrc && <section className='map__container'>
	  <iframe className='map' 
	  src={ mapSrc } 
	  width="600" 
	  height="450" 
	  allowfullscreen="" 
	  loading="lazy"
	  >
	</iframe>
      </section>
      }
    </section>
  );
}

export default Mapa;
