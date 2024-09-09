import React from "react";
import ChildB from "./ChildB.js";
const ChildA = ({ name }) => {
  console.log(name)
  return (
    <>
      <ChildB name={name} />
    </>
  );
};

export default ChildA;