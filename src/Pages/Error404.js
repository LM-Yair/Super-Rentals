import React from 'react';
import LinkBtn from '../Components/LinkBtn';

const Error404 = () =>{
  return(
    <section className='Error404'>
      <h2>Error 404</h2>
      <p>Página no encontrada 🥺.</p>
      <LinkBtn to='/'text='Inicio' />
    </section>
  );
}

export default Error404;
