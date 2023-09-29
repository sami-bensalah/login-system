import { useState } from "react";
import LoginBox from "./Components/LoginBox";
import CreateBox from "./Components/CreateBox";

function App() {
  const [myBool, setmyBool] = useState(true);
  function toggleComponent() {
    setmyBool(!myBool);
  }
  return (
    <div>
      {myBool ? <LoginBox toggleComponent={toggleComponent} /> : <CreateBox />}
    </div>
  );
}

export default App;
