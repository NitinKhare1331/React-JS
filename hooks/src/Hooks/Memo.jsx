import React,{useCallback, useMemo, useState } from 'react';

function Memo(){

    const [Counter1,SetCounter1] = useState(0);
    const [Counter2,SetCounter2] = useState(0);

    const incrementOne = () => {
        SetCounter1(Counter1+1)
    }

    const incrementTwo = () => {
        SetCounter2(Counter2+1)
    }

    const isEven = useMemo(()=>{
        console.log("........");
        let i=0;
        while(i<2000000000) i++;
        return Counter1%2===0;
    },[Counter1])


    return(
        <>
        <div>
            <button onClick={incrementOne}>Counter1-{Counter1} </button>
            <span>{isEven?"Even":"Odd"}</span>
            <button onClick={incrementTwo}>Counter2-{Counter2}</button>
        </div>
        </>
    )
}

export default Memo;