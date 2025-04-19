import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import { CompletedTodos } from './components/CompletedTodos'


function App() {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [refresh2, setRefresh2] = useState(false);

 useEffect(() => {
    fetch("http://localhost:3000/todo")
      .then(async function(res){
        const data = await res.json();
        setTodos(data.todos);
        setCompletedTodos(data.doneTodos);
     });
    },[refresh, refresh2])

  return (
    <div style={{padding : "10px",}}>
      <div style={{ backgroundColor : '#D9BBF9cd', color: 'white', padding: "10px"}}> <CreateTodo onTodoAdded ={() => setRefresh(!(refresh))}></CreateTodo> </div>
      
      <div style={{ display :"flex", gap: "20px", margin: "10px"}} >
        <div style={{flex: 1, backgroundColor: '#E2EFDE', color: 'black', padding: "10px"}}><Todos todos = {todos} onMarkingCompleted ={() => setRefresh2(!(refresh2))}></Todos></div>
        <div style={{flex: 1, backgroundColor: '#E2EFDE', color: 'black', padding: "10px"}}><CompletedTodos completedTodos = {completedTodos}></CompletedTodos></div>
      </div>
    </div>
  )
}

export default App
