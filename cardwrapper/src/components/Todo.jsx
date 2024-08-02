import React from 'react'

function Todo({title,description,completed, onMarkAsComplete}){

  return (
    <div>
      <h1>
        {title}
      </h1> 
      <h2>
        {description}
      </h2>
      <button onClick={onMarkAsComplete} >{completed ? 'completed' : 'Mark as complete'}</button>
    </div>
  );
}
export default Todo