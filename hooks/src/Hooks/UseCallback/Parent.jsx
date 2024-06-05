import React,{useCallback, useState} from 'react'
import Child from './Child';

const Parent = () => {
    const [Counter1,SetCounter1] = useState(0);
    const [Counter2,SetCounter2] = useState([]);

    const incrementOne = () => {
        SetCounter1(Counter1+1)
    }

    const fun = useCallback(() => {
        console.log("Hello Nitin");
    },[Counter2]);

  return (
    <>
    <Child Counter2={Counter2} fun={fun}/>
    <button onClick={incrementOne}>Counter1-{Counter1} </button>
    </>
  )
}

export default Parent