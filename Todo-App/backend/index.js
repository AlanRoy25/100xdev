// write basic express boilerplate code,
// write  express.json() middleware

const express = require ('express');
const { createTodo, updateTodo } = require('./types');
const { Todo } = require('./database');
const app = express();
const cors = require('cors')

app.use(cors())




app.use(express.json())
//body {
// title: string,
// description: string}

app.post('/todo', async (req,res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if(!parsedPayload.success){
    res.status(411).json({
      msg: " You have passed wrong inputs",
      errors: parsedPayload.error.errors
    })
    return;
  }
  // put it in mongodb
 await Todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false
  })
  res.json({
    msg: "Todo created"
  })
})

app.get('/todos', async (req,res) => {

  const todos =  await Todo.find({}) // without await it will give response as promise 
  res.json({
    todos
  })
})

app.put('/completed', async (req,res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  
  if(!parsedPayload.success){
    res.status(411).json({
      msg: "you have wrong inputs",
      errors: parsedPayload.error.errors
    })
    return;
  }

  await Todo.updateOne({
    _id: parsedPayload.data._id},
    {completed: parsedPayload.data.completed}
)
res.json({
  msg: "Todo marked as done"
})

})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running successfully on ${PORT}`);
})