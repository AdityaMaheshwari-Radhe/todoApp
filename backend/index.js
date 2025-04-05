const express = require('express');
const { Schema, updateSchema } = require('./types');
const { Todo, CompletedTodo } = require('./db');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/todo', async function(req,res){
    const todos = await Todo.find();
    const doneTodos = await CompletedTodo.find();
    res.json({
        todos,
        doneTodos
    })    
})

app.post("/todo", async function(req,res){
    const finalTodo = req.body;
    
    const response = Schema.safeParse(finalTodo);

    if(!response.success){
        res.status(411).json({
            msg : "input is invalid"
        })
        return;
    }
    
    const todo = new Todo({title : finalTodo.title, description : finalTodo.description, completed : false})

    await todo.save();

    res.json({
        msg : "todo created"
    })
})

app.put('/completed', async function(req,res){
    const { id } = req.body;

    const response = updateSchema.safeParse({id});
    
    if(!response.success){
        res.status(411).json({
            msg : "this todo does not exist"
        })
        return;
    }

    await Todo.updateOne({ _id: id }, { completed: true });

    const todo = await Todo.findOne({ _id : id })
    if(todo){
        const completed = new CompletedTodo(todo.toObject());
        await completed.save();
        await todo.deleteOne();
    }

    
    res.json({
        msg : "todo is mark as done"
    })
})

app.listen(3000);