import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter,setCounter] = useState(0)

const addValue = () => {
  if(counter<20){
    setCounter(counter + 1);
  }
  else{
    setCounter(counter)
  }
}

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
