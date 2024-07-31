const express = require ('express')
const mongoose = require('mongoose');
const { boolean } = require('zod');
const app = express();

app.use(express.json())

mongoose.connect("mongodb+srv://admin:admin@backenddb.93bwxbb.mongodb.net/Todos")

const todoSchema = mongoose.Schema ({
  title: String,
  description: String,
  completed: Boolean
})


const Todo = mongoose.model('todos', todoSchema);

module.exports = {
  Todo
}

