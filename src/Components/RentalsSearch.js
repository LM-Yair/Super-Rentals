import React from 'react';

const RentalsSearch = ({ setRentals, db }) => {
  const searchRentals = e => {
    if( !e.target.value ) return setRentals( db );
    const userTyping = new  RegExp( `(${ e.target.value })`, 'gmi' );
    const coincidence = db.filter( el => userTyping.test( el.placeName ) );
    setRentals( coincidence );
  }
  return(
    <nav className='rentalSearch'>
      <h3>¿Donde te gustaría estar?</h3>
      <input onChange={ searchRentals } className='rentalSearch__input' type="text" placeholder='Ingresa el lugar' />
    </nav>
  );
}

export default RentalsSearch;
