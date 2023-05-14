import React from 'react'

function TodoList({children}) {
  return (
    <ul className='todo-list'>
        {children}
    </ul>
  )
}

export default TodoList