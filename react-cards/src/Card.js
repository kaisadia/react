import React from 'react'
import './App.css'
import CardItem from'./CardItem' 

export default function Card(props) {

return (
    <ul>{props.data.map(data => {
        return <CardItem data={data} key={data.id}/>;
      })}
    </ul>
  )
};