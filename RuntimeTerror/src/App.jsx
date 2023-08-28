import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllRoutes from './components/AllRoutes'
import GlobalStyles from './components/GlobalStyles';
function App() {
  const [count, setCount] = useState(0)
  
  return(
      <>
      <GlobalStyles/>
      <AllRoutes/>
      </>
    );
  }
  export default App;