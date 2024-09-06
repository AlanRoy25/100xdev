import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  // need to use dispatch here because we are using redux.

  const [input, setInput] = useState("");
  const dispatch = useDispatch(); // dispatch is a function that we get from redux to dispatch actions to the store.

  const onChangeHandler = (e) => {
    e.preventDefault(); // prevent the default behaviour of the form.
    dispatch(addTodo(input)); //calling the addTodo action and passing the input as payload.
    setInput("");
  };
  return (
    <form className="space-x-3 mt-12" onSubmit={onChangeHandler}>
      <input type="text" className="bg-gray-800 rounded border-2 border-gray-600 focus:border-indigo-500 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
      placeholder='Enter a todo' value={input} onChange={(e) => setInput(e.target.value)} />
      <button
        className="bg-blue-500 text-white px-4 py-2 ml-2 rounded hover:bg-blue-600"
        placeholder="Add todo"
        type="submit"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
