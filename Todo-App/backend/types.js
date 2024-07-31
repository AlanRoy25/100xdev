const zod = require ('zod')

const createTodo = zod.object({
  title: zod.string(),
  description: zod.string()
})

const updateTodo = zod.object({
  _id: zod.string(),
  completed: zod.boolean()
})


module.exports = {
  createTodo, updateTodo
}
