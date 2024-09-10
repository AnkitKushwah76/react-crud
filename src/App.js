import logo from "./logo.svg";
import "./App.css";
import "./Condition.js";
import Condition from "./Condition.js";
import Hook from "./Hook.js";
import RefHook from "./RefHook.js";
import ChildA from "./ChildA.js";
import { createContext } from "react";
import Memo from "./Memo.js";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Youtube from "./Youtube.js";
import Github from "./Github.js";
const fName = createContext();
function App() {
  // const name = "Code with React.js";
  return (
    <>
      {/* <Condition/> */}
      {/* <Hook/> */}
      {/* <h1> Props Drilling</h1> */}
      {/* <ChildA name = {name}/> */}
      {/* <RefHook /> */}
      {/* <fName.Provider value={"Ram"}>
        <ChildA/>
      </fName.Provider> */}

      <Memo />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact/" element={<Contact />}>
            <Route path="youtube" element={<Youtube />} />
            <Route path="github" element={<Github />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
export { fName };
