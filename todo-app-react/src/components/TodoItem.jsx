import React from 'react';
import { VscCheck } from "react-icons/vsc";
import {VscChromeClose} from "react-icons/vsc";

function TodoItem({description, completed, onComplete, onDelete}) {
  return (
    <li className={`todo-item ${completed && 'task-completed'}`}>
        <span 
        className={`icon-complete ${completed && 'icon-completed'}`}
        onClick={onComplete}
        >
          <VscCheck />
          </span>
        <p className='todo-description'>{description}</p>
        <span 
        className='icon-delete'
        onClick={onDelete}
        >
          <VscChromeClose/>
        </span>
    </li>
  )
}

export default TodoItem