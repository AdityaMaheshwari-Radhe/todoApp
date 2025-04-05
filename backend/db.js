const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://balikjordy:Io2CBImhA4wdHSFV@cluster0.vusvi88.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const completedTodoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})



const Todo = mongoose.model('todos',todoSchema);
const CompletedTodo = mongoose.model('completedTodos', completedTodoSchema);

module.exports = {
    Todo,
    CompletedTodo
}