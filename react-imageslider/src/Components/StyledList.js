import React from 'react'
import App from '../App'
import '../App.css'

export default function StyledList(props) {
  return (
    <div className='hello_world'>
        <ul><li className='list'>{props.children}</li></ul>
    </div>
  )
}
