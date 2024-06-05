import { useState } from 'react'

function State() {

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
  
  export default State