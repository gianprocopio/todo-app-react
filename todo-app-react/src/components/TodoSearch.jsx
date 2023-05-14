import React from 'react'

function TodoSearch({setSearchedValue}) {

  return (
    <div className='search-container'>
        <input 
        type='text' 
        placeholder='Search a TODO' className='search-input'
        onChange={(e)=>setSearchedValue(e.target.value)}
        />
    </div>
  )
}

export default TodoSearch