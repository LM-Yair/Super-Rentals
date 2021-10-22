import React from 'react';

const Footer = () => {
  const date = new Date(); 
  return(
    <footer>
      <p>© Todos los derechos reservados { date.getFullYear() }.</p>
    </footer>
  );
}

export default Footer;
