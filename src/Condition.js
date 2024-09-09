import React from 'react'

const Condition = () => {

  let age = 20
  // let result;
  //  if (age > 11){
  //   result = <h1> Eligible For Vote</h1>
  //  }
  //  else {
  //   result = <h1> Not Eligible For Vote</h1>
  //  }
  // return (
  //   <>
  //    {result}
  //   </>
  // )

  // ternary operator
  return(
    <>
     <div>{ age> 18 ? <h1>Eligible FOr Vote</h1> : <h1> Not Eligible For Vote</h1>} </div>
    </>
  ) 
}

export default Condition