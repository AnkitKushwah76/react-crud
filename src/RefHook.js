import React, { useState, useRef } from "react"

const RefHook = () =>{
  const [val, setVal] = useState("");
  const refElement = useRef(0);
  const change = (event) =>{
   setVal(event.target.value);
   
   refElement.current = refElement.current+1
  }

  return (
    <>
      <div className="container">
         <h1> useRef Hook:</h1>
         <input type='text' onChange={change}/>
         <h1> World Count: {refElement.current}</h1>
      </div>
    </>
  )
}

export default RefHook;