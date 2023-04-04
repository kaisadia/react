import './App.css';
import { useState } from 'react'

function App() {
const [counter, setCounter] = useState(0)

const increaseHandler = () =>{setCounter(counter+1)}

const decreaseHandler = () =>{setCounter(counter-1)}




  return (
    <div className="App">
      <h1>{counter}</h1>
      <button className='button_plus' onClick={increaseHandler}>+</button>
      <button className='button_minus' onClick={decreaseHandler}>-</button>
    </div>
  );
}

export default App;
