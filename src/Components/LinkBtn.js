import React from 'react';
import { Link } from 'react-router-dom';

const LinkBtn = ({ to, text }) => {
  return(
      <Link className='Link' to={ to }>{ text }</Link>
  );
}

export default LinkBtn;
