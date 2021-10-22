import React from 'react';
import Modal from './Modal';
import { useModal } from '../Hooks/useModal';
import LinkBtn from './LinkBtn';

const Rental = ({ id ,imgName, placeName, owner, locationName, numberOfBedrooms, placeType }) => {
  const [ isOpenModal, openModal, closeModal ] = useModal( false );
  return(
    <li className='rental__item'>
      <section className='rental__img__container'>
	<img className='rental__img' onClick={ openModal } src={ imgName } alt='Imagen del Alquiler' />
      </section>
      <Modal
      isOpen={ isOpenModal }
      closeModal={ closeModal }>
	<h4 className='modal__title'>{ placeName }</h4>
	<img src={ imgName } alt='Imagen del Alquiler' />
      </Modal>

      <section className='rental__specs'>
	<h4 className='rental__title'>{ placeName }</h4>
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
	  <LinkBtn to={ `/mapa/${ id }` } text='Ver lugar'/>
	</nav>
      </section>
    </li>
  );
}

export default Rental;
