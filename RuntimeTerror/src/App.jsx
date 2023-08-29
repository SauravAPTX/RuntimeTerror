import { useState } from "react";
import "./App.css";
import AllRoutes from "./components/AllRoutes";

function App() {
  const [idk, setIdk] = useState("");

  return (
    <div>
      <AllRoutes/>
    </div>
  );
}

export default App;
