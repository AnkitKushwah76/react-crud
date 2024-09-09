import React from "react";
import ChildC from "./ChildC.js";
const ChildB = ({ name }) => {
  return (
    <>
      <ChildC name={name} />
    </>
  );
};

export default ChildB;