import React from "react";
import { fName } from "./App";
// const ChildC = ({ name }) => {
//   return (
//     <>
//       <h1> Child C data : {name}</h1>
//     </>
//   );
// };

const ChildC = () => {
  return (
    <>
      <fName.Consumer>
        {(fName) => {
          return <h1> My name is {fName}</h1>;
        }}
      </fName.Consumer>
    </>
  );
};
export default ChildC;
