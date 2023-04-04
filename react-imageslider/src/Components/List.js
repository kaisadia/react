import React from 'react'
import StyledList from './StyledList'

export default function List(props) {
  const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']

  return (
    <div>
      {props.animals.map(item => 
          <StyledList>{item}</StyledList>)}
    </div>
  )
  
}

