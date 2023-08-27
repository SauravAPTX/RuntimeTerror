import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AllRoutes from "./component/AllRoutes";

function App() {
  const [idk, setIdk] = useState("");

  return (
    <>
    
      <AllRoutes/>
    </>
  );
}

export default App;
