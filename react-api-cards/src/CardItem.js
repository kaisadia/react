import React from 'react'
import './App.css'
import {useState} from 'react'

export default function CardItem(props) {
    const [flipped, setFlipped] = useState(true)

const clickHandler = () => {setFlipped(!flipped)}


    return (
  <div className='card-container' onClick={clickHandler} >
        {flipped &&  
        (<div>
        <img classname='avatar' src={props.users.avatar}/>
        <div className='front'>{props.users.first_name} {props.users.last_name} </div> 
        </div>)} 
        {!flipped && <p className='back'>More information</p>} 
</div>

       
   
    )
}