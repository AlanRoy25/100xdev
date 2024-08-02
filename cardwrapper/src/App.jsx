import { useState } from 'react'
import React from 'react'
import CardWrapper from './components/cardWrapper'
import Todo from './components/Todo'


function App() {
  const [todos,setTodos] = useState([
    {
      id: 1,
      title: "go to gym",
      description: " going to gym",
      completed: false
    },
    {
      id: 2,
      title: "go to gym",
      description: " going to gym",
      completed: false
    },
    {
      id: 3,
      title: "Dsa ",
      description: " Dsa to be done ",
      completed: false
    },
    {
      id: 4,
      title: "go to gym",
      description: " going to gym",
      completed: false
    },
  ])
    function markasComplete(id){
      setTodos(todos.map(todo => todo.id ===id ? {...todo, completed: true} : todo))
    } 

  return (
    <>
      {todos.map((todo)=>(
        <CardWrapper key={todo.id} >
          <Todo title= {todo.title} description={todo.description} completed={todo.completed}
          onMarkAsComplete={() =>  // got error that too many re-renders hooks so used the arrow function to delay its execution 
            markasComplete(todo.id)} >
          </Todo>
        </CardWrapper>
      ))}
    </>
  )
}

export default App
