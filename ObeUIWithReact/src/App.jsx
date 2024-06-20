import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./component/Sidebar/Sidebar";
import "boxicons/css/boxicons.min.css";
import Navbar from "./component/Header/Navbar";
import Footer from "./component/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
