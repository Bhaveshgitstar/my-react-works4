import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar2 from "./components/Header/Navbar2";

function App() {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <Navbar2></Navbar2>
      {/* <Spinner></Spinner> */}
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
