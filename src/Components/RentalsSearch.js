import React from 'react';

const RentalsSearch = ({ rentals, setRentals }) => {
  const searchRentals = e => {
    const coincidence = new  RegExp( e.target.value, 'gmi' );
    console.log( e.target.value, coincidence.test( 'Hola' ) );
  }
  return(
    <nav className='rentalSearch'>
      <h3>¿Donde te gustaría estar?</h3>
      <input onChange={ searchRentals } className='rentalSearch__input' type="text" placeholder='Ingresa el lugar' />
    </nav>
  );
}

export default RentalsSearch;
