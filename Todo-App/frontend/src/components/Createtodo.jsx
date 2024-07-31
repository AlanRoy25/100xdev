import { useState } from "react"


export function Createtodo(){

  const [title,setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = async() =>{
    try {
      const response = await fetch("https://localhost:3000/todos",{
        method: "POST",
        body: JSON.stringify({
          title: title,
          description: description
        }),
        headers: {
          "content-type": "application/json"
        },
      });

      if(!response.ok){
        throw new Error("failed to add todo")
      }

      const json = await response.json();
        alert("todo added successfully");

    } catch (error) {
      console.log("Error", error);
    }
  }

  return <div>
    <input style={{
      padding: 10,
      margin: 10
    }} type="text" placeholder="title" value = {title} onChange={(e) => setTitle(e.target.value) } >
      </input> <br />
    <input style={{
      padding: 10,
      margin: 10
    }} type="text" placeholder="description" value={title}  onChange={function(e){
      setDescription(e.target.value);
    }} /> <br />

    <button style={{
      padding: 10,
      margin: 10
    }} onClick={handleAddTodo} > Add a todo</button>
  </div>
}