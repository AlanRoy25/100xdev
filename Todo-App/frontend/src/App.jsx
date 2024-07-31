import { useEffect, useState } from 'react'
import './App.css'
import { Createtodo } from './components/Createtodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([])

   const fetchTodos = async () => {
    try {
      const response = await fetch('https://localhost:3000/todos')
      if(!response.ok){
        throw new Error('Failed to fetch todos')
      }

      const data = await response.json();
    setTodos(data.todos)
    }
    catch (error) {
      console.error('Error', error)
    }
   }

   useEffect(() => {
    fetchTodos();
   }, [])

  return (

    <div>
      <Createtodo setTodos = {setTodos}/>
      <Todos todos={todos}/>
    </div>
  )
}

export default App;
