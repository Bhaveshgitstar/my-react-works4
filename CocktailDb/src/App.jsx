import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Spinner from "./components/Spinner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Navbar2 from "./components/Navbar2";

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
