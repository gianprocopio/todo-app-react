import React, { useState, useEffect } from 'react'
import './styles/App.css'
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import CreateTodoButton from './components/CreateTodoButton';
import TodoLoader from './components/TodoLoader';
import Modal from './components/Modal';



function App() {

    const localStorageTodos = localStorage.getItem('TODOS');
    let parsedTodos;
    if(localStorageTodos){
      parsedTodos = JSON.parse(localStorageTodos)
    }else{
      localStorage.setItem('TODOS', [])
    }

  const [todos, setTodos] = useState(
    ()=> parsedTodos || []
  );
  const [searchedValue, setSearchedValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    }, 2000)
  }, [])


 const completedTodos = todos.filter(todo =>todo.completed)
 const searchedTodos = todos.filter(todo => todo.description.toLowerCase().includes(searchedValue.toLowerCase()))

 const saveTodos = (newTodos)=>{
  localStorage.setItem('TODOS', JSON.stringify(newTodos));
  setTodos(newTodos)
 }

  const completeTodo = (description)=>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo =>todo.description === description);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos)
  }

  const deleteTodo = (description)=>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo=>todo.description === description);
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  }

  const createTodo = (text)=>{
    const newTodos = [...todos];
    newTodos.push({
      description: text,
      completed: false
    });
    saveTodos(newTodos);
  }
  

  const loader = ()=>{
    return (
      <>
        <TodoCounter
        completed={completedTodos.length}
        total={todos.length}
        />
        <TodoSearch
          setSearchedValue={setSearchedValue}
        />
  
        <TodoList>
  
          <TodoLoader />
          <TodoLoader />
          <TodoLoader />
          
        </TodoList>
  
        <CreateTodoButton 
        setOpenModal={()=>setOpenModal(true)}
        />

{openModal && 
        <Modal 
        closeModal={()=>setOpenModal(false)}
        createTodo={createTodo}
        />} 
 
      </>
    )
  }

  

  if(loading){
    return loader()
  }else{
    if(todos.length === 0){
      return(
        <>
         <TodoCounter
        completed={completedTodos.length}
        total={todos.length}
        />
        <TodoSearch
          setSearchedValue={setSearchedValue}
        />
        <h1 className={openModal && 'inactive'} style={{
          color: "#fff",
          textAlign: "center",
          fontSize: "3rem"
        }}>No hay tareas pendientes</h1>
        <CreateTodoButton 
        setOpenModal={()=>setOpenModal(true)}
        />

{openModal && 
        <Modal 
        closeModal={()=>setOpenModal(false)}
        createTodo={createTodo}
        />} 
    </>
      )
    }
    return (
      <>
        <TodoCounter
        completed={completedTodos.length}
        total={todos.length}
        />
        <TodoSearch
          setSearchedValue={setSearchedValue}
        />
  
        <TodoList>
  
          {searchedTodos.map(todo=>{
              return(
                <TodoItem
                  description={todo.description}
                  completed={todo.completed}
                  onComplete={()=>completeTodo(todo.description)} 
                  key={todo.description}
                  onDelete={()=>deleteTodo(todo.description)}
               />
                )
          })}
          
        </TodoList>
  
        <CreateTodoButton 
        setOpenModal={()=>setOpenModal(true)}
        />

        {openModal && 
        <Modal 
        closeModal={()=>setOpenModal(false)}
        createTodo={createTodo}
        />}  

      </>
    )
  }
  
}

export default App
