import React from 'react'
import './App.css'
import {useState} from 'react'

export default function CardItem(props) {
    const [flipped, setFlipped] = useState(true)

const clickHandler = () => {setFlipped(!flipped)}

    return (
    <ul>
        <div className="card-container" onClick={clickHandler} >
        {!flipped && <p className='setup'>{props.data.setup}</p>} 
        {flipped && <p className='punchline'>{props.data.punchline}</p>} 
        </div>
    </ul>   
    )
}