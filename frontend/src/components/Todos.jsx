export function Todos({todos, onMarkingCompleted}) {
    return <div>
        <h1>To-dos</h1>
        {todos.map(function(todo){
            return <div style={{backgroundColor: "#545454" , padding: "8px", margin: "5px", color: "white"}} key={todo._id}>
                <h3>{todo.title}</h3>
                <h5>{todo.description}</h5>
                <button onClick={() => {
                    console.log(todo._id);
                    fetch('http://localhost:3000/completed', {
                        method: "PUT",
                        body: JSON.stringify({
                            id : todo._id
                        }),
                        headers : {
                            "Content-type" : "application/json"
                        }
                    }).then(async function(res){
                        alert("todo completed");
                        onMarkingCompleted();
                    })
                }} >mark as completed</button>
            </div>
        })}
    </div>
}