import { useState } from "react";
import "./App.css";
import AllRoutes from "./components/AllRoutes";

function App() {
  const [idk, setIdk] = useState("");

  return (
    <>
    
      <AllRoutes/>
    </>
  );
}

export default App;
