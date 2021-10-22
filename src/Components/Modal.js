import React from 'react';

const Modal = ({ children, isOpen, closeModal }) => {
  const handlePropagation = e => e.stopPropagation();
  return(
    <article 
    className={ `modal ${ isOpen && 'is-open'}` }
    onClick={ closeModal }>
      <section className="modal-container" onClick={ handlePropagation }>
	<button onClick={ closeModal } className="modaClose--btn">X</button>
	{ children }
      </section>
    </article>
  );
}

export default Modal;
