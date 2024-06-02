import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [def,setdefault] = useState("Nitin")

  const changer = (e) => {
    const val = e.target.value;
    setdefault(val)
  }

  return (
    <>
    <h1>{def}</h1>
      <input type='text' value={def} onChange={changer}/>
    </>
  )
}

export default App
