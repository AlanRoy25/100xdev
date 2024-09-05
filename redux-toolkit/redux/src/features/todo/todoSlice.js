import { createSlice , nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos : [
        {
            id : nanoid(),
            text : "Learn Redux Toolkit",
            completed : false
        },
    ]
}

//slice is reducer ke bada version , reducer is a function

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers:{
    addTodo: (state, action) => {
      const todo = {
        id : nanoid(),
        text: action.payload,

      }
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    }, 
  }
})
 
export const {addTodo, removeTodo} = todoSlice.actions // individual reducers function as individually exported as to make components.


// even store needs awarness about all the reducers so we export the reducer from the slice

export default todoSlice.reducer