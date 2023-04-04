import React from 'react'
import './App.css'
import List from './Components/List'

export default function App() {
  const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']

  return (

    <div className='hello_world' >
      <List animals={animals}></List>
      </div>
  )
}
