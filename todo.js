const express = require('express');
const app = express();
const cors = require('cors')

app.use(express.json())
app.use(cors());

let todos = [{
  id: 0, title: "buy groceries", description: "need go to market ",
  id: 1, title: "Reading books ", description: "need to finish reading current book ",
  id: 2, title: "file itr", description: "need to file the tax by july ",
  
}];
let id = 3;

app.get("/todos", (req,res)=> {
  res.json(todos);

})

app.post("/todos", (req,res) => {
  const {title, description} = req.body;
  const newtodo = {id: id++, title, description,  done:false}
  todos.push(newtodo);
  res.json(newtodo);

})

app.patch("/todos/:id", (req,res) => {
  const {id} = req.params;
  const {done} = req.body;

  const todo = todos.find(t => t.id === parseInt(id));
  if(todo) {
    todo.done = done;
    res.json(todo);
  }
  else{
    res.status(403).json({message: "todos not found in the list"})
  }
});


app.listen(3000, (req,res) =>{
  console.log("Server listening on Port 3000");
})