import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const naviagte = useNavigate();

  const goContactComponet = () => {
    naviagte("/contact");
  };
  return (
    <>
      <h1> This is a home componet </h1>
      <button onClick={goContactComponet}>
        <h1>Go Contact Componet</h1>
      </button>
    </>
  );
};

export default Home;
