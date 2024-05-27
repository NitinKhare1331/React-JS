import { useState } from 'react'
import './App.css'

function App() {

let [counter,setCounter] = useState(0)

const addValue = () => {
  if(counter<20){
    setCounter(prevCounter => prevCounter + 1);   //setCounter is a function which accepts a callback
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    
  }
  else{
    setCounter(counter)
  }
}

/*
const addValue = () => {
  if(counter < 20){
    setCounter(counter + 1);
  }
  else{
    setCounter(counter)
  }
}
*/

const decValue = () => {
  if(counter>0){
    setCounter(counter - 1);
  }
  else{
    setCounter(counter)
  }
}


  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter Value: {counter}</h2>
    <button
    onClick = {addValue}
    >Add value {counter}</button>
    <br/><br/>
    <button
    onClick = {decValue}
    >Decrease value {counter}</button>
    <p>footer: {counter}</p>

    </>
  )
}

export default App
