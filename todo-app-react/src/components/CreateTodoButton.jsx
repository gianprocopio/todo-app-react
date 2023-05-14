import React from 'react'
import { VscAdd } from "react-icons/vsc";

function CreateTodoButton({setOpenModal}) {
  return (
    <button className='create-todo-button' onClick={setOpenModal}>
      <VscAdd/>
      </button>
  )
}

export default CreateTodoButton