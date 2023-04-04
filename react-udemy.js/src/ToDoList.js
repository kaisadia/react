import React, { useState } from 'react'
import ToDoForm from './ToDoForm'
import ToDoItem from './ToDoItem'

export default function ToDoList() {
const [todos, setTodos] = useState([])

const addtodo = (todo) =>{
    const newTodos = [todo, ...todos]
    setTodos(newTodos);
    console.log(todo, ...todos)
}



  return (
    <div>
     <h1>Add things to do!</h1>   
    <ToDoForm onSubmit={addtodo}></ToDoForm>
    <ToDoItem></ToDoItem>
    </div>
  )
}


