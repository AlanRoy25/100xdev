import e from 'cors'
import React, { useState } from 'react'
import  {useDispatch} from "react-redux"
import {addTodo} from '../features/todo/todoSlice'

const addTodo = () => { // need to use dispatch here because we are using redux.

  const [input, setInput] = useState('')
  const dispatch = useDispatch()  // dispatch is a function that we get from redux to dispatch actions to the store.


const onChangeHandler = () => {
  e.preventDefault() // prevent the default behaviour of the form.
  dispatch(addTodo(input)) //calling the addTodo action and passing the input as payload.
  setInput('')
}
  return (
   
    <form onSubmit={onChangeHandler}>
      <input type="text" name="todo" />
      <button className='' placeholder='Add todo' type='submit' value={input} onChange={(e) => setInput(e.target.value)}>Add

      </button>
    </form>
  )
}

export default addTodo