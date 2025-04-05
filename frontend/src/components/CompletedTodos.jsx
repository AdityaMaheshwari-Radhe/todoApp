export function CompletedTodos({completedTodos}){
    return <div>
        <h1>Competed To-dos</h1>
        {completedTodos.map(function(completedTodo){
            return <div style={{backgroundColor: "#545454" , padding: "8px", margin: "5px", color:"white"}} key={completedTodos._id}>
                <h3>{completedTodo.title}</h3>
                <h5>{completedTodo.description}</h5>
            </div>
        })}
    </div>
}