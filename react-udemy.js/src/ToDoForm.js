import React from 'react'
import { useState } from 'react'
import './App.css'

export default function ToDoForm(props) {
  const [input, setInput] = useState('')

  const changeHandler = (e) => {
    setInput(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random()*10000),
      text: input
    })

    setInput('')
  }

  return (
    <div className='container'>
      <h1 className='font'>To do</h1>
      <form onSubmit={submitHandler}><input value={input} onChange={changeHandler}></input>
      <button>Add</button></form>
    </div>
  )
}
