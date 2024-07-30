import React, {useState} from "react";

// todos APP


function App(){
  const [todos,setTodos] = useState([{
    title: "Go to gym",
    description: "Go to gym from 5-7",
    completed: false
  },
{
  title: "Study DSA",
  description: "Study DSA from 8-9",
  completed: false

}])

function addTodo(){
  setTodos([...todos,{
    title: 'new todo',
    description: 'desc of new todo'
  },
])
}


  return (
    <div>
      <button onClick={addTodo} >Add a todo </button>
      {/* <Todo title = {todos[0].title} description = {todos[0].description} />
      <Todo title = {todos[1].title} description = {todos[1].description} /> */}
      {todos.map(function(todo, index){ //iterating over the values 
        return <Todo key={index} title={todo.title} description={todo.description}  />
        })}
    </div>

  )
  
}


function Todo(props){
  return (<div>
    <h1>{props.title}</h1>
    <h1>{props.description}</h1>
  </div>
  )
}


export default App;