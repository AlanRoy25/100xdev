const express = require ('express')
const mongoose = require('mongoose');
const { boolean } = require('zod');
const app = express();

 require('dotenv').config()

app.use(express.json())

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})

const todoSchema = mongoose.Schema ({
  title: String,
  description: String,
  completed: Boolean
})


const Todo = mongoose.model('todos', todoSchema);

module.exports = {
  Todo
}

