import React, { useMemo, useState } from "react";
const Memo = () => {
  const [add, setAdd] = useState(0);
  const [state, setState] = useState(false);

  const addition = () => {
    setAdd(add + 1);
  };

  const count = (add) =>{
    console.log("function calling", add)
    for(let i=0; i<= 10000; i++){}
    return add
  }

  // let number = count(add)

  let number = useMemo(() => {
   return count(add)
  }, [add])
  return (
    <>
      <button onClick={addition}>Addition</button>
      <h1>{number}</h1>

      <button onClick={()=>setState(!state)} >Please Click</button>
      <h1>{state ? "You clicked" : "Please Click"}</h1>
    </>
  );
};

export default Memo;