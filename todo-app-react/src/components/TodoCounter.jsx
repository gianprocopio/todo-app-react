import React from 'react'

function TodoCounter({completed, total}) {
  return (
    <h1 className='todo-counter'>Completaste <span className='completedTodos'>{completed}</span> de <span className='totalTodos'>{total}</span> TODOs</h1>
  )
}

export default TodoCounter