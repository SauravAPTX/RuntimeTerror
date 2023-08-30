import "./App.css";
import AllRoutes from "./components/AllRoutes";
import NavbarComponent from "./pages/NavbarComponent";
import Footer from "./pages/Footer"

function App() {

  return (
    <div>
      <NavbarComponent/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
