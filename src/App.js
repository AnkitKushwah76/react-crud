import logo from "./logo.svg";
import "./App.css";
import "./Condition.js";
import Condition from "./Condition.js";
import Hook from "./Hook.js";
import RefHook from "./RefHook.js";
import ChildA from "./ChildA.js";
function App() {
  const name = "Code with React.js";
  return (
    <>
      {/* <Condition/> */}
      {/* <Hook/> */}
      <h1> Props Drilling</h1>
      <ChildA name = {name}/>
      {/* <RefHook /> */}
    </>
  );
}

export default App;
