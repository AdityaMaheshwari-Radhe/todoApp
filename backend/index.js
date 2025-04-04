const express = require('express');
const { Schema, updateSchema } = require('./types');
const { todo } = require('./db');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/todo', async function(req,res){
    const todos = await todo.find();
    res.json({
        todos
    })
    
})

app.post("/todo", async function(req,res){
    const todo = req.body;
    
    const response = Schema.safeParse(todo);

    if(!response.success){
        res.status(411).json({
            msg : "input is invalid"
        })
        return;
    }
    
    await todo.create({
        title: todo.title,
        description: todo.description,
        completed: false
    })

    res.json({
        msg : "todo created"
    })
})

app.put('/completed', async function(req,res){
    const id = req.body;

    const response = updateSchema.safeParse(id);
    
    if(!response.success){
        res.status(411).json({
            msg : "this todo does not exist"
        })
        return;
    }

    await todo.update({
        _id: id[id]
    },{
        completed:true
    })
    
    res.json({
        msg : "todo is mark as done"
    })
})

app.listen(3000);