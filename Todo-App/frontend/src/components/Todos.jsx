import React from "react";

export function Todos({todos}) {

  return (<div>
    {
      todos.map((todo, index) => (
         <div key={index}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button>{todo.completed == true ? "Completed" : "Mark as complete"}</button>
        </div>
      ))}
  </div>
  );
}