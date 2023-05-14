import React from 'react';
import { createPortal } from 'react-dom';
import {VscChromeClose} from "react-icons/vsc";

function Modal() {
  return createPortal (
    <div className='modal'>
        <div className='container-modal'>
        <h1>Crea un TODO!</h1>
        <span className='close-modal-button'><VscChromeClose/></span>
        </div>
        
            <input type="text" placeholder='Wirite it here...'/>
            <button>Add</button>
    </div>,
    document.getElementById('modal')
  )
}

export default Modal