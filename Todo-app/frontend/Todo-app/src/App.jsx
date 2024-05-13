import { useState } from 'react'
import './App.css'
import { AddTodo } from './components/AddTodo'

import { Todo } from './components/Todo'
function App() {

  const [todos,setTodo] = useState([]);



  fetch("http://localhost:3000/getTodo")
  .then(async function(req,res){
    const json = await res.json();
    setTodo(json.todos)

  })
  
  return (
    <div>
      <AddTodo />
      <Todo todos={todos}></Todo>
    </div>
  
  )
}

export default App