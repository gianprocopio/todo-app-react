import React, { useState } from 'react';
import { createPortal } from 'react-dom';

function Modal({closeModal, createTodo}) {
  
  const [inputValue, setInputValue] = useState('');

  const onSubmit = (e) =>{
    e.preventDefault();
    closeModal();
    createTodo(inputValue)
  }

  const onChange = (e) =>{
    setInputValue(e.target.value);
  }

  return createPortal (
    <div className="container-modal">
      <form className='modal' onSubmit={onSubmit}>
        <h1>Crea un TODO!</h1>
        
            <input type="text" placeholder='TODO...'
            value={inputValue}
            onChange={onChange}
            />
            <div className="buttons-container">

            <button 
            className='cancel-button'
            onClick={closeModal}
            type='button'
            >Cancelar</button>
            <button
            type='submit'
            >Añadir</button>
            </div>
    </form>
    </div>,
    document.getElementById('modal')
  )
}

export default Modal