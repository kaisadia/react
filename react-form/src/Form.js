import './App.css'
import {useState} from 'react'
import React from 'react'

export default function Form() {

    

const submitHandler = (event) =>{
alert(`Hello ${event.target.firstname.value} ${event.target.lastname.value}`)
}


  return (
    <div className='form'>
  <form onSubmit={submitHandler}>  
    First Name: <input className='form_firstname' type="text" name="firstname"/> <br/>  
    Last Name:  <input className='form_lastname' type="text" name="lastname"/> <br/>  
<input className='button' type='submit' value='Greet me' />
 </form>  
    </div>
  )
}
