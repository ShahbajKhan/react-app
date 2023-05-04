import { useState } from "react";
import Home from "./pages/Home/Home";
import JobDetails from "./pages/Home/JobDetails";

function App() {
  // Hook
  // const [state, setterFunction]=useState(initialvalue)
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState("bat");
  
  const changeName = () => {
    if (userName.length <= 3) {
      const input = prompt("Insert A name")
      console.log(input);
      setUserName(input);
    } else {
      setUserName("IIUC");
    }
  };
  const incrementCount = () => {
    setCount(count + 1);
  };
  // let countValue = 0;
  // const handleCount = () => {
  //   countValue++;
  //   console.log(countValue);
  // };
  return (
    <div>
      <h1>Our first react app</h1>
      {/* comment */}
      <Home />
      <JobDetails />

      {/* <button onClick={handleCount}>Count Value : {countValue}</button> */}
      <button onClick={incrementCount}>Count Value : {count}</button>
      <button onClick={changeName}>Change Name</button>
      <p>User name: {userName}</p>
    </div>
  );
}

export default App;
