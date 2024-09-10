import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const contact = () => {
  return (
    <>
      <h1> This is contact componet</h1>
      <div className="nested">
        <NavLink to="youtube">Youtube</NavLink>
        <NavLink to="github">Github</NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default contact;
