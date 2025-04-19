import { useState } from "react";

export function CreateTodo({onTodoAdded}){
   
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

   
   return <div>
        <input style={{padding: "5px"}} type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(value);
        }}></input> <br /> <br />

        <input style={{padding: "5px"}} type="text" placeholder="description" onChange={function(e){
            const value = e.target.value;
            setDescription(value);
        }}></input> <br /> <br />

        <button style={{padding: "2px"}} onClick={() => {
            fetch("http://localhost:3000/todo",{
                method: "POST",
                body:JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(async function(res){
                alert("todo added");
                onTodoAdded();
            })
        }}>Add a todo</button>
    </div>
}