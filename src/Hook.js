import React, { useState } from "react";

const Hook = () => {
  const [count, setCount] = useState(0);
   const incre = () =>{
    setCount(count+1)
   }

   const decre = () =>{
    if (count > 0){
      setCount(count-1)
    }
   }
  return (
  <>
   <h1>{count}</h1>
   <button onClick={incre}>Increment</button>
   <button onClick={decre}>Decrement</button>
  </>
  );
}

export default Hook;