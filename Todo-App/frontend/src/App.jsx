import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'



function App() {
  return (
    <div>
    <Todo id={3} />
  </div>

  )
}

  function Todo({id}){

    const [todos, setTodos] = useState([])

  useEffect(()=> {
    axios.get("https://localhost:3000/todos?id=" + id)
    .then(function(response){
      setTodos(response.data.todos)// while using axios we need to use response.data and the final key 
    })
  }, [])

  return (

    <div>
      <h1>{todos.title}</h1>
      <h4>{todos.description}</h4>
    </div>
  )
    
  }


  

export default App;
